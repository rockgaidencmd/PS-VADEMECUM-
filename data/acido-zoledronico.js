/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/acido-zoledronico.js
   Fuentes: CIMA AEMPS (Zometa), FDA DailyMed,
   ASCO Hypercalcemia of Malignancy Guidelines,
   Endocrine Society Hypercalcemia Guidelines
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'acido-zoledronico',
  nombre:         'Ácido Zoledrónico',
  nombreComercial: 'Zometa®',
  nombreGenerico: 'Zoledronic Acid',
  categoria:      'otros',
  tags:           ['bisfosfonato', 'hipercalcemia', 'oncología', 'metástasis óseas', 'urgencia oncológica', 'nefrotoxicidad'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Riesgo de nefrotoxicidad (necrosis tubular aguda) con infusión rápida o en dosis altas — infundir SIEMPRE en mínimo 15 minutos y ajustar según función renal. Riesgo de hipocalcemia sintomática, especialmente si hay déficit de vitamina D no corregido. Osteonecrosis mandibular con uso prolongado — evaluación dental antes de iniciar el tratamiento crónico en oncología.',

  nivel1: {

    puntosClave: [
      '<b>Tratamiento de elección de la hipercalcemia de malignidad</b> — una de las urgencias oncológicas más frecuentes, potencialmente mortal si no se trata.',
      'Dosis: <b>4 mg IV en infusión de mínimo 15 minutos</b>, diluida en 100 mL SF/SG 5%.',
      '<b>Hidratar SIEMPRE antes de la infusión</b> (SF 0.9%) — la hipercalcemia suele cursar con deshidratación significativa que debe corregirse primero.',
      '<b>Efecto máximo a los 4-7 días</b> — no es de acción inmediata; en la hipercalcemia grave sintomática, combinar con medidas de acción más rápida (hidratación agresiva, calcitonina si está disponible).',
      '<b>Ajuste obligatorio de dosis según función renal</b> — contraindicado si ClCr <30-35 mL/min (según protocolo) por el riesgo de nefrotoxicidad.',
    ],

    resumenRapido: 'Bisfosfonato de tercera generación, el más potente de su clase, que inhibe la resorción ósea mediada por los osteoclastos al bloquear la vía del mevalonato. Es el tratamiento de elección de la hipercalcemia de malignidad (asociada a tumores sólidos con o sin metástasis óseas, y a neoplasias hematológicas), una urgencia oncológica que puede cursar con deshidratación grave, insuficiencia renal, alteración del nivel de consciencia y arritmias. También se emplea en la prevención de eventos óseos (fracturas, compresión medular, necesidad de radioterapia/cirugía ósea) en pacientes con metástasis óseas de tumores sólidos y mieloma múltiple. Su efecto sobre la calcemia no es inmediato, alcanzando el máximo a los 4-7 días, por lo que en la hipercalcemia grave sintomática debe combinarse con medidas de acción más rápida.',

    objetivoTerapeutico: 'Tratamiento de la hipercalcemia de malignidad (urgencia oncológica) · Prevención de eventos relacionados con el esqueleto en pacientes con metástasis óseas de tumores sólidos y mieloma múltiple · Tratamiento de la enfermedad ósea de Paget (indicación no oncológica)',

    preparacion: {
      'Presentación':          '<b>Zometa® 4 mg/5 mL — vial concentrado, o 4 mg/100 mL listo para infundir</b>',
      'Diluyente':             'SF 0.9% o SG 5% (si se usa el vial concentrado)',
      'Dilución final':        'Diluir en 100 mL SF/SG 5% si se parte del vial concentrado',
      'Dosis estándar (hipercalcemia)': '<b>4 mg IV en infusión de mínimo 15 minutos</b>',
      'Dosis (metástasis óseas, mantenimiento)': '4 mg IV cada 3-4 semanas',
      '⏱️ Tiempo de infusión':  '<b>MÍNIMO 15 minutos — NUNCA en bolo ni infusión más rápida (riesgo de nefrotoxicidad)</b>',
      'Hidratación previa':    '<b>SF 0.9% IV antes de la infusión</b> — corregir la deshidratación asociada a la hipercalcemia',
      'Vía':                   'IV en perfusión',
      '⏱️ Inicio efecto':       'Descenso de la calcemia en 24-48 h, efecto máximo a los 4-7 días',
      '🧊 Estabilidad':         '<b>24 h refrigerado (2-8°C) tras diluir; usar a temperatura ambiente antes de infundir</b>',
    },

    vigilancia: {
      antes: [
        'Calcemia (calcio corregido por albúmina) — confirmar la hipercalcemia y su gravedad.',
        'Función renal (creatinina, ClCr) — determina si se puede administrar y a qué dosis.',
        'Estado de hidratación — corregir con SF 0.9% antes de la infusión de ácido zoledrónico.',
        'Vitamina D y magnesio si están disponibles — el déficit de vitamina D aumenta el riesgo de hipocalcemia tras el tratamiento.',
        'Evaluación dental si se prevé tratamiento crónico (prevención de eventos óseos) — riesgo de osteonecrosis mandibular a largo plazo.',
      ],
      durante: [
        'Infundir en mínimo 15 minutos — nunca acortar el tiempo de infusión.',
        'Constantes vitales durante la administración.',
        'Vigilar reacción de fase aguda (fiebre, mialgias, artralgias) — frecuente tras la primera dosis, autolimitada.',
      ],
      despues: [
        'Calcemia diaria durante los primeros días — el efecto máximo se alcanza a los 4-7 días.',
        'Función renal (creatinina) tras la infusión y periódicamente si se repiten dosis.',
        'Vigilar signos de hipocalcemia (parestesias, tetania, signo de Chvostek/Trousseau) en los días siguientes, especialmente si hay déficit de vitamina D.',
        'Reponer calcio y vitamina D si aparece hipocalcemia sintomática.',
        'Documentar dosis, función renal pre/post y evolución de la calcemia.',
      ],
      suspender: [
        'Deterioro significativo de la función renal.',
        'Hipocalcemia sintomática grave.',
        'Signos de osteonecrosis mandibular (en tratamiento crónico) — derivar a valoración odontológica/maxilofacial.',
        'Reacción alérgica grave.',
      ],
    },

    incompatibilidades: [
      '<b>No mezclar con soluciones que contengan calcio</b> (Ringer Lactato) — puede formar complejos insolubles.',
      'No mezclar con otros fármacos en la misma vía o solución.',
      'Compatible con SF 0.9% y SG 5% para dilución.',
    ],

    alertasSeguridad: [
      '🔴 NEFROTOXICIDAD con infusión rápida o dosis altas — infundir SIEMPRE en mínimo 15 min; ajustar según función renal.',
      '🟠 HIPOCALCEMIA sintomática, especialmente si hay déficit de vitamina D no corregido — vigilar y suplementar según necesidad.',
      '🟠 Osteonecrosis mandibular con uso prolongado (tratamiento crónico oncológico) — evaluación dental antes de iniciar.',
      '🟡 Reacción de fase aguda (fiebre, mialgias) frecuente tras la primera dosis — autolimitada, tratar sintomáticamente.',
      '🟡 EFECTO NO INMEDIATO — combinar con hidratación agresiva (y calcitonina si está disponible) en la hipercalcemia grave sintomática mientras se espera el efecto máximo (4-7 días).',
    ],
  },

  modulos: {
    renal: `
      <b>Protocolo Hipercalcemia de Malignidad — Ácido Zoledrónico:</b><br/>
      <b>Medidas iniciales (acción inmediata):</b><br/>
      • Hidratación agresiva con SF 0.9% IV — corrige la deshidratación y aumenta la excreción renal de calcio.<br/>
      • Calcitonina 4-8 UI/kg SC/IM c/6-12 h si está disponible (acción rápida, efecto limitado a 48 h por taquifilaxia).<br/><br/>
      <b>Tratamiento definitivo:</b><br/>
      • <b>Ácido zoledrónico 4 mg IV en mínimo 15 min</b>, tras corregir la hidratación.<br/>
      • Efecto máximo a los 4-7 días — no esperar respuesta inmediata de este fármaco.<br/><br/>
      <b>Vigilancia:</b> calcemia diaria, función renal antes y después de la infusión, vigilar hipocalcemia de rebote en los días siguientes.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Confirmar la hidratación adecuada con SF 0.9% antes de iniciar la infusión de ácido zoledrónico.',
      'Verificar la función renal (creatinina/ClCr) antes de cada dosis — determina si se puede administrar.',
      'Infundir en mínimo 15 minutos con bomba de infusión — nunca acortar el tiempo.',
      'No diluir ni mezclar con soluciones que contengan calcio (Ringer Lactato).',
      'Vigilar la reacción de fase aguda (fiebre, mialgias) tras la primera dosis — informar al paciente que es frecuente y autolimitada.',
      'Calcemia diaria durante los primeros días tras la administración.',
      'Vigilar signos de hipocalcemia en los días siguientes (parestesias, calambres).',
      'En tratamiento crónico: coordinar la evaluación dental antes de iniciar por el riesgo de osteonecrosis mandibular.',
      'Documentar dosis, función renal pre/post y evolución de la calcemia.',
    ],

    efectosAdversos: [
      '🔴 Nefrotoxicidad (necrosis tubular aguda, especialmente con infusión rápida)',
      '🟠 Hipocalcemia sintomática',
      '🟠 Osteonecrosis mandibular (uso prolongado)',
      '🟡 Reacción de fase aguda: fiebre, mialgias, artralgias (frecuente tras la primera dosis)',
      '🟡 Náuseas, vómitos',
      '🟡 Anemia (uso prolongado)',
    ],

    contraindicaciones: [
      'Insuficiencia renal grave (ClCr <30-35 mL/min según protocolo) sin ajuste específico.',
      'Hipocalcemia no corregida.',
      'Hipersensibilidad a bisfosfonatos.',
      'Embarazo (datos limitados, usar solo si es claramente necesario).',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar el vial refrigerado (2-8°C) o según ficha técnica del fabricante, protegido de la luz.',

    estabilidad: {
      'Vial sin abrir':         'Según ficha técnica (habitualmente temperatura ambiente o refrigerado)',
      'Diluido en SF/SG 5%':   '<b>24 h refrigerado (2-8°C)</b>; llevar a temperatura ambiente antes de infundir',
      'Aspecto':                 'Solución incolora — desechar si turbia o con partículas',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de 24 h tras diluir, conservando refrigerado si no se usa de inmediato.',
      dosisRestante:     'Desechar sobrante de vial abierto.',
      infusionPreparada: '24 h refrigerado en SF 0.9% o SG 5%; llevar a temperatura ambiente antes de administrar.',
      notas:             'No mezclar con soluciones que contengan calcio. Infundir siempre en mínimo 15 min.',
    },

    presentaciones: [
      'Zometa® 4 mg/5 mL — vial concentrado para diluir',
      'Zometa® 4 mg/100 mL — solución lista para infundir',
      'Ácido zoledrónico genérico — presentaciones similares (también existe formulación anual para osteoporosis, dosis distinta)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Hipercalcemia de malignidad',           dosis: '<b>4 mg IV en mínimo 15 min</b>, dosis única (repetible tras 7 días si persiste)', via: 'IV' },
      { indicacion: 'Prevención de eventos óseos (metástasis)', dosis: '4 mg IV cada 3-4 semanas',                                                     via: 'IV' },
      { indicacion: 'IR leve-moderada (ClCr 30-60)',           dosis: 'Reducir la dosis según tabla de ficha técnica (3-3.5 mg)',                       via: 'IV' },
    ],

    embarazo: 'Datos limitados en humanos. Los bisfosfonatos atraviesan la placenta y se depositan en el hueso fetal con persistencia prolongada. Usar solo si el beneficio supera claramente el riesgo — la hipercalcemia grave no tratada también supone un riesgo materno-fetal significativo.',

    pediatria: 'Uso oncológico pediátrico bajo supervisión especializada, con dosis ajustada por peso según protocolo específico. Uso no oncológico en osteogénesis imperfecta y otras condiciones óseas pediátricas con dosis y pauta distintas, fuera del contexto de urgencia oncológica.',

    adultoMayor: 'Mayor riesgo de nefrotoxicidad por reducción fisiológica de la función renal. Ajustar la dosis según ClCr real y vigilar la función renal más estrechamente.',

    insufRenal: '<b>Ajuste obligatorio según ClCr</b> — reducir la dosis en insuficiencia renal leve-moderada según la tabla de la ficha técnica. Contraindicado o requiere valoración especializada individualizada en insuficiencia renal grave (ClCr <30-35 mL/min).',

    insufHepatica: 'Sin ajuste de dosis específico necesario — el fármaco no se metaboliza significativamente por vía hepática, su eliminación es predominantemente renal.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Zometa® (ácido zoledrónico).',
      'Sterling JA et al. Hypercalcemia of Malignancy: ASCO Clinical Practice Guideline. J Clin Oncol.',
      'Endocrine Society. Diagnosis and Management of Hypercalcemia. Clinical Practice Guideline.',
      'Major P et al. Zoledronic acid is superior to pamidronate in the treatment of hypercalcemia of malignancy. J Clin Oncol. 2001.',
      'Coleman RE et al. Bone health in cancer: ESMO Clinical Practice Guidelines. Ann Oncol. 2020.',
    ],
  },

});
