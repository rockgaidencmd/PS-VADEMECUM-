/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/cloranfenicol.js
   Fuentes: CIMA AEMPS, FDA DailyMed, WHO Model List of
   Essential Medicines, CDC Typhoid Fever Guidelines,
   Cuadro Básico IMSS/Sector Salud México
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'cloranfenicol',
  nombre:         'Cloranfenicol',
  nombreGenerico: 'Chloramphenicol Sodium Succinate',
  categoria:      'antibioticos',
  tags:           ['antibiótico', 'fiebre tifoidea', 'meningitis', 'anemia aplásica', 'síndrome del bebé gris', 'último recurso', 'cuadro básico'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'ANEMIA APLÁSICA — reacción idiosincrásica grave, impredecible y frecuentemente fatal, no relacionada con la dosis, descrita incluso con exposición mínima. SÍNDROME DEL BEBÉ GRIS en neonatos y prematuros por inmadurez de la glucuronidación hepática — puede ser mortal. Reservar EXCLUSIVAMENTE para infecciones graves sin alternativa disponible (meningitis en alergia grave a betalactámicos, fiebre tifoidea grave en contextos de recursos limitados).',

  nivel1: {

    puntosClave: [
      '<b>Antibiótico de último recurso</b> — reservado para infecciones graves cuando NO hay alternativa disponible, por su toxicidad hematológica grave.',
      '<b>ANEMIA APLÁSICA</b>: reacción idiosincrásica rara pero frecuentemente FATAL, no dosis-dependiente — puede aparecer incluso semanas después de suspender el tratamiento.',
      '<b>SÍNDROME DEL BEBÉ GRIS</b> en neonatos/prematuros: colapso cardiovascular, cianosis grisácea, distensión abdominal — por inmadurez hepática para metabolizar el fármaco.',
      'Sigue siendo <b>de amplia disponibilidad y bajo costo</b> en muchos hospitales públicos de América Latina, especialmente para fiebre tifoidea grave y meningitis cuando el acceso a alternativas es limitado.',
      'Requiere <b>hemograma seriado</b> durante todo el tratamiento — suspender ante cualquier citopenia significativa.',
    ],

    resumenRapido: 'Antibiótico de amplio espectro que inhibe la síntesis proteica bacteriana uniéndose a la subunidad 50S ribosomal, con excelente penetración en el sistema nervioso central y actividad frente a un amplio rango de gram positivos, gram negativos y anaerobios, incluida Salmonella typhi. Su uso se ha restringido drásticamente en las últimas décadas debido a dos toxicidades graves: la anemia aplásica, una reacción idiosincrásica no relacionada con la dosis que puede ser fatal, y la toxicidad hematológica dosis-dependiente reversible (supresión medular). A pesar de ello, sigue figurando en la Lista de Medicamentos Esenciales de la OMS y se mantiene disponible en muchos hospitales públicos de América Latina como alternativa de bajo costo para infecciones graves, particularmente la fiebre tifoidea grave y la meningitis bacteriana en pacientes con alergia grave a betalactámicos.',

    objetivoTerapeutico: 'Tratamiento de la fiebre tifoidea grave (especialmente en contextos de recursos limitados o resistencia) · Meningitis bacteriana en pacientes con alergia grave a betalactámicos, cuando no hay alternativa disponible · Infecciones graves por gérmenes anaerobios o gram negativos multirresistentes sin otra opción terapéutica',

    preparacion: {
      'Presentación':          '<b>Cloranfenicol Succinato Sódico 1 g — vial polvo liofilizado</b>',
      'Reconstitución':        'Reconstituir con agua para inyección o SF 0.9% según ficha técnica',
      'Diluyente':             'SF 0.9% o SG 5%',
      'Dilución final':        'Diluir en 50-100 mL SF/SG 5%',
      'Dosis estándar adulto': '<b>50-100 mg/kg/día IV en 4 dosis</b> (c/6 h), máximo 4 g/día',
      '⏱️ Tiempo de infusión':  '15-30 min por dosis',
      'Vía':                   'IV intermitente',
      '🧊 Estabilidad':         '<b>24 h a temperatura ambiente en SF 0.9% o SG 5% tras diluir</b>',
    },

    vigilancia: {
      antes: [
        'Confirmar que NO existe alternativa terapéutica disponible — es un antibiótico de último recurso, no de primera línea.',
        'Hemograma completo basal (obligatorio) — recuento de reticulocitos si es posible.',
        'Confirmar la edad — extrema precaución o evitar en neonatos y prematuros por el riesgo de síndrome del bebé gris.',
        'Función hepática basal — el metabolismo es hepático.',
        'Informar al paciente/familia sobre el riesgo de anemia aplásica antes de iniciar, si la situación clínica lo permite.',
      ],
      durante: [
        'Infundir en 15-30 min.',
        'Vigilar signos de toxicidad aguda: náuseas, vómitos.',
        'En neonatos: vigilar de forma extrema signos de síndrome del bebé gris (cianosis grisácea, distensión abdominal, hipotermia, colapso cardiovascular) — es una emergencia.',
      ],
      despues: [
        '<b>Hemograma completo cada 48-72 h durante todo el tratamiento</b> — vigilar de forma activa cualquier citopenia.',
        'Vigilar signos de sangrado, infección o palidez que sugieran supresión medular.',
        'Función hepática periódica si el tratamiento se prolonga.',
        'Reevaluar la respuesta clínica y la necesidad de continuar — usar la duración mínima eficaz.',
        'Advertir sobre la necesidad de vigilancia hematológica incluso DESPUÉS de finalizar el tratamiento (la anemia aplásica puede aparecer con retraso).',
      ],
      suspender: [
        'Cualquier citopenia significativa en el hemograma de control — suspender de inmediato.',
        'Signos de síndrome del bebé gris en neonatos — emergencia, suspender y dar soporte intensivo.',
        'Reacción alérgica grave.',
        'Al completar la pauta mínima eficaz indicada — no prolongar innecesariamente.',
      ],
    },

    incompatibilidades: [
      'No mezclar con otros antibióticos en la misma solución.',
      'Interacción relevante con fenitoína, warfarina y sulfonilureas — el cloranfenicol inhibe su metabolismo, aumentando su efecto/toxicidad.',
      'No administrar junto con fármacos mielosupresores sin valorar el riesgo aditivo.',
      'Compatible con SF 0.9% y SG 5% para dilución.',
    ],

    alertasSeguridad: [
      '🔴 ANEMIA APLÁSICA — reacción idiosincrásica grave, frecuentemente FATAL, no dosis-dependiente, puede aparecer incluso tras suspender el tratamiento.',
      '🔴 SÍNDROME DEL BEBÉ GRIS en neonatos/prematuros — colapso cardiovascular potencialmente mortal por inmadurez hepática.',
      '🔴 Reservar EXCLUSIVAMENTE para infecciones graves sin alternativa disponible.',
      '🟠 Supresión medular dosis-dependiente (reversible) — hemograma seriado obligatorio cada 48-72 h.',
      '🟠 Interacción con fenitoína, warfarina y sulfonilureas — aumenta su efecto/toxicidad.',
      '🟡 Usar la duración mínima eficaz — no prolongar el tratamiento innecesariamente.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Confirmar con el equipo médico que se trata de una indicación de último recurso, sin alternativa disponible.',
      'Hemograma basal obligatorio antes de la primera dosis.',
      'Diluir según ficha técnica; infundir en 15-30 min.',
      '<b>Hemograma cada 48-72 h durante TODO el tratamiento</b> — comunicar cualquier citopenia de inmediato.',
      'En neonatos: vigilancia extrema por el riesgo de síndrome del bebé gris — cualquier cianosis grisácea o distensión abdominal es una emergencia.',
      'Informar al paciente/familia sobre la necesidad de vigilancia hematológica incluso después de finalizar el tratamiento.',
      'Vigilar interacciones si el paciente toma fenitoína, warfarina o sulfonilureas.',
      'Documentar dosis, hemogramas seriados y duración total del tratamiento.',
    ],

    efectosAdversos: [
      '🔴 Anemia aplásica (idiosincrásica, no dosis-dependiente, frecuentemente fatal)',
      '🔴 Síndrome del bebé gris (neonatos/prematuros)',
      '🟠 Supresión medular dosis-dependiente (reversible): anemia, leucopenia, trombocitopenia',
      '🟡 Náuseas, vómitos',
      '🟡 Neuritis óptica y periférica (uso prolongado)',
      '🟡 Reacción alérgica',
    ],

    contraindicaciones: [
      'Disponibilidad de alternativa terapéutica de menor toxicidad (no es de primera línea).',
      'Neonatos y prematuros, salvo indicación excepcional con extrema vigilancia (riesgo de síndrome del bebé gris).',
      'Antecedente personal o familiar de discrasias sanguíneas.',
      'Insuficiencia hepática grave (mayor riesgo de acumulación y síndrome del bebé gris incluso en no neonatos).',
      'Embarazo, especialmente cerca del término (riesgo similar al neonatal).',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar el vial a temperatura ambiente protegido de luz directa.',

    estabilidad: {
      'Vial sin reconstituir':  'Temperatura ambiente hasta vencimiento',
      'Diluido en SF/SG 5%':   '<b>24 h a temperatura ambiente</b>',
      'Aspecto':                 'Solución incolora a ligeramente amarillenta — normal',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de 24 h tras reconstituir.',
      dosisRestante:     'Desechar sobrante de vial reconstituido.',
      infusionPreparada: '24 h en SF 0.9% o SG 5% a temperatura ambiente.',
      notas:             'Antibiótico de último recurso — reservar para infecciones graves sin alternativa. Hemograma seriado obligatorio durante todo el tratamiento.',
    },

    presentaciones: [
      'Cloranfenicol Succinato Sódico 1 g — vial polvo liofilizado IV',
      'Cloranfenicol genérico — presentaciones IV/oral según país (uso oral en declive por la misma toxicidad)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Fiebre tifoidea grave',            dosis: '<b>50-75 mg/kg/día IV en 4 dosis × 14-21 días</b>', via: 'IV' },
      { indicacion: 'Meningitis (alergia a betalactámicos)', dosis: '75-100 mg/kg/día IV en 4 dosis (máx 4 g/día)',   via: 'IV' },
      { indicacion: 'Infección grave (otras indicaciones)', dosis: '50-100 mg/kg/día IV en 4 dosis',                    via: 'IV' },
      { indicacion: 'Dosis máxima adulto',                 dosis: '4 g/día',                                             via: 'IV' },
    ],

    embarazo: 'Contraindicado, especialmente cerca del término — riesgo de toxicidad similar al síndrome del bebé gris en el neonato por transferencia placentaria e inmadurez hepática fetal/neonatal para metabolizar el fármaco. Evitar salvo indicación absolutamente vital sin alternativa.',

    pediatria: '<b>CONTRAINDICADO en neonatos y prematuros</b> salvo indicación excepcional con extrema vigilancia — riesgo de síndrome del bebé gris. En niños mayores: 50-100 mg/kg/día IV en 4 dosis, con la misma vigilancia hematológica estricta que en adultos.',

    adultoMayor: 'Mayor riesgo de toxicidad por posible reducción de la función hepática relacionada con la edad. Vigilancia hematológica aún más estrecha. Considerar siempre alternativas de menor toxicidad primero.',

    insufRenal: 'Sin ajuste de dosis significativo necesario — el metabolismo es fundamentalmente hepático, no renal.',

    insufHepatica: '<b>Contraindicado o extrema precaución</b> — el metabolismo es hepático (glucuronidación); la insuficiencia hepática aumenta significativamente el riesgo de acumulación y toxicidad, similar al mecanismo del síndrome del bebé gris en adultos con insuficiencia hepática grave.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Cloranfenicol Succinato Sódico.',
      'WHO Model List of Essential Medicines. 23rd edition. 2023.',
      'CDC. Typhoid Fever and Paratyphoid Fever — Treatment Guidelines.',
      'Feder HM, Osier C, Maderazo EG. Chloramphenicol: a review of its use in clinical practice. Rev Infect Dis. 1981 (revisión clásica, vigente en principios de seguridad).',
      'Secretaría de Salud México. Cuadro Básico y Catálogo de Medicamentos del Sector Salud.',
    ],
  },

});
