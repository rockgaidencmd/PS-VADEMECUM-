/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/lacosamida.js
   Fuentes: CIMA AEMPS (Vimpat), FDA DailyMed,
   Neurocritical Care Society Status Epilepticus 2023,
   AAN/AES Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'lacosamida',
  nombre:         'Lacosamida',
  nombreComercial: 'Vimpat®',
  nombreGenerico: 'Lacosamide',
  categoria:      'antiarritmicos',
  tags:           ['antiepiléptico', 'estatus epiléptico', 'convulsiones', 'anticonvulsivante de 2ª generación', 'neurología', 'UCI'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Riesgo de prolongación del PR y bloqueo AV, especialmente con infusión rápida o en combinación con otros fármacos que afectan la conducción cardíaca (bloqueantes de canales de sodio, betabloqueantes, calcioantagonistas). Requiere monitorización ECG en pacientes con cardiopatía o trastornos de la conducción conocidos. Mareo y sedación frecuentes.',

  nivel1: {

    puntosClave: [
      '<b>Antiepiléptico de segunda generación</b> — cada vez más usado como fármaco de 2ª línea en el estatus epiléptico tras las benzodiacepinas, alternativa a levetiracetam/valproato/fenitoína.',
      'Dosis de carga: <b>200-400 mg IV en 15-30 min</b>, seguida de mantenimiento <b>100-200 mg IV/VO c/12 h</b>.',
      '<b>Sin interacciones farmacocinéticas relevantes</b> (no inductor ni inhibidor enzimático significativo) — ventaja frente a fenitoína en pacientes polimedicados.',
      '<b>Prolongación del PR y riesgo de bloqueo AV</b> — vigilar ECG, especialmente en cardiopatía o con otros fármacos que afectan la conducción.',
      'Puede administrarse <b>vía IV u oral con la misma dosis</b> (biodisponibilidad oral ~100%) — facilita la transición y el mantenimiento.',
    ],

    resumenRapido: 'Antiepiléptico de segunda generación que actúa potenciando la inactivación lenta de los canales de sodio dependientes de voltaje (mecanismo distinto al bloqueo rápido de fenitoína/carbamazepina), lo que le confiere un perfil de interacciones farmacocinéticas muy favorable al no inducir ni inhibir significativamente el sistema enzimático hepático CYP450. Está indicado como tratamiento del estatus epiléptico refractario a benzodiacepinas (2ª línea, junto con levetiracetam, ácido valproico y fenitoína/fosfenitoína) y como terapia de mantenimiento en la epilepsia focal. Su principal limitación de seguridad es el efecto sobre la conducción cardíaca (prolongación del PR), relevante en pacientes con cardiopatía o en combinación con otros fármacos que afectan la conducción AV.',

    objetivoTerapeutico: 'Tratamiento del estatus epiléptico refractario a benzodiacepinas (2ª línea) · Tratamiento de mantenimiento de las crisis epilépticas focales, con o sin generalización secundaria · Alternativa en pacientes polimedicados donde se buscan mínimas interacciones farmacocinéticas',

    preparacion: {
      'Presentación':          '<b>Vimpat® 10 mg/mL — vial 20 mL (200 mg)</b>',
      'Diluyente':             'SF 0.9%, SG 5% o Ringer Lactato',
      'Dilución final':        'Diluir en 100 mL SF/SG 5% (puede administrarse sin diluir en infusiones cortas según ficha técnica)',
      'Dosis de carga (estatus epiléptico)': '<b>200-400 mg IV en 15-30 min</b>',
      'Dosis de mantenimiento': '<b>100-200 mg IV/VO c/12 h</b>',
      '⏱️ Tiempo de infusión (carga)': '<b>15-30 min — la infusión más rápida (<15 min) aumenta el riesgo de efectos sobre la conducción cardíaca y mareo</b>',
      'Vía':                   'IV en perfusión corta · Oral (misma dosis, biodisponibilidad ~100%, permite conversión directa)',
      '⏱️ Inicio efecto':       'Minutos tras completar la infusión de carga',
      '🧊 Estabilidad':         '<b>24 h a temperatura ambiente tras diluir</b>',
    },

    vigilancia: {
      antes: [
        'ECG basal — medir el intervalo PR, especialmente si hay cardiopatía conocida o el paciente toma otros fármacos que afectan la conducción AV.',
        'Revisar la medicación concomitante: betabloqueantes, calcioantagonistas, otros antiepilépticos bloqueantes de canales de sodio (carbamazepina, fenitoína) — riesgo aditivo sobre el PR.',
        'Función hepática y renal basal si se prevé tratamiento de mantenimiento prolongado.',
        'Confirmar la indicación (estatus epiléptico refractario a benzodiacepinas, o mantenimiento de crisis focales).',
      ],
      durante: [
        'Infundir en 15-30 min — no acortar el tiempo de infusión sin indicación específica.',
        'Monitorización ECG durante la carga en pacientes con cardiopatía o trastornos de la conducción conocidos.',
        'Vigilar mareo, somnolencia o inestabilidad durante y después de la infusión.',
        'TA y FC durante la administración.',
      ],
      despues: [
        'ECG de control si hubo cambios durante la infusión o el paciente tiene factores de riesgo cardíaco.',
        'Vigilar la respuesta clínica (cese de las crisis) y el nivel de sedación.',
        'Transición a la vía oral con la misma dosis en cuanto sea posible.',
        'Documentar dosis, velocidad de infusión y respuesta clínica.',
      ],
      suspender: [
        'Bloqueo AV significativo o prolongación excesiva del PR con relevancia clínica.',
        'Reacción alérgica grave.',
        'Ausencia de respuesta tras la carga completa — escalar según el algoritmo de estatus epiléptico refractario (considerar anestesia general con propofol/midazolam en perfusión).',
      ],
    },

    incompatibilidades: [
      'No mezclar con otros fármacos en la misma vía sin verificar compatibilidad.',
      'Precaución con otros fármacos que prolongan el PR (betabloqueantes, calcioantagonistas, otros antiepilépticos bloqueantes de sodio) — efecto aditivo sobre la conducción AV.',
      'Compatible con SF 0.9%, SG 5% y Ringer Lactato para dilución.',
    ],

    alertasSeguridad: [
      '🟠 PROLONGACIÓN DEL PR Y RIESGO DE BLOQUEO AV — monitorización ECG en cardiopatía o uso concomitante de otros fármacos que afectan la conducción.',
      '🟠 Mareo y sedación frecuentes, especialmente con infusión rápida — infundir en el tiempo indicado (15-30 min).',
      '🟢 Sin interacciones farmacocinéticas relevantes — ventaja en pacientes polimedicados frente a fenitoína/carbamazepina.',
      '🟡 Misma dosis IV y oral (biodisponibilidad ~100%) — facilita la transición y el ajuste de dosis.',
    ],
  },

  modulos: {
    respiratorio: `
      <b>Estatus Epiléptico Refractario a Benzodiacepinas — Opciones de 2ª línea:</b><br/>
      Tras 2 dosis de benzodiacepina sin respuesta (20-30 min de crisis continua), elegir UNA de las siguientes opciones de 2ª línea según disponibilidad y perfil del paciente:<br/><br/>
      • <b>Levetiracetam</b> 60 mg/kg IV (máx 4.500 mg) en 10-15 min.<br/>
      • <b>Ácido valproico</b> 40 mg/kg IV (máx 3.000 mg) en 10 min.<br/>
      • <b>Fenitoína/fosfenitoína</b> 20 mg/kg IV (equivalente).<br/>
      • <b>Lacosamida</b> 200-400 mg IV en 15-30 min — especialmente útil si se busca evitar interacciones farmacocinéticas o hay preocupación por hipotensión (menor que con fenitoína).<br/><br/>
      <b>Si no cede en 20-30 min más (estatus refractario):</b> anestesia general con propofol o midazolam en perfusión continua, en UCI con monitorización EEG si está disponible.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Infundir la dosis de carga en 15-30 min — no acortar el tiempo sin indicación específica del equipo médico.',
      'ECG basal y monitorización durante la carga en pacientes con cardiopatía conocida o uso de otros fármacos que afectan la conducción AV.',
      'Vigilar mareo, sedación e inestabilidad durante y después de la infusión.',
      'Verificar la medicación concomitante que pueda potenciar el efecto sobre el PR.',
      'Cronometrar la duración de la crisis y registrar cada dosis con su hora en el contexto de estatus epiléptico.',
      'Coordinar la transición a vía oral con la misma dosis en cuanto el paciente pueda tragar.',
      'Documentar dosis, velocidad de infusión, hallazgos del ECG y respuesta clínica.',
    ],

    efectosAdversos: [
      '🟠 Prolongación del intervalo PR / bloqueo AV',
      '🟠 Mareo, inestabilidad (especialmente con infusión rápida)',
      '🟡 Somnolencia, sedación',
      '🟡 Diplopía, visión borrosa',
      '🟡 Náuseas, vómitos',
      '🟡 Cefalea',
    ],

    contraindicaciones: [
      'Bloqueo AV de segundo o tercer grado sin marcapasos.',
      'Hipersensibilidad a la lacosamida.',
      'Precaución en cardiopatía estructural grave o trastornos de la conducción conocidos — vigilancia ECG reforzada.',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar el vial a temperatura ambiente protegido de luz directa.',

    estabilidad: {
      'Vial sin abrir':        'Temperatura ambiente hasta vencimiento',
      'Diluido en SF/SG 5%/RL': '<b>24 h a temperatura ambiente</b>',
      'Aspecto':                 'Solución incolora — desechar si turbia',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de 24 h tras apertura.',
      dosisRestante:     'Desechar sobrante de vial abierto.',
      infusionPreparada: '24 h en SF 0.9%, SG 5% o Ringer Lactato a temperatura ambiente.',
      notas:             'Puede administrarse sin diluir en infusiones cortas según ficha técnica. Misma dosis IV y oral — biodisponibilidad oral ~100%.',
    },

    presentaciones: [
      'Vimpat® 10 mg/mL — vial 20 mL (200 mg) IV',
      'Vimpat® 50 mg, 100 mg, 150 mg, 200 mg — comprimidos (oral)',
      'Lacosamida genérica — presentaciones similares',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Estatus epiléptico (2ª línea, carga)', dosis: '<b>200-400 mg IV en 15-30 min</b>',           via: 'IV' },
      { indicacion: 'Mantenimiento',                          dosis: '<b>100-200 mg IV/VO c/12 h</b>',              via: 'IV/VO' },
      { indicacion: 'Inicio de mantenimiento (sin carga)',    dosis: '50 mg VO c/12 h, aumentar progresivamente',   via: 'VO' },
    ],

    embarazo: 'Categoría C (FDA). Datos limitados en humanos. Usar solo si el beneficio supera el riesgo, en el contexto de epilepsia/estatus epiléptico durante el embarazo, dado que las crisis no controladas suponen un riesgo materno-fetal significativo por sí mismas.',

    pediatria: '≥4 años (según ficha técnica, ampliándose progresivamente el rango de edad aprobado): dosis ajustada por peso según protocolo pediátrico específico de neurología. Uso creciente en el estatus epiléptico pediátrico refractario a benzodiacepinas.',

    adultoMayor: 'Mayor riesgo de efectos sobre la conducción cardíaca por mayor prevalencia de cardiopatía. ECG basal especialmente recomendado. Sin ajuste de dosis formal por edad, pero vigilancia más estrecha.',

    insufRenal: 'Ajuste de dosis en insuficiencia renal grave (ClCr <30 mL/min): reducir la dosis máxima diaria según ficha técnica. En diálisis, puede requerirse suplemento tras la sesión.',

    insufHepatica: 'Ajuste de dosis en insuficiencia hepática moderada: reducir la dosis máxima diaria. Evitar en insuficiencia hepática grave por datos limitados.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Vimpat® (lacosamida).',
      'Neurocritical Care Society. Guideline for Status Epilepticus. Neurocrit Care. 2023.',
      'Kellinghaus C et al. Factors predicting cessation of status epilepticus in clinical practice: report of a multicenter observational study. Epilepsia. 2019.',
      'Strzelczyk A et al. Intravenous lacosamide in status epilepticus and seizure clusters. Epilepsia. 2017.',
      'Glauser T et al. Evidence-Based Guideline: Treatment of Convulsive Status Epilepticus. Epilepsy Currents. 2016.',
    ],
  },

});
