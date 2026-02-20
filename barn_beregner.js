/* =========================================
   BARN – Beregning + Info-tekst modul
   ========================================= */


/* ---------- Info-tekst ---------- */
function getInfoTextBarn(){
    return `
    <div class="note">
        <strong>Info om beregninger:</strong>
        Pen-dosering reduceres med 20%, dernæst forudsættes en fordeling på <b>40/60</b> (basal/bolus).
        Basalen fordeles over 24 timer (=basalrate).
        For Insulinfølsomhed benyttes <b>100-reglen</b>, og for Insulin kulhydrat ratio benyttes <b>450-reglen</b>.
    </div>
    `;
}


/* ---------- Beregningsfunktion ---------- */
function calculateBarnSettings(adjusted){

    // adjusted = TDI reduceret med 20%

    const basalRate = ((adjusted * 0.4) / 24).toFixed(2);
    const isf       = (100 / adjusted).toFixed(1);
    const icr       = (450 / adjusted).toFixed(0);

    return {
        basalRate,
        isf,
        icr
    };
}
