// ─────────────────────────────────────────────
//  QİYMƏTLƏR — özünüz doldurun (USD ilə)
//  Format:  "ŞTAT_KODU": { copart: 0, iaai: 0 }
// ─────────────────────────────────────────────
const DOMESTIC = {
  AL: { copart: 0, iaai: 0 },
  AK: { copart: 0, iaai: 0 },
  AZ: { copart: 0, iaai: 0 },
  AR: { copart: 0, iaai: 0 },
  CA: { copart: 0, iaai: 0 },
  CO: { copart: 0, iaai: 0 },
  CT: { copart: 0, iaai: 0 },
  DE: { copart: 0, iaai: 0 },
  FL: { copart: 0, iaai: 0 },
  GA: { copart: 0, iaai: 0 },
  HI: { copart: 0, iaai: 0 },
  ID: { copart: 0, iaai: 0 },
  IL: { copart: 0, iaai: 0 },
  IN: { copart: 0, iaai: 0 },
  IA: { copart: 0, iaai: 0 },
  KS: { copart: 0, iaai: 0 },
  KY: { copart: 0, iaai: 0 },
  LA: { copart: 0, iaai: 0 },
  ME: { copart: 0, iaai: 0 },
  MD: { copart: 0, iaai: 0 },
  MA: { copart: 0, iaai: 0 },
  MI: { copart: 0, iaai: 0 },
  MN: { copart: 0, iaai: 0 },
  MS: { copart: 0, iaai: 0 },
  MO: { copart: 0, iaai: 0 },
  MT: { copart: 0, iaai: 0 },
  NE: { copart: 0, iaai: 0 },
  NV: { copart: 0, iaai: 0 },
  NH: { copart: 0, iaai: 0 },
  NJ: { copart: 0, iaai: 0 },
  NM: { copart: 0, iaai: 0 },
  NY: { copart: 0, iaai: 0 },
  NC: { copart: 0, iaai: 0 },
  ND: { copart: 0, iaai: 0 },
  OH: { copart: 0, iaai: 0 },
  OK: { copart: 0, iaai: 0 },
  OR: { copart: 0, iaai: 0 },
  PA: { copart: 0, iaai: 0 },
  RI: { copart: 0, iaai: 0 },
  SC: { copart: 0, iaai: 0 },
  SD: { copart: 0, iaai: 0 },
  TN: { copart: 0, iaai: 0 },
  TX: { copart: 0, iaai: 0 },
  UT: { copart: 0, iaai: 0 },
  VT: { copart: 0, iaai: 0 },
  VA: { copart: 0, iaai: 0 },
  WA: { copart: 0, iaai: 0 },
  WV: { copart: 0, iaai: 0 },
  WI: { copart: 0, iaai: 0 },
  WY: { copart: 0, iaai: 0 },
  DC: { copart: 0, iaai: 0 },
};

// Dəniz yolu xərci — sabit (hər iki auksion üçün eyni və ya fərqli)
const OCEAN_FREIGHT = {
  copart: 0,
  iaai:   0,
};

// ─────────────────────────────────────────────

function calcShipping() {
  const state   = document.getElementById("state").value;
  const auction = document.getElementById("auction").value;

  if (!state) {
    document.getElementById("shippingResult").style.display = "none";
    return;
  }

  const domestic = (DOMESTIC[state] || {})[auction] || 0;
  const ocean    = OCEAN_FREIGHT[auction] || 0;
  const total    = domestic + ocean;

  document.getElementById("domestic").textContent      = domestic ? "$" + domestic.toLocaleString() : "—";
  document.getElementById("ocean").textContent         = ocean    ? "$" + ocean.toLocaleString()    : "—";
  document.getElementById("totalShipping").textContent = total    ? "$" + total.toLocaleString()    : "—";

  document.getElementById("shippingResult").style.display = "block";
}
