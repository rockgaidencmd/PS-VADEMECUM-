/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/deferoxamina.js
   Fuentes: CIMA AEMPS (Desferin), FDA DailyMed,
   AAPCC/ACMT Iron Poisoning Guidelines, Cuadro Básico
   IMSS/Sector Salud México
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'deferoxamina',
  nombre:         'Deferoxamina',
  nombreComercial: 'Desferin®',
  nombreGenerico: 'Deferoxamine Mesylate',
  categoria:      'otros',
  tags:           ['antídoto', 'intoxicación por hierro', 'quelante', 'sobrecarga de hierro', 'talasemia', 'pediatría', 'cuadro básico'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'La infusión IV rápida puede causar hipotensión grave, shock y reacciones anafilactoides — infundir SIEMPRE lento con bomba de infusión. Riesgo de síndrome de distrés respiratorio agudo (SDRA) con infusiones muy prolongadas o dosis acumuladas altas. La orina adquiere color rosado-rojizo ("vino rosado") durante la quelación activa — esperado, útil como signo indirecto de eficacia.',

  nivel1: {

    puntosClave: [
      '<b>Antídoto específico de la intoxicación grave por hierro</b> — emergencia pediátrica frecuente por ingesta accidental de comprimidos de hierro (sulfato ferroso, complejos vitamínicos).',
      'Indicado ante <b>intoxicación grave</b>: niveles séricos de hierro elevados con síntomas sistémicos, shock, acidosis metabólica o ingesta masiva confirmada.',
      'Dosis: <b>perfusión IV continua, iniciando a 5 mg/kg/h</b>, ajustada según gravedad (máx habitual 15 mg/kg/h en las primeras horas, dosis diaria total limitada según protocolo).',
      '<b>Infundir SIEMPRE lento con bomba</b> — la infusión rápida causa hipotensión grave y reacciones anafilactoides.',
      'La <b>orina se tiñe de color rosado-rojizo</b> ("vino rosado") mientras el fármaco está quelando hierro activamente — signo útil de eficacia, no de toxicidad.',
    ],

    resumenRapido: 'Quelante de hierro que se une al hierro libre circulante y, en menor medida, al hierro de la ferritina y hemosiderina, formando un complejo hidrosoluble (ferrioxamina) que se elimina por vía renal. Es el antídoto específico en la intoxicación aguda grave por hierro, una emergencia toxicológica relativamente frecuente en la infancia por la ingesta accidental de comprimidos de sulfato ferroso o multivitamínicos con hierro, que pueden ser letales incluso en cantidades aparentemente pequeñas debido a la toxicidad mitocondrial y la lesión gastrointestinal, hepática y cardiovascular del hierro libre. También se emplea en el tratamiento crónico de la sobrecarga de hierro asociada a transfusiones repetidas (talasemia mayor, anemias hemolíticas crónicas), aunque en este contexto suele preferirse la vía subcutánea o quelantes orales cuando están disponibles.',

    objetivoTerapeutico: 'Tratamiento de la intoxicación aguda grave por hierro (emergencia toxicológica) · Tratamiento de la sobrecarga crónica de hierro por transfusiones repetidas (talasemia mayor, anemias hemolíticas crónicas) cuando no hay alternativa oral disponible',

    preparacion: {
      'Presentación':          '<b>Desferin® 500 mg — vial polvo liofilizado</b>',
      'Reconstitución':        'Reconstituir con agua para inyección según ficha técnica',
      'Diluyente':             'SF 0.9% o SG 5% para la perfusión',
      'Dosis intoxicación aguda (inicio)': '<b>5 mg/kg/h en perfusión IV continua</b>, ajustar según gravedad clínica',
      'Dosis intoxicación aguda (grave)': 'Hasta 15 mg/kg/h en las primeras horas en intoxicaciones muy graves, con vigilancia hemodinámica estrecha',
      'Dosis diaria máxima':   'Habitualmente no superar 6-8 g/día en el adulto (según gravedad y protocolo)',
      'Vía':                   '<b>IV en perfusión continua (de elección en la emergencia)</b> · IM (menos frecuente, dosis intermitentes) · SC (uso crónico, no en la emergencia aguda)',
      '⏱️ Velocidad de infusión': '<b>Siempre con bomba de infusión — nunca en bolo rápido</b>',
      '🧊 Estabilidad':         '<b>24 h a temperatura ambiente tras reconstituir/diluir</b>',
    },

    vigilancia: {
      antes: [
        'Confirmar la gravedad de la intoxicación: niveles séricos de hierro, síntomas clínicos (vómitos, diarrea sanguinolenta, letargia, shock, acidosis).',
        'TA y FC basales — la infusión puede causar hipotensión.',
        'Función renal basal — la eliminación del complejo ferrioxamina es renal.',
        'Confirmar la vía y disponibilidad de bomba de infusión antes de iniciar.',
      ],
      durante: [
        '<b>TA continua o muy frecuente</b> — vigilar hipotensión, especialmente al inicio o con ajustes de velocidad.',
        'Vigilar reacciones anafilactoides: rash, urticaria, disnea.',
        'Observar el color de la orina (rosado-rojizo esperado, signo de quelación activa).',
        'Vigilar signos respiratorios en infusiones prolongadas (>24 h) o dosis acumuladas altas — riesgo de SDRA.',
      ],
      despues: [
        'Función renal periódica durante el tratamiento.',
        'Vigilar la evolución clínica: mejoría de la acidosis, la perfusión y el estado hemodinámico.',
        'Reevaluar los niveles séricos de hierro para decidir la duración del tratamiento.',
        'Vigilar signos respiratorios si el tratamiento se prolonga más de 24 h.',
        'Documentar dosis, velocidad de infusión y respuesta clínica (incluida la coloración de la orina).',
      ],
      suspender: [
        'Normalización de los niveles séricos de hierro y resolución de la clínica de toxicidad.',
        'Hipotensión grave no controlable con ajuste de la velocidad.',
        'Signos de SDRA en infusiones prolongadas — reevaluar la necesidad de continuar.',
        'Reacción anafilactoide grave.',
      ],
    },

    incompatibilidades: [
      'No mezclar con otros fármacos en la misma vía sin verificar compatibilidad.',
      'Compatible con SF 0.9% y SG 5% para dilución.',
      'Usar bomba de infusión dedicada siempre que sea posible.',
    ],

    alertasSeguridad: [
      '🔴 INFUSIÓN RÁPIDA = HIPOTENSIÓN GRAVE Y SHOCK — usar SIEMPRE bomba de infusión, nunca bolo.',
      '🟠 SÍNDROME DE DISTRÉS RESPIRATORIO AGUDO con infusiones muy prolongadas (>24 h) o dosis acumuladas altas.',
      '🟠 Reacciones anafilactoides posibles — vigilar durante la infusión.',
      '🟡 La orina se tiñe de rosado-rojizo ("vino rosado") durante la quelación activa — informar al paciente/familia, es esperado y útil como signo de eficacia.',
      '🟡 Ajuste de dosis según función renal (eliminación del complejo ferrioxamina).',
    ],
  },

  modulos: {
    respiratorio: `
      <b>Protocolo Intoxicación Aguda Grave por Hierro — Deferoxamina:</b><br/>
      <b>Sospecha:</b> ingesta de comprimidos de hierro (sulfato ferroso, multivitamínicos), especialmente en niños pequeños. Puede haber una fase de aparente mejoría (6-24 h) antes del deterioro tardío — no confiarse.<br/><br/>
      <b>Indicación de deferoxamina:</b> niveles séricos de hierro elevados con síntomas sistémicos (vómitos persistentes, letargia, acidosis, shock) o ingesta masiva confirmada con alto riesgo.<br/><br/>
      <b>Administración:</b><br/>
      • Iniciar perfusión IV continua a <b>5 mg/kg/h</b>, con bomba de infusión.<br/>
      • Ajustar según gravedad clínica y respuesta (hasta 15 mg/kg/h en casos muy graves, con vigilancia hemodinámica estrecha).<br/>
      • Vigilar la coloración de la orina (rosado-rojizo = quelación activa).<br/><br/>
      <b>Medidas asociadas:</b><br/>
      • Soporte hemodinámico y corrección de la acidosis según gasometría.<br/>
      • Descontaminación gastrointestinal según protocolo toxicológico (el carbón activado NO es eficaz para el hierro).
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Confirmar la disponibilidad de bomba de infusión antes de iniciar — nunca administrar en bolo.',
      'Reconstituir y diluir según ficha técnica; programar la velocidad exacta en la bomba.',
      'TA muy frecuente (o continua si es posible) durante la infusión, especialmente al inicio.',
      'Vigilar reacciones anafilactoides durante la administración.',
      'Observar y documentar el color de la orina — el tono rosado-rojizo es esperado y refleja la quelación activa.',
      'En infusiones prolongadas (>24 h): vigilar signos respiratorios (disnea, hipoxemia) por el riesgo de SDRA.',
      'Función renal periódica durante el tratamiento.',
      'Documentar dosis, velocidad de infusión, TA y respuesta clínica en cada control.',
    ],

    efectosAdversos: [
      '🔴 Hipotensión grave / shock (con infusión rápida)',
      '🔴 Síndrome de distrés respiratorio agudo (infusiones prolongadas, dosis altas acumuladas)',
      '🟠 Reacciones anafilactoides',
      '🟠 Alteraciones visuales y auditivas (uso crónico prolongado, menos relevante en la emergencia aguda)',
      '🟡 Coloración rosado-rojiza de la orina (esperada, signo de quelación activa)',
      '🟡 Náuseas, calambres abdominales',
      '🟡 Reacción local en el punto de infusión',
    ],

    contraindicaciones: [
      'Hipersensibilidad conocida a la deferoxamina.',
      'Insuficiencia renal grave/anuria sin diálisis disponible (precaución, valorar riesgo/beneficio en la emergencia).',
      'No es contraindicación absoluta en el embarazo cuando la intoxicación materna es grave — el beneficio de tratar la emergencia supera el riesgo.',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar el vial a temperatura ambiente protegido de luz directa.',

    estabilidad: {
      'Vial sin reconstituir':  'Temperatura ambiente hasta vencimiento',
      'Diluida en SF/SG 5%':   '<b>24 h a temperatura ambiente</b>',
      'Aspecto':                 'Solución incolora a ligeramente amarillenta tras reconstituir — normal',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de 24 h tras reconstituir.',
      dosisRestante:     'Desechar sobrante de vial reconstituido no utilizado.',
      infusionPreparada: '24 h en SF 0.9% o SG 5% a temperatura ambiente.',
      notas:             'Usar siempre bomba de infusión. La orina rosado-rojiza es un signo esperado de quelación activa, no de toxicidad.',
    },

    presentaciones: [
      'Desferin® 500 mg — vial polvo liofilizado IV/IM/SC',
      'Deferoxamina genérica — presentaciones similares',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Intoxicación aguda grave por hierro (inicio)', dosis: '<b>5 mg/kg/h en perfusión IV continua</b>',            via: 'IV' },
      { indicacion: 'Intoxicación muy grave (ajuste)',                dosis: 'Hasta 15 mg/kg/h en las primeras horas, con vigilancia estrecha', via: 'IV' },
      { indicacion: 'Sobrecarga crónica de hierro (talasemia)',       dosis: '20-40 mg/kg/día SC/IV lenta según protocolo hematológico', via: 'SC/IV' },
    ],

    embarazo: 'Categoría C (FDA). En la intoxicación materna aguda grave por hierro, el tratamiento con deferoxamina no debe retrasarse — el beneficio de tratar una emergencia potencialmente mortal para la madre supera el riesgo teórico para el feto.',

    pediatria: 'Es la indicación pediátrica por excelencia — la intoxicación por hierro es predominantemente un accidente infantil. Misma dosis por kg que en adultos (5-15 mg/kg/h en perfusión IV continua según gravedad). Vigilancia hemodinámica especialmente estrecha por el menor volumen circulante.',

    adultoMayor: 'Sin ajuste de dosis específico por edad en la emergencia aguda. Mayor riesgo de hipotensión por la infusión — vigilar con especial atención en pacientes con reserva cardiovascular limitada.',

    insufRenal: 'Precaución — la eliminación del complejo ferrioxamina es renal. En insuficiencia renal grave, puede requerirse ajuste de dosis o considerar hemodiálisis para eliminar el complejo, especialmente en el contexto de sobrecarga crónica de hierro.',

    insufHepatica: 'Sin ajuste de dosis específico necesario — el hierro también puede depositarse en el hígado en la sobrecarga crónica; el manejo de la insuficiencia hepática asociada es específico de cada caso.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Desferin® (deferoxamina).',
      'American Academy of Clinical Toxicology / American Association of Poison Control Centers. Iron Poisoning Position Statement.',
      'Chang TP, Rangan C. Iron poisoning: a literature-based review of epidemiology, diagnosis, and management. Pediatr Emerg Care. 2011.',
      'Cangelosi et al. Deferoxamine in the treatment of acute iron poisoning. Clin Toxicol.',
      'Secretaría de Salud México. Cuadro Básico y Catálogo de Medicamentos del Sector Salud.',
    ],
  },

});
