/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/metoprolol.js
   Fuentes: CIMA AEMPS (Beloken), FDA DailyMed,
   ESC ACS/Atrial Fibrillation Guidelines 2023,
   AHA/ACC Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'metoprolol',
  nombre:         'Metoprolol IV',
  nombreComercial: 'Beloken®',
  nombreGenerico: 'Metoprolol Tartrate',
  categoria:      'antiarritmicos',
  tags:           ['betabloqueante', 'control de frecuencia', 'fibrilación auricular', 'síndrome coronario agudo', 'hipertensión', 'taquicardia', 'clásico'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Betabloqueante cardioselectivo. Riesgo de bradicardia grave, bloqueo AV e hipotensión, especialmente con administración IV rápida. Contraindicado en asma/broncoespasmo activo, bloqueo AV avanzado sin marcapasos, insuficiencia cardíaca descompensada aguda y shock cardiogénico. La suspensión brusca tras uso prolongado puede desencadenar isquemia de rebote.',

  nivel1: {

    puntosClave: [
      '<b>Betabloqueante cardioselectivo IV</b> — control de frecuencia en fibrilación/flutter auricular, síndrome coronario agudo, y taquicardia sinusal sintomática.',
      'Dosis: <b>2.5-5 mg IV lento (en 2-5 min)</b>, repetible cada 5-10 min hasta respuesta o dosis máxima de 15 mg.',
      '<b>Vigilar FC y TA continuas</b> durante y después de la administración — bradicardia e hipotensión son los efectos limitantes.',
      'En el <b>síndrome coronario agudo</b>: reduce la demanda miocárdica de oxígeno; contraindicado si hay signos de insuficiencia cardíaca aguda o shock.',
      'Transición a vía oral en cuanto sea posible — la <b>suspensión brusca tras uso prolongado</b> puede desencadenar taquicardia e isquemia de rebote.',
    ],

    resumenRapido: 'Betabloqueante cardioselectivo (beta-1) de uso muy extendido en la práctica hospitalaria, disponible tanto en formulación oral como intravenosa, lo que facilita la transición entre ambas vías según la situación clínica. Reduce la frecuencia cardíaca, la contractilidad y la demanda miocárdica de oxígeno, siendo de primera línea en el control de la frecuencia en la fibrilación/flutter auricular, en el síndrome coronario agudo (cuando no hay contraindicación) y en diversas taquiarritmias supraventriculares. Su principal limitación en el uso agudo es el riesgo de bradicardia, bloqueo AV e hipotensión, por lo que la administración IV debe ser lenta y con monitorización continua.',

    objetivoTerapeutico: 'Control de la frecuencia cardíaca en la fibrilación/flutter auricular · Tratamiento del síndrome coronario agudo (reducción de la demanda miocárdica de oxígeno) · Tratamiento de la taquicardia sinusal sintomática y otras taquiarritmias supraventriculares · Control agudo de la hipertensión arterial asociada a taquicardia',

    preparacion: {
      'Presentación':          '<b>Beloken® 1 mg/mL — ampolla 5 mL (5 mg)</b>',
      'Diluyente':             'Puede administrarse sin diluir (IV lenta) o diluido en SF 0.9%/SG 5%',
      'Dosis estándar':        '<b>2.5-5 mg IV lento en 2-5 min</b>, repetible cada 5-10 min según respuesta (máx 15 mg total)',
      'Velocidad de infusión': '<b>No superar 1-2 mg/min</b> — la administración rápida aumenta el riesgo de bradicardia e hipotensión graves',
      'Transición a oral':     'Iniciar metoprolol oral en cuanto la situación clínica lo permita (habitualmente a las horas de la dosis IV)',
      'Vía':                   'IV lenta',
      '⏱️ Inicio efecto':       '5-10 min tras la administración IV',
      '⏱️ Duración':            '5-8 h',
      '🧊 Estabilidad':         '<b>24 h a temperatura ambiente en SF 0.9% o SG 5% si se diluye</b>',
    },

    vigilancia: {
      antes: [
        'FC y TA basales — contraindicado si bradicardia significativa o hipotensión.',
        'Auscultación pulmonar — descartar broncoespasmo activo o insuficiencia cardíaca aguda descompensada.',
        'ECG basal — descartar bloqueo AV avanzado.',
        'Confirmar que no hay signos de shock cardiogénico o insuficiencia cardíaca aguda antes de administrar en el contexto de SCA.',
      ],
      durante: [
        'Administrar en bolo IV lento (2-5 min) — nunca en bolo rápido.',
        'Monitorización ECG y de TA continuas durante la administración.',
        'Vigilar bradicardia — si FC <50 lpm, detener la administración y reevaluar.',
        'Vigilar signos de broncoespasmo en pacientes con antecedente respiratorio.',
      ],
      despues: [
        'FC y TA cada 15-30 min hasta la estabilización.',
        'Auscultación pulmonar periódica en pacientes con riesgo de insuficiencia cardíaca.',
        'Reevaluar la respuesta a la frecuencia cardíaca objetivo o al control de la arritmia.',
        'Transicionar a vía oral en cuanto sea posible.',
        'Documentar dosis, FC/TA pre y post, y respuesta clínica.',
      ],
      suspender: [
        'Bradicardia significativa (FC <50 lpm) o bloqueo AV.',
        'Hipotensión sintomática.',
        'Signos de broncoespasmo o insuficiencia cardíaca aguda.',
        'Al alcanzar la dosis máxima (15 mg) sin respuesta adecuada — reevaluar la estrategia terapéutica.',
      ],
    },

    incompatibilidades: [
      'Precaución con otros fármacos bradicardizantes (digoxina, verapamilo, diltiazem IV) — efecto aditivo sobre la FC y la conducción AV.',
      'No mezclar con soluciones alcalinas.',
      'Compatible con SF 0.9% y SG 5% para dilución.',
    ],

    alertasSeguridad: [
      '🔴 BRADICARDIA Y BLOQUEO AV — monitorización ECG obligatoria; detener si FC <50 lpm.',
      '🟠 HIPOTENSIÓN con administración rápida — infundir siempre lento (no superar 1-2 mg/min).',
      '🟠 CONTRAINDICADO en broncoespasmo activo, shock cardiogénico e insuficiencia cardíaca aguda descompensada.',
      '🟡 No suspender bruscamente tras uso prolongado — riesgo de taquicardia e isquemia de rebote.',
      '🟡 Precaución con otros fármacos bradicardizantes/depresores de la conducción AV concomitantes.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Administrar en bolo IV lento (2-5 min) — nunca en bolo rápido.',
      'Monitorización ECG y de TA continuas durante y después de la administración.',
      'Detener si aparece bradicardia significativa (FC <50 lpm) o hipotensión sintomática.',
      'Auscultar los pulmones antes y después de la administración en pacientes con riesgo cardiovascular.',
      'Verificar la ausencia de contraindicaciones (broncoespasmo, shock, insuficiencia cardíaca aguda) antes de cada dosis.',
      'Coordinar con el equipo médico la transición a la vía oral en cuanto sea posible.',
      'Advertir sobre la importancia de no suspender el tratamiento oral de mantenimiento de forma brusca.',
      'Documentar dosis, FC/TA pre y post, y respuesta clínica en cada administración.',
    ],

    efectosAdversos: [
      '🔴 Bradicardia grave / bloqueo AV',
      '🔴 Hipotensión significativa (con administración rápida)',
      '🟠 Broncoespasmo (en pacientes predispuestos)',
      '🟠 Insuficiencia cardíaca aguda (en pacientes con reserva cardíaca limitada)',
      '🟡 Fatiga, mareo',
      '🟡 Frialdad en extremidades (vasoconstricción periférica relativa)',
    ],

    contraindicaciones: [
      'Bradicardia significativa (FC <50-60 lpm) o bloqueo AV de segundo o tercer grado sin marcapasos.',
      'Asma o broncoespasmo activo grave.',
      'Shock cardiogénico.',
      'Insuficiencia cardíaca aguda descompensada.',
      'Hipotensión sintomática.',
      'Hipersensibilidad a betabloqueantes.',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar la ampolla a temperatura ambiente protegida de luz directa.',

    estabilidad: {
      'Ampolla sin abrir':     'Temperatura ambiente hasta vencimiento',
      'Diluida en SF/SG 5%':  '<b>24 h a temperatura ambiente</b>',
      'Aspecto':                'Solución incolora — desechar si turbia',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de 24 h tras apertura.',
      dosisRestante:     'Desechar sobrante de ampolla abierta.',
      infusionPreparada: '24 h en SF 0.9% o SG 5% a temperatura ambiente si se diluye.',
      notas:             'Puede administrarse sin diluir en bolo IV lento. Transición a vía oral en cuanto sea posible clínicamente.',
    },

    presentaciones: [
      'Beloken® 1 mg/mL — ampolla 5 mL (5 mg)',
      'Metoprolol genérico IV — presentaciones similares',
      'Beloken® / Lopresor® — comprimidos orales (tartrato, liberación inmediata) y succinato de liberación prolongada',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Control de frecuencia (FA/flutter)',       dosis: '<b>2.5-5 mg IV lento c/5-10 min (máx 15 mg)</b>', via: 'IV' },
      { indicacion: 'Síndrome coronario agudo (sin contraindicación)', dosis: '2.5-5 mg IV lento, repetible según protocolo', via: 'IV' },
      { indicacion: 'Taquicardia sinusal sintomática',            dosis: '2.5-5 mg IV lento',                                via: 'IV' },
      { indicacion: 'Transición a oral',                           dosis: '25-100 mg VO c/12 h (tartrato) según respuesta',  via: 'VO' },
    ],

    embarazo: 'Categoría C (FDA). Se ha usado en arritmias e hipertensión durante el embarazo cuando está indicado, con vigilancia del crecimiento fetal (riesgo de restricción del crecimiento intrauterino con betabloqueantes en general) y del recién nacido por posible bradicardia/hipoglucemia neonatal transitoria si se usa cerca del parto.',

    pediatria: 'Uso IV pediátrico bajo supervisión de cardiología: 0.1-0.2 mg/kg IV lento, dosis ajustada por peso. Menos estandarizado que en adultos — requiere protocolo específico según la institución.',

    adultoMayor: 'Mayor sensibilidad a la bradicardia y la hipotensión. Iniciar con la dosis más baja del rango (2.5 mg) y vigilar estrechamente la respuesta antes de repetir. Mayor prevalencia de comorbilidad que puede contraindicar su uso (EPOC, bloqueo AV).',

    insufRenal: 'Sin ajuste de dosis específico necesario — el metoprolol se metaboliza fundamentalmente por vía hepática, con mínima eliminación renal.',

    insufHepatica: 'Precaución en insuficiencia hepática grave — el metabolismo es hepático (CYP2D6); considerar dosis reducida y vigilar la respuesta clínica más estrechamente.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Beloken® (metoprolol tartrato).',
      'Byrne RA et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023.',
      'Hindricks G et al. 2020 ESC Guidelines for the diagnosis and management of atrial fibrillation. Eur Heart J. 2021.',
      'Gilbert DN et al. Beta-Blockers in Acute Cardiac Care. Crit Care Med. 2020.',
      'Página CJ et al. 2015 ACC/AHA/HRS Guideline for the Management of Adult Patients With Supraventricular Tachycardia. Circulation. 2016.',
    ],
  },

});
