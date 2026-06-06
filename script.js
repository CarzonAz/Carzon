// ======================================================
// 1. MOBİL MENYU VƏ HAMBURGER İDARƏETMƏSİ
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

  // Mobil menyuda linkə klikləyəndə menyunu avtomatik bağlasın
  navLinks.querySelectorAll(".nav-link, .nav-contact-btn").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });

  // Kənara klikləyəndə menyunun bağlanması
  document.addEventListener("click", function (e) {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    }
  });
});

// ======================================================
// 2. DAŞINMA (SHIPPING) KALKULYATORU DATALARI VƏ MƏNTİQİ
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

  // Ştat seçiləndə şəhərlərin avtomatik gəlməsi məntiqi
  stateSelect.addEventListener("change", function() {
    citySelect.innerHTML = '<option value="">-- Şəhər / Meydança Seçin --</option>';
    if (!this.value) return;

    // Ştatlara uyğun olaraq nümunə meydançalar
    const sampleYards = ["Copart Yard 1", "IAAI Yard 2", "Main Port Terminal"];
    sampleYards.forEach(yard => {
      let opt = document.createElement("option");
      opt.value = yard.toLowerCase().replace(/ /g, "_");
      opt.textContent = yard;
      citySelect.appendChild(opt);
    });
  });

  // Hesablama Düyməsinə kliklənmə funksiyası
  if (calcShippingBtn) {
    calcShippingBtn.addEventListener("click", function() {
      const state = stateSelect.value;
      const auction = auctionSelect.value;
      const city = citySelect.value;

      if (!state || !auction || !city) {
        alert("Zəhmət olmasa bütün sahələri doldurun.");
        return;
      }

      // Loader animasiyasını göstəririk
      const loader = document.getElementById("loader");
      const resultBox = document.getElementById("shippingResult");
      
      if (loader) loader.style.display = "block";
      if (resultBox) resultBox.style.display = "none";

      setTimeout(() => {
        if (loader) loader.style.display = "none";
        
        // Daşınma üçün nümunə qiymət hesablanması (Məsafəyə görə dəyişə bilər)
        let baseCost = 1150; 
        if (state === "CA" || state === "WA") baseCost += 300; // Qərb sahili bir az baha olur

        const shipCostEl = document.getElementById("shipCost");
        if (shipCostEl) shipCostEl.textContent = "$" + baseCost;
        if (resultBox) resultBox.style.display = "block";
      }, 700);
    });
  }
});

// ======================================================
// 3. GÖMRÜK (CUSTOMS) KALKULYATORU MƏNTİQİ
// ======================================================
document.addEventListener("DOMContentLoaded", function() {
  const customsForm = document.getElementById("customsForm");
  if (!customsForm) return;

  customsForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const price = parseFloat(document.getElementById("carPrice").value);
    const year = parseInt(document.getElementById("carYear").value);
    const engine = parseInt(document.getElementById("engineCapacity").value);
    const fuelType = document.getElementById("fuelType").value;

    const errorDiv = document.getElementById("dutyError");
    const loader = document.getElementById("loader");
    const resultBox = document.getElementById("dutyResult");

    if (errorDiv) errorDiv.style.display = "none";
    if (resultBox) resultBox.style.display = "none";

    if (isNaN(price) || isNaN(year) || isNaN(engine) || !fuelType) {
      if (errorDiv) {
        errorDiv.textContent = "Zəhmət olmasa bütün xanaları düzgün daxil edin.";
        errorDiv.style.display = "block";
      }
      return;
    }

    if (loader) loader.style.display = "block";

    setTimeout(() => {
      if (loader) loader.style.display = "none";

      let duty = 0;
      let vat = 0;
      let total = 0;

      // 1. Mühərrik həcminə görə vergi dərəcəsi
      if (engine <= 1500) {
        duty = engine * 0.70;
      } else if (engine <= 3000) {
        duty = engine * 1.20;
      } else {
        duty = engine * 1.50;
      }

      // 2. Maşının yaşına görə əmsal
      const currentYear = new Date().getFullYear();
      const carAge = currentYear - year;
      if (carAge > 7) {
        duty = duty * 1.35; // 7 ildən çoxdursa rüsum artır
      }

      // 3. ƏDV (18%) və Ümumi xidmət haqqı
      vat = (price + duty) * 0.18;
      total = duty + vat + 50; // 50 AZN bəyannamə və digər sənədləşmə xərci

      // Nəticələri yazdırırıq
      document.getElementById("resDuty").textContent = duty.toLocaleString("az-AZ", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " ₼";
      document.getElementById("resVat").textContent = vat.toLocaleString("az-AZ", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " ₼";
      document.getElementById("resTotal").textContent = total.toLocaleString("az-AZ", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " ₼";

      if (resultBox) resultBox.style.display = "block";
    }, 800);
  });
});
