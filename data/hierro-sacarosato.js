/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/hierro-sacarosato.js
   Fuentes: CIMA AEMPS (Venofer), FDA DailyMed,
   NICE/KDIGO Guidelines Anemia por Déficit de Hierro,
   Cuadro Básico IMSS/Sector Salud México
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'hierro-sacarosato',
  nombre:         'Hierro Sacarosato',
  nombreComercial: 'Venofer®',
  nombreGenerico: 'Iron Sucrose',
  categoria:      'otros',
  tags:           ['hierro IV', 'anemia', 'ferropenia', 'insuficiencia renal', 'embarazo', 'hemodiálisis', 'cuadro básico'],
  prioridad:      'moderate',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Riesgo de reacciones de hipersensibilidad, incluida anafilaxia, aunque menor que con los antiguos preparados de hierro dextrano de alto peso molecular. Requiere administración lenta y vigilancia durante y después de la infusión. La extravasación puede causar manchas cutáneas permanentes (tatuaje ferroso). No administrar por vía IM.',

  nivel1: {

    puntosClave: [
      '<b>Hierro IV para el tratamiento de la anemia ferropénica</b> cuando el hierro oral es ineficaz, mal tolerado o insuficiente (frecuente en insuficiencia renal, embarazo, sangrado crónico).',
      'Dosis: <b>100-200 mg IV diluido, infundido en 15-30 min</b>, repetible según el déficit total calculado.',
      '<b>Riesgo de reacción de hipersensibilidad</b> — vigilar durante y al menos 30 min después de la primera infusión.',
      '<b>Extravasación causa manchas cutáneas permanentes</b> ("tatuaje ferroso") — verificar la posición de la vía antes de infundir.',
      'Muy usado en <b>anemia asociada a enfermedad renal crónica/hemodiálisis</b> y en la <b>anemia ferropénica del embarazo</b> con intolerancia al hierro oral.',
    ],

    resumenRapido: 'Complejo de hierro (III) con sacarosa que permite la administración intravenosa de hierro para la reposición rápida de los depósitos férricos en la anemia ferropénica, con un perfil de seguridad considerablemente mejor que los antiguos preparados de hierro dextrano de alto peso molecular (menor riesgo de reacciones anafilactoides graves). Está especialmente indicado cuando el hierro oral es ineficaz, mal tolerado (intolerancia gastrointestinal) o insuficiente para corregir el déficit en el tiempo clínicamente necesario, siendo de uso muy frecuente en la anemia asociada a la enfermedad renal crónica (especialmente en hemodiálisis) y en la anemia ferropénica del embarazo.',

    objetivoTerapeutico: 'Tratamiento de la anemia ferropénica cuando el hierro oral es ineficaz, mal tolerado o insuficiente · Corrección del déficit de hierro en la enfermedad renal crónica y hemodiálisis · Tratamiento de la anemia ferropénica del embarazo con intolerancia al hierro oral · Reposición rápida de hierro antes de cirugía programada',

    preparacion: {
      'Presentación':          '<b>Venofer® 20 mg/mL — ampolla 5 mL (100 mg) o 10 mL (200 mg)</b>',
      'Diluyente':             '<b>SF 0.9% únicamente</b> — no diluir en soluciones glucosadas',
      'Dilución para infusión': 'Diluir en máximo 100-200 mL de SF 0.9% (o administrar en bolo lento sin diluir en dosis bajas según ficha técnica)',
      'Dosis habitual':        '<b>100-200 mg IV por sesión</b>, repetible según el déficit total de hierro calculado',
      'Dosis alta (déficit total, protocolo específico)': 'Algunas formulaciones permiten dosis únicas más altas (500 mg) en infusión prolongada, según ficha técnica y protocolo institucional',
      '⏱️ Tiempo de infusión':  '<b>15-30 min mínimo</b> (dosis de 100-200 mg); dosis más altas requieren infusión más prolongada',
      'Vía':                   '<b>IV exclusivamente — NUNCA por vía IM</b> (causa dolor intenso y manchas cutáneas permanentes)',
      '🧊 Estabilidad':         '<b>12 h a temperatura ambiente tras diluir en SF 0.9%</b>',
    },

    vigilancia: {
      antes: [
        'Confirmar el diagnóstico de anemia ferropénica (ferritina, saturación de transferrina) — no usar hierro IV sin confirmar el déficit.',
        'Descartar infección activa no controlada (relativa — el hierro puede favorecer el crecimiento bacteriano en algunos contextos).',
        'Antecedente de reacción alérgica a preparados de hierro IV.',
        'Verificar la posición correcta de la vía IV antes de conectar la infusión — la extravasación deja manchas permanentes.',
        'Calcular la dosis total de hierro necesaria (según fórmula de déficit) para planificar el número de sesiones.',
      ],
      durante: [
        'Infundir en 15-30 min mínimo (o más lento en dosis altas) — nunca en bolo rápido.',
        'Vigilar reacción de hipersensibilidad: rash, prurito, disnea, hipotensión — especialmente en los primeros minutos.',
        'Vigilar el punto de infusión — cualquier signo de extravasación (dolor, decoloración) requiere detener de inmediato.',
        'Constantes vitales durante la infusión, especialmente en la primera administración.',
      ],
      despues: [
        'Observar al paciente durante al menos 30 min tras finalizar la infusión por posible reacción tardía.',
        'Reevaluar la respuesta con hemograma y ferritina en las semanas siguientes (respuesta esperada en 2-4 semanas).',
        'Vigilar el color de la piel/orina — no relevante clínicamente pero puede generar dudas al paciente (informar si aplica).',
        'Documentar dosis, tolerancia y planificación de las siguientes sesiones si se requieren.',
      ],
      suspender: [
        'Reacción de hipersensibilidad grave/anafilaxia — detener de inmediato y tratar como emergencia.',
        'Signos de extravasación — detener esa vía inmediatamente.',
        'Al alcanzar la dosis total de hierro calculada para corregir el déficit.',
        'Hipotensión significativa durante la infusión.',
      ],
    },

    incompatibilidades: [
      '<b>Diluir SOLO en SF 0.9%</b> — no usar soluciones glucosadas para la dilución.',
      'No mezclar con otros fármacos en la misma vía o solución.',
      '<b>NUNCA administrar por vía IM</b> — causa dolor intenso y manchas cutáneas permanentes (tatuaje ferroso).',
      'No administrar simultáneamente con hierro oral (no aumenta la eficacia y puede aumentar los efectos adversos gastrointestinales del hierro oral).',
    ],

    alertasSeguridad: [
      '🟠 REACCIÓN DE HIPERSENSIBILIDAD — vigilar durante la infusión y al menos 30 min después, especialmente en la primera dosis.',
      '🟠 EXTRAVASACIÓN causa manchas cutáneas PERMANENTES ("tatuaje ferroso") — verificar la vía antes de infundir.',
      '🟡 NUNCA por vía IM — dolor intenso y manchas permanentes.',
      '🟡 No combinar con hierro oral simultáneamente.',
      '🟢 Perfil de seguridad considerablemente mejor que el hierro dextrano de alto peso molecular (formulaciones antiguas).',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Confirmar el diagnóstico de ferropenia antes de administrar (ferritina, estudios de hierro).',
      'Diluir SOLO en SF 0.9% — nunca en soluciones glucosadas.',
      'Verificar la posición correcta de la vía IV antes de conectar la infusión — fundamental para evitar la extravasación.',
      'Infundir en al menos 15-30 min — nunca en bolo rápido.',
      'Vigilar signos de reacción alérgica durante la infusión y mantener al paciente en observación 30 min tras finalizar.',
      'NUNCA administrar por vía IM.',
      'No coadministrar con hierro oral el mismo día si es posible.',
      'Informar al paciente que puede notar cambios transitorios en el color de la orina (no relevante clínicamente).',
      'Documentar dosis, tolerancia y planificar las sesiones siguientes según el déficit total calculado.',
    ],

    efectosAdversos: [
      '🟠 Reacción de hipersensibilidad (rash, prurito, disnea; anafilaxia rara)',
      '🟠 Hipotensión durante la infusión',
      '🟠 Manchas cutáneas permanentes por extravasación',
      '🟡 Cefalea',
      '🟡 Náuseas',
      '🟡 Artralgias/mialgias transitorias',
      '🟡 Sabor metálico',
    ],

    contraindicaciones: [
      'Sobrecarga de hierro (hemocromatosis, hemosiderosis).',
      'Hipersensibilidad conocida al hierro sacarosato o a sus componentes.',
      'Anemia no relacionada con déficit de hierro (sin confirmar el diagnóstico).',
      'Infección bacteriana activa no controlada (relativa).',
      'Primer trimestre del embarazo (precaución, preferir el segundo/tercer trimestre si es posible diferir).',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar la ampolla a temperatura ambiente protegida de luz directa.',

    estabilidad: {
      'Ampolla sin abrir':     'Temperatura ambiente hasta vencimiento',
      'Diluida en SF 0.9%':   '<b>12 h a temperatura ambiente</b>',
      'NO usar SG 5%':          'Solo SF 0.9% para la dilución',
      'Aspecto':                 'Solución marrón oscura — es el color propio del complejo férrico, no indica alteración',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de 12 h tras diluir en SF 0.9%.',
      dosisRestante:     'Desechar sobrante de ampolla abierta.',
      infusionPreparada: '12 h en SF 0.9% a temperatura ambiente.',
      notas:             'El color marrón oscuro de la solución es normal (color del complejo de hierro). Solo SF 0.9% como diluyente. Nunca vía IM.',
    },

    presentaciones: [
      'Venofer® 20 mg/mL — ampolla 5 mL (100 mg)',
      'Venofer® 20 mg/mL — ampolla 10 mL (200 mg)',
      'Hierro Sacarosato genérico — presentaciones similares',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Anemia ferropénica (dosis estándar)', dosis: '<b>100-200 mg IV por sesión</b>, repetible según déficit calculado', via: 'IV' },
      { indicacion: 'Enfermedad renal crónica/hemodiálisis', dosis: '100 mg IV 1-3 veces por semana según protocolo de diálisis',    via: 'IV' },
      { indicacion: 'Anemia ferropénica del embarazo',      dosis: '200 mg IV cada 1-2 semanas según déficit, preferir 2º-3er trimestre', via: 'IV' },
      { indicacion: 'Dosis total (fórmula de déficit)',      dosis: 'Calculada según peso y hemoglobina objetivo — planificar sesiones', via: 'IV' },
    ],

    embarazo: 'Categoría B (FDA). Ampliamente utilizado en el embarazo cuando el hierro oral es insuficiente o mal tolerado, preferentemente en el segundo y tercer trimestre. Se prefiere evitar en el primer trimestre salvo indicación clara, por precaución general aplicable a muchos fármacos administrados por vía parenteral en esta etapa.',

    pediatria: 'Uso en anemia ferropénica pediátrica cuando el hierro oral no es adecuado, con dosis ajustada por peso según protocolo pediátrico específico (habitualmente 2-3 mg/kg por sesión, máximo según ficha técnica). Requiere la misma vigilancia de hipersensibilidad que en adultos.',

    adultoMayor: 'Sin ajuste de dosis específico por edad. Vigilar con la misma atención las reacciones de hipersensibilidad. Frecuentemente indicado en la anemia del anciano asociada a enfermedad renal crónica o pérdidas crónicas.',

    insufRenal: 'Es precisamente una de las indicaciones principales — la anemia asociada a la enfermedad renal crónica, especialmente en hemodiálisis, donde el hierro IV es ampliamente utilizado de forma protocolizada, frecuentemente combinado con agentes estimulantes de la eritropoyesis.',

    insufHepatica: 'Precaución en hepatopatía grave con sobrecarga de hierro asociada (hemocromatosis secundaria) — confirmar los depósitos de hierro antes de iniciar el tratamiento.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Venofer® (hierro sacarosato).',
      'KDIGO Clinical Practice Guideline for Anemia in Chronic Kidney Disease. Kidney Int Suppl. 2012.',
      'NICE Guideline. Anaemia management in chronic kidney disease. NG8. 2015.',
      'Pavord S et al. UK guidelines on the management of iron deficiency in pregnancy. Br J Haematol. 2020.',
      'Secretaría de Salud México. Cuadro Básico y Catálogo de Medicamentos del Sector Salud.',
    ],
  },

});
