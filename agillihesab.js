// ==========================================================================
// CARZON — AĞILLI XƏRC TƏXMİN MOTORU (TORPAQ BASDI SİSTEMİ İLƏ)
// Fayl Adı: agillihesab.js
// ==========================================================================

const TAHMIN_API_URL = "https://wandering-bonus-bcd2.abuzerovniko.workers.dev";
const TAHMIN_AZN_RATE = 1.7000;          // Sabit valyuta məzənnəsi (kurs)
const SABIT_POTI_TO_BAKU_USD = 294.00;    // Poti - Bakı arası daşınma (sabit)
const SABIT_TOPRAQ_BASDI_AZN = 300.00;    // Torpaq basdı qiyməti (sabit)

/**
 * Rəqəmləri minliklərə ayıran funksiya (Məs: 23224.20 -> 23 224.20)
 */
function formatMoney(num) {
  return parseFloat(num).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

/**
 * RƏSMİ VERGİ VƏ KOMİSSİYA MEXANİZMİ
 */
function calculateAuctionBuyerFee(auction, price) {
  let totalFee = 0;
  const esnekBeklemePayi = 75.00;

  if (auction === "copart") {
    let buyerFee = 0;
    if (price <= 49.99) buyerFee = 25.00;
    else if (price <= 99.99) buyerFee = 45.00;
    else if (price <= 199.99) buyerFee = 80.00;
    else if (price <= 299.99) buyerFee = 120.00;
    else if (price <= 399.99) buyerFee = 120.00;
    else if (price <= 499.99) buyerFee = 160.00;
    else if (price <= 549.99) buyerFee = 185.00;
    else if (price <= 599.99) buyerFee = 185.00;
    else if (price <= 699.99) buyerFee = 210.00;
    else if (price <= 799.99) buyerFee = 230.00;
    else if (price <= 899.99) buyerFee = 250.00;
    else if (price <= 999.99) buyerFee = 275.00;
    else if (price <= 1199.99) buyerFee = 325.00;
    else if (price <= 1299.99) buyerFee = 350.00;
    else if (price <= 1399.99) buyerFee = 365.00;
    else if (price <= 1499.99) buyerFee = 380.00;
    else if (price <= 1599.99) buyerFee = 390.00;
    else if (price <= 1699.99) buyerFee = 410.00;
    else if (price <= 1799.99) buyerFee = 420.00;
    else if (price <= 1999.99) buyerFee = 440.00;
    else if (price <= 2399.99) buyerFee = 470.00;
    else if (price <= 2499.99) buyerFee = 480.00;
    else if (price <= 2999.99) buyerFee = 500.00;
    else if (price <= 3499.99) buyerFee = 600.00;
    else if (price <= 3999.99) buyerFee = 675.00;
    else if (price <= 4499.99) buyerFee = 710.00;
    else if (price <= 5999.99) buyerFee = 750.00; 
    else if (price <= 7499.99) buyerFee = 800.00; 
    else if (price <= 7999.99) buyerFee = 815.00;
    else if (price <= 9999.99) buyerFee = 840.00; 
    else if (price <= 14999.99) buyerFee = 850.00; 
    else buyerFee = price * 0.0725;

    let bidFee = 0;
    if (price <= 99.99) bidFee = 0;
    else if (price <= 499.99) bidFee = 49.00;
    else if (price <= 999.99) bidFee = 59.00;
    else if (price <= 1499.99) bidFee = 79.00;
    else if (price <= 1999.99) bidFee = 89.00;
    else if (price <= 3999.99) bidFee = 99.00;
    else if (price <= 5999.99) bidFee = 109.00;
    else if (price <= 7999.99) bidFee = 139.00;
    else bidFee = 149.00;

    const gateFee = 79.00;
    const envFee = 15.00;

    totalFee = buyerFee + bidFee + gateFee + envFee + esnekBeklemePayi;

  } else if (auction === "iaai") {
    let highVolumeFee = 0;
    if (price <= 99.99) highVolumeFee = 1.00;
    else if (price <= 199.99) highVolumeFee = 25.00;
    else if (price <= 299.99) highVolumeFee = 60.00;
    else if (price <= 349.99) highVolumeFee = 85.00;
    else if (price <= 399.99) highVolumeFee = 100.00;
    else if (price <= 449.99) highVolumeFee = 125.00;
    else if (price <= 499.99) highVolumeFee = 135.00;
    else if (price <= 549.99) highVolumeFee = 145.00;
    else if (price <= 599.99) highVolumeFee = 155.00;
    else if (price <= 699.99) highVolumeFee = 170.00;
    else if (price <= 799.99) highVolumeFee = 195.00;
    else if (price <= 899.99) highVolumeFee = 215.00;
    else if (price <= 999.99) highVolumeFee = 230.00;
    else if (price <= 1199.99) highVolumeFee = 250.00;
    else if (price <= 1299.99) highVolumeFee = 270.00;
    else if (price <= 1399.99) highVolumeFee = 285.00;
    else if (price <= 1499.99) highVolumeFee = 300.00;
    else if (price <= 1599.99) highVolumeFee = 315.00;
    else if (price <= 1699.99) highVolumeFee = 330.00;
    else if (price <= 1799.99) highVolumeFee = 350.00;
    else if (price <= 1999.99) highVolumeFee = 370.00;
    else if (price <= 2399.99) highVolumeFee = 390.00;
    else if (price <= 2499.99) highVolumeFee = 425.00;
    else if (price <= 2999.99) highVolumeFee = 460.00;
    else if (price <= 3499.99) highVolumeFee = 505.00;
    else if (price <= 3999.99) highVolumeFee = 555.00;
    else if (price <= 4499.99) highVolumeFee = 600.00;
    else if (price <= 4999.99) highVolumeFee = 625.00;
    else if (price <= 5499.99) highVolumeFee = 650.00;
    else if (price <= 5999.99) highVolumeFee = 675.00;
    else if (price <= 6499.99) highVolumeFee = 700.00;
    else if (price <= 6999.99) highVolumeFee = 720.00;
    else if (price <= 7499.99) highVolumeFee = 755.00;
    else if (price <= 7999.99) highVolumeFee = 775.00;
    else if (price <= 8499.99) highVolumeFee = 800.00;
    else if (price <= 9999.99) highVolumeFee = 820.00;
    else if (price <= 11499.99) highVolumeFee = 850.00;
    else if (price <= 11999.99) highVolumeFee = 860.00;
    else if (price <= 12499.99) highVolumeFee = 875.00;
    else if (price <= 14999.99) highVolumeFee = 890.00;
    else highVolumeFee = price * 0.06;

    let liveOnlineFee = 0;
    if (price <= 99.99) liveOnlineFee = 0;
    else if (price <= 499.99) liveOnlineFee = 50.00;
    else if (price <= 99.99) liveOnlineFee = 65.00; 
    else if (price <= 1499.99) liveOnlineFee = 85.00;
    else if (price <= 1999.99) liveOnlineFee = 95.00;
    else if (price <= 3999.99) liveOnlineFee = 110.00;
    else if (price <= 5999.99) liveOnlineFee = 125.00;
    else if (price <= 7999.99) liveOnlineFee = 145.00;
    else liveOnlineFee = 160.00;

    const serviceFee = 95.00;
    const envFee = 15.00;
    const titleFee = 20.00;

    totalFee = highVolumeFee + liveOnlineFee + serviceFee + envFee + titleFee + esnekBeklemePayi;

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