/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/dextrosa-hipertonica.js
   Fuentes: CIMA AEMPS, DailyMed/FDA, ADA Standards of Care,
   ILCOR/AHA Guidelines, Cuadro Básico IMSS/Sector Salud México
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'dextrosa-hipertonica',
  nombre:         'Dextrosa Hipertónica (Glucosa 50%)',
  nombreComercial: 'Glucosmon® · Dextrosa 50%',
  nombreGenerico: 'Dextrosa (Glucosa) al 50%',
  categoria:      'electrolitos',
  tags:           ['hipoglucemia', 'emergencia', 'alto riesgo', 'hiperpotasemia', 'cuadro básico', 'urgencias', 'concentrado'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Solución hipertónica (osmolaridad ~2525 mOsm/L) — irritante venoso severo, riesgo de necrosis tisular si hay extravasación. Administración IV rápida sin diluir solo en emergencia por hipoglucemia grave con acceso venoso confirmado. En neonatos y lactantes usar concentraciones diluidas (D10%) — la D50% está contraindicada en administración directa neonatal por riesgo de hemorragia intraventricular y necrosis hepática.',

  nivel1: {

    puntosClave: [
      '<b>Tratamiento de elección de la hipoglucemia grave sintomática</b> (glucemia &lt; 54 mg/dL con alteración de consciencia o sin vía oral segura).',
      'Dosis estándar adulto: <b>25-50 mL de D50% IV en bolo</b> (12.5-25 g de dextrosa), a través de un acceso venoso de buen calibre, preferentemente central o vena grande.',
      '<b>Irritante venoso severo</b> — flebitis química y necrosis tisular grave si hay extravasación; verificar reflujo antes y durante la administración.',
      'Forma parte del protocolo de <b>hiperpotasemia</b> junto con insulina regular (10 UI + D50% 50 mL) para redistribuir el potasio intracelularmente.',
      'En <b>neonatos y lactantes NUNCA usar D50% directa</b> — diluir siempre a D10-12.5% por riesgo de hemorragia intraventricular, hiperosmolaridad y necrosis hepática.',
    ],

    resumenRapido: 'Solución de glucosa hipertónica al 50% (500 mg/mL) utilizada como tratamiento de rescate en la hipoglucemia grave, como componente del protocolo de manejo de hiperpotasemia (junto con insulina), y como fuente calórica concentrada en nutrición parenteral. Su alta osmolaridad la convierte en un fármaco de alto riesgo para el tejido venoso periférico, por lo que se recomienda administrarla lentamente por un acceso de buen calibre y, siempre que sea posible, diluida antes de su infusión, salvo en la emergencia de hipoglucemia grave donde el bolo concentrado es prioritario.',

    objetivoTerapeutico: 'Corrección rápida de la hipoglucemia grave sintomática · Componente del tratamiento de hiperpotasemia grave · Aporte calórico en nutrición parenteral · Prevención/tratamiento de la hipoglucemia neonatal (diluida)',

    preparacion: {
      'Presentación':          '<b>Dextrosa 50% — ampolla/frasco de 10, 20 o 50 mL (500 mg/mL)</b>',
      'Hipoglucemia grave adulto': '<b>25-50 mL IV en bolo lento (12.5-25 g)</b>, a pasar en 1-3 min',
      'Hiperpotasemia':        '<b>Dextrosa 50% 50 mL + Insulina Regular 10 UI IV</b> simultáneos',
      'Dilución recomendada':  'Si el tiempo lo permite, diluir 1:1 con SF 0.9% (→ D25%) para reducir el riesgo de flebitis',
      'Vía':                   'IV exclusivamente — NUNCA IM ni SC (necrosis tisular grave)',
      'Acceso venoso':         'Preferir vena de buen calibre o catéter central; confirmar reflujo antes de administrar',
      'Velocidad de administración': 'Bolo lento en 1-3 min · No exceder 3 mL/min en accesos periféricos pequeños',
      '⏱️ Inicio de efecto':    '1-3 min · Efecto sobre la glucemia inmediato',
      '🧊 Estabilidad':         'Solución preparada: 24 h a temperatura ambiente',
    },

    vigilancia: {
      antes: [
        'Confirmar glucemia capilar antes de administrar — no asumir hipoglucemia sin verificación si el paciente está estable.',
        'Verificar permeabilidad y reflujo del acceso venoso — riesgo alto de extravasación con necrosis.',
        'Preguntar por vía oral segura: si el paciente puede tragar, preferir carbohidratos orales antes que el bolo IV.',
        'Confirmar disponibilidad de acceso central en pacientes con accesos periféricos frágiles o infusión prolongada prevista.',
      ],
      durante: [
        'Administrar lentamente — bolo rápido puede causar hiperglucemia de rebote, flebitis o irritación venosa.',
        'Vigilar el sitio de punción de forma continua — dolor, edema o eritema sugieren extravasación: detener de inmediato.',
        'Controlar glucemia a los 15 min post-bolo.',
        'En hiperpotasemia: vigilar glucemia cada 30 min durante 4-6 h por riesgo de hipoglucemia secundaria a la insulina concomitante.',
      ],
      despues: [
        'Glucemia de control a los 15-30 min — repetir bolo si persiste &lt; 70 mg/dL.',
        'Ofrecer carbohidratos de absorción lenta por vía oral en cuanto el paciente esté consciente y pueda tragar, para prevenir recurrencia.',
        'Vigilar el sitio de venopunción en las horas siguientes por signos tardíos de flebitis.',
        'Documentar glucemia pre y post-administración, dosis, hora y respuesta clínica.',
      ],
      suspender: [
        'Extravasación confirmada — detener infusión, aspirar si es posible y aplicar protocolo institucional de manejo de extravasación.',
        'Hiperglucemia de rebote significativa tras corrección repetida.',
        'Signos de sobrecarga de volumen o hiperosmolaridad en paciente con insuficiencia renal o cardíaca.',
      ],
    },

    incompatibilidades: [
      'Sangre y hemoderivados — NUNCA administrar por la misma vía (causa hemólisis).',
      'Precaución con fármacos que precipitan en soluciones glucosadas — verificar compatibilidad específica.',
      'No mezclar con soluciones alcalinas fuertes sin verificar compatibilidad.',
      'Compatible con SF 0.9% para dilución previa a la infusión.',
    ],

    alertasSeguridad: [
      '🔴 EXTRAVASACIÓN — riesgo de necrosis tisular grave por la alta osmolaridad; vigilar el sitio de punción constantemente.',
      '🔴 En neonatos/lactantes: NUNCA D50% directa — diluir siempre a D10-12.5%, riesgo de hemorragia intraventricular.',
      '🟠 Hiperglucemia de rebote con bolos repetidos o rápidos.',
      '🟠 En hiperpotasemia: administrar siempre junto con insulina para evitar hiperglucemia no controlada.',
      '🟡 Precaución en insuficiencia renal/cardíaca por el aporte de volumen y osmolaridad.',
    ],
  },

  modulos: {

    cardio: `
      <b>Insulina + Dextrosa en hiperpotasemia:</b><br/><br/>
      • Indicado en K⁺ &gt; 6.0-6.5 mEq/L con cambios en ECG.<br/>
      • Protocolo habitual: <b>Insulina Regular 10 UI IV</b> + <b>Dextrosa 50% 50 mL IV</b> simultáneos.<br/>
      • Inicio de acción sobre el potasio: 15-30 min · Duración: 2-6 horas.<br/>
      • Reduce el potasio sérico en 0.5-1.5 mEq/L temporalmente (redistribución intracelular, no elimina potasio).<br/>
      • Monitorizar glucemia cada 30 min durante 4-6 horas post-administración por riesgo de hipoglucemia tardía.<br/>
      • No es tratamiento definitivo — requiere medidas de eliminación de potasio (diuréticos, resinas, diálisis).
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Confirmar SIEMPRE la glucemia capilar antes de administrar, salvo emergencia extrema con pérdida de consciencia franca.',
      'Utilizar un acceso venoso de buen calibre — evitar venas pequeñas de manos o muñeca por el alto riesgo de flebitis.',
      'Administrar lentamente en bolo (1-3 min) y vigilar el sitio de punción de forma continua.',
      'Si hay dudas sobre la permeabilidad del acceso, diluir 1:1 con SF 0.9% antes de administrar.',
      'Tras la corrección, ofrecer alimento o carbohidratos de absorción lenta para prevenir hipoglucemia recurrente.',
      'Registrar la glucemia pre y post-administración, hora, dosis y respuesta clínica.',
      'En infusión de mantenimiento (nutrición parenteral): usar siempre por catéter central si la concentración final es &gt; D12.5%.',
    ],

    efectosAdversos: [
      '🔴 Necrosis tisular por extravasación',
      '🟠 Flebitis química en el sitio de infusión',
      '🟠 Hiperglucemia de rebote',
      '🟠 Hipopotasemia (por redistribución intracelular con la glucosa/insulina endógena)',
      '🟡 Sobrecarga de volumen en administración repetida',
      '🟡 Irritación venosa, dolor en el sitio de infusión',
    ],

    contraindicaciones: [
      'Hemorragia intracraneal (evitar hiperglucemia que empeora el pronóstico neurológico, salvo hipoglucemia confirmada).',
      'Hiperglucemia no corregida sin indicación específica.',
      'Precaución extrema en neonatos — nunca administrar D50% sin diluir.',
      'Anuria no tratada (riesgo de sobrecarga osmótica).',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar el frasco/ampolla protegido de temperaturas extremas.',

    estabilidad: {
      'Ampolla/frasco sin abrir':  'Temperatura ambiente hasta vencimiento',
      'Diluida en SF 0.9%':        '24 h a temperatura ambiente',
      'Aspecto':                    'Solución transparente, incolora — desechar si turbia o con partículas',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar de inmediato tras apertura; no conservar sobrante de ampolla abierta.',
      dosisRestante:     'Desechar sobrante no utilizado.',
      infusionPreparada: '24 h a temperatura ambiente si se diluye para infusión.',
      notas:             'La alta osmolaridad exige acceso venoso adecuado; en infusión prolongada considerar catéter central.',
    },

    presentaciones: [
      'Dextrosa 50% — ampolla 10 mL (5 g)',
      'Dextrosa 50% — ampolla/frasco 20 mL (10 g)',
      'Dextrosa 50% — frasco 50 mL (25 g)',
      'Glucosmon® 33% — presentación alternativa en algunos países',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Hipoglucemia grave (adulto)',              dosis: '<b>25-50 mL IV en bolo</b> (12.5-25 g)',               via: 'IV' },
      { indicacion: 'Hiperpotasemia (con insulina)',             dosis: 'D50% 50 mL + Insulina Regular 10 UI IV',               via: 'IV' },
      { indicacion: 'Hipoglucemia neonatal',                     dosis: 'D10% 2 mL/kg IV lento (NUNCA D50% directa)',           via: 'IV' },
      { indicacion: 'Nutrición parenteral (fuente calórica)',    dosis: 'Según requerimiento calórico calculado, por catéter central', via: 'IV' },
    ],

    embarazo: 'Uso seguro y necesario en la corrección de hipoglucemia materna grave, incluida la hipoglucemia asociada al tratamiento intensivo con insulina en diabetes gestacional. No existe contraindicación específica para su uso en emergencia. Vigilar glucemia fetal si hay monitorización disponible.',

    pediatria: 'En lactantes y niños pequeños diluir siempre antes de administrar (habitualmente D10-25% según edad y protocolo). La D50% sin diluir está contraindicada en neonatos por el riesgo de hemorragia intraventricular, hiperosmolaridad brusca y necrosis hepática. Dosis neonatal habitual: D10% 2 mL/kg IV lento.',

    adultoMayor: 'Mayor riesgo de sobrecarga de volumen y de complicaciones cardiovasculares con bolos repetidos — vigilar función cardíaca y renal. Sin ajuste de dosis específico para el bolo de emergencia, pero preferir dilución cuando la situación clínica lo permita.',

    insufRenal: 'Precaución por el riesgo de sobrecarga osmótica y de volumen. En hiperpotasemia grave con insuficiencia renal, el uso de dextrosa/insulina es una medida temporal — se requiere diálisis para tratamiento definitivo.',

    insufHepatica: 'Sin ajuste de dosis específico para el bolo de emergencia. En insuficiencia hepática grave, vigilar la respuesta glucémica ya que el metabolismo del glucógeno puede estar alterado.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Glucosa (Dextrosa) 50% Solución Inyectable.',
      'DailyMed. Dextrose Injection 50%. U.S. National Library of Medicine.',
      'American Diabetes Association. Standards of Medical Care in Diabetes 2024. Diabetes Care. 2024.',
      'Kitabchi AE, et al. Hyperglycemic Crises in Adult Patients With Diabetes. Diabetes Care. 2009;32(7):1335-1343.',
      'Secretaría de Salud México. Cuadro Básico y Catálogo de Medicamentos del Sector Salud.',
      'OPS/OMS. Dextrosa hipertónica — Medicamento esencial. Lista Modelo de Medicamentos Esenciales OMS.',
    ],
  },

});
