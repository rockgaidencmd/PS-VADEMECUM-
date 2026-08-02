/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/bupivacaina.js
   Fuentes: CIMA AEMPS (Svedocain), FDA DailyMed,
   ASRA Local Anesthetic Systemic Toxicity Guidelines 2020,
   Cuadro Básico IMSS/Sector Salud México
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'bupivacaina',
  nombre:         'Bupivacaína',
  nombreComercial: 'Svedocain® / Marcaine®',
  nombreGenerico: 'Bupivacaine Hydrochloride',
  categoria:      'otros',
  tags:           ['anestésico local', 'raquianestesia', 'epidural', 'bloqueo nervioso', 'cesárea', 'toxicidad sistémica', 'cuadro básico'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Anestésico local de alta potencia con toxicidad cardiovascular grave y potencialmente FATAL en caso de inyección intravascular accidental — la cardiotoxicidad de la bupivacaína es especialmente resistente a la reanimación estándar. Requiere emulsión lipídica IV (intralipid) disponible como antídoto de rescate. La formulación al 0.75% está CONTRAINDICADA en anestesia epidural obstétrica por el riesgo de paro cardíaco resistente a reanimación.',

  nivel1: {

    puntosClave: [
      '<b>Anestésico local de larga duración</b> — ampliamente usado en raquianestesia, epidural y bloqueos nerviosos periféricos, con duración de acción de 4-8 horas o más.',
      '<b>TOXICIDAD SISTÉMICA POR ANESTÉSICOS LOCALES (LAST)</b> tras inyección intravascular accidental — cardiotoxicidad grave y resistente a la reanimación estándar; requiere emulsión lipídica IV disponible.',
      'Dosis máxima: <b>2-3 mg/kg</b> (sin epinefrina) — respetar estrictamente el límite para evitar toxicidad sistémica.',
      '<b>Formulación al 0.75% CONTRAINDICADA en anestesia epidural obstétrica</b> — riesgo de paro cardíaco resistente a la reanimación (retirada de esta indicación específica tras casos de mortalidad materna).',
      '<b>Aspirar SIEMPRE antes de inyectar</b> y administrar en fracciones — reduce el riesgo de inyección intravascular inadvertida.',
    ],

    resumenRapido: 'Anestésico local del grupo amida, de alta potencia y larga duración de acción, ampliamente utilizado en anestesia regional (raquídea, epidural, bloqueos de nervio periférico) para procedimientos quirúrgicos, obstétricos y el manejo del dolor postoperatorio prolongado. Su principal riesgo es la toxicidad sistémica por anestésicos locales (LAST, por sus siglas en inglés) en caso de inyección intravascular accidental o absorción sistémica excesiva: la bupivacaína tiene una cardiotoxicidad particularmente grave, con bloqueo de los canales de sodio cardíacos que produce arritmias ventriculares graves y colapso cardiovascular notablemente resistente a las maniobras de reanimación estándar, requiriendo la disponibilidad inmediata de emulsión lipídica intravenosa como tratamiento de rescate específico.',

    objetivoTerapeutico: 'Anestesia raquídea (subaracnoidea) para cirugía y cesárea · Anestesia y analgesia epidural (obstétrica, postoperatoria) · Bloqueos de nervio periférico para cirugía o manejo del dolor · Infiltración local para procedimientos y analgesia postoperatoria prolongada',

    preparacion: {
      'Presentación':          '<b>Svedocain®/Marcaine® 0.25%, 0.5% y 0.75% — ampollas/viales según concentración</b>',
      'Presentación hiperbárica': 'Bupivacaína hiperbárica 0.5% (con glucosa) — específica para raquianestesia',
      'Dosis máxima (sin epinefrina)': '<b>2-3 mg/kg (máx habitual 175 mg en el adulto)</b>',
      'Dosis máxima (con epinefrina)': 'Hasta 3.5-4 mg/kg (máx 225 mg) — la epinefrina retrasa la absorción sistémica',
      'Raquianestesia':        '7.5-15 mg (según la altura del bloqueo deseado), formulación hiperbárica habitualmente',
      'Epidural':               'Volumen y concentración según el procedimiento y protocolo anestésico específico',
      '⚠️ Contraindicación específica': '<b>La formulación al 0.75% NO debe usarse en anestesia epidural obstétrica</b>',
      'Vía':                    'Intratecal (raquídea) · Epidural · Infiltración local · Bloqueo de nervio periférico — NUNCA vía IV sistémica intencional',
      '⏱️ Inicio efecto':        '5-10 min (bloqueo raquídeo) · Duración: 4-8 h o más según la técnica y concentración',
      '🧊 Estabilidad':          'Ampolla/vial listo para usar; verificar la ausencia de partículas antes de administrar',
    },

    vigilancia: {
      antes: [
        'Confirmar la concentración correcta según la técnica (raquídea, epidural, bloqueo periférico) — NUNCA usar la formulación al 0.75% en epidural obstétrica.',
        'Calcular la dosis máxima según el peso del paciente antes de iniciar.',
        'Verificar la disponibilidad de emulsión lipídica IV (intralipid) en la unidad antes de realizar el bloqueo.',
        'Constantes vitales basales: TA, FC, SpO2.',
        'Acceso venoso permeable y equipo de reanimación disponible.',
      ],
      durante: [
        '<b>Aspirar antes de cada inyección</b> y administrar en fracciones — reduce el riesgo de inyección intravascular inadvertida.',
        'Vigilar signos precoces de toxicidad sistémica: acúfenos, sabor metálico, entumecimiento perioral, verborrea, agitación — pueden preceder a las convulsiones.',
        'Monitorización ECG continua durante y después de la administración.',
        'TA y FC frecuentes, especialmente en anestesia raquídea/epidural (riesgo de hipotensión por el bloqueo simpático).',
      ],
      despues: [
        'Vigilar el nivel del bloqueo sensitivo/motor según la técnica utilizada.',
        'Vigilar la recuperación progresiva de la sensibilidad y la movilidad.',
        'TA y FC hasta la resolución del bloqueo simpático (especialmente en raquianestesia).',
        'Documentar dosis total administrada, técnica, nivel de bloqueo alcanzado y tolerancia.',
      ],
      suspender: [
        '🚨 Signos de toxicidad sistémica (LAST): detener la inyección de inmediato ante los primeros síntomas (acúfenos, sabor metálico, agitación).',
        '🚨 Convulsiones o arritmias: activar el protocolo de LAST — soporte vital + emulsión lipídica IV sin demora.',
        'Hipotensión significativa por bloqueo simpático extenso — tratar según protocolo (fluidos, vasopresor).',
        'Nivel de bloqueo excesivamente alto con compromiso respiratorio (bloqueo espinal total).',
      ],
    },

    incompatibilidades: [
      'No mezclar con soluciones alcalinas (puede precipitar).',
      'No usar la formulación al 0.75% en anestesia epidural obstétrica.',
      'Precaución con otros anestésicos locales administrados simultáneamente — efecto tóxico aditivo.',
      'Compatible con la adición de epinefrina en la misma solución según técnica (retrasa la absorción sistémica).',
    ],

    alertasSeguridad: [
      '🔴 TOXICIDAD SISTÉMICA POR ANESTÉSICOS LOCALES (LAST) — cardiotoxicidad grave y resistente a la reanimación estándar; tener SIEMPRE emulsión lipídica IV disponible.',
      '🔴 LA FORMULACIÓN AL 0.75% ESTÁ CONTRAINDICADA en anestesia epidural obstétrica.',
      '🔴 Respetar estrictamente la dosis máxima según el peso — no exceder 2-3 mg/kg (sin epinefrina).',
      '🟠 Aspirar SIEMPRE antes de inyectar y fraccionar la dosis — reduce el riesgo de inyección intravascular.',
      '🟠 Los signos precoces de toxicidad (acúfenos, sabor metálico, agitación) pueden preceder rápidamente a convulsiones y colapso cardiovascular — no ignorar.',
      '🟡 Vigilar hipotensión por bloqueo simpático en raquianestesia/epidural, especialmente en bloqueos altos.',
    ],
  },

  modulos: {
    cardio: `
      <b>Protocolo Toxicidad Sistémica por Anestésicos Locales (LAST) — Bupivacaína:</b><br/>
      <b>Reconocer precozmente:</b> acúfenos, sabor metálico, entumecimiento perioral, agitación, verborrea → pueden progresar rápidamente a convulsiones y colapso cardiovascular.<br/><br/>
      <b>Manejo inmediato:</b><br/>
      • Detener la inyección del anestésico local de inmediato.<br/>
      • Pedir ayuda y activar el protocolo de LAST de la institución.<br/>
      • Vía aérea: oxígeno al 100%, considerar intubación si hay compromiso.<br/>
      • Control de las convulsiones: benzodiacepinas (evitar propofol en dosis altas si hay inestabilidad hemodinámica).<br/><br/>
      <b>Tratamiento específico — Emulsión lipídica IV (Intralipid 20%):</b><br/>
      • Bolo inicial: 1.5 mL/kg IV en 1 minuto.<br/>
      • Seguido de perfusión continua: 0.25 mL/kg/min.<br/>
      • Repetir el bolo si persiste la inestabilidad cardiovascular (hasta 2 bolos adicionales).<br/><br/>
      <b>Si hay paro cardíaco:</b> RCP prolongada (puede requerir >1 hora), evitar vasopresina, considerar bypass cardiopulmonar si está disponible en casos refractarios.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar la concentración exacta del vial/ampolla antes de preparar — nunca usar 0.75% en epidural obstétrica.',
      'Calcular y verificar la dosis máxima según el peso del paciente antes del procedimiento.',
      'Confirmar la disponibilidad de emulsión lipídica IV en la unidad antes de iniciar cualquier bloqueo con anestésico local.',
      'Durante la administración: recordar al anestesista/operador la importancia de aspirar antes de inyectar y fraccionar la dosis.',
      'Monitorización ECG, TA y SpO2 continuas durante y después del procedimiento.',
      'Vigilar de forma activa los signos precoces de toxicidad sistémica (acúfenos, sabor metálico, agitación) — comunicar de inmediato si aparecen.',
      'Vigilar la evolución del bloqueo sensitivo/motor y la TA hasta su resolución.',
      'Documentar dosis total, técnica, nivel de bloqueo y tolerancia.',
    ],

    efectosAdversos: [
      '🔴 Toxicidad sistémica por anestésicos locales (LAST): convulsiones, arritmias, colapso cardiovascular',
      '🔴 Bloqueo espinal total (nivel de bloqueo excesivamente alto con compromiso respiratorio)',
      '🟠 Hipotensión por bloqueo simpático (raquianestesia/epidural)',
      '🟠 Bradicardia',
      '🟡 Cefalea pospunción dural (técnica raquídea/epidural)',
      '🟡 Retención urinaria transitoria',
      '🟡 Náuseas asociadas a la hipotensión',
    ],

    contraindicaciones: [
      'Hipersensibilidad a anestésicos locales tipo amida.',
      'Uso de la formulación al 0.75% en anestesia epidural obstétrica (contraindicación específica).',
      'Coagulopatía no corregida o anticoagulación terapéutica (contraindicación relativa para técnicas neuraxiales por riesgo de hematoma espinal).',
      'Infección en el sitio de punción.',
      'Hipovolemia grave no corregida (mayor riesgo de hipotensión grave con el bloqueo simpático).',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar la ampolla/vial a temperatura ambiente protegido de luz directa.',

    estabilidad: {
      'Ampolla/vial sin abrir': 'Temperatura ambiente hasta vencimiento',
      'Uso':                     'Administrar directamente según la técnica; verificar ausencia de partículas o turbidez antes de usar',
      'Aspecto':                  'Solución incolora — desechar si turbia o con precipitado',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar inmediatamente tras abrir — desechar sobrante, especialmente en formulaciones sin conservantes para uso neuraxial.',
      dosisRestante:     'Desechar sobrante de ampolla/vial abierto.',
      infusionPreparada: 'No aplica habitualmente — administración directa según la técnica anestésica.',
      notas:             'Verificar que la formulación es la adecuada para la vía prevista (algunas presentaciones son específicas para uso intratecal, sin conservantes).',
    },

    presentaciones: [
      'Svedocain® 0.25%, 0.5%, 0.75% — ampollas/viales',
      'Marcaine® — presentaciones equivalentes según país',
      'Bupivacaína hiperbárica 0.5% (con glucosa) — específica para raquianestesia',
      'Bupivacaína genérica — varios fabricantes',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Raquianestesia (cesárea/cirugía)',    dosis: '<b>7.5-15 mg</b> (formulación hiperbárica, según altura del bloqueo deseado)', via: 'Intratecal' },
      { indicacion: 'Anestesia/analgesia epidural',         dosis: 'Volumen y concentración según técnica y protocolo anestésico específico',      via: 'Epidural' },
      { indicacion: 'Bloqueo de nervio periférico',          dosis: 'Según el bloqueo específico, respetando la dosis máxima total',                via: 'Perineural' },
      { indicacion: 'Dosis máxima total (sin epinefrina)',  dosis: '<b>2-3 mg/kg (máx habitual 175 mg)</b>',                                        via: '—' },
      { indicacion: 'Dosis máxima total (con epinefrina)',  dosis: 'Hasta 3.5-4 mg/kg (máx 225 mg)',                                                  via: '—' },
    ],

    embarazo: 'Ampliamente utilizada en la anestesia obstétrica (raquídea y epidural) para cesárea y analgesia del trabajo de parto, siendo uno de los anestésicos locales más empleados en este contexto. IMPORTANTE: la formulación al 0.75% está contraindicada específicamente en la vía epidural obstétrica por el riesgo de cardiotoxicidad grave documentado.',

    pediatria: 'Uso en anestesia regional pediátrica (caudal, bloqueos periféricos) con dosis ajustada estrictamente por peso, siempre respetando el límite de 2-3 mg/kg. Los niños pequeños tienen mayor riesgo de toxicidad sistémica por diferencias farmacocinéticas — extremar la precaución en el cálculo de dosis.',

    adultoMayor: 'Mayor sensibilidad al bloqueo simpático (hipotensión más marcada) y posible reducción del aclaramiento del fármaco. Considerar dosis reducidas y vigilancia hemodinámica más estrecha.',

    insufRenal: 'Sin ajuste de dosis específico necesario para el uso puntual en anestesia regional — el metabolismo es predominantemente hepático.',

    insufHepatica: 'Precaución en insuficiencia hepática grave — el metabolismo es hepático, con posible prolongación de la vida media y mayor riesgo de acumulación/toxicidad con dosis repetidas o perfusiones continuas prolongadas.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Svedocain® (bupivacaína).',
      'Neal JM et al. The Third American Society of Regional Anesthesia and Pain Medicine Practice Advisory on Local Anesthetic Systemic Toxicity. Reg Anesth Pain Med. 2018.',
      'ASRA Checklist for Treatment of Local Anesthetic Systemic Toxicity. 2020.',
      'AEMPS. Restricción de uso de bupivacaína 0.75% en anestesia epidural obstétrica. Nota informativa histórica.',
      'Secretaría de Salud México. Cuadro Básico y Catálogo de Medicamentos del Sector Salud.',
    ],
  },

});
