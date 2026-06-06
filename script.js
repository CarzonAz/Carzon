// ======================================================
// SHIPPING
// ======================================================

const STATE_NAMES = {
  AL:"Alabama", AK:"Alaska", AZ:"Arizona", AR:"Arkansas",
  CA:"California", CO:"Colorado", CT:"Connecticut", DE:"Delaware",
  FL:"Florida", GA:"Georgia", HI:"Hawaii", ID:"Idaho",
  IL:"Illinois", IN:"Indiana", IA:"Iowa", KS:"Kansas",
  KY:"Kentucky", LA:"Louisiana", ME:"Maine", MD:"Maryland",
  MA:"Massachusetts", MI:"Michigan", MN:"Minnesota", MS:"Mississippi",
  MO:"Missouri", MT:"Montana", NE:"Nebraska", NV:"Nevada",
  NH:"New Hampshire", NJ:"New Jersey", NM:"New Mexico", NY:"New York",
  NC:"North Carolina", ND:"North Dakota", OH:"Ohio", OK:"Oklahoma",
  OR:"Oregon", PA:"Pennsylvania", RI:"Rhode Island", SC:"South Carolina",
  SD:"South Dakota", TN:"Tennessee", TX:"Texas", UT:"Utah",
  VT:"Vermont", VA:"Virginia", WA:"Washington", WV:"West Virginia",
  WI:"Wisconsin", WY:"Wyoming", DC:"Washington D.C."
};

const DOMESTIC = {
  AL:{copart:0,iaai:0,manheim:0},
  AK:{copart:0,iaai:0,manheim:0},
  AZ:{copart:0,iaai:0,manheim:0},
  AR:{copart:0,iaai:0,manheim:0},
  CA:{copart:0,iaai:0,manheim:0},
  CO:{copart:0,iaai:0,manheim:0},
  CT:{copart:0,iaai:0,manheim:0},
  DE:{copart:0,iaai:0,manheim:0},
  FL:{copart:0,iaai:0,manheim:0},
  GA:{copart:0,iaai:0,manheim:0},
  HI:{copart:0,iaai:0,manheim:0},
  ID:{copart:0,iaai:0,manheim:0},
  IL:{copart:0,iaai:0,manheim:0},
  IN:{copart:0,iaai:0,manheim:0},
  IA:{copart:0,iaai:0,manheim:0},
  KS:{copart:0,iaai:0,manheim:0},
  KY:{copart:0,iaai:0,manheim:0},
  LA:{copart:0,iaai:0,manheim:0},
  ME:{copart:0,iaai:0,manheim:0},
  MD:{copart:0,iaai:0,manheim:0},
  MA:{copart:0,iaai:0,manheim:0},
  MI:{copart:0,iaai:0,manheim:0},
  MN:{copart:0,iaai:0,manheim:0},
  MS:{copart:0,iaai:0,manheim:0},
  MO:{copart:0,iaai:0,manheim:0},
  MT:{copart:0,iaai:0,manheim:0},
  NE:{copart:0,iaai:0,manheim:0},
  NV:{copart:0,iaai:0,manheim:0},
  NH:{copart:0,iaai:0,manheim:0},
  NJ:{copart:0,iaai:0,manheim:0},
  NM:{copart:0,iaai:0,manheim:0},
  NY:{copart:0,iaai:0,manheim:0},
  NC:{copart:0,iaai:0,manheim:0},
  ND:{copart:0,iaai:0,manheim:0},
  OH:{copart:0,iaai:0,manheim:0},
  OK:{copart:0,iaai:0,manheim:0},
  OR:{copart:0,iaai:0,manheim:0},
  PA:{copart:0,iaai:0,manheim:0},
  RI:{copart:0,iaai:0,manheim:0},
  SC:{copart:0,iaai:0,manheim:0},
  SD:{copart:0,iaai:0,manheim:0},
  TN:{copart:0,iaai:0,manheim:0},
  TX:{copart:0,iaai:0,manheim:0},
  UT:{copart:0,iaai:0,manheim:0},
  VT:{copart:0,iaai:0,manheim:0},
  VA:{copart:0,iaai:0,manheim:0},
  WA:{copart:0,iaai:0,manheim:0},
  WV:{copart:0,iaai:0,manheim:0},
  WI:{copart:0,iaai:0,manheim:0},
  WY:{copart:0,iaai:0,manheim:0},
  DC:{copart:0,iaai:0,manheim:0}
};

const OCEAN_FREIGHT = {
  copart: 0,
  iaai: 0,
  manheim: 0
};

// Populate state dropdown with full names
document.addEventListener("DOMContentLoaded", function () {
  const stateSelect = document.getElementById("state");
  const sorted = Object.keys(STATE_NAMES).sort((a, b) =>
    STATE_NAMES[a].localeCompare(STATE_NAMES[b])
  );
  sorted.forEach(code => {
    const opt = document.createElement("option");
    opt.value = code;
    opt.textContent = STATE_NAMES[code];
    stateSelect.appendChild(opt);
  });
});

function calcShipping() {
  const state   = document.getElementById("state").value;
  const auction = document.getElementById("auction").value;

  if (!state) {
    document.getElementById("shippingResult").style.display = "none";
    return;
  }

  const domestic = (DOMESTIC[state] || {})[auction] || 0;
  const ocean    = OCEAN_FREIGHT[auction] || 0;
  const total    = domestic + ocean;

  document.getElementById("domestic").textContent =
    domestic ? "$" + domestic.toLocaleString() : "—";
  document.getElementById("ocean").textContent =
    ocean ? "$" + ocean.toLocaleString() : "—";
  document.getElementById("totalShipping").textContent =
    total ? "$" + total.toLocaleString() : "—";

  document.getElementById("shippingResult").style.display = "block";
}

// ======================================================
// GOMRUK
// ======================================================

const API_URL = "https://wandering-bonus-bcd2.abuzerovniko.workers.dev";

async function calcDuty() {
  const autoType     = document.getElementById("autoType").value;
  const engineType   = document.getElementById("engineType").value;
  const engine       = parseInt(document.getElementById("engine").value) || 0;
  const commerceType = document.getElementById("commerceType").value;
  const issueDateRaw = document.getElementById("issueDate").value;
  const priceInvoice  = parseFloat(document.getElementById("priceInvoice").value)  || 0;
  const priceTransport= parseFloat(document.getElementById("priceTransport").value) || 0;
  const priceOther    = parseFloat(document.getElementById("priceOther").value)     || 0;
  const price = priceInvoice + priceTransport + priceOther;

  if (!issueDateRaw) {
    showError("Zəhmət olmasa istehsal tarixini daxil edin.");
    return;
  }

  const [y, m, d] = issueDateRaw.split("-");
  const issueDate = `${d}.${m}.${y}`;

  hideError();
  hideResult();
  showLoader();

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "lang": "az",
        "requestSource": "1"
      },
      body: JSON.stringify({ autoType, engineType, engine, commerceType, issueDate, price })
    });

    const json = await response.json();
    hideLoader();

    if (json.code === 200 && json.data) {
      renderResult(json.data);
    } else {
      showError(json.exception?.errorMessage || "Bilinməyən xəta");
    }
  } catch (err) {
    hideLoader();
    showError("Serverə qoşulmaq mümkün olmadı.");
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
  document.getElementById("dutyTotal").innerHTML = total
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

function showLoader() { document.getElementById("loader").style.display = "block"; }
function hideLoader() { document.getElementById("loader").style.display = "none"; }
function showError(msg) {
  const el = document.getElementById("dutyError");
  el.textContent = msg;
  el.style.display = "block";
}
function hideError()  { document.getElementById("dutyError").style.display = "none"; }
function hideResult() { document.getElementById("dutyResult").style.display = "none"; }
