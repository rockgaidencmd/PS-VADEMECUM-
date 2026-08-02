/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/cloruro-sodio-hipertonico.js
   Fuentes: CIMA AEMPS, FDA DailyMed, European Guideline
   Hyponatraemia 2014, Neurocritical Care Society ICP
   Guidelines, Cuadro Básico IMSS/Sector Salud México
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'cloruro-sodio-hipertonico',
  nombre:         'Cloruro de Sodio Hipertónico (20%)',
  nombreGenerico: 'Hypertonic Sodium Chloride',
  categoria:      'electrolitos',
  tags:           ['electrolito', 'sodio', 'hiponatremia', 'edema cerebral', 'hipertensión intracraneal', 'salino hipertónico', 'cuadro básico'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'La corrección demasiado rápida de la hiponatremia crónica puede causar síndrome de desmielinización osmótica (mielinólisis pontina), potencialmente irreversible y grave. El límite de corrección es estricto: no superar 8-10 mEq/L en 24 horas (algunos protocolos más conservadores: 6-8 mEq/L/24h). Solución muy irritante — administrar preferentemente por vía central; la extravasación puede causar necrosis tisular.',

  nivel1: {

    puntosClave: [
      '<b>NUNCA administrar el concentrado al 20% directo</b> — es un aditivo/concentrado para PREPARAR soluciones diluidas (3% habitualmente) o para añadir a otras soluciones IV, no para infundir tal cual.',
      '<b>Hiponatremia grave sintomática</b> (convulsiones, coma, deterioro neurológico agudo): salino hipertónico al 3%, bolo de 100-150 mL en 10-20 min, repetible según respuesta y síntomas.',
      '<b>REGLA DE ORO: no corregir el sodio más de 8-10 mEq/L en 24 horas</b> — la corrección rápida de la hiponatremia crónica causa síndrome de desmielinización osmótica.',
      'También usado en <b>hipertensión intracraneal/edema cerebral</b> — alternativa o coadyuvante al manitol, con la ventaja de no producir diuresis osmótica.',
      'Solución muy <b>irritante y esclerosante</b> — preferir vía central; vigilar estrechamente si se usa vía periférica.',
    ],

    resumenRapido: 'Concentrado electrolítico de cloruro de sodio (habitualmente presentado al 20%, aunque también existen ampollas al 10%) que se utiliza como aditivo para preparar soluciones hipertónicas diluidas (más frecuentemente al 3%) o para corregir déficits de sodio en la nutrición parenteral y otras soluciones IV. Su indicación clínica de mayor relevancia es el tratamiento de la hiponatremia grave sintomática (convulsiones, coma, herniación cerebral inminente), donde la elevación rápida y controlada del sodio sérico mediante bolos de salino al 3% puede ser salvadora, así como el manejo de la hipertensión intracraneal y el edema cerebral, donde actúa reduciendo el edema por su efecto osmótico sin producir la diuresis asociada al manitol.',

    objetivoTerapeutico: 'Tratamiento de la hiponatremia grave sintomática (convulsiones, coma, deterioro neurológico agudo) · Manejo de la hipertensión intracraneal y el edema cerebral · Corrección de déficits de sodio en la preparación de soluciones IV y nutrición parenteral · Reposición de sodio en pérdidas importantes (grandes quemados, algunas pérdidas gastrointestinales)',

    preparacion: {
      'Presentación':          '<b>Cloruro de Sodio 20% — ampolla 10 o 20 mL (concentrado, NO listo para infundir directo)</b>',
      'Preparación del salino al 3%': 'Diluir el concentrado al 20% en SF 0.9% o agua estéril hasta obtener la concentración deseada (habitualmente al 3%), según cálculo o protocolo institucional/farmacia',
      'Bolo hiponatremia grave sintomática': '<b>100-150 mL de salino al 3% IV en 10-20 min</b>, repetible 1-2 veces según respuesta clínica',
      'Uso como aditivo':      'Añadir a soluciones IV o nutrición parenteral según el déficit de sodio calculado, bajo indicación médica y preferiblemente preparado por farmacia',
      'Vía':                   '<b>Vía central preferente</b> — vena periférica de gran calibre solo si es imprescindible, con vigilancia estrecha',
      '⏱️ Inicio efecto':       'Minutos (bolo de salino al 3% en hiponatremia sintomática grave)',
      '🧊 Estabilidad':         'Ampolla concentrada estable a temperatura ambiente; la solución diluida preparada debe usarse según protocolo de farmacia/institucional',
    },

    vigilancia: {
      antes: [
        'Ionograma basal (sodio) — confirmar la gravedad de la hiponatremia y su cronología (aguda <48h vs. crónica).',
        'Evaluar la sintomatología neurológica: convulsiones, coma, alteración del nivel de consciencia — determina la urgencia del tratamiento.',
        'Verificar el acceso venoso — preferir vía central para la administración del salino hipertónico.',
        'Calcular el objetivo de corrección y el límite máximo permitido en 24 horas ANTES de iniciar.',
      ],
      durante: [
        'Ionograma (sodio) cada 2-4 horas durante la corrección activa de la hiponatremia grave sintomática — vigilancia MUY estrecha.',
        'Vigilar la mejoría de los síntomas neurológicos (cese de las convulsiones, mejoría del nivel de consciencia).',
        'Vigilar el punto de infusión de forma continua — solución muy irritante, riesgo de flebitis/necrosis por extravasación.',
        'Constantes vitales durante la administración.',
      ],
      despues: [
        '<b>Ionograma cada 4-6 h</b> tras el control inicial de los síntomas — verificar que no se supera el límite de corrección de 8-10 mEq/L/24h.',
        'Si la corrección se acerca al límite: cambiar a soluciones isotónicas o incluso considerar la administración de desmopresina/agua libre según protocolo especializado para evitar la sobrecorrección.',
        'Vigilar signos de síndrome de desmielinización osmótica (que aparecen típicamente 2-6 días después): disartria, disfagia, paraparesia, alteración del nivel de consciencia de nueva aparición.',
        'Documentar el sodio sérico seriado, la velocidad de corrección alcanzada y la respuesta clínica.',
      ],
      suspender: [
        'Al alcanzar el objetivo de corrección o el límite máximo permitido en 24 horas — cambiar a manejo de mantenimiento con soluciones isotónicas.',
        'Resolución de los síntomas neurológicos graves que motivaron el bolo.',
        'Signos de sobrecorrección — suspender inmediatamente y consultar con nefrología/endocrinología sobre medidas de relentización (desmopresina + agua libre según protocolo).',
        'Signos de extravasación en la vía periférica.',
      ],
    },

    incompatibilidades: [
      '<b>NUNCA administrar el concentrado al 20% directamente sin diluir</b> — es un aditivo, no una solución para infusión directa.',
      'No mezclar con soluciones que contengan bicarbonato en la misma vía sin verificar compatibilidad.',
      'Preparar la dilución preferiblemente en farmacia según protocolo institucional.',
    ],

    alertasSeguridad: [
      '🔴 NUNCA infundir el concentrado al 20% sin diluir — riesgo vital por hipernatremia aguda y necrosis venosa.',
      '🔴 SÍNDROME DE DESMIELINIZACIÓN OSMÓTICA por corrección demasiado rápida — límite estricto de 8-10 mEq/L en 24 horas.',
      '🔴 Ionograma muy frecuente (cada 2-4 h) durante la corrección activa de la hiponatremia grave sintomática.',
      '🟠 Solución muy irritante — preferir vía central; vigilar estrechamente si es periférica (riesgo de flebitis/necrosis).',
      '🟡 Distinguir la hiponatremia aguda (<48h, puede corregirse algo más rápido con seguridad) de la crónica (corrección más conservadora).',
    ],
  },

  modulos: {
    respiratorio: `
      <b>Protocolo Hiponatremia Grave Sintomática — Salino Hipertónico al 3%:</b><br/>
      <b>Indicación:</b> sodio sérico bajo con síntomas neurológicos graves (convulsiones, coma, deterioro agudo del nivel de consciencia) — emergencia médica.<br/><br/>
      <b>Administración:</b><br/>
      • Bolo de 100-150 mL de salino al 3% IV en 10-20 min.<br/>
      • Repetir 1-2 veces si persisten los síntomas graves, reevaluando el sodio entre dosis si es posible.<br/>
      • Objetivo inicial: elevar el sodio 4-6 mEq/L o hasta la resolución de los síntomas graves — NO normalizar completamente de forma rápida.<br/><br/>
      <b>Límite estricto de seguridad:</b><br/>
      • <b>NO superar 8-10 mEq/L de corrección en 24 horas</b> (más conservador, 6-8 mEq/L/24h, en hiponatremia crónica o factores de riesgo de desmielinización: alcoholismo, malnutrición, hepatopatía, hipopotasemia).<br/><br/>
      <b>Vigilancia:</b> ionograma cada 2-4 h durante la fase activa; vigilar signos tardíos de desmielinización osmótica (2-6 días después) si la corrección fue excesiva.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar SIEMPRE que la solución a administrar está correctamente diluida (habitualmente al 3%) — nunca infundir el concentrado al 20% directo.',
      'Confirmar el cálculo del objetivo de corrección y el límite máximo en 24 horas antes de iniciar la infusión.',
      'Preferir la vía central; si es periférica, usar vena de gran calibre y vigilar el punto de infusión de forma continua.',
      'Ionograma (sodio) muy frecuente (cada 2-4 h) durante la corrección activa — comunicar de inmediato cualquier desviación del ritmo previsto.',
      'Vigilar la respuesta neurológica: mejoría de las convulsiones o del nivel de consciencia.',
      'Vigilar signos tardíos de desmielinización osmótica en los días siguientes si hubo corrección rápida.',
      'Documentar el sodio sérico seriado, la velocidad de infusión y la respuesta clínica en cada control.',
    ],

    efectosAdversos: [
      '🔴 Síndrome de desmielinización osmótica (mielinólisis pontina) por corrección demasiado rápida',
      '🔴 Necrosis tisular por extravasación (solución muy irritante)',
      '🟠 Sobrecarga de volumen / edema pulmonar (en administración excesiva o insuficiencia cardíaca)',
      '🟠 Hipernatremia iatrogénica por sobrecorrección',
      '🟡 Flebitis en el punto de infusión (uso periférico)',
      '🟡 Hipopotasemia asociada (vigilar y corregir simultáneamente)',
    ],

    contraindicaciones: [
      'Hipernatremia preexistente.',
      'Sobrecarga de volumen grave o insuficiencia cardíaca descompensada (relativa, valorar riesgo/beneficio en la emergencia).',
      'Administración del concentrado sin diluir por cualquier vía (nunca indicado).',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar la ampolla a temperatura ambiente protegida de luz directa.',

    estabilidad: {
      'Ampolla concentrada sin abrir': 'Temperatura ambiente hasta vencimiento',
      'Solución diluida (3%)':          'Según protocolo de farmacia/institucional tras la preparación',
      'Aspecto':                          'Solución incolora — desechar si turbia o con partículas',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar según protocolo tras la dilución — no conservar el concentrado abierto sin diluir.',
      dosisRestante:     'Desechar sobrante de ampolla concentrada abierta.',
      infusionPreparada: 'Según protocolo de farmacia para la solución diluida al 3%.',
      notas:             'Preparación preferiblemente centralizada en farmacia para minimizar el riesgo de error de dilución, dado el riesgo vital de la administración accidental del concentrado sin diluir.',
    },

    presentaciones: [
      'Cloruro de Sodio 20% — ampolla 10 mL o 20 mL (concentrado, para diluir)',
      'Cloruro de Sodio 10% — ampolla (concentración alternativa según fabricante)',
      'Cloruro de Sodio 3% — solución hipertónica lista para infundir (en algunas instituciones, bolsa preparada de farmacia)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Hiponatremia grave sintomática (bolo)', dosis: '<b>100-150 mL de salino al 3% IV en 10-20 min</b>, repetible 1-2 veces', via: 'IV' },
      { indicacion: 'Hipertensión intracraneal / edema cerebral', dosis: 'Salino al 3% en bolo o perfusión según protocolo de neurocrítico', via: 'IV' },
      { indicacion: 'Límite de corrección (regla de seguridad)', dosis: 'No superar 8-10 mEq/L en 24 h (6-8 mEq/L si riesgo de desmielinización)', via: '—' },
      { indicacion: 'Aditivo en nutrición parenteral/soluciones IV', dosis: 'Según el déficit de sodio calculado, preparado por farmacia', via: 'IV' },
    ],

    embarazo: 'Uso en emergencias (hiponatremia grave sintomática, edema cerebral) durante el embarazo cuando está indicado — el beneficio de tratar una emergencia potencialmente mortal para la madre supera el riesgo teórico. Vigilar el mismo límite de corrección estricto.',

    pediatria: 'Hiponatremia grave sintomática pediátrica: salino al 3%, 2-5 mL/kg IV en 10-20 min, repetible según respuesta. Mismo principio de corrección lenta y vigilancia estrecha del ionograma. Uso bajo supervisión especializada.',

    adultoMayor: 'Mayor riesgo de sobrecarga de volumen por menor reserva cardiovascular y renal — vigilar signos de insuficiencia cardíaca durante la administración. Mismo límite estricto de corrección del sodio.',

    insufRenal: 'Usar con precaución por el riesgo de sobrecarga de volumen. En insuficiencia renal grave, puede requerirse diálisis para el manejo definitivo de la hiponatremia grave, coordinando con nefrología.',

    insufHepatica: 'La hiponatremia es frecuente en la cirrosis descompensada (dilucional) — el riesgo de desmielinización osmótica es MAYOR en hepatopatía, por lo que se recomienda un límite de corrección aún más conservador (6 mEq/L/24h) en estos pacientes.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Cloruro de Sodio 20% (concentrado).',
      'Spasovski G et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. European Society of Endocrinology / European Renal Association. 2014.',
      'Sterns RH. Disorders of Plasma Sodium — Causes, Consequences, and Correction. NEJM. 2015.',
      'Neurocritical Care Society. Guideline for the Emergency Management of Elevated Intracranial Pressure. Neurocrit Care.',
      'Secretaría de Salud México. Cuadro Básico y Catálogo de Medicamentos del Sector Salud.',
    ],
  },

});
