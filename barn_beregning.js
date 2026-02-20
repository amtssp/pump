/* =========================================
   BARN – Beregningsmodul
   Indeholder KUN:
   1) Info-tekst
   2) Beregning af basalRate, ISF og ICR
   ========================================= */


/* ---------- Info-tekst ---------- */
const infoNoteHTML = `
<div class="note">
<strong>Info om beregninger:</strong>
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
