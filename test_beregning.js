/* =========================================
   VOKSEN – Beregningsmodul
   Indeholder KUN:
   1) Info-tekst
   2) Beregning af basalRate, ISF og ICR
   ========================================= */


/* ---------- NYT: Baggrundsfarve ---------- */
document.body.style.backgroundColor = "#78ecb6";


/* ---------- NYT: Overskrift ---------- */
const container = document.querySelector(".container");
if (container) {
    const h2 = document.createElement("h2");
    h2.textContent = "Insulinpumpe Opstarts Beregner";
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

    const adjusted = tdi * 0.8;

    const basalRate = ((adjusted * 0.5) / 24).toFixed(2);
    const isf = (100 / adjusted).toFixed(1);
    const icr = (500 / adjusted).toFixed(0);

    return {
        basalRate,
        isf,
        icr
    };
}
