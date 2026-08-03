// ==========================================================================
// CARZON — AĞILLI XƏRC TƏXMİN MOTORU (TORPAQ BASDI SİSTEMİ İLƏ)
// Fayl Adı: agillihesab.js
// ==========================================================================

const TAHMIN_API_URL = "https://wandering-bonus-bcd2.abuzerovniko.workers.dev";
const TAHMIN_AZN_RATE = 1.7000;          // Sabit valyuta məzənnəsi (kurs)
const SABIT_POTI_TO_BAKU_USD = 350.00;    // Poti - Bakı arası daşınma (sabit)
const SABIT_TOPRAQ_BASDI_AZN = 500.00;    // Torpaq basdı qiyməti (sabit)

/**
 * Rəqəmləri minliklərə ayıran funksiya (Məs: 23224.20 -> 23 224.20)
 */
function formatMoney(num) {
  return parseFloat(num).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

/**
 * carzon_analyzer_user.js-dən köçürülmüş RƏSMİ funksiya:
 * Bəzi "girdaplı" (round-number) qiymətlərdə hərraclar +0.01 fərqlə fərqli pilləyə keçir.
 */
function getSafeCheckPrice(price) {
  const sinirDegerler = [5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 10000, 10500, 11000, 11500, 12000, 12500, 15000];
  return sinirDegerler.includes(price) ? price + 0.01 : price;
}

/** RƏSMİ COPART Buyer Fee cədvəli (Sedan/Yüngül) — carzon_analyzer_user.js-dən köçürülüb */
function buyerFeeCopart(lotPrice) {
  const checkPrice = getSafeCheckPrice(parseFloat(lotPrice) || 0);
  const fees = [
    { max: 50, fee: 1 }, { max: 100, fee: 1 }, { max: 200, fee: 25 }, { max: 300, fee: 60 },
    { max: 350, fee: 85 }, { max: 400, fee: 100 }, { max: 450, fee: 125 }, { max: 500, fee: 135 },
    { max: 550, fee: 145 }, { max: 600, fee: 155 }, { max: 700, fee: 170 }, { max: 800, fee: 195 },
    { max: 900, fee: 215 }, { max: 1000, fee: 230 }, { max: 1200, fee: 250 }, { max: 1300, fee: 270 },
    { max: 1400, fee: 285 }, { max: 1500, fee: 300 }, { max: 1600, fee: 315 }, { max: 1700, fee: 330 },
    { max: 1800, fee: 350 }, { max: 2000, fee: 390 }, { max: 2400, fee: 415 }, { max: 2500, fee: 425 },
    { max: 3000, fee: 460 }, { max: 3500, fee: 505 }, { max: 4000, fee: 555 }, { max: 4500, fee: 600 },
    { max: 5000, fee: 625 }, { max: 5500, fee: 650 }, { max: 6000, fee: 675 }, { max: 6500, fee: 700 },
    { max: 7000, fee: 720 }, { max: 7500, fee: 755 }, { max: 8000, fee: 775 }, { max: 8500, fee: 800 },
    { max: 9000, fee: 820 }, { max: 10000, fee: 820 }, { max: 10500, fee: 850 }, { max: 11000, fee: 850 },
    { max: 11500, fee: 850 }, { max: 12000, fee: 860 }, { max: 12500, fee: 875 }, { max: 15000, fee: 890 }
  ];
  for (let i = 0; i < fees.length; i++) {
    if (checkPrice <= fees[i].max) return fees[i].fee;
  }
  return checkPrice * 0.06;
}

/** RƏSMİ COPART Buyer Fee cədvəli (SUV / Truck / Pickup — Ağır Texnika) — carzon_analyzer_user.js-dən köçürülüb */
function buyerFeeHeavyVehiclesCopart(lotPrice) {
  const checkPrice = getSafeCheckPrice(parseFloat(lotPrice) || 0);
  const fees = [
    { max: 50, fee: 90 }, { max: 100, fee: 115 }, { max: 200, fee: 165 }, { max: 300, fee: 210 },
    { max: 350, fee: 235 }, { max: 400, fee: 250 }, { max: 450, fee: 275 }, { max: 500, fee: 300 },
    { max: 550, fee: 320 }, { max: 600, fee: 330 }, { max: 700, fee: 360 }, { max: 800, fee: 390 },
    { max: 900, fee: 425 }, { max: 1000, fee: 450 }, { max: 1200, fee: 475 }, { max: 1300, fee: 500 },
    { max: 1400, fee: 520 }, { max: 1500, fee: 540 }, { max: 1600, fee: 560 }, { max: 1700, fee: 585 },
    { max: 1800, fee: 610 }, { max: 2000, fee: 635 }, { max: 2400, fee: 670 }, { max: 2500, fee: 700 },
    { max: 3000, fee: 735 }, { max: 3500, fee: 755 }, { max: 4000, fee: 775 }, { max: 4500, fee: 795 },
    { max: 5000, fee: 815 }, { max: 5500, fee: 835 }, { max: 6000, fee: 855 }, { max: 6500, fee: 875 },
    { max: 7000, fee: 885 }, { max: 7500, fee: 895 }, { max: 8000, fee: 920 }, { max: 8500, fee: 940 },
    { max: 9000, fee: 965 }, { max: 10000, fee: 965 }, { max: 15000, fee: 1030 }
  ];
  for (let i = 0; i < fees.length; i++) {
    if (checkPrice <= fees[i].max) return fees[i].fee;
  }
  return checkPrice * 0.06;
}

/** RƏSMİ İnternet/Live Bid Fee cədvəli (Copart və IAAI hər ikisi üçün ortaq) — carzon_analyzer_user.js-dən köçürülüb */
function getInternetBidFee(lotPrice) {
  const checkPrice = parseFloat(lotPrice) || 0;
  const feeThresholds = [
    { max: 100, fee: 0 }, { max: 500, fee: 50 }, { max: 1000, fee: 65 },
    { max: 1500, fee: 85 }, { max: 2000, fee: 95 }, { max: 4000, fee: 110 },
    { max: 6000, fee: 125 }, { max: 8000, fee: 145 }
  ];
  for (let i = 0; i < feeThresholds.length; i++) {
    if (checkPrice <= feeThresholds[i].max) return feeThresholds[i].fee;
  }
  return 160;
}

/** RƏSMİ IAAI Buyer Fee cədvəli — carzon_analyzer_user.js-dən köçürülüb */
function buyerFeeIAAI(lotPrice) {
  const checkPrice = getSafeCheckPrice(parseFloat(lotPrice) || 0);
  const fees = [
    { max: 100, fee: 1 }, { max: 200, fee: 25 }, { max: 300, fee: 60 }, { max: 350, fee: 85 },
    { max: 400, fee: 100 }, { max: 450, fee: 125 }, { max: 500, fee: 135 }, { max: 550, fee: 145 },
    { max: 600, fee: 155 }, { max: 700, fee: 170 }, { max: 800, fee: 195 }, { max: 900, fee: 215 },
    { max: 1000, fee: 230 }, { max: 1200, fee: 250 }, { max: 1300, fee: 270 }, { max: 1400, fee: 285 },
    { max: 1500, fee: 300 }, { max: 1600, fee: 315 }, { max: 1700, fee: 330 }, { max: 1800, fee: 350 },
    { max: 2000, fee: 370 }, { max: 2400, fee: 390 }, { max: 2500, fee: 425 }, { max: 3000, fee: 460 },
    { max: 3500, fee: 505 }, { max: 4000, fee: 555 }, { max: 4500, fee: 600 }, { max: 5000, fee: 625 },
    { max: 5500, fee: 650 }, { max: 6000, fee: 675 }, { max: 6500, fee: 700 }, { max: 7000, fee: 720 },
    { max: 7500, fee: 755 }, { max: 8000, fee: 775 }, { max: 8500, fee: 800 }, { max: 10000, fee: 820 },
    { max: 11500, fee: 850 }, { max: 12000, fee: 860 }, { max: 12500, fee: 875 }, { max: 15000, fee: 890 }
  ];
  for (let i = 0; i < fees.length; i++) {
    if (checkPrice <= fees[i].max) return fees[i].fee;
  }
  return checkPrice * 0.06;
}

/**
 * RƏSMİ VERGİ VƏ KOMİSSİYA MEXANİZMİ
 * Copart/IAAI hissəsi carzon_analyzer_user.js-dəki window.calculateAuctionBuyerFee
 * funksiyasından BİRƏBİR köçürülüb (eyni rəsmi cədvəllər). Manheim/Kanada üçün
 * carzon_analyzer_user.js-də rəsmi cədvəl olmadığından əvvəlki təxmini məntiq saxlanılıb.
 */
function calculateAuctionBuyerFee(auction, price, isHeavy = false, isBrokerChecked = false) {
  let totalFee = 0;
  const esnekBeklemePayi = 75.00;

  if (auction === "copart") {
    // Rəsmi Copart məntiqi: 95 (service) + 15 (env) + 20 (title) + buyerFee + internetFee
    const buyerFee = isHeavy ? buyerFeeHeavyVehiclesCopart(price) : buyerFeeCopart(price);
    const internetFee = getInternetBidFee(price);
    totalFee = 95 + 15 + 20 + buyerFee + internetFee + esnekBeklemePayi;

  } else if (auction === "iaai") {
    // Rəsmi IAAI məntiqi: 95 (service) + 15 (env) + 20 (title) + buyerFee + internetFee (+ 35 broker)
    const buyerFee = buyerFeeIAAI(price);
    const internetFee = getInternetBidFee(price);
    totalFee = 95 + 15 + 20 + buyerFee + internetFee + esnekBeklemePayi;
    if (isBrokerChecked) totalFee += 35;

  } else if (auction === "manheim") {
    let manheimBuyerFee = 0;
    if (price <= 499.99) manheimBuyerFee = 150.00;
    else if (price <= 999.99) manheimBuyerFee = 225.00;
    else if (price <= 1999.99) manheimBuyerFee = 325.00;
    else if (price <= 2999.99) manheimBuyerFee = 430.00;
    else if (price <= 4999.99) manheimBuyerFee = 540.00;
    else if (price <= 7499.99) manheimBuyerFee = 630.00;
    else if (price <= 9999.99) manheimBuyerFee = 720.00;
    else if (price <= 14999.99) manheimBuyerFee = 810.00;
    else if (price <= 19999.99) manheimBuyerFee = 930.00;
    else manheimBuyerFee = price * 0.05;

    const manheimFacilitationFee = 85.00;
    totalFee = manheimBuyerFee + manheimFacilitationFee + esnekBeklemePayi;

  } else if (auction === "canada") {
    let canadaPriceCAD = price / 0.73;
    let canadaBuyerFeeCAD = 0;

    if (canadaPriceCAD <= 499.99) canadaBuyerFeeCAD = 180.00;
    else if (canadaPriceCAD <= 999.99) canadaBuyerFeeCAD = 290.00;
    else if (canadaPriceCAD <= 1999.99) canadaBuyerFeeCAD = 420.00;
    else if (canadaPriceCAD <= 2999.99) canadaBuyerFeeCAD = 530.00;
    else if (canadaPriceCAD <= 4999.99) canadaBuyerFeeCAD = 680.00;
    else if (canadaPriceCAD <= 7499.99) canadaBuyerFeeCAD = 820.00;
    else if (canadaPriceCAD <= 9999.99) canadaBuyerFeeCAD = 950.00;
    else canadaBuyerFeeCAD = canadaPriceCAD * 0.10;

    const canadaGateFeeCAD = 95.00;
    totalFee = (canadaBuyerFeeCAD + canadaGateFeeCAD) * 0.73 + esnekBeklemePayi;

  } else {
    totalFee = (price * 0.10) + 150.00 + esnekBeklemePayi;
  }

  return totalFee;
}

// ==========================================================================
// KALKULYATOR ÖZƏK MODULU
// ==========================================================================
document.addEventListener("DOMContentLoaded", function() {

  const tahminAuctionEl = document.getElementById("tahminAuction");
  if (!tahminAuctionEl) return; 

  const els = {
    tahminAuction: tahminAuctionEl,
    tahminLocation: document.getElementById("tahminLocation"),
    calcTahminBtn: document.getElementById("calcTahminBtn"),
    engineInput: document.getElementById("engine"),
    engineType: document.getElementById("engineType"),
    bidPrice: document.getElementById("bidPrice"),
    vehicleBodyType: document.getElementById("vehicleBodyType"),
    iaaiBrokerFee: document.getElementById("iaaiBrokerFee"),
    manufactureYear: document.getElementById("manufactureYear"),
    manufactureMonth: document.getElementById("manufactureMonth"),
    commerceType: document.getElementById("commerceType"),
    loader: document.getElementById("tahminLoader"),
    errorBox: document.getElementById("tahminError"),
    resultBox: document.getElementById("tahminResult"),
    resBidUsd: document.getElementById("resBidUsd"),
    resBidAzn: document.getElementById("resBidAzn"),
    resFeeUsd: document.getElementById("resFeeUsd"),
    resFeeAzn: document.getElementById("resFeeAzn"),
    resInvoiceUsd: document.getElementById("resInvoiceUsd"),
    resInvoiceAzn: document.getElementById("resInvoiceAzn"),
    resUsaShipUsd: document.getElementById("resUsaShipUsd"),
    resUsaShipAzn: document.getElementById("resUsaShipAzn"),
    resPotiUsd: document.getElementById("resPotiUsd"),
    resPotiAzn: document.getElementById("resPotiAzn"),
    resCustomsAzn: document.getElementById("resCustomsAzn"),
    resTopraqBasdiAzn: document.getElementById("resTopraqBasdiAzn"),
    totalFinalAzn: document.getElementById("totalFinalAzn"),
    totalFinalUsd: document.getElementById("totalFinalUsd"),
    legalNotice: document.getElementById("legalNotice")
  };

  // FIX 1: Litr daxil ediləndə mühərrik həcminin təkrarlanma (loop) xətasının qarşısı alındı
  function handleEngineConversion(inputField) {
    let val = parseFloat(inputField.value);
    if (!isNaN(val) && val > 0 && val <= 20) {
      inputField.value = Math.round((val * 1000) - 3);
    }
  }

  if (window.jQuery) {
    const $auctionSelect = $(els.tahminAuction);
    const $locationSelect = $(els.tahminLocation);

    $auctionSelect.select2({
      minimumResultsForSearch: -1,
      width: '100%'
    });

    if ($locationSelect.length) {
      $locationSelect.select2({
        placeholder: "Axtarmaq üçün yazın...",
        width: '100%',
        language: { noResults: function() { return "Nəticə tapılmadı"; } }
      });
    }

    $auctionSelect.on('select2:select', function() {
      setTimeout(function() {
        if($locationSelect.length) $locationSelect.select2('open');
      }, 100);
    });

    if ($locationSelect.length) {
      $locationSelect.on('select2:open', function () {
        setTimeout(function() {
          const searchField = document.querySelector('.select2-container--open .select2-search__field');
          if (searchField) {
            searchField.focus();
            
            $(searchField).off('keydown').on('keydown', function(e) {
              if (e.key === "Enter") {
                e.preventDefault();
                
                const $highlighted = $('.select2-results__option--highlighted');
                if ($highlighted.length > 0) {
                  $highlighted.trigger('mouseup');
                } else {
                  $locationSelect.select2('close');
                }

                setTimeout(function() {
                  if (els.bidPrice) els.bidPrice.focus();
                }, 80);
              }
            });
          }
        }, 50); 
      });

      $locationSelect.on('select2:select', function() {
        setTimeout(function() {
          if (els.bidPrice) els.bidPrice.focus();
        }, 50);
      });
    }
  }

  if (els.engineInput) {
    els.engineInput.addEventListener("change", function() {
      handleEngineConversion(this);
    });
  }

  let monthBuffer = "";
  let monthTimeout = null;

  if (els.manufactureMonth) {
    els.manufactureMonth.addEventListener("keydown", function(e) {
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

    els.manufactureMonth.addEventListener("blur", function() {
      monthBuffer = "";
    });
  }

  const interactiveElements = [
    els.tahminAuction,
    els.tahminLocation,
    els.bidPrice,
    els.engineType,
    els.engineInput,
    els.manufactureYear,
    els.manufactureMonth
  ].filter(el => el !== null);

  interactiveElements.forEach((element, index) => {
    element.addEventListener("keydown", function(e) {
      if (e.key === "Enter") {
        if (window.jQuery && $(this).data('select2')) {
           return;
        }

        e.preventDefault(); 

        if (this.id === "engine") {
          handleEngineConversion(this);
        }

        const nextElement = interactiveElements[index + 1];
        if (nextElement) {
          if (window.jQuery && $(nextElement).data('select2')) {
            $(nextElement).select2('open');
          } else {
            nextElement.focus();
          }
        } else {
          if (els.calcTahminBtn) {
            els.calcTahminBtn.click();
          }
        }
      }
    });
  });

  // 🌟 MEYDANÇALARIN YÜKLƏNMƏSİNİ TƏMİN EDƏN AD UYĞUNLAŞDIRMA
  if (els.tahminAuction && els.tahminLocation) {
    $(els.tahminAuction).on("change", function() {
      const selectedAuction = this.value;
      els.tahminLocation.innerHTML = "";

      if (!selectedAuction) {
        els.tahminLocation.innerHTML = '<option value="">Əvvəlcə hərrac seçin...</option>';
        els.tahminLocation.disabled = true;
        if (window.jQuery) $(els.tahminLocation).trigger('change.select2');
        return;
      }

      els.tahminLocation.disabled = false;
      
      let locationsData = null;
      if (window.logisticAuctionData) {
        if (window.logisticAuctionData[selectedAuction]) {
          locationsData = window.logisticAuctionData[selectedAuction];
        } 
        else if (selectedAuction === "canada") {
          locationsData = window.logisticAuctionData["Kanada (Canada)"] || 
                          window.logisticAuctionData["copart_ca"] || 
                          window.logisticAuctionData["iaai_ca"] || null;
        } 
        else if (selectedAuction === "manheim") {
          locationsData = window.logisticAuctionData["manheim_us"] || 
                          window.logisticAuctionData["Manheim"] || null;
        }
      }
      
      let initialOption = document.createElement("option");
      initialOption.value = "";
      initialOption.text = "-- Meydança Seçin --";
      els.tahminLocation.appendChild(initialOption);

      if (locationsData && Object.keys(locationsData).length > 0) {
        Object.keys(locationsData).forEach(locName => {
          let opt = document.createElement("option");
          opt.value = locationsData[locName]; 
          opt.text = locName;
          els.tahminLocation.appendChild(opt);
        });
      } else {
        let opt = document.createElement("option");
        if (selectedAuction === "canada") {
          opt.value = "3500"; 
          opt.text = "Kanada Ümumi Terminal (Orta Qiymət)";
        } else {
          opt.value = "700";  
          opt.text = "Standart Terminal (Orta Qiymət)";
        }
        els.tahminLocation.appendChild(opt);
      }

      // FIX 3: Select2-nin tam vizual yenilənməsi üçün namespace artırıldı
      if (window.jQuery) {
        $(els.tahminLocation).trigger('change.select2');
      }
    });
  }

  if (els.calcTahminBtn) {
    els.calcTahminBtn.addEventListener("click", async function() {
      const auction = els.tahminAuction ? els.tahminAuction.value : "";
      const baseShippingPrice = els.tahminLocation ? parseFloat(els.tahminLocation.value) : NaN;
      const bidPrice = els.bidPrice ? (parseFloat(els.bidPrice.value) || 0) : 0;
      const engineType = els.engineType ? els.engineType.value : "";
      const engineVolume = els.engineInput ? els.engineInput.value.trim() : ""; // FIX 4: .trim() artırıldı
      const manufactureYear = els.manufactureYear ? els.manufactureYear.value : "";
      const manufactureMonth = els.manufactureMonth ? els.manufactureMonth.value : "";
      const commerceType = els.commerceType ? els.commerceType.value : "";

      if (!auction || isNaN(baseShippingPrice)) { alert("Zəhmət olmasa hərrac və meydançanı seçin."); return; }
      if (bidPrice <= 0) { alert("Zəhmət olmasa təxmini uduş qiymətini daxil edin."); return; }
      if (engineVolume === "" && engineType !== "5") { alert("Zəhmət olmasa mühərrik həcmini daxil edin."); return; }

      if (els.errorBox) els.errorBox.style.display = "none";
      if (els.resultBox) els.resultBox.style.display = "none";
      if (els.loader) els.loader.style.display = "block";

      const auctionFeeUsd = calculateAuctionBuyerFee(auction, bidPrice); 
      const trueCarCostUsd = bidPrice + auctionFeeUsd; 
      const totalUsaShippingUsd = baseShippingPrice; 

      const gumrukSabitYolMasrafiUsd = 2000.00;
      const totalCustomsInputUsd = trueCarCostUsd + gumrukSabitYolMasrafiUsd;
      const formattedDate = `01.${manufactureMonth}.${manufactureYear}`;

      const requestData = {
        autoType: "0",
        engineType: engineType.toString(),
        engine: engineType === "5" ? 0 : (parseInt(engineVolume) || 0),
        commerceType: commerceType.toString(),
        issueDate: formattedDate,
        price: parseFloat(totalCustomsInputUsd)
      };

      try {
        const response = await fetch(TAHMIN_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "lang": "az",
            "requestSource": "1"
          },
          body: JSON.stringify(requestData)
        });

        if (!response.ok) throw new Error(`Gömrük API xətası: Status ${response.status}`);

        const resData = await response.json();
        if (els.loader) els.loader.style.display = "none";

        let customsCostAzn = 0;
        if (resData && resData.code === 200 && resData.data && resData.data.autoDuty) {
          customsCostAzn = parseFloat(resData.data.autoDuty.total.value) || 0;
        } else if (resData && resData.exception && resData.exception.errorMessage) {
          throw new Error(resData.exception.errorMessage);
        } else {
          throw new Error("Gömrük sistemi rüsumu hesablaya bilmədi. Məlumatları yoxlayın.");
        }

        const bidAzn = bidPrice * TAHMIN_AZN_RATE;
        const feeAzn = auctionFeeUsd * TAHMIN_AZN_RATE;
        const invoiceAzn = trueCarCostUsd * TAHMIN_AZN_RATE;
        const usaShipAzn = totalUsaShippingUsd * TAHMIN_AZN_RATE;
        const potiAzn = SABIT_POTI_TO_BAKU_USD * TAHMIN_AZN_RATE; 

        const finalTotalAzn = invoiceAzn + usaShipAzn + potiAzn + customsCostAzn + SABIT_TOPRAQ_BASDI_AZN;
        const finalTotalUsd = finalTotalAzn / TAHMIN_AZN_RATE;

        if (els.resBidUsd) els.resBidUsd.innerText = `$${formatMoney(bidPrice)}`;
        if (els.resBidAzn) els.resBidAzn.innerText = `${formatMoney(bidAzn)} AZN`;
        if (els.resFeeUsd) els.resFeeUsd.innerText = `$${formatMoney(auctionFeeUsd)}`;
        if (els.resFeeAzn) els.resFeeAzn.innerText = `${formatMoney(feeAzn)} AZN`;
        if (els.resInvoiceUsd) els.resInvoiceUsd.innerText = `$${formatMoney(trueCarCostUsd)}`;
        if (els.resInvoiceAzn) els.resInvoiceAzn.innerText = `${formatMoney(invoiceAzn)} AZN`;
        if (els.resUsaShipUsd) els.resUsaShipUsd.innerText = `$${formatMoney(totalUsaShippingUsd)}`;
        if (els.resUsaShipAzn) els.resUsaShipAzn.innerText = `${formatMoney(usaShipAzn)} AZN`;
        if (els.resPotiUsd) els.resPotiUsd.innerText = `$${formatMoney(SABIT_POTI_TO_BAKU_USD)}`;
        if (els.resPotiAzn) els.resPotiAzn.innerText = `${formatMoney(potiAzn)} AZN`;
        if (els.resCustomsAzn) els.resCustomsAzn.innerText = `${formatMoney(customsCostAzn)} AZN`;
        if (els.resTopraqBasdiAzn) els.resTopraqBasdiAzn.innerText = `${formatMoney(SABIT_TOPRAQ_BASDI_AZN)} AZN`;
        if (els.totalFinalAzn) els.totalFinalAzn.innerText = `${formatMoney(finalTotalAzn)} AZN`;
        if (els.totalFinalUsd) els.totalFinalUsd.innerText = `($${formatMoney(finalTotalUsd)})`;

        if (els.legalNotice) {
          els.legalNotice.innerText = `* Poti-Bakı daşınma xərci sabit $${formatMoney(SABIT_POTI_TO_BAKU_USD)} USD (${formatMoney(potiAzn)} AZN) və Torpaq basdı qiyməti sabit ${formatMoney(SABIT_TOPRAQ_BASDI_AZN)} AZN olaraq yekun hesablamaya daxil edilmişdir.`;
        }

        if (els.resultBox) {
          els.resultBox.style.display = "block";
          window.scrollTo({
            top: els.resultBox.getBoundingClientRect().top + window.pageYOffset - 40,
            behavior: "smooth"
          });
        }

      } catch (err) {
        if (els.loader) els.loader.style.display = "none";
        if (els.errorBox) {
          els.errorBox.innerText = `Xəta baş verdi: ${err.message}`;
          els.errorBox.style.display = "block";
        }
      }
    });
  }
});
