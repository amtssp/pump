/*
=========================================================
PUMPEDEFINITIONER
---------------------------------------------------------
Hver pumpe defineres som:

pumpKey: {
    name: "Visningsnavn",
    fields: [
        { type:"...", id:"...", label:"...", ...ekstra }
    ]
}
- label er det der vises i UI
- label_o er det der vises når teksten kopiere

Field-typer:
- "display"  → Vis tekst (ingen input)
- "number"   → Numerisk input
- "select"   → Dropdown
- "checkbox" → Afkrydsningsfelt

Mulige ekstra properties:
- step
- min
- max
- options (til select)
const pumps = {
=========================================================
*/

window.pumps = {
  /* =====================================================
     MEDTRONIC 780G
  ===================================================== */
  medtronic780g: {
    name: "Medtronic 780G",

    fields: [

      {
        type: "select",
        id: "target",
        label: "Vælg glukosemål (mmol/l)",
        options: [5.5, 6.1, 6.7],
        label_o: "Glukosemål (mmol/l)",
      },

      {
        type: "number",
        id: "ait",
        label: "Vælg aktiv insulintid (2–5 timer)",
        min: 2,
        max: 5,
        step: 0.5,
        label_o: "Aktiv insulintid (timer)",
      },
        
      {
        type: "checkbox",
        id: "sport",
        label: "Midlertidig glukosemål (8.3 mmol/l i 24 timer)",
        label_o: "Midlertidig glukosemål aktiv (8.3 mmol/l)",
      },
        
      {
        type: "checkbox",
        id: "auto",
        label: "Autokorrektion aktiv"
      }

    ]
  },


  /* =====================================================
     TANDEM CONTROL-IQ
  ===================================================== */
  tandem: {
    name: "Tandem Control-IQ",

    fields: [

      {
        type: "display",
        id: "tddi",
        label: "Total daglig insulin (IE)"
      },

      {
        type: "number",
        id: "weight",
        label: "Angiv kropsvægt (kg)",
        step: 0.1,
        label_o: "Kropsvægt (kg)",
      }

    ]
  },


  /* =====================================================
     YPSOPUMP
  ===================================================== */
  ypso: {
  name: "YpsoPump",

  fields: [

    {
      type: "display",
      id: "tddi",
      label: "Total daglig insulin (IE)"
    },

    {
      type: "number",
      id: "weight",
      label: "Angiv kropsvægt (kg)",
      step: 0.1,
      label_o: "Kropsvægt (kg)"
    },

    {
      type: "number",
      id: "target",
      label: "Vælg glukosemål (4,4-11 mmol/l)",
      min: 4.4,
      max: 11,
      step: "any",
      label_o: "Glukosemål (mmol/l)"
    }

    /* Hvis du senere vil tilføje aktiv insulintid:
    ,
    {
      type: "number",
      id: "ait",
      label: "Vælg aktiv insulintid (2–5 timer)",
      min: 2,
      max: 5,
      step: 0.5
    }
    */

  ]
},


  /* =====================================================
     OMNIPOD 5
  ===================================================== */
  omnipod5: {
    name: "Omnipod 5",

    fields: [

      {
        type: "select",
        id: "target",
        label: "Vælg glukosemål (mmol/l)",
        options: [6.1, 6.7, 7.3, 7.8, 8.3],
        label_o: "Glukosemål (mmol/l)",
      },
 
        {
        type: "number",
        id: "korr_over",
        label: "Korriger over (mmol/l) (Ofte = Glukosemål)",
        step: 0.1,
        label_o: "Korriger over (mmol/l)",
      },
        

      {
        type: "number",
        id: "ait",
        label: "Vælg aktiv insulintid (2–8 timer)",
        min: 2,
        max: 8,
        step: 0.5,
        label_o: "Aktiv insulintid (timer)",
      },

      {
        type: "number",
        id: "minGlucose",
        label: "Minimum glukose for beregning (2,8-3,9 mmol/l) (ofte 2.8)",
        min: 2.8,
        max: 3.9,
        step: 0.1,
        label_o: "Minimum glukose for beregning (mmol/l)",
      },
        
      {
        type: "checkbox",
        id: "reverse",
        label: "Omvendt korrektion aktiv"
      }
            
    ]
  }

};
