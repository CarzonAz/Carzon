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
  // 🌟 AKTİV SƏHİFƏ VƏ İNDEKS TƏYİNİ SİSTEMİ (Ana Səhifə Fix)
  // ==========================================================================
  const currentPath = window.location.pathname;
  const hasAnchor = window.location.hash === "#scrollToCalc";
  let activeIndex = "0";

  if (currentPath.includes("gomruk.html")) {
    activeIndex = "3";
  } else if (currentPath.includes("haqqimizda.html")) {
    activeIndex = "4";
  } else if (currentPath.includes("t%C9%99xmin.html") || currentPath.includes("təxmin.html") || currentPath.includes("agillihesab.html")) {
    activeIndex = "2";
  } else {
    if (hasAnchor) {
      activeIndex = "1";
    } else {
      activeIndex = "0";
    }
  }

  allLinks.forEach(link => link.classList.remove("nav-link--active"));
  const activeTarget = Array.from(allLinks).find(l => l.getAttribute("data-index") === activeIndex);
  if (activeTarget) {
    activeTarget.classList.add("nav-link--active");
  }

  setTimeout(function() {
    updateSlidePosition();
    if (document.documentElement.classList.contains("fade-load")) {
      document.documentElement.classList.add("fade-load-active");
      setTimeout(() => {
        document.documentElement.classList.remove("fade-load", "fade-load-active");
      }, 400);
    }
  }, 50);

  allLinks.forEach(link => {
    link.addEventListener("click", function() {
      localStorage.setItem("prevNavIndex", this.getAttribute("data-index"));
    });
  });

  // ==========================================================================
  // DAŞINMA KALKULYATORU MEXANİZMİ (Select2 Premium & Avto-Fokus İnteqrasiyası)
  // ==========================================================================
  const auctionSelect = document.getElementById("auctionSelect");
  const locationSelect = document.getElementById("locationSelect");
  const shippingResult = document.getElementById("shippingResult");
  const shipCostDisplay = document.getElementById("shipCost");

  if (typeof jQuery !== 'undefined' && typeof jQuery.fn.select2 !== 'undefined') {
    jQuery('#auctionSelect').select2({
      minimumResultsForSearch: -1,
      width: '100%'
    });

    jQuery('#locationSelect').select2({
      placeholder: "-- Meydança Seçin --",
      allowClear: true,
      width: '100%'
    });

    jQuery('#locationSelect').on('select2:open', function() {
      setTimeout(() => {
        const searchField = document.querySelector('.select2-search__field');
        if (searchField) {
          searchField.focus();
        }
      }, 10);
    });
  }

  if (auctionSelect && locationSelect) {
    jQuery('#auctionSelect').on('change', function() {
      const selectedAuction = this.value; // Artıq buradan "Kanada (Canada)" gələcək

      if (!selectedAuction || !window.logisticAuctionData || !window.logisticAuctionData[selectedAuction]) {
        jQuery('#locationSelect').html('<option value="">Əvvəlcə hərrac seçin...</option>').prop('disabled', true).val(null).trigger('change');
        if (shippingResult) shippingResult.classList.remove("show");
        return;
      }

      let optionsHtml = '<option value=""></option>';
      Object.keys(window.logisticAuctionData[selectedAuction]).forEach(function(loc) {
        optionsHtml += `<option value="${loc}">${loc}</option>`;
      });

      jQuery('#locationSelect').html(optionsHtml).prop('disabled', false).val(null).trigger('change');
      if (shippingResult) shippingResult.classList.remove("show");
    });

    jQuery('#locationSelect').on('change', function () {
      const selectedAuction = auctionSelect.value;
      const selectedLocation = jQuery(this).val();

      if (!selectedAuction || !selectedLocation || !window.logisticAuctionData[selectedAuction]) {
        if (shippingResult) shippingResult.classList.remove("show");
        return;
      }

      const cost = window.logisticAuctionData[selectedAuction][selectedLocation] || 0;
      
      if (shipCostDisplay) {
        shipCostDisplay.textContent = `$${cost}`;
      }

      if (shippingResult) {
        shippingResult.classList.add("show");
      }

      jQuery(this).blur();
    });
  }

  // ==========================================================================
  // 🔥 RƏSMİ GÖMRÜK HESABLANMASI MEXANİZMİ (gomruk.html)
  // ==========================================================================
  const engineInputEl = document.getElementById("engine");

  function handleEngineConversion(inputField) {
    let val = parseFloat(inputField.value) || 0;
    if (val > 0 && val <= 7) {
      inputField.value = Math.round((val * 1000) - 3);
    }
  }

  if (engineInputEl) {
    engineInputEl.addEventListener("blur", function() {
      handleEngineConversion(this);
    });
  }

  // 🌟 İSTEHSAL AYI ÜÇÜN KLAVİATURADAN SÜRƏTLİ RƏQƏM SEÇİM MEXANİZMİ
  const manufactureMonthEl = document.getElementById("manufactureMonth");
  let monthBuffer = "";
  let monthTimeout = null;

  if (manufactureMonthEl) {
    manufactureMonthEl.addEventListener("keydown", function(e) {
      if (e.key >= "0" && e.key <= "9") {
        e.preventDefault(); 
        
        clearTimeout(monthTimeout);
        monthBuffer += e.key;

        if (monthBuffer.length > 2) {
          monthBuffer = e.key;
        }

        let targetMonthNum = parseInt(monthBuffer, 10);
        
        if (targetMonthNum >= 1 && targetMonthNum <= 12) {
          let formattedValue = targetMonthNum.toString().padStart(2, '0');
          this.value = formattedValue;
          this.dispatchEvent(new Event('change')); 
        }

        monthTimeout = setTimeout(() => {
          monthBuffer = "";
        }, 1000);
      }
    });

    manufactureMonthEl.addEventListener("blur", function() {
      monthBuffer = "";
    });
  }

  // 🌟 BÜTÜN XANALARDA ENTER-LƏ NÖVBƏTİYƏ KEÇİD SİSTEMİ
  const customsForm = document.getElementById("customsForm");
  if (customsForm) {
    const interactiveElements = Array.from(customsForm.querySelectorAll("input:not([type='hidden']), select"));

    interactiveElements.forEach((element, index) => {
      element.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
          e.preventDefault(); 

          if (this.id === "engine") {
            handleEngineConversion(this);
          }

          const nextElement = interactiveElements[index + 1];
          if (nextElement) {
            nextElement.focus(); 
          } else {
            const calcBtn = document.getElementById("calcCustomsBtn");
            if (calcBtn) {
              calcBtn.click();
            }
          }
        }
      });
    });
  }

  const calcCustomsBtn = document.getElementById("calcCustomsBtn");
  if (calcCustomsBtn) {
    calcCustomsBtn.addEventListener("click", async function() {
      const engineType = document.getElementById("engineType").value;
      const commerceType = document.getElementById("commerceType").value;
      let engineInput = document.getElementById("engine").value; 
      const manufactureYear = document.getElementById("manufactureYear").value;
      const manufactureMonth = document.getElementById("manufactureMonth").value;
      
      const carCost = parseFloat(document.getElementById("carCost").value) || 0;
      const shippingCost = parseFloat(document.getElementById("shippingCost").value) || 0;
      const otherCost = parseFloat(document.getElementById("otherCost").value) || 0;

      const customsError = document.getElementById("customsError");
      const customsResult = document.getElementById("customsResult");
      const loaderCustoms = document.getElementById("loader");

      if (engineInput === "" && engineType !== "5") {
        alert("Zəhmət olmasa mühərrik həcmini daxil edin.");
        return;
      }
      if (carCost <= 0) {
        alert("Zəhmət olmasa avtomobilin alış (invoys) qiymətini düzgün daxil edin.");
        return;
      }

      let engineVolume = parseFloat(engineInput) || 0;
      if (engineVolume > 0 && engineVolume <= 7) {
        engineVolume = Math.round((engineVolume * 1000) - 3);
        if (engineInputEl) engineInputEl.value = engineVolume; 
      } else {
        engineVolume = Math.round(engineVolume);
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
  // SCROLL ANIMATIONS, NAVIGATION & SCROLL INTERSECTIONS
  // ==========================================================================
  function smoothScrollTo(targetId, offset = 80) {
    if (hamburger && navLinks && navLinks.classList.contains("open")) {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    }
    const target = document.getElementById(targetId);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    const duration = 500;

    function easeOutCubic(t, b, c, d) { t /= d; t--; return c * (t * t * t + 1) + b; }
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeOutCubic(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    requestAnimationFrame(animation);
  }

  const heroScrollBtn = document.getElementById('heroScrollBtn');
  if (heroScrollBtn) {
    heroScrollBtn.addEventListener('click', function() {
      smoothScrollTo('scrollToCalc');
    });
  }

  const navContactBtn = document.getElementById('navContactBtn');
  if (navContactBtn) {
    navContactBtn.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollTo('contactSection');
    });
  }

  // 🌟 DAŞINMA LİNKİNİN İDARƏ EDİLMƏSİ (DÜZƏLDİLDİ)
  const navShippingBtn = document.getElementById('navShippingBtn');
  if (navShippingBtn) {
    navShippingBtn.addEventListener('click', function(e) {
      const isIndexPage = currentPath === '/' || currentPath.endsWith('index.html');
      if (!isIndexPage) {
        localStorage.setItem("prevNavIndex", "1");
        return;
      }
      
      e.preventDefault();
      smoothScrollTo('scrollToCalc');
      allLinks.forEach(l => l.classList.remove('nav-link--active'));
      this.classList.add('nav-link--active');
      localStorage.setItem("prevNavIndex", "1");
      updateSlidePosition();
    });
  }

  // 🌟 ANA SƏHİFƏ LİNKİNİN İDARƏ EDİLMƏSİ
  const navHomeBtn = document.getElementById('navHomeBtn');
  if (navHomeBtn) {
    navHomeBtn.addEventListener('click', function(e) {
      const isIndexPage = currentPath === '/' || currentPath.endsWith('index.html');
      if (!isIndexPage) {
        localStorage.setItem("prevNavIndex", "0");
        return;
      }

      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      allLinks.forEach(l => l.classList.remove('nav-link--active'));
      this.classList.add('nav-link--active');
      localStorage.setItem("prevNavIndex", "0");
      updateSlidePosition();
    });
  }

  const calcSection = document.getElementById('scrollToCalc');
  let isInitialLoad = true; 

  if (calcSection && navHomeBtn && navShippingBtn) {
    const observerOptions = { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 };
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (isInitialLoad) {
          isInitialLoad = false;
          return;
        }

        const isIndexPage = currentPath === '/' || currentPath.endsWith('index.html');
        if (!isIndexPage) return;

        if (window.pageYOffset < 150) {
          allLinks.forEach(l => l.classList.remove('nav-link--active'));
          navHomeBtn.classList.add('nav-link--active');
          localStorage.setItem("prevNavIndex", "0");
        } else {
          if (entry.isIntersecting) {
            allLinks.forEach(l => l.classList.remove('nav-link--active'));
            navShippingBtn.classList.add('nav-link--active');
            localStorage.setItem("prevNavIndex", "1");
          } else if (window.pageYOffset < calcSection.offsetTop - 300) {
            allLinks.forEach(l => l.classList.remove('nav-link--active'));
            navHomeBtn.classList.add('nav-link--active');
            localStorage.setItem("prevNavIndex", "0");
          }
        }
        updateSlidePosition();
      });
    }, observerOptions);
    observer.observe(calcSection);
  }

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
});