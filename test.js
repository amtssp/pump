/* =========================================
   TEST – Beregningsmodul
   Indeholder KUN:
   1) Info-tekst
   2) Beregning af basalRate, ISF og ICR
   ========================================= */

// 1️⃣ Baggrundsfarve
document.body.style.backgroundColor = "#78ecb6";

// 2️⃣ Overskrift
const container = document.querySelector(".container");
if (container) {
    const h2 = document.createElement("h2");
    h2.textContent = "Insulinpumpe Opstarts Beregner";
    // Indsæt som første element i container
    container.insertBefore(h2, container.firstChild);
}

/* ---------- Info-tekst ---------- */
const infoNoteHTML = `
<div class="note">
<strong>TSET Info om TEST beregninger:</strong>
Pen-dosering reduceres med 20%, dernæst forudsættes en fordeling på <b>40/60</b> (basal/bolus).
Basalen fordeles over 24 timer (=basalrate).
For insulinfølsomhed benyttes <b>100-reglen</b>,
og for kulhydratratio benyttes <b>450-reglen</b>.
</div>
`;


/* ---------- Beregning ---------- */
function calculateBarnValues(tdiValue) {

    const tdi = parseFloat(tdiValue);

    if (!tdi || tdi <= 0) {
        return {
            basalRate: "",
            isf: "",
            icr: ""
        };
    }

    // 20% reduktion
    const adjusted = tdi * 0.8;

    // 40% basal, fordelt over 24 timer
    const basalRate = ((adjusted * 0.4) / 24).toFixed(2);

    // 100-reglen
    const isf = (100 / adjusted).toFixed(1);

    // 450-reglen
    const icr = (450 / adjusted).toFixed(0);

    return {
        basalRate,
        isf,
        icr
    };
}
