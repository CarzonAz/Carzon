function calcShipping() {

    const state = document.getElementById("state").value;
    const auction = document.getElementById("auction").value;

    const result = document.getElementById("shippingResult");

    if (!state) {
        result.innerHTML = "";
        return;
    }

    let price = 0;

    if (auction === "copart") {
        price = 1200;
    } else {
        price = 1350;
    }

    result.innerHTML = `
        <div style="margin-top:20px;padding:20px;background:#081120;border-radius:12px;">
            <h3 style="margin-bottom:10px;">Daşınma Məlumatı</h3>

            <p>Ştat: <b>${state}</b></p>

            <p>Auksion: <b>${auction.toUpperCase()}</b></p>

            <p style="margin-top:10px;font-size:20px;color:#60a5fa;">
                Təxmini Daşınma: <b>$${price}</b>
            </p>
        </div>
    `;
}

async function calcDuty() {

    const engine = document.getElementById("engine").value;
    const invoice = document.getElementById("priceInvoice").value;

    const result = document.getElementById("dutyResult");

    if (!engine || !invoice) {

        result.innerHTML = `
            <div style="margin-top:20px;color:#f87171;">
                Məlumatları tam doldurun.
            </div>
        `;

        return;
    }

    const duty =
        (Number(invoice) * 0.18) +
        (Number(engine) * 0.25);

    result.innerHTML = `
        <div style="margin-top:20px;padding:20px;background:#081120;border-radius:12px;">

            <h3 style="margin-bottom:10px;">
                Təxmini Gömrük Hesabı
            </h3>

            <p>Mühərrik: ${engine} sm³</p>

            <p>İnvoys: $${invoice}</p>

            <p style="
                margin-top:15px;
                font-size:22px;
                color:#60a5fa;
                font-weight:bold;
            ">
                ${duty.toFixed(2)} AZN
            </p>

        </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {

    const states = [
        "AL","AK","AZ","AR","CA","CO","CT","DE",
        "FL","GA","HI","ID","IL","IN","IA","KS",
        "KY","LA","ME","MD","MA","MI","MN","MS",
        "MO","MT","NE","NV","NH","NJ","NM","NY",
        "NC","ND","OH","OK","OR","PA","RI","SC",
        "SD","TN","TX","UT","VT","VA","WA","WV",
        "WI","WY"
    ];

    const select = document.getElementById("state");

    states.forEach(state => {

        const option = document.createElement("option");

        option.value = state;
        option.textContent = state;

        select.appendChild(option);

    });

});
