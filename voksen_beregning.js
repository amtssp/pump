/* =========================================
   VOKSEN – Beregningsmodul
   Indeholder KUN:
   1) baggrundsfarve
   2) Overskrift
   3) Info-tekst
   4) Beregning af basalRate, ISF og ICR
   ========================================= */

/* ---------- NYT: Baggrundsfarve ---------- */
document.body.style.backgroundColor = "#f4f6f8";


/* ---------- NYT: Overskrift ---------- */
const container = document.querySelector(".container");
if (container) {
    const h2 = document.createElement("h2");
    h2.textContent = "Insulinpumpe Opstarts Beregner - Til VOKSNE";
    container.insertBefore(h2, container.firstChild);
}


/* ---------- Info-tekst ---------- */
const infoNoteHTML = `
<div class="note">
<strong>Info om beregninger:</strong>
Pen-dosering reduceres med 20%, dernæst forudsættes en fordeling på <b>50/50</b> (basal/bolus).
Basalen fordeles over 24 timer (=basalrate).
For insulinfølsomhed benyttes <b>100-reglen</b>,
og for kulhydratratio benyttes <b>500-reglen</b>.
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

    // 50% basal, fordelt over 24 timer
    const basalRate = ((adjusted * 0.5) / 24).toFixed(2);

    // 100-reglen
    const isf = (100 / adjusted).toFixed(1);

    // 500-reglen
    const icr = (500 / adjusted).toFixed(0);

    return {
        basalRate,
        isf,
        icr
    };
}
