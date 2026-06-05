const API_URL = "https://wandering-bonus-bcd2.abuzerovniko.workers.dev";

async function calcDuty() {
  const autoType      = document.getElementById("autoType").value;
  const engineType    = document.getElementById("engineType").value;
  const engine        = parseInt(document.getElementById("engine").value) || 0;
  const commerceType  = document.getElementById("commerceType").value;
  const issueDateRaw  = document.getElementById("issueDate").value;
  const priceInvoice  = parseFloat(document.getElementById("priceInvoice").value)  || 0;
  const priceTransport= parseFloat(document.getElementById("priceTransport").value) || 0;
  const priceOther    = parseFloat(document.getElementById("priceOther").value)     || 0;
  const price         = priceInvoice + priceTransport + priceOther;

  if (!issueDateRaw) {
    showError("Zəhmət olmasa istehsal tarixini daxil edin.");
    return;
  }

  // yyyy-MM-dd → dd.MM.yyyy
  const [y, m, d] = issueDateRaw.split("-");
  const issueDate = `${d}.${m}.${y}`;

  const payload = { autoType, engineType, engine, commerceType, issueDate, price };

  hideError();
  hideResult();
  showLoader();

  try {
    const resp = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "lang": "az",
        "requestSource": "1"
      },
      body: JSON.stringify(payload)
    });

    const json = await resp.json();
    hideLoader();

    if (json.code === 200 && json.data) {
      renderResult(json.data);
    } else {
      const msg = json.exception?.errorMessage || "Bilinməyən xəta baş verdi.";
      showError(`Xəta (${json.code}): ${msg}`);
    }
  } catch (err) {
    hideLoader();
    showError("Serverə qoşulmaq mümkün olmadı. Zəhmət olmasa bir az sonra yenidən cəhd edin.");
    console.error(err);
  }
}

function renderResult(data) {
  document.getElementById("usdRate").textContent =
    `USD Kursu (MB): ${data.usdCourse} AZN`;

  const tbody = document.getElementById("dutyRows");
  tbody.innerHTML = "";
  (data.autoDuty?.duties || []).forEach(duty => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${duty.name}</td><td>${formatAZN(duty.value)}</td>`;
    tbody.appendChild(tr);
  });

  const total = data.autoDuty?.total;
  const tfoot = document.getElementById("dutyTotal");
  tfoot.innerHTML = total
    ? `<td>${total.name}</td><td>${formatAZN(total.value)}</td>`
    : "";

  document.getElementById("dutyResult").style.display = "block";
}

function formatAZN(val) {
  return Number(val).toLocaleString("az-AZ", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }) + " ₼";
}

function showLoader()  { document.getElementById("loader").style.display = "block"; }
function hideLoader()  { document.getElementById("loader").style.display = "none"; }
function showError(msg){ const el = document.getElementById("dutyError"); el.textContent = msg; el.style.display = "block"; }
function hideError()   { document.getElementById("dutyError").style.display = "none"; }
function hideResult()  { document.getElementById("dutyResult").style.display = "none"; }
