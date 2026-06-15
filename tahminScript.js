// ==========================================================================
// CARZON — AKILLI MALİYET TAHMİN MOTORU (TOPRAQ BASDI SİSTEMİ)
// ==========================================================================
const TAHMIN_API_URL = "https://wandering-bonus-bcd2.abuzerovniko.workers.dev";
const TAHMIN_AZN_RATE = 1.7000; // Sabit döviz kuru çarpanı

// 🔥 YENİ SABİT DEĞERLERİNİZ
const SABIT_POTI_TO_BAKU_USD = 300.00;    // Poti - Bakı arası daşınma sabit 300$
const SABIT_TOPRAQ_BASDI_AZN = 300.00;    // Topraq basdı qiyməti sabit 300 manat

/**
 * RƏSMİ VERGİ VƏ KOMİSSİYA MEKANİZMASI
 */
function calculateAuctionBuyerFee(auction, price) {
  let totalFee = 0;
  const esnekBeklemePayi = 55.00; // Otoparkta yatma/gecikme ihtimaline karşı ortalama +55$ pay

  if (auction === "copart") {
    // 1. Standart Alıcı Ücreti (Secure Payment Methods - Clean Title)
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
    else { buyerFee = price * 0.0725; } 

    // 2. Virtual/Live Bid Fee
    let bidFee = 0;
    if (price <= 99.99) bidFee = 0;
    else if (price <= 499.99) bidFee = 49.00;
    else if (price <= 999.99) bidFee = 59.00;
    else if (price <= 1499.99) bidFee = 79.00;
    else if (price <= 1999.99) bidFee = 89.00;
    else if (price <= 3999.99) bidFee = 99.00;
    else if (price <= 5999.99) bidFee = 109.00;
    else if (price <= 7999.99) bidFee = 139.00;
    else { bidFee = 149.00; } 

    const gateFee = 79.00;
    const envFee = 15.00;

    totalFee = buyerFee + bidFee + gateFee + envFee + esnekBeklemePayi;

  } else if (auction === "iaai") {
    // 1. Yüksek Hacimli Alıcı Ücreti (High Volume Fee)
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
    else { highVolumeFee = price * 0.06; } 

    // 2. Live Online Bid Fee
    let liveOnlineFee = 0;
    if (price <= 99.99) liveOnlineFee = 0;
    else if (price <= 499.99) liveOnlineFee = 50.00;
    else if (price <= 999.99) liveOnlineFee = 65.00;
    else if (price <= 1499.99) liveOnlineFee = 85.00;
    else if (price <= 1999.99) liveOnlineFee = 95.00;
    else if (price <= 3999.99) liveOnlineFee = 110.00;
    else if (price <= 5999.99) liveOnlineFee = 125.00;
    else if (price <= 7999.99) liveOnlineFee = 145.00;
    else { liveOnlineFee = 160.00; } 

    const serviceFee = 95.00;
    const envFee = 15.00;
    const titleFee = 20.00;

    totalFee = highVolumeFee + liveOnlineFee + serviceFee + envFee + titleFee + esnekBeklemePayi;

  } else {
    totalFee = (price * 0.10) + 150.00 + esnekBeklemePayi;
  }

  return totalFee;
}

document.addEventListener("DOMContentLoaded", function() {
  const tahminAuction = document.getElementById("tahminAuction");
  const tahminLocation = document.getElementById("tahminLocation");
  const calcTahminBtn = document.getElementById("calcTahminBtn");
  
  const loader = document.getElementById("tahminLoader");
  const errorBox = document.getElementById("tahminError");
  const resultBox = document.getElementById("tahminResult");

  if (tahminAuction && tahminLocation) {
    tahminAuction.addEventListener("change", function() {
      const selectedAuction = tahminAuction.value;
      tahminLocation.innerHTML = "";

      if (!selectedAuction) {
        tahminLocation.innerHTML = '<option value="">Əvvəlcə hərrac seçin...</option>';
        tahminLocation.disabled = true;
        return;
      }

      tahminLocation.disabled = false;
      const locationsData = window.logisticAuctionData ? window.logisticAuctionData[selectedAuction] : null;
      
      let initialOption = document.createElement("option");
      initialOption.value = "";
      initialOption.text = "-- Meydança Seçin --";
      tahminLocation.appendChild(initialOption);

      if (locationsData) {
        Object.keys(locationsData).forEach(locName => {
          let opt = document.createElement("option");
          opt.value = locationsData[locName];
          opt.text = locName;
          tahminLocation.appendChild(opt);
        });
      }
    });
  }

  if (calcTahminBtn) {
    calcTahminBtn.addEventListener("click", async function() {
      const auction = tahminAuction.value;
      const baseShippingPrice = parseFloat(tahminLocation.value);
      const bidPrice = parseFloat(document.getElementById("bidPrice").value) || 0;
      const engineType = document.getElementById("engineType").value;
      const engineVolume = document.getElementById("engine").value;
      const manufactureYear = document.getElementById("manufactureYear").value;
      const manufactureMonth = document.getElementById("manufactureMonth").value;
      const commerceType = document.getElementById("commerceType").value;

      if (!auction || isNaN(baseShippingPrice)) { alert("Zəhmət olmasa hərrac və meydançanı seçin."); return; }
      if (bidPrice <= 0) { alert("Zəhmət olmasa təxmini uduş qiymətini daxil edin."); return; }
      if (engineVolume === "" && engineType !== "5") { alert("Zəhmət olmasa mühərrik həcmini daxil edin."); return; }

      if (errorBox) errorBox.style.display = "none";
      if (resultBox) resultBox.style.display = "none";
      if (loader) loader.style.display = "block";

      const auctionFeeUsd = calculateAuctionBuyerFee(auction, bidPrice); 
      const trueCarCostUsd = bidPrice + auctionFeeUsd; 
      const totalUsaShippingUsd = baseShippingPrice; 

      const gumrukSabitYolMasrafiUsd = 2000.00;
      const totalCustomsInputUsd = trueCarCostUsd + gumrukSabitYolMasrafiUsd;

      const formattedDate = `01.${manufactureMonth}.${manufactureYear}`;

      const requestData = {
        autoType: "0",
        engineType: engineType.toString(),
        engine: parseInt(engineVolume) || 0,
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
            "requestSource": 1
          },
          body: JSON.stringify(requestData)
        });

        if (!response.ok) {
          throw new Error(`Gömrük API xətası: Status ${response.status}`);
        }

        const resData = await response.json();
        if (loader) loader.style.display = "none";

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

        // 🔥 YENİ YEKUN TOPLAM FORMÜLÜ (Sadece Topraq Basdı 300 AZN eklenir)
        const finalTotalAzn = invoiceAzn + usaShipAzn + potiAzn + customsCostAzn + SABIT_TOPRAQ_BASDI_AZN;
        const finalTotalUsd = finalTotalAzn / TAHMIN_AZN_RATE;

        document.getElementById("resBidUsd").innerText = `$${bidPrice.toFixed(2)}`;
        document.getElementById("resBidAzn").innerText = `${bidAzn.toFixed(2)} AZN`;

        document.getElementById("resFeeUsd").innerText = `$${auctionFeeUsd.toFixed(2)}`;
        document.getElementById("resFeeAzn").innerText = `${feeAzn.toFixed(2)} AZN`;

        document.getElementById("resInvoiceUsd").innerText = `$${trueCarCostUsd.toFixed(2)}`;
        document.getElementById("resInvoiceAzn").innerText = `${invoiceAzn.toFixed(2)} AZN`;

        document.getElementById("resUsaShippingUsd") ? document.getElementById("resUsaShippingUsd").innerText = `$${totalUsaShippingUsd.toFixed(2)}` : null;
        // HTML yapısına tam uyum için iki kontrolü de ekleyelim
        if(document.getElementById("resUsaShipUsd")) {
           document.getElementById("resUsaShipUsd").innerText = `$${totalUsaShippingUsd.toFixed(2)}`;
           document.getElementById("resUsaShipAzn").innerText = `${usaShipAzn.toFixed(2)} AZN`;
        }

        document.getElementById("resPotiUsd").innerText = `$${SABIT_POTI_TO_BAKU_USD.toFixed(2)}`;
        document.getElementById("resPotiAzn").innerText = `${potiAzn.toFixed(2)} AZN`;

        document.getElementById("resCustomsAzn").innerText = `${customsCostAzn.toFixed(2)} AZN`;
        
        // 🔥 HTML'e Topraq basdı fiyatını basma
        document.getElementById("resTopraqBasdiAzn").innerText = `${SABIT_TOPRAQ_BASDI_AZN.toFixed(2)} AZN`;

        document.getElementById("totalFinalAzn").innerText = `${finalTotalAzn.toFixed(2)} AZN`;
        document.getElementById("totalFinalUsd").innerText = `($${finalTotalUsd.toFixed(2)})`;

        document.getElementById("legalNotice").innerText = `* Poti-Bakı daşınma xərci sabit $${SABIT_POTI_TO_BAKU_USD.toFixed(2)} USD (${potiAzn.toFixed(2)} AZN) və Topraq basdı qiyməti sabit ${SABIT_TOPRAQ_BASDI_AZN.toFixed(2)} AZN olaraq yekun hesablamaya daxil edilmişdir.`;

        if (resultBox) {
          resultBox.style.display = "block";
          window.scrollTo({
            top: resultBox.getBoundingClientRect().top + window.pageYOffset - 40,
            behavior: "smooth"
          });
        }

      } catch (err) {
        if (loader) loader.style.display = "none";
        if (errorBox) {
          errorBox.innerText = `Xəta baş verdi: ${err.message}`;
          errorBox.style.display = "block";
        }
      }
    });
  }
});