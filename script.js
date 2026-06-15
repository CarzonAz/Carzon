// ==========================================================================
// 1. QLOBAL KONSTANTLAR VƏ API URL-LƏRİ
// ==========================================================================
const CUSTOMS_API_URL = "https://wandering-bonus-bcd2.abuzerovniko.workers.dev";

document.addEventListener("DOMContentLoaded", function() {
  const allLinks = document.querySelectorAll(".nav-link");
  const navLinksContainer = document.querySelector(".nav-links");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  // ==========================================================================
  // SÜRÜŞƏN KAPSUL (SLIDER) VE HAMBURGER MENYU SİSTEMİ
  // ==========================================================================
  function updateSlidePosition() {
    const activeLink = document.querySelector(".nav-link--active");
    if (!activeLink || !navLinksContainer) return;
    const containerRect = navLinksContainer.getBoundingClientRect();
    const activeRect = activeLink.getBoundingClientRect();

    if (window.innerWidth > 768) {
      navLinksContainer.style.setProperty("--slide-left", `${activeRect.left - containerRect.left}px`);
      navLinksContainer.style.setProperty("--slide-width", `${activeRect.width}px`);
    } else {
      navLinksContainer.style.setProperty("--slide-top", `${activeRect.top - containerRect.top}px`);
      navLinksContainer.style.setProperty("--slide-height", `${activeRect.height}px`);
    }
  }

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function(e) {
      e.stopPropagation(); 
      hamburger.classList.toggle("open");
      navLinks.classList.toggle("open");
      if (navLinks.classList.contains("open")) {
        setTimeout(updateSlidePosition, 50);
      }
    });

    document.addEventListener("click", function(e) {
      if (navLinks.classList.contains("open") && !navLinks.contains(e.target) && e.target !== hamburger) {
        hamburger.classList.remove("open");
        navLinks.classList.remove("open");
      }
    });
  }

  window.addEventListener("resize", updateSlidePosition);

  // ==========================================================================
  // 🌟 AKTİV SƏHİFƏ VƏ İNDEKS TƏYİNİ SİSTEMİ (XƏTANIN HƏLLİ)
  // ==========================================================================
  const currentPath = window.location.pathname;
  let activeIndex = localStorage.getItem("prevNavIndex");

  allLinks.forEach(link => link.classList.remove("nav-link--active"));

  if (currentPath.includes("gomruk.html")) {
    activeIndex = "3";
  } else if (currentPath.includes("haqqimizda.html")) {
    activeIndex = "4";
  } else if (currentPath.includes("t%C9%99xmin.html") || currentPath.includes("təxmin.html")) {
    activeIndex = "2";
  } else {
    if (window.location.hash === "#scrollToCalc") {
      activeIndex = "1";
    } else if (!activeIndex || activeIndex === "2" || activeIndex === "3" || activeIndex === "4") {
      activeIndex = "0";
    }
  }

  const activeTarget = Array.from(allLinks).find(l => l.getAttribute("data-index") === activeIndex);
  if (activeTarget) {
    activeTarget.classList.add("nav-link--active");
    setTimeout(updateSlidePosition, 150);
  }

  // ==========================================================================
  // DAŞINMA KALKULYATORU MEXANİZMİ (index.html) - LOGISTIC DATA BAĞLANTISI
  // ==========================================================================
  const auctionSelect = document.getElementById("auctionSelect");
  const locationSelect = document.getElementById("locationSelect");
  const calcShippingBtn = document.getElementById("calcShippingBtn");
  const loader = document.getElementById("loader");
  const shippingResult = document.getElementById("shippingResult");

  if (auctionSelect && locationSelect) {
    auctionSelect.addEventListener("change", function() {
      const selectedAuction = auctionSelect.value;
      locationSelect.innerHTML = "";

      if (!selectedAuction) {
        locationSelect.innerHTML = '<option value="">Əvvəlcə hərrac seçin...</option>';
        locationSelect.disabled = true;
        return;
      }

      locationSelect.disabled = false;
      
      const locationsData = window.logisticAuctionData ? window.logisticAuctionData[selectedAuction] : null;
      
      let initialOption = document.createElement("option");
      initialOption.value = "";
      initialOption.text = "-- Meydança Seçin --";
      locationSelect.appendChild(initialOption);

      if (locationsData) {
        Object.keys(locationsData).forEach(locName => {
          let opt = document.createElement("option");
          opt.value = locationsData[locName]; 
          opt.text = locName; 
          locationSelect.appendChild(opt);
        });
      }
    });
  }

  if (calcShippingBtn) {
    calcShippingBtn.addEventListener("click", function() {
      if (!auctionSelect.value || !locationSelect.value) {
        alert("Zəhmət olmasa həm hərracı, həm də meydançanı seçin.");
        return;
      }

      if (loader) loader.classList.add("show");
      if (shippingResult) shippingResult.classList.remove("show");

      setTimeout(() => {
        if (loader) loader.classList.remove("show");

        const basePrice = parseFloat(locationSelect.value);
        const land = basePrice * 0.35;
        const ocean = basePrice * 0.65;
        const insurance = (land + ocean) * 0.015;
        const total = land + ocean + insurance;

        document.getElementById("shipCost").innerText = `$${total.toFixed(2)}`;
        document.getElementById("resLandCost").innerText = `$${land.toFixed(2)}`;
        document.getElementById("resOceanCost").innerText = `$${ocean.toFixed(2)}`;
        document.getElementById("resInsuranceCost").innerText = `$${insurance.toFixed(2)}`;

        if (shippingResult) {
          shippingResult.classList.add("show");
          const scrollPos = shippingResult.getBoundingClientRect().top + window.pageYOffset - 140;
          window.scrollTo({ top: scrollPos, behavior: "smooth" });
        }
      }, 1200);
    });
  }

  // ==========================================================================
  // 🔥 RƏSMİ GÖMRÜK HESABLANMASI MEXANİZMİ (gomruk.html)
  // ==========================================================================
  const calcCustomsBtn = document.getElementById("calcCustomsBtn");
  if (calcCustomsBtn) {
    calcCustomsBtn.addEventListener("click", async function() {
      const engineType = document.getElementById("engineType").value;
      const commerceType = document.getElementById("commerceType").value;
      const engineVolume = document.getElementById("engine").value;
      const manufactureYear = document.getElementById("manufactureYear").value;
      const manufactureMonth = document.getElementById("manufactureMonth").value;
      
      const carCost = parseFloat(document.getElementById("carCost").value) || 0;
      const shippingCost = parseFloat(document.getElementById("shippingCost").value) || 0;
      const otherCost = parseFloat(document.getElementById("otherCost").value) || 0;

      const customsError = document.getElementById("customsError");
      const customsResult = document.getElementById("customsResult");
      const loaderCustoms = document.getElementById("loader");

      if (engineVolume === "" && engineType !== "5") {
        alert("Zəhmət olmasa mühərrik həcmini daxil edin.");
        return;
      }
      if (carCost <= 0) {
        alert("Zəhmət olmasa avtomobilin alış (invoys) qiymətini düzgün daxil edin.");
        return;
      }

      if (customsError) customsError.style.display = "none";
      if (customsResult) customsResult.classList.remove("show");
      if (loaderCustoms) loaderCustoms.classList.add("show");

      const totalUsdPrice = carCost + shippingCost + otherCost;
      const formattedDate = `01.${manufactureMonth}.${manufactureYear}`;

      const requestData = {
        autoType: "0", 
        engineType: engineType.toString(),
        engine: parseInt(engineVolume) || 0,
        commerceType: commerceType.toString(),
        issueDate: formattedDate,
        price: parseFloat(totalUsdPrice)
      };

      try {
        const response = await fetch(CUSTOMS_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "lang": "az",
            "requestSource": 1
          },
          body: JSON.stringify(requestData)
        });

        if (!response.ok) {
          throw new Error(`Server xətası: Status ${response.status}`);
        }

        const resData = await response.json();
        if (loaderCustoms) loaderCustoms.classList.remove("show");

        if (resData && resData.code === 200 && resData.data) {
          const mainData = resData.data;
          const usdCourse = mainData.usdCourse || "1.7000";
          const autoDuty = mainData.autoDuty;

          const rowsContainer = document.getElementById("dutyRowsContainer");
          const rowsContainerNotice = document.getElementById("legalNotice");
          const rowsContainerUsd = document.getElementById("usdRate");
          
          if(rowsContainer) rowsContainer.innerHTML = "";

          if (autoDuty && autoDuty.duties) {
            autoDuty.duties.forEach(duty => {
              const row = document.createElement("div");
              row.className = "result-row";
              row.innerHTML = `
                <span>${duty.name}</span>
                <span style="color: #fff; font-weight: 600;">${parseFloat(duty.value).toFixed(2)} AZN</span>
              `;
              if(rowsContainer) rowsContainer.appendChild(row);
            });

            const totalCostValue = autoDuty.total ? parseFloat(autoDuty.total.value).toFixed(2) : "0.00";
            if(document.getElementById("totalCustomsCost")) document.getElementById("totalCustomsCost").innerText = `${totalCostValue} AZN`;
            if(rowsContainerUsd) rowsContainerUsd.innerText = `Mərkəzi Bankın cari rəsmi məzənnəsi: 1 USD = ${usdCourse} AZN`;
            if(rowsContainerNotice) rowsContainerNotice.innerText = "* Bu hesablama AR Dövlət Gömrük Komitəsinin rəsmi açıq API xidməti əsasında real zamanlı həyata keçirilmişdir.";

            if (customsResult) {
              customsResult.classList.add("show");
              const scrollPos = customsResult.getBoundingClientRect().top + window.pageYOffset - 140;
              window.scrollTo({ top: scrollPos, behavior: "smooth" });
            }
          }
        } else if (resData && resData.exception && resData.exception.errorMessage) {
          throw new Error(resData.exception.errorMessage);
        } else {
          throw new Error("Gömrük sistemi sorğunu emal edə bilmədi. Məlumatları yoxlayın.");
        }

      } catch (err) {
        if (loaderCustoms) loaderCustoms.classList.remove("show");
        if (customsError) {
          customsError.innerText = `Xəta baş verdi: ${err.message}`;
          customsError.style.display = "block";
          const scrollPos = customsError.getBoundingClientRect().top + window.pageYOffset - 140;
          window.scrollTo({ top: scrollPos, behavior: "smooth" });
        }
      }
    });
  }

  // ==========================================================================
  // SCROLL INTERSECTIONS & BACK TO TOP BUTTON
  // ==========================================================================
  const topBtn = document.getElementById("scrollToTopBtn");
  if (topBtn) {
    window.addEventListener("scroll", function() {
      if (window.pageYOffset > 400) topBtn.classList.add("show");
      else topBtn.classList.remove("show");
    });
    topBtn.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const localContactBtn = document.getElementById('navContactBtn');
  if (localContactBtn) {
    localContactBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const contactSec = document.getElementById('contactSection');
      if (contactSec) {
        const targetPos = contactSec.getBoundingClientRect().top + window.pageYOffset - 90;
        window.scrollTo({ top: targetPos, behavior: "smooth" });
      }
    });
  }

  const calcSection = document.getElementById('scrollToCalc');
  if (calcSection) {
    let isInitialLoad = window.location.hash === '#scrollToCalc' ? false : true;
    const observerOptions = { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 };
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (isInitialLoad) {
          setTimeout(() => { isInitialLoad = false; }, 600);
          return;
        }

        const homeBtn = Array.from(allLinks).find(l => l.getAttribute('href') === 'index.html' || l.getAttribute('href') === '#');
        const shipBtn = Array.from(allLinks).find(l => l.getAttribute('href') === '#scrollToCalc' || l.getAttribute('href') === 'index.html#scrollToCalc');

        if (entry.isIntersecting && shipBtn) {
          allLinks.forEach(l => l.classList.remove('nav-link--active'));
          shipBtn.classList.add('nav-link--active');
        } else if (window.pageYOffset < calcSection.offsetTop - 200 && homeBtn) {
          allLinks.forEach(l => l.classList.remove('nav-link--active'));
          homeBtn.classList.add('nav-link--active');
        }
        updateSlidePosition();
      });
    }, observerOptions);
    observer.observe(calcSection);
  }
});