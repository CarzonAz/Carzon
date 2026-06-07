// ==========================================================================
// 1. QLOBAL KONSTANTLAR VƏ API URL-LƏRİ
// ==========================================================================
const CUSTOMS_API_URL = "https://wandering-bonus-bcd2.abuzerovniko.workers.dev";

// HƏRRAC MEYDANÇALARI (Həm daxili, həm xarici scriptlərin oxuması üçün qlobal təyin edildi)
window.AUCTION_LOCATIONS = {
  "copart": [
    "NJ - Somerville", "FL - Miami Central", "GA - Savannah", "IN - Indianapolis", "NJ - Glassboro East",
    "NJ - Trenton", "VA - Richmond East", "FL - Jacksonville North", "PA - Philadelphia", "NC - Gastonia",
    "SC - North Charleston", "SC - Columbia", "GA - Tifton", "FL - Orlando South", "GA - Fairburn",
    "GA - Macon", "GA - Augusta", "NJ - Glassboro West", "PA - Philadelphia East", "NY - Newburgh",
    "NC - Mocksville", "SC - Spartanburg", "NC - China Grove", "NC - Concord", "NC - Mebane",
    "AL - Mobile South", "FL - Tampa South", "NY - Albany", "GA - Atlanta East", "GA - Atlanta North",
    "GA - Atlanta South", "GA - Atlanta West", "FL - Orlando North", "NC - Lumberton", "NC - Raleigh",
    "ND - Bismarck", "GA - Cartersville", "CT - Hartford", "NY - Long Island", "TX - Houston",
    "PA - Harrisburg", "PA - York Haven", "AL - Dothan", "FL - Tampa North", "DC - Washington DC",
    "DE - Seaford", "RI - Exeter", "MD - Baltimore", "MA - South Boston", "AL - Birmingham",
    "AL - Mobile", "AL - Montgomery", "MA - North Boston", "PA - Chambersburg", "FL - Ft. Pierce",
    "FL - Ocala", "FL - Punta Gorda", "FL - Tallahassee", "FL - West Palm Beach", "WI - Milwaukee North",
    "IL - Chicago North", "IL - Chicago South", "WI - Appleton", "NH - Candia", "PA - Scranton",
    "VA - Fredericksburg", "TN - Knoxville", "TN - Memphis", "WI - Madison South", "FL - Miami North",
    "FL - Miami South", "NY - Syracuse", "OH - Akron", "MN - Minneapolis North", "MN - St. Cloud",
    "IA - Davenport", "WI - Milwaukee South", "AL - Tanner", "TN - Nashville", "TX - Lufkin",
    "TX - Waco", "TX - Corpus Christi", "TX - Austin", "TX - Crashedtoys Dallas", "TX - Dallas",
    "TX - Ft. Worth", "TX - San Antonio", "TX - Longview", "VA - Danville", "NY - Rochester",
    "MS - Grenada", "MS - Jackson", "IA - Des Moines", "ME - Lyman", "OH - Dayton",
    "VA - Hampton", "VA - Richmond", "ME - Windham", "PA - Altoona", "PA - Pittsburgh West",
    "LA - Baton Rouge", "LA - Shreveport", "TX - McAllen", "FL - Clewiston", "IL - Peoria",
    "NE - Lincoln", "KY - Earlington", "IN - Cicero", "IN - Dyer", "IN - Fort Wayne",
    "TX - Abilene", "TX - Amarillo", "MN - Minneapolis", "NY - Buffalo", "OH - Cleveland West",
    "OH - Columbus", "LA - New Orleans", "KY - Lexington East", "KY - Louisville", "KY - Walton",
    "MO - Columbia", "OK - Oklahoma City", "OK - Tulsa", "TX - El Paso", "TX - Andrews",
    "MO - Springfield", "MO - St. Louis", "VT - Rutland", "AL - Cusseta", "AR - Little Rock",
    "WV - Charleston", "NC - Lagrange", "MI - Detroit", "KS - Wichita", "LA - Vinton",
    "MI - Flint", "MI - Lansing", "NM - Albuquerque", "KS - Kansas City", "CO - Denver",
    "IA - Cedar Rapids", "CA - Los Angeles", "SD - Rapid City", "CA - Sun Valley", "CA - Rancho Cucamonga",
    "CA - Long Beach", "CA - Van Nuys", "CA - San Bernardino", "CA - Bakersfield", "CA - Hayward",
    "CA - San Diego", "WY - Casper", "NV - Las Vegas West", "NV - Reno", "AZ - Phoenix",
    "CA - Fresno", "CA - So Sacramento", "UT - Salt Lake City", "CA - Martinez", "CA - Sacramento",
    "CA - San Jose", "AZ - Tucson", "WA - Graham", "WA - Pasco", "OR - Eugene", "OR - Portland North",
    "WA - Spokane", "ID - Boise", "WA - North Seattle", "WA - Spanaway", "MT - Billings", "AK - Anchorage",
    "HI - Honolulu"
  ],
  "iaai": [
    "GA - Savannah", "NJ - Central New Jersey", "NC - Gastonia", "NY - Albany", "NJ - Englishtown",
    "SC - Charleston", "FL - Fort Pierce", "AL - Birmingham", "PA - Philadelphia", "SC - Greenville",
    "KY - Earlington", "RI - Providence", "TX - Houston", "MI - Detroit", "CT - Hartford",
    "VA - Fredericksburg", "TX - San Antonio-South", "LA - Shreveport", "FL - West Palm Beach", "NJ - Avenel New Jersey",
    "NJ - Sayreville", "SC - Lexington", "GA - Macon", "NC - Asheville", "TX - Corpus Christi",
    "NC - Raleigh", "PA - Bridgeport", "NJ - Port Murray", "GA - Atlanta", "NC - Greensboro",
    "NY - Staten Island", "NC - Concord", "NY - Newburgh", "NC - Charlotte", "NC - Wilmington",
    "CT - Hartford-South", "KS - Kansas City", "NY - Long Island", "PA - York Springs", "AL - Dothan",
    "FL - Fort Myers", "NY - Monticello", "TX - Houston South", "DE - New Castle", "MD - Dundalk",
    "MD - Elkton", "LA - Baton Rouge", "MS - Gulf Coast", "PA - Scranton", "AL - Huntsville",
    "MS - Jackson", "FL - Jacksonville", "TN - Knoxville", "MA - Taunton", "TN - Chattanooga",
    "MD - Baltimore", "IL - Lincoln", "IN - Indianapolis", "NH - Manchester", "CA - North Hollywood",
    "VA - Northern Virginia", "OK - Oklahoma City", "LA - Lafayette", "FL - Miami-North", "PA - Altoona",
    "LA - New Orleans", "WI - Appleton", "IA - Des Moines", "MN - Minneapolis/St. Paul", "MS - Grenada",
    "VA - Richmond", "IL - Chicago-North", "IL - Chicago-South", "IA - Davenport", "VA - Culpeper",
    "VA - Suffolk", "MI - Grand Rapids", "TX - Austin", "TX - Dallas", "WI - Milwaukee", "VA - Pulaski",
    "VA - Roanoke", "NY - Rochester", "NY - Syracuse", "TN - Memphis", "TN - Nashville", "AR - Little Rock",
    "PA - Pittsburgh", "FL - Tampa", "IN - Fort Wayne", "CA - Los Angeles South", "NY - Buffalo",
    "TX - Abilene", "PA - Erie", "MO - Kansas City East", "TX - McAllen", "KY - Bowling Green",
    "OH - Akron-Canton", "OH - Cincinnati", "OH - Cleveland", "OH - Columbus", "FL - Pensacola",
    "OK - Tulsa", "VT - Burlington", "WV - Buckhannon", "OH - Dayton", "FL - Clearwater",
    "FL - Orlando", "AR - Fayetteville", "TX - Permian Basin", "TX - El Paso", "TX - Amarillo",
    "KS - Wichita", "IL - St. Louis", "MI - Flint", "NM - Albuquerque", "CO - Denver East",
    "NE - Omaha", "CA - Los Angeles", "CA - Riverside", "CA - Anaheim", "CA - Fontana",
    "CA - San Jose", "CA - San Diego", "SD - Sioux Falls", "NV - Las Vegas", "CA - Fresno",
    "AZ - Phoenix", "AZ - Tucson", "CA - Fremont", "ND - Fargo", "CA - Sacramento", "UT - Salt Lake City",
    "NV - Reno", "CA - Stockton", "WY - Casper", "WA - Seattle", "OR - Eugene", "Portland",
    "WA - Spokane", "ID - Boise", "MT - Billings", "AK - Anchorage", "HI - Honolulu"
  ],
  "manheim": [
    "NJ - New Jersey", "SC - Lugoff Mobile Auction", "MA - New England", "GA - Georgia", "NC - North Carolina",
    "SC - Darlington", "GA - Atlanta", "IL - Chicago", "IN - Indianapolis", "IA - Iowa", "NC - Statesville",
    "FL - Tampa", "NC - Charlotte", "FL - Jacksonville", "PA - Philadelphia", "NJ - NY Metro Skyline",
    "PA - Pennsylvania", "FL - Orlando", "MS - Mississippi", "TN - Nashville", "TX - Houston",
    "FL - Lakeland", "FL - Pensacola", "LA - Lafayette", "LA - New Orleans", "FL - Fort Myers",
    "MD - Baltimore-Washington", "FL - Fort Lauderdale", "NY - Albany", "TX - Dallas", "VA - Fredericksburg",
    "MO - Kansas City", "TX - San Antonio", "VA - Richmond", "CO - Denver", "NM - New Mexico",
    "CA - Riverside", "NV - Nevada", "CA - California", "CA - Los Angeles", "UT - Utah",
    "CA - Fresno", "AZ - Phoenix", "WA - Seattle", "OR - Portland", "CA - Tracy"
  ],
  "canada": [
    "AB - Calgary", "AB - Edmonton", "NB - Moncton", "NS - Halifax", "ON - Cookstown",
    "ON - London", "ON - Ottawa", "ON - Toronto", "QC - Montreal"
  ]
};

// Ştatlar və Regionlar üzrə Tarif Matrisi
const REGION_TARIFFS = {
  "NJ": { land: 180, ocean: 650, ins: 35 }, "NY": { land: 190, ocean: 650, ins: 35 },
  "FL": { land: 220, ocean: 750, ins: 40 }, "GA": { land: 240, ocean: 750, ins: 40 },
  "TX": { land: 280, ocean: 850, ins: 45 }, "CA": { land: 350, ocean: 950, ins: 50 },
  "IN": { land: 300, ocean: 800, ins: 50 }, "PA": { land: 200, ocean: 680, ins: 35 },
  "NC": { land: 210, ocean: 700, ins: 40 }, "SC": { land: 220, ocean: 720, ins: 40 },
  "AL": { land: 250, ocean: 760, ins: 40 }, "VA": { land: 200, ocean: 670, ins: 35 },
  "CT": { land: 195, ocean: 660, ins: 35 }, "RI": { land: 190, ocean: 650, ins: 35 },
  "MD": { land: 185, ocean: 660, ins: 35 }, "MA": { land: 195, ocean: 650, ins: 35 },
  "DC": { land: 190, ocean: 660, ins: 35 }, "DE": { land: 185, ocean: 650, ins: 35 },
  "WI": { land: 310, ocean: 820, ins: 50 }, "IL": { land: 300, ocean: 800, ins: 50 },
  "NH": { land: 200, ocean: 670, ins: 35 }, "TN": { land: 260, ocean: 780, ins: 45 },
  "OH": { land: 280, ocean: 790, ins: 45 }, "MN": { land: 320, ocean: 850, ins: 50 },
  "IA": { land: 310, ocean: 830, ins: 50 }, "MS": { land: 260, ocean: 790, ins: 45 },
  "ME": { land: 210, ocean: 680, ins: 35 }, "LA": { land: 270, ocean: 820, ins: 45 },
  "NE": { land: 330, ocean: 860, ins: 50 }, "KY": { land: 270, ocean: 790, ins: 45 },
  "MO": { land: 290, ocean: 810, ins: 45 }, "OK": { land: 290, ocean: 840, ins: 45 },
  "VT": { land: 200, ocean: 670, ins: 35 }, "AR": { land: 280, ocean: 800, ins: 45 },
  "WV": { land: 240, ocean: 740, ins: 40 }, "MI": { land: 290, ocean: 780, ins: 45 },
  "KS": { land: 310, ocean: 840, ins: 50 }, "NM": { land: 340, ocean: 920, ins: 50 },
  "CO": { land: 350, ocean: 940, ins: 50 }, "SD": { land: 340, ocean: 890, ins: 50 },
  "WY": { land: 360, ocean: 960, ins: 50 }, "NV": { land: 360, ocean: 960, ins: 50 },
  "AZ": { land: 350, ocean: 950, ins: 50 }, "UT": { land: 360, ocean: 960, ins: 50 },
  "WA": { land: 380, ocean: 1050, ins: 55 }, "OR": { land: 380, ocean: 1050, ins: 55 },
  "ID": { land: 370, ocean: 1000, ins: 55 }, "MT": { land: 380, ocean: 1020, ins: 55 },
  "AK": { land: 500, ocean: 1500, ins: 70 }, "HI": { land: 450, ocean: 1600, ins: 70 },
  "ON": { land: 450, ocean: 1100, ins: 60 }, "QC": { land: 480, ocean: 1150, ins: 60 },
  "AB": { land: 550, ocean: 1300, ins: 65 }, "NB": { land: 490, ocean: 1200, ins: 60 },
  "NS": { land: 490, ocean: 1200, ins: 60 }
};

// ==========================================================================
// 2. DOMContentLoaded - ALQORİTMLƏRİN İŞƏ DÜŞMƏSİ
// ==========================================================================
document.addEventListener("DOMContentLoaded", function() {
  
  // HTML Faylındakı real ID-ləri (auctionSelect və locationSelect) tam sinxronlaşdırırıq
  const auctionSelect = document.getElementById("auctionSelect");
  const locationSelect = document.getElementById("locationSelect");

  if (auctionSelect && locationSelect) {
    // Düyməyə klik hadisəsinin bağlanması
    const calcShippingBtn = document.getElementById("calcShippingBtn");
    if (calcShippingBtn) {
      calcShippingBtn.addEventListener("click", calcShippingCost);
    }
  }

  // GÖMRÜK KALKULYATORU DÜYMƏSİ (gomruk.html səhifəsi üçün)
  const calcCustomsBtn = document.getElementById("calcCustomsBtn");
  if (calcCustomsBtn) {
    calcCustomsBtn.addEventListener("click", calcCustomsDuty);
  }
  
  // NAVİQASİYA MASTER FUNKSİYASI
  initNavigation();
});

// ==========================================================================
// 3. DAŞINMA (LOGİSTİKA) HESABLAMA SİSTEMİ
// ==========================================================================
function calcShippingCost() {
  const auctionSelect = document.getElementById("auctionSelect");
  const locationSelect = document.getElementById("locationSelect");
  
  const resultBox = document.getElementById("shippingResult");
  const loader = document.getElementById("loader");
  const shipCostSpan = document.getElementById("shipCost");

  if (!auctionSelect || !locationSelect || !auctionSelect.value || !locationSelect.value) {
    alert("Zəhmət olmasa, əvvəlcə Hərrac və Meydança seçin!");
    return;
  }

  if (resultBox) resultBox.classList.remove("show");
  if (loader) loader.style.display = "block";

  setTimeout(() => {
    if (loader) loader.style.display = "none";

    const location = locationSelect.value;
    let stateCode = "NJ"; // Default ştat cəhəti
    
    const parts = location.split("-");
    if (parts.length > 0) {
      stateCode = parts[0].trim();
    }
    
    if (location === "Portland") stateCode = "OR";

    // Qiymət Matrixinin tətbiqi
    const tariff = REGION_TARIFFS[stateCode] || REGION_TARIFFS["NJ"];
    const landCost = tariff.land;
    const oceanCost = tariff.ocean;
    const insCost = tariff.ins;
    const totalShipping = landCost + oceanCost + insCost;

    // Qiymət məlumatlarını html daxilinə ötürürük
    const landEl = document.getElementById("resLandCost"); if (landEl) landEl.textContent = `$${landCost}.00`;
    const oceanEl = document.getElementById("resOceanCost"); if (oceanEl) oceanEl.textContent = `$${oceanCost}.00`;
    const insEl = document.getElementById("resInsuranceCost"); if (insEl) insEl.textContent = `$${insCost}.00`;

    // Yekun Poti qiyməti yazılır
    if (shipCostSpan) shipCostSpan.innerText = `$${totalShipping}.00`;
    
    // Animasiyalı paneli açırıq
    if (resultBox) {
      resultBox.classList.add("show");
    }
  }, 500);
}

// ==========================================================================
// 4. GÖMRÜK HESABLAMA SİSTEMİ (RƏSMİ DGK API INTEGRATION)
// ==========================================================================
async function calcCustomsDuty() {
  const engineCapacity = parseInt(document.getElementById("engine")?.value) || 0;
  const carCost = parseFloat(document.getElementById("carCost")?.value) || 0;
  const shippingCost = parseFloat(document.getElementById("shippingCost")?.value) || 0;

  if (engineCapacity <= 0 || carCost <= 0 || shippingCost <= 0) {
    alert("Zəhmət olmasa mühərrik həcmini, maşın dəyərini və nəqliyyat xərcini tam daxil edin.");
    return;
  }

  const payload = {
    autoType: "0",
    engineType: document.getElementById("engineType").value,
    commerceType: document.getElementById("commerceType").value,
    engine: engineCapacity,
    issueDate: `01.${document.getElementById("manufactureMonth").value.toString().padStart(2, '0')}.${document.getElementById("manufactureYear").value}`,
    price: carCost + shippingCost + (parseFloat(document.getElementById("otherCost")?.value) || 0)
  };

  const resultEl = document.getElementById("customsResult"); if (resultEl) resultEl.classList.remove("show");
  const mainLoader = document.getElementById("loader"); if (mainLoader) mainLoader.style.display = "block";

  try {
    const resp = await fetch(CUSTOMS_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "lang": "az", "requestSource": "1" },
      body: JSON.stringify(payload)
    });

    if (mainLoader) mainLoader.style.display = "none";
    const json = await resp.json();

    if (json.code === 200 && json.data) {
      const container = document.getElementById("dutyRowsContainer");
      if (container) {
        container.innerHTML = "";
        (json.data.autoDuty?.duties || []).forEach(d => {
          if(!d.name || d.value === undefined) return;
          const row = document.createElement("div");
          row.className = "result-row";
          row.innerHTML = `<span>${d.name}</span><span style="color: #fff; font-weight: 600;">${Number(d.value).toLocaleString("az-AZ", { minimumFractionDigits: 2 })} AZN</span>`;
          container.appendChild(row);
        });
      }
      
      const totalEl = document.getElementById("totalCustomsCost");
      if (totalEl) totalEl.textContent = Number(json.data.autoDuty?.total?.value || 0).toLocaleString("az-AZ", { minimumFractionDigits: 2 }) + " AZN";
      
      if (resultEl) {
        resultEl.classList.add("show");
        setTimeout(() => { resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, 60);
      }
    } else {
      alert(json.exception?.errorMessage || "Gömrük sistemi sorğunu qəbul etmədi.");
    }
  } catch (err) {
    if (mainLoader) mainLoader.style.display = "none";
    alert("Gömrük serverinə qoşulmaq mümkün olmadı.");
    console.error(err);
  }
}

// ==========================================================================
// 5. NAVİQASİYA VƏ SLIDER CAPSULE ANIMASIYASI
// ==========================================================================
function initNavigation() {
  const navLinksContainer = document.querySelector(".nav-links");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

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

  window.addEventListener("resize", updateSlidePosition);

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function() {
      hamburger.classList.toggle("open");
      navLinks.classList.toggle("open");
      if (navLinks.classList.contains("open")) setTimeout(updateSlidePosition, 50);
    });
  }

  const customsBtn = document.getElementById('navCustomsBtn');
  if(customsBtn) {
    customsBtn.addEventListener('click', function(e) {
      if(window.location.pathname.includes("gomruk.html")) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }
}
