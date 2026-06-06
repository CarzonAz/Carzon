document.addEventListener("DOMContentLoaded", function () {
  // 1. HAMBURGER MENYU İDARƏETMƏSİ (İPƏK KİMİ PROBLEM SIZ)
  const hamburger = document.getElementById("hamburger");
  const navLinks  = document.getElementById("navLinks");
  
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function (e) {
      e.stopPropagation();
      hamburger.classList.toggle("open");
      navLinks.classList.toggle("open");
    });

    // Mobil menyuda hər hansı linkə basanda menyu bağlansın
    navLinks.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        navLinks.classList.remove("open");
      });
    });

    // Boş bir yerə basanda da menyu bağlansın
    document.addEventListener("click", function (e) {
      if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove("open");
        navLinks.classList.remove("open");
      }
    });
  }

  // 2. YOL XƏRCLƏRİNƏ TOXUNANDA AŞAĞI RƏVAN SÜRÜŞMƏ (SLIDE)
  const scrollToCalcBtn = document.getElementById("scrollToCalc");
  const shippingSection = document.getElementById("shippingSection");
  
  if (scrollToCalcBtn && shippingSection) {
    scrollToCalcBtn.addEventListener("click", function () {
      shippingSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});

// ======================================================
// DAŞINMA SİSTEMİ - ŞTAT SİYAHISI
// ======================================================
const STATE_NAMES = {
  AL:"Alabama", CA:"California", FL:"Florida", TX:"Texas", NJ:"New Jersey", GA:"Georgia"
};

document.addEventListener("DOMContentLoaded", function() {
  const stateSelect = document.getElementById("stateSelect");
  const auctionSelect = document.getElementById("auctionSelect");
  const calcShippingBtn = document.getElementById("calcShippingBtn");

  if (!stateSelect || !auctionSelect) return;

  // Ştat select xanasını doldururuq
  for (let code in STATE_NAMES) {
    let opt = document.createElement("option");
    opt.value = code;
    opt.textContent = STATE_NAMES[code] + ` (${code})`;
    stateSelect.appendChild(opt);
  }

  // HESABLAMA MƏNTİQİ
  if (calcShippingBtn) {
    calcShippingBtn.addEventListener("click", function() {
      if (!auctionSelect.value || !stateSelect.value) {
        alert("Zəhmət olmasa həm Hərracı, həm də Ştatı seçin.");
        return;
      }

      const loader = document.getElementById("loader");
      const resultBox = document.getElementById("shippingResult");
      
      if (loader) loader.style.display = "block";
      if (resultBox) resultBox.style.display = "none";

      setTimeout(() => {
        if (loader) loader.style.display = "none";
        
        let cost = 1250;
        if (stateSelect.value === "CA") cost = 1550;
        
        document.getElementById("shipCost").textContent = "$" + cost;
        if (resultBox) resultBox.style.display = "block";
      }, 700);
    });
  }
});