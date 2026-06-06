document.addEventListener("DOMContentLoaded", function () {
  // 1. HAMBURGER MENYU
  const hamburger = document.getElementById("hamburger");
  const navLinks  = document.getElementById("navLinks");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function (e) {
      e.stopPropagation();
      hamburger.classList.toggle("open");
      navLinks.classList.toggle("open");
    });
  }

  // 2. YOL XƏRCLƏRİNƏ TOXUNANDA AŞAĞI SLİDE ETMƏK
  const scrollToCalcBtn = document.getElementById("scrollToCalc");
  const shippingSection = document.getElementById("shippingSection");
  
  if (scrollToCalcBtn && shippingSection) {
    scrollToCalcBtn.addEventListener("click", function () {
      shippingSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});

// ======================================================
// DAŞINMA SİSTEMİ DATALARI
// ======================================================
const STATE_NAMES = {
  AL:"Alabama", CA:"California", FL:"Florida", TX:"Texas", NJ:"New Jersey", GA:"Georgia"
};

document.addEventListener("DOMContentLoaded", function() {
  const stateSelect = document.getElementById("stateSelect");
  const auctionSelect = document.getElementById("auctionSelect");
  const citySelect = document.getElementById("citySelect");
  const calcShippingBtn = document.getElementById("calcShippingBtn");

  if (!stateSelect || !auctionSelect || !citySelect) return;

  // Ştat siyahısını doldururuq
  for (let code in STATE_NAMES) {
    let opt = document.createElement("option");
    opt.value = code;
    opt.textContent = STATE_NAMES[code] + ` (${code})`;
    stateSelect.appendChild(opt);
  }

  // Ştat seçiləndə şəhər gəlsin
  stateSelect.addEventListener("change", function() {
    citySelect.innerHTML = '<option value="">-- Şəhər / Meydança Seçin --</option>';
    if (!this.value) return;

    const sampleYards = ["Meydança A", "Meydança B", "Əsas Port"];
    sampleYards.forEach(yard => {
      let opt = document.createElement("option");
      opt.value = yard.toLowerCase().replace(/ /g, "_");
      opt.textContent = yard;
      citySelect.appendChild(opt);
    });
  });

  // Hesabla
  if (calcShippingBtn) {
    calcShippingBtn.addEventListener("click", function() {
      if (!auctionSelect.value || !stateSelect.value || !citySelect.value) {
        alert("Zəhmət olmasa bütün sahələri doldurun.");
        return;
      }

      const loader = document.getElementById("loader");
      const resultBox = document.getElementById("shippingResult");
      
      if (loader) loader.style.display = "block";
      if (resultBox) resultBox.style.display = "none";

      setTimeout(() => {
        if (loader) loader.style.display = "none";
        document.getElementById("shipCost").textContent = "$1,250";
        if (resultBox) resultBox.style.display = "block";
      }, 700);
    });
  }
});
