/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/cloruro-calcio.js
   Fuentes: CIMA AEMPS, FDA DailyMed, AHA ACLS Guidelines 2020
   (parada cardíaca por hiperpotasemia/hipocalcemia/toxicidad
   por calcioantagonistas), Cuadro Básico IMSS México
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'cloruro-calcio',
  nombre:         'Cloruro de Calcio',
  nombreGenerico: 'Calcium Chloride',
  categoria:      'electrolitos',
  tags:           ['electrolito', 'calcio', 'hiperpotasemia', 'hipocalcemia', 'paro cardíaco', 'antídoto', 'calcioantagonistas', 'cuadro básico'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'SOLUCIÓN HIPERTÓNICA MUY IRRITANTE — la extravasación causa necrosis tisular grave. Administrar EXCLUSIVAMENTE por vía central cuando sea posible, o vena periférica de gran calibre con vigilancia estrecha. Contiene 3 VECES más calcio elemental que el gluconato de calcio en igual volumen — no son intercambiables mL por mL. La infusión rápida puede causar arritmias graves y paro cardíaco. NUNCA administrar en la misma vía que el bicarbonato (precipita) ni junto con digoxina sin extrema precaución.',

  nivel1: {

    puntosClave: [
      '<b>Contiene 3 veces más calcio elemental que el gluconato de calcio</b> en igual volumen — 1 g de cloruro de calcio = 270 mg de calcio elemental (vs. 90 mg del gluconato).',
      'Indicado en <b>paro cardíaco por hiperpotasemia, hipocalcemia o toxicidad por calcioantagonistas/betabloqueantes</b> — de elección sobre el gluconato en el contexto de paro (acción más rápida y potente).',
      'Dosis en paro/emergencia: <b>1 g (10 mL de solución al 10%) IV lento</b>, puede repetirse según respuesta.',
      '<b>ALTAMENTE IRRITANTE Y ESCLEROSANTE</b> — preferir vía central; si periférica, vena de gran calibre y vigilancia continua del punto de infusión.',
      '<b>Infundir lento</b> (no más rápido que 1 mL/min en bolo, o según protocolo de la emergencia) — la administración rápida causa bradicardia/arritmias.',
    ],

    resumenRapido: 'Sal de calcio inorgánica que aporta calcio elemental de forma inmediata y en mayor concentración que el gluconato de calcio (270 mg vs 90 mg de calcio elemental por gramo). Es la forma de calcio de elección en las situaciones de emergencia vital donde se requiere una corrección rápida y potente: paro cardíaco asociado a hiperpotasemia grave, hipocalcemia grave sintomática, toxicidad por calcioantagonistas o betabloqueantes, e hipermagnesemia grave. Su principal limitación es su elevada osmolaridad y su efecto irritante/esclerosante sobre el endotelio venoso, por lo que se prefiere la vía central siempre que la situación clínica lo permita, reservando la vía periférica de gran calibre para las emergencias donde no hay tiempo de canalizar un acceso central.',

    objetivoTerapeutico: 'Tratamiento de la parada cardíaca asociada a hiperpotasemia, hipocalcemia o hipermagnesemia grave · Antídoto en la toxicidad grave por calcioantagonistas y betabloqueantes · Corrección de la hipocalcemia sintomática grave (tetania, convulsiones, arritmias) · Estabilización de membrana en la hiperpotasemia grave con cambios electrocardiográficos',

    preparacion: {
      'Presentación':          '<b>Cloruro de Calcio 10% — ampolla 10 mL (1 g = 100 mg/mL = 13.6 mEq de calcio elemental)</b>',
      'Contenido de calcio elemental': '<b>1 g de cloruro de calcio = 270 mg de calcio elemental</b> (3× más que el gluconato)',
      'Diluyente':             'Puede administrarse sin diluir en emergencia vital, o diluido en SF 0.9%/SG 5% según la urgencia',
      'Dosis en paro/emergencia': '<b>1 g (10 mL de solución al 10%) IV lento</b>, repetible según respuesta y ECG',
      'Velocidad de infusión': '<b>No superar 1 mL/min en bolo estándar</b> (en RCP puede administrarse más rápido según protocolo ACLS)',
      'Vía':                   '<b>Vía central preferente</b> — vena periférica de gran calibre solo en emergencia sin tiempo para vía central',
      '⏱️ Inicio efecto':       'Inmediato (segundos-minutos) — ventaja sobre el gluconato en el contexto de emergencia',
      '🧊 Estabilidad':         '<b>24 h a temperatura ambiente en SF 0.9% o SG 5% si se diluye</b>',
    },

    vigilancia: {
      antes: [
        'Confirmar la indicación de emergencia (hiperpotasemia con cambios ECG, hipocalcemia sintomática grave, toxicidad por calcioantagonistas).',
        'ECG basal o monitorización continua ya instaurada.',
        'Verificar el acceso venoso — preferir vía central; si es periférica, vena de gran calibre y buen flujo.',
        'Revisar si el paciente recibe digoxina — el calcio puede potenciar su toxicidad cardíaca.',
        'Ionograma (potasio, calcio, magnesio) si está disponible antes de administrar.',
      ],
      durante: [
        'Monitorización ECG continua — vigilar la normalización de los cambios por hiperpotasemia o la respuesta hemodinámica.',
        'Infundir lento salvo indicación específica de mayor rapidez en el contexto de paro cardíaco según protocolo ACLS.',
        'Vigilar el punto de infusión de forma CONTINUA — la extravasación causa necrosis tisular grave e inmediata.',
        'Vigilar bradicardia o arritmias con la infusión rápida.',
      ],
      despues: [
        'ECG y calcemia de control tras la administración.',
        'Vigilar el punto de infusión en las horas siguientes por signos tardíos de flebitis/necrosis.',
        'Reevaluar la necesidad de dosis adicionales según la respuesta clínica y de laboratorio.',
        'Documentar dosis, vía, ECG pre/post y respuesta clínica.',
      ],
      suspender: [
        'Signos de extravasación — detener inmediatamente esa vía, no reintentar en el mismo punto.',
        'Arritmias graves atribuibles a la infusión rápida.',
        'Normalización del cuadro que motivó su uso (hiperpotasemia corregida, estabilidad hemodinámica).',
        'Hipercalcemia iatrogénica con síntomas.',
      ],
    },

    incompatibilidades: [
      '<b>NUNCA en la misma vía que el bicarbonato sódico</b> — precipitación inmediata (carbonato de calcio).',
      '<b>Precaución extrema con digoxina</b> — el calcio potencia la toxicidad digitálica, riesgo de arritmias graves.',
      'No mezclar con fosfatos — precipitación.',
      'Incompatible con muchas soluciones que contienen sulfatos.',
      'Administrar por vía dedicada siempre que sea posible.',
    ],

    alertasSeguridad: [
      '🔴 EXTRAVASACIÓN = NECROSIS TISULAR GRAVE E INMEDIATA — vigilar el punto de infusión de forma continua.',
      '🔴 NO CONFUNDIR CON GLUCONATO DE CALCIO — el cloruro tiene 3 veces más calcio elemental; no son intercambiables mL por mL.',
      '🔴 NUNCA mezclar con bicarbonato en la misma vía — precipitación inmediata.',
      '🟠 Infusión rápida puede causar bradicardia, arritmias graves e incluso paro cardíaco.',
      '🟠 Potencia la toxicidad de la digoxina — extrema precaución si el paciente la recibe.',
      '🟡 Preferir vía central; la vía periférica solo en emergencia sin tiempo para canalizar un acceso central.',
    ],
  },

  modulos: {
    cardio: `
      <b>Protocolo Hiperpotasemia Grave con Cambios ECG / Paro Cardíaco — Cloruro de Calcio:</b><br/>
      <b>Indicación:</b> hiperpotasemia grave con ensanchamiento del QRS, ausencia de ondas P, o ritmo de paro con sospecha de hiperpotasemia/hipocalcemia/toxicidad por calcioantagonistas.<br/><br/>
      <b>Administración:</b><br/>
      • <b>1 g (10 mL de solución al 10%) IV</b> — en paro cardíaco puede administrarse en bolo rápido según protocolo ACLS; fuera de paro, infundir lento.<br/>
      • Efecto estabilizador de membrana casi inmediato — no corrige el potasio sérico, solo protege temporalmente al miocardio.<br/>
      • Repetir si persisten los cambios ECG.<br/><br/>
      <b>Junto con medidas para reducir el potasio sérico:</b><br/>
      • Insulina + glucosa IV (desplaza el potasio al espacio intracelular).<br/>
      • Salbutamol nebulizado (efecto similar, coadyuvante).<br/>
      • Bicarbonato si hay acidosis metabólica asociada (NUNCA en la misma vía que el calcio).<br/>
      • Diuréticos, resinas de intercambio o diálisis para la eliminación definitiva del potasio.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar que se administra CLORURO y no gluconato de calcio (o viceversa) — confirmar la prescripción exacta, no son intercambiables.',
      'Preferir vía central; si es periférica, usar vena de gran calibre y vigilar el punto de infusión de forma continua.',
      'Infundir lento (no superar 1 mL/min) salvo indicación específica de mayor rapidez en paro cardíaco según protocolo.',
      'Monitorización ECG continua durante la administración.',
      'NUNCA administrar por la misma vía que el bicarbonato sódico — lavar bien la vía entre ambos si se usan secuencialmente.',
      'Extrema precaución si el paciente recibe digoxina — el calcio potencia su toxicidad.',
      'Ante cualquier signo de extravasación (dolor, hinchazón, palidez): detener de inmediato y no reutilizar esa vía.',
      'Documentar dosis, vía, ECG pre/post y respuesta clínica.',
    ],

    efectosAdversos: [
      '🔴 Necrosis tisular por extravasación',
      '🔴 Arritmias graves / paro cardíaco (con infusión rápida)',
      '🟠 Bradicardia',
      '🟠 Hipercalcemia (con dosis repetidas excesivas)',
      '🟡 Sensación de calor, rubor',
      '🟡 Hipotensión transitoria',
      '🟡 Flebitis (incluso sin extravasación franca, por su efecto irritante)',
    ],

    contraindicaciones: [
      'Hipercalcemia preexistente.',
      'Fibrilación ventricular (en el contexto específico de RCP, valorar indicación según causa).',
      'Uso concomitante con digoxina sin extrema precaución y vigilancia ECG.',
      'Precaución en insuficiencia renal grave (menor capacidad de excretar el exceso de calcio).',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar la ampolla a temperatura ambiente protegida de luz directa.',

    estabilidad: {
      'Ampolla sin abrir':     'Temperatura ambiente hasta vencimiento',
      'Diluida en SF/SG 5%':  '<b>24 h a temperatura ambiente</b>',
      'Sin diluir (emergencia)': 'Puede administrarse directamente en el contexto de paro cardíaco según protocolo',
      'Aspecto':                'Solución incolora — desechar si turbia o con precipitado',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de 24 h tras apertura si se diluye.',
      dosisRestante:     'Desechar sobrante de ampolla abierta.',
      infusionPreparada: '24 h en SF 0.9% o SG 5% a temperatura ambiente si se diluye.',
      notas:             'Solución hipertónica muy irritante — vigilancia continua del punto de infusión. No mezclar con bicarbonato ni fosfatos.',
    },

    presentaciones: [
      'Cloruro de Calcio 10% — ampolla 10 mL (1 g)',
      'Cloruro de Calcio genérico — presentaciones similares según fabricante',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Paro cardíaco por hiperpotasemia/hipocalcemia', dosis: '<b>1 g (10 mL al 10%) IV</b>, repetible según respuesta', via: 'IV' },
      { indicacion: 'Toxicidad por calcioantagonistas/betabloqueantes', dosis: '1 g IV, repetible; considerar perfusión continua según gravedad', via: 'IV' },
      { indicacion: 'Hipocalcemia sintomática grave (fuera de paro)',  dosis: '1 g IV lento (infundir en 10-20 min mínimo)',              via: 'IV' },
      { indicacion: 'Hiperpotasemia grave con cambios ECG',              dosis: '1 g IV — efecto estabilizador de membrana temporal',        via: 'IV' },
    ],

    embarazo: 'Categoría C (FDA), aunque el calcio es un electrolito fisiológico esencial y su uso en emergencias vitales (paro cardíaco, hiperpotasemia grave) durante el embarazo no debe retrasarse por esta clasificación — el beneficio en la emergencia supera claramente el riesgo teórico.',

    pediatria: 'Emergencia (paro/hiperpotasemia grave): 20 mg/kg (0.2 mL/kg de la solución al 10%) IV lento, preferiblemente por vía central. Igual precaución con la extravasación — aún más relevante por el menor calibre venoso pediátrico.',

    adultoMayor: 'Sin ajuste de dosis específico por edad en el contexto de emergencia. Mayor prevalencia de tratamiento con digoxina — extremar la precaución por la potenciación de su toxicidad.',

    insufRenal: 'Usar con precaución — menor capacidad de excretar el exceso de calcio, mayor riesgo de hipercalcemia con dosis repetidas. En el contexto de emergencia vital (paro por hiperpotasemia), no retrasar su uso por la insuficiencia renal.',

    insufHepatica: 'Sin ajuste de dosis específico necesario — el calcio no tiene metabolismo hepático relevante.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Cloruro de Calcio.',
      'Panchal AR et al. 2020 American Heart Association Guidelines for CPR and ECC. Circulation. 2020.',
      'Rossignol P et al. Emergency management of severe hyperkalemia. Kidney Int. 2020.',
      'St-Onge M et al. Treatment for calcium channel blocker poisoning: a systematic review. Clin Toxicol. 2014.',
      'Secretaría de Salud México. Cuadro Básico y Catálogo de Medicamentos del Sector Salud.',
    ],
  },

});
