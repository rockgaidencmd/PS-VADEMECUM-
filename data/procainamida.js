/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/procainamida.js
   Fuentes: CIMA AEMPS, FDA DailyMed, AHA ACLS Guidelines
   2020 (taquicardia de complejo ancho), ESC Arrhythmia
   Guidelines 2019
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'procainamida',
  nombre:         'Procainamida',
  nombreGenerico: 'Procainamide Hydrochloride',
  categoria:      'antiarritmicos',
  tags:           ['antiarrítmico', 'taquicardia de complejo ancho', 'fibrilación auricular', 'Wolff-Parkinson-White', 'clase Ia', 'clásico'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Antiarrítmico de clase Ia con riesgo de hipotensión significativa y prolongación del QT que puede degenerar en torsades de pointes. Infundir SIEMPRE con monitorización ECG y de TA continuas. Contraindicado en QT prolongado basal, bloqueo AV avanzado sin marcapasos y miastenia gravis. Metabolito activo (NAPA) con toxicidad propia — vigilar en insuficiencia renal.',

  nivel1: {

    puntosClave: [
      '<b>Antiarrítmico de elección en taquicardia de complejo ancho estable</b> de origen incierto y en la fibrilación auricular con Wolff-Parkinson-White (WPW) — a diferencia de la amiodarona, no bloquea la vía accesoria de forma peligrosa.',
      'Dosis de carga: <b>perfusión IV de 20-50 mg/min hasta control de la arritmia, hipotensión, ensanchamiento del QRS >50% o dosis máxima de 17 mg/kg</b>.',
      '<b>Hipotensión</b> frecuente durante la infusión — vigilar TA de forma continua.',
      '<b>Prolongación del QT</b> con riesgo de torsades de pointes — monitorización ECG obligatoria durante toda la administración.',
      'Mantenimiento en <b>perfusión continua (1-4 mg/min)</b> tras el control de la arritmia.',
    ],

    resumenRapido: 'Antiarrítmico de clase Ia que bloquea los canales de sodio, enlenteciendo la conducción y prolongando la repolarización (efecto Ia clásico: ensanchamiento del QRS y prolongación del QT). Es uno de los pocos antiarrítmicos considerados seguros y eficaces para la fibrilación auricular preexcitada (con Wolff-Parkinson-White), ya que no bloquea selectivamente el nodo AV (a diferencia de la amiodarona, que en este contexto puede favorecer peligrosamente la conducción por la vía accesoria). También se emplea en la taquicardia ventricular estable y en la taquicardia de complejo ancho de origen incierto cuando otras opciones no son adecuadas. Su uso está limitado por la hipotensión frecuente durante la infusión y el riesgo de prolongación del QT con torsades de pointes.',

    objetivoTerapeutico: 'Tratamiento de la taquicardia ventricular monomórfica estable · Tratamiento de la fibrilación/taquicardia auricular preexcitada (Wolff-Parkinson-White) · Tratamiento de la taquicardia de complejo ancho estable de origen incierto · Cardioversión farmacológica de la fibrilación auricular de reciente inicio (uso menos frecuente)',

    preparacion: {
      'Presentación':          '<b>Procainamida 100 mg/mL o 500 mg/mL — ampolla 10 mL</b>',
      'Diluyente':             'SF 0.9% o SG 5%',
      'Dosis de carga (perfusión)': '<b>20-50 mg/min IV en perfusión</b>, hasta: control de la arritmia, hipotensión, ensanchamiento del QRS >50% sobre el basal, o dosis máxima acumulada de 17 mg/kg',
      'Dosis de carga (más lenta, en pacientes estables)': '20 mg/min en perfusión (opción más conservadora)',
      'Dosis de mantenimiento': '<b>1-4 mg/min en perfusión continua</b> tras el control de la arritmia',
      'Dilución':              'Diluir en SF 0.9% o SG 5% según protocolo institucional (concentración habitual 2-4 mg/mL para el mantenimiento)',
      'Vía':                   '<b>IV en perfusión — NUNCA en bolo rápido</b>',
      '⏱️ Inicio efecto':       'Minutos tras alcanzar la dosis eficaz durante la carga',
      '🧊 Estabilidad':         '<b>24 h a temperatura ambiente en SF 0.9% o SG 5% tras diluir; proteger de la luz</b>',
    },

    vigilancia: {
      antes: [
        'ECG de 12 derivaciones basal — medir el QT/QTc y la duración del QRS.',
        'TA basal — la hipotensión es frecuente durante la infusión.',
        'Ionograma: potasio y magnesio — la hipopotasemia/hipomagnesemia potencian el riesgo de torsades.',
        'Función renal — el metabolito activo (NAPA) se acumula en insuficiencia renal.',
        'Confirmar el diagnóstico de la arritmia (taquicardia ventricular vs. supraventricular con conducción aberrante) según sea posible.',
      ],
      durante: [
        '<b>Monitorización ECG continua</b> durante toda la infusión de carga — vigilar el ensanchamiento del QRS y la prolongación del QT.',
        '<b>TA cada 2-5 min</b> durante la carga — detener o reducir la velocidad si aparece hipotensión significativa.',
        'Detener la infusión de carga si: se controla la arritmia, aparece hipotensión, el QRS se ensancha >50% sobre el basal, o se alcanza la dosis máxima.',
        'Tener disponible el equipo de reanimación y desfibrilador.',
      ],
      despues: [
        'ECG de control tras la carga y periódicamente durante el mantenimiento.',
        'TA hasta la estabilización hemodinámica.',
        'Niveles plasmáticos de procainamida y NAPA si están disponibles, especialmente en insuficiencia renal o mantenimiento prolongado.',
        'Ionograma periódico durante el mantenimiento.',
        'Documentar la dosis de carga total administrada, la respuesta electrocardiográfica y hemodinámica.',
      ],
      suspender: [
        'Hipotensión significativa no controlable.',
        'Ensanchamiento del QRS >50% sobre el basal.',
        'Prolongación excesiva del QT o aparición de torsades de pointes.',
        'Al alcanzar la dosis máxima de carga (17 mg/kg) sin control de la arritmia — considerar cardioversión eléctrica o alternativa antiarrítmica.',
        'Control satisfactorio de la arritmia (pasar a mantenimiento o suspender según evolución).',
      ],
    },

    incompatibilidades: [
      'No mezclar con otros antiarrítmicos en la misma vía sin valorar el riesgo de efecto aditivo sobre la conducción/QT.',
      'Precaución con otros fármacos que prolongan el QT (uso concomitante aumenta el riesgo de torsades).',
      'Compatible con SF 0.9% y SG 5% para dilución.',
    ],

    alertasSeguridad: [
      '🔴 HIPOTENSIÓN frecuente durante la infusión de carga — TA cada 2-5 min, detener si es significativa.',
      '🔴 PROLONGACIÓN DEL QT con riesgo de TORSADES DE POINTES — monitorización ECG continua obligatoria.',
      '🟠 Corregir la hipopotasemia/hipomagnesemia antes de iniciar — potencian el riesgo de torsades.',
      '🟠 El metabolito activo (NAPA) se acumula en insuficiencia renal — ajuste de dosis y niveles si están disponibles.',
      '🟡 De elección en la fibrilación auricular preexcitada (WPW) — a diferencia de la amiodarona, que puede ser peligrosa en este contexto específico.',
      '🟡 Detener la carga ante ensanchamiento del QRS >50% sobre el basal.',
    ],
  },

  modulos: {
    cardio: `
      <b>Protocolo Taquicardia de Complejo Ancho Estable — Procainamida:</b><br/>
      <b>Indicación:</b> taquicardia ventricular monomórfica estable, o taquicardia de complejo ancho de origen incierto, especialmente si hay sospecha de fibrilación auricular preexcitada (WPW) — evitar amiodarona en este último caso.<br/><br/>
      <b>Administración:</b><br/>
      • Perfusión de carga: 20-50 mg/min IV, con monitorización ECG y TA continuas.<br/>
      • Detener la carga ante: control de la arritmia, hipotensión, ensanchamiento del QRS &gt;50%, o dosis máxima de 17 mg/kg.<br/>
      • Mantenimiento: 1-4 mg/min en perfusión continua.<br/><br/>
      <b>Si el paciente se vuelve inestable en cualquier momento:</b> cardioversión eléctrica sincronizada inmediata según el algoritmo de taquicardia con pulso de ACLS — no continuar con el antiarrítmico farmacológico.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Preparar la perfusión de carga según protocolo institucional, con bomba de infusión para un control preciso de la velocidad.',
      'Monitorización ECG continua durante toda la infusión — vigilar la anchura del QRS y el intervalo QT.',
      'TA cada 2-5 min durante la carga — comunicar de inmediato si aparece hipotensión.',
      'Tener preparado el equipo de reanimación y el desfibrilador durante la administración.',
      'Corregir el potasio y el magnesio antes de iniciar si están alterados.',
      'Vigilar signos de torsades de pointes (síncope, palpitaciones, cambios en el ritmo en el monitor).',
      'Tras la carga, programar la perfusión de mantenimiento según indicación médica.',
      'Documentar la dosis total de carga, la respuesta del QRS/QT y la TA en cada control.',
    ],

    efectosAdversos: [
      '🔴 Hipotensión (frecuente durante la carga)',
      '🔴 Torsades de pointes (por prolongación del QT)',
      '🟠 Bloqueo AV o ensanchamiento excesivo del QRS',
      '🟠 Síndrome lupus-like (con uso prolongado, no en la emergencia aguda)',
      '🟡 Náuseas, vómitos',
      '🟡 Fiebre por fármacos',
    ],

    contraindicaciones: [
      'QT prolongado basal o síndrome de QT largo congénito.',
      'Bloqueo AV de segundo o tercer grado sin marcapasos.',
      'Miastenia gravis (puede empeorar la debilidad muscular).',
      'Hipotensión grave no corregida.',
      'Hipersensibilidad a procainamida o procaína.',
      'Torsades de pointes previas.',
    ],

    fotosensibilidad: 'La solución es fotosensible — proteger de la luz durante el almacenamiento y la infusión si es prolongada. Conservar la ampolla en su envase original.',

    estabilidad: {
      'Ampolla sin abrir':     'Temperatura ambiente hasta vencimiento, proteger de la luz',
      'Diluida en SF/SG 5%':  '<b>24 h a temperatura ambiente, proteger de la luz</b>',
      'Aspecto':                'Solución incolora a ligeramente amarillenta — desechar si oscurecida (signo de degradación)',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de 24 h tras apertura.',
      dosisRestante:     'Desechar sobrante de ampolla abierta.',
      infusionPreparada: '24 h en SF 0.9% o SG 5% a temperatura ambiente, protegida de la luz.',
      notas:             'Vigilar el color de la solución — el oscurecimiento indica degradación. Usar bomba de infusión para un control preciso de la velocidad.',
    },

    presentaciones: [
      'Procainamida 100 mg/mL — ampolla 10 mL',
      'Procainamida 500 mg/mL — ampolla 10 mL (concentrada)',
      'Procainamida genérica — presentaciones similares según fabricante',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Carga (taquicardia de complejo ancho/TV estable)', dosis: '<b>20-50 mg/min IV hasta control, hipotensión, QRS +50% o 17 mg/kg</b>', via: 'IV' },
      { indicacion: 'Mantenimiento (perfusión)',                          dosis: '<b>1-4 mg/min en perfusión continua</b>',                              via: 'IV' },
      { indicacion: 'Fibrilación auricular preexcitada (WPW)',            dosis: 'Carga según protocolo estándar (20-50 mg/min)',                        via: 'IV' },
    ],

    embarazo: 'Categoría C (FDA). Datos limitados en humanos. Usar solo si el beneficio supera el riesgo, en arritmias graves durante el embarazo sin alternativa más estudiada, con monitorización materno-fetal estrecha.',

    pediatria: 'Carga: 3-6 mg/kg IV en 5 min (dosis pediátrica, más lenta que en adultos), máx 100 mg por dosis, repetible cada 5-10 min hasta control (máx 15 mg/kg total). Mantenimiento: 20-80 mcg/kg/min en perfusión. Uso bajo supervisión de cardiología pediátrica.',

    adultoMayor: 'Mayor riesgo de hipotensión y de acumulación del metabolito NAPA por reducción de la función renal relacionada con la edad. Considerar velocidad de infusión más conservadora (20 mg/min) y vigilancia hemodinámica más estrecha.',

    insufRenal: '<b>Ajuste de dosis de mantenimiento necesario</b> — tanto la procainamida como su metabolito activo (NAPA) se eliminan por vía renal y se acumulan en la insuficiencia renal. Reducir la dosis de mantenimiento y monitorizar niveles plasmáticos si están disponibles.',

    insufHepatica: 'Precaución — parte del metabolismo es hepático (acetilación a NAPA). En insuficiencia hepática grave, vigilar la acumulación y ajustar según respuesta clínica y ECG.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Procainamida.',
      'Panchal AR et al. 2020 American Heart Association Guidelines for CPR and ECC — Adult Tachycardia Algorithm. Circulation. 2020.',
      'Hindricks G et al. 2020 ESC Guidelines for the diagnosis and management of atrial fibrillation. Eur Heart J. 2021.',
      'Al-Khatib SM et al. 2017 AHA/ACC/HRS Guideline for Management of Patients With Ventricular Arrhythmias. Circulation. 2018.',
      'Ortiz M et al. Randomized comparison of intravenous procainamide vs. intravenous amiodarone for the acute treatment of tolerated wide QRS tachycardia. Eur Heart J. 2017 (PROCAMIO trial).',
    ],
  },

});
