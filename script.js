// ======================================================
// HAMBURGER MENU & MOBILE NAVIGATION
// ======================================================
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks  = document.getElementById("navLinks");
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", function (e) {
    e.stopPropagation();
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll(".nav-link, .nav-contact-btn-mobile").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });

  document.addEventListener("click", function (e) {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    }
  });
});

// ======================================================
// SHIPPING CALCULATOR DATA & LOGIC (index.html)
// ======================================================
const STATE_NAMES = {
  AL:"Alabama", AK:"Alaska", AZ:"Arizona", AR:"Arkansas", CA:"California", 
  CO:"Colorado", CT:"Connecticut", DE:"Delaware", FL:"Florida", GA:"Georgia", 
  HI:"Hawaii", ID:"Idaho", IL:"Illinois", IN:"Indiana", IA:"Iowa", KS:"Kansas", 
  KY:"Kentucky", LA:"Louisiana", ME:"Maine", MD:"Maryland", MA:"Massachusetts", 
  MI:"Michigan", MN:"Minnesota", MS:"Mississippi", MO:"Missouri", MT:"Montana", 
  NE:"Nebraska", NV:"Nevada", NH:"New Hampshire", NJ:"New Jersey", NM:"New Mexico", 
  NY:"New York", NC:"North Carolina", ND:"North Dakota", OH:"Ohio", OK:"Oklahoma", 
  OR:"Oregon", PA:"Pennsylvania", RI:"Rhode Island", SC:"South Carolina", 
  SD:"South Dakota", TN:"Tennessee", TX:"Texas", UT:"Utah", VT:"Vermont", 
  VA:"Virginia", WA:"Washington", WV:"West Virginia", WI:"Wisconsin", WY:"Wyoming"
};

// Əgər index.html səhifəsindəsinizsə, daşınma kalkulyatorunu işə salır
document.addEventListener("DOMContentLoaded", function() {
  const stateSelect = document.getElementById("stateSelect");
  const auctionSelect = document.getElementById("auctionSelect");
  const citySelect = document.getElementById("citySelect");
  const calcBtn = document.getElementById("calcShippingBtn");

  if (!stateSelect || !auctionSelect || !citySelect) return;

  // Ştat dropdown-unu doldurur
  for (let code in STATE_NAMES) {
    let opt = document.createElement("option");
    opt.value = code;
    opt.textContent = STATE_NAMES[code] + ` (${code})`;
    stateSelect.appendChild(opt);
  }

  // Ştat dəyişəndə şəhərləri/hərracları gətirmək üçün simulyasiya və ya məntiq
  stateSelect.addEventListener("change", function() {
    citySelect.innerHTML = '<option value="">-- Şəhər / Hərrac Seçin --</option>';
    if(!this.value) return;

    // Nümunə şəhərlər (Buraya real tarif datalarınızı əlavə edə bilərsiniz)
    const sampleCities = ["Copart Yard", "IAAI Yard", "Main Port City"];
    sampleCities.forEach(city => {
      let opt = document.createElement("option");
      opt.value = city.toLowerCase().replace(" ", "_");
      opt.textContent = city;
      citySelect.appendChild(opt);
    });
  });

  if (calcBtn) {
    calcBtn.addEventListener("click", function() {
      // Daşınma hesablama düyməsinin funksionallığı
      const state = stateSelect.value;
      const auction = auctionSelect.value;
      const city = citySelect.value;

      if (!state || !auction || !city) {
        alert("Zəhmət olmasa bütün sahələri doldurun.");
        return;
      }

      // Nümunə qiymət hesablama (Ehtiyaca uyğun dəyişdirilə bilər)
      showLoader();
      setTimeout(() => {
        hideLoader();
        const resultDiv = document.getElementById("shippingResult");
        if(resultDiv) {
          resultDiv.style.display = "block";
          document.getElementById("shipCost").textContent = "$1,250"; // Nümunə sabit qiymət
        }
      }, 600);
    });
  }
});

// ======================================================
// CUSTOMS CALCULATOR LOGIC (gomruk.html)
// ======================================================
document.addEventListener("DOMContentLoaded", function() {
  const customsForm = document.getElementById("customsForm");
  if (!customsForm) return;

  customsForm.addEventListener("submit", function(e) {
    e.preventDefault();
    hideError();
    hideResult();

    const price = parseFloat(document.getElementById("carPrice").value);
    const year = parseInt(document.getElementById("carYear").value);
    const engine = parseInt(document.getElementById("engineCapacity").value);
    const fuelType = document.getElementById("fuelType").value;

    if (isNaN(price) || isNaN(year) || isNaN(engine) || !fuelType) {
      showError("Zəhmət olmasa bütün sahələri düzgün daxil edin.");
      return;
    }

    showLoader();

    setTimeout(() => {
      hideLoader();
      
      // Azərbaycan Gömrük rüsumunun sadələşdirilmiş hesablama alqoritmi
      let duty = 0;
      let vat = 0;
      let total = 0;

      // Mühərrik həcminə görə rüsum (Nümunəvi dərəcələr)
      if (engine <= 1500) duty = engine * 0.70;
      else if (engine <= 3000) duty = engine * 1.20;
      else duty = engine * 1.50;

      // Avtomobilin yaşına görə əmsal
      const currentYear = new Date().getFullYear();
      const carAge = currentYear - year;
      if (carAge > 7) duty *= 1.2; // 7 ildən köhnə maşınlar üçün əlavə

      // ƏDV (18%) və ümumi məbləğ
      vat = (price + duty) * 0.18;
      total = duty + vat + 50; // 50 AZN xidmət haqqı

      // Nəticələri ekranda göstərmək
      document.getElementById("resDuty").textContent = formatAZN(duty);
      document.getElementById("resVat").textContent = formatAZN(vat);
      document.getElementById("resTotal").textContent = formatAZN(total);

      document.getElementById("dutyResult").style.display = "block";
    }, 800);
  });
});

// ======================================================
// HELPER FUNCTIONS
// ======================================================
function formatAZN(val) {
  return Number(val).toLocaleString("az-AZ", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }) + " ₼";
}

function showLoader() { 
  const loader = document.getElementById("loader");
  if(loader) loader.style.display = "block"; 
}
function hideLoader() { 
  const loader = document.getElementById("loader");
  if(loader) loader.style.display = "none"; 
}
function showError(msg) {
  const el = document.getElementById("dutyError");
  if(el) {
    el.textContent = msg;
    el.style.display = "block";
  }
}
function hideError()  { 
  const el = document.getElementById("dutyError");
  if(el) el.style.display = "none"; 
}
function hideResult() { 
  const el = document.getElementById("dutyResult");
  if(el) el.style.display = "none"; 
}

// ======================================================
// CONTEXT-AWARE NAV BAR (Sub-bar) — index.html
// ======================================================
(function () {
  window.addEventListener("scroll", function () {
    const shippingBar = document.getElementById("shippingBar");
    const shippingSec = document.getElementById("shipping");

    if (!shippingBar || !shippingSec) return;

    const scrollY = window.scrollY;
    const navH    = 52;
    const shipTop = shippingSec.getBoundingClientRect().top + scrollY - navH;
    const shipBot = shipTop + shippingSec.offsetHeight;
    const inShipping = scrollY >= shipTop && scrollY < shipBot;
    
    shippingBar.classList.toggle("visible", inShipping);
  });
})();
