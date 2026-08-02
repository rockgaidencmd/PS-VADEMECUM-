/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/estreptomicina.js
   Fuentes: CIMA AEMPS, FDA DailyMed, WHO Consolidated
   Guidelines on Tuberculosis Treatment 2022, IDSA
   Brucellosis Guidelines, Cuadro Básico IMSS México
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'estreptomicina',
  nombre:         'Estreptomicina',
  nombreGenerico: 'Streptomycin Sulfate',
  categoria:      'antibioticos',
  tags:           ['antibiótico', 'aminoglucósido', 'tuberculosis', 'antituberculoso', 'brucelosis', 'peste', 'cuadro básico', 'clásico'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Aminoglucósido con ototoxicidad vestibular predominante (a diferencia de la gentamicina/amikacina, que afectan más la vía coclear/auditiva) — el daño vestibular puede ser irreversible. Nefrotoxicidad como con otros aminoglucósidos. Requiere ajuste estricto por función renal y vigilancia auditiva/vestibular periódica en tratamientos prolongados (esquemas antituberculosos de meses).',

  nivel1: {

    puntosClave: [
      '<b>Aminoglucósido clásico del tratamiento antituberculoso</b> — componente de los esquemas de retratamiento y de tuberculosis multirresistente cuando otros fármacos no están disponibles.',
      '<b>Vía EXCLUSIVAMENTE IM</b> — a diferencia de otros aminoglucósidos (gentamicina, amikacina), la estreptomicina se administra por vía intramuscular, no IV.',
      'Dosis: <b>15 mg/kg IM/día</b> (máx 1 g/día) en el esquema antituberculoso; también usada en <b>brucelosis</b> (combinada) y como alternativa en <b>peste</b>.',
      '<b>Ototoxicidad predominantemente VESTIBULAR</b> (mareo, inestabilidad, ataxia) — distinta del patrón más coclear de otros aminoglucósidos; puede ser irreversible.',
      'Requiere <b>ajuste renal estricto</b> y vigilancia auditiva/vestibular periódica, especialmente en tratamientos prolongados de meses.',
    ],

    resumenRapido: 'Aminoglucósido de primera generación, el primer antibiótico eficaz descubierto frente a Mycobacterium tuberculosis, que mantiene su papel en los esquemas de tratamiento antituberculoso cuando se requiere un cuarto fármaco inyectable (retratamiento, resistencia a isoniazida, o como alternativa según disponibilidad), así como en el tratamiento combinado de la brucelosis y como alternativa en la peste. A diferencia de otros aminoglucósidos más modernos (gentamicina, amikacina), se administra exclusivamente por vía intramuscular y su patrón de ototoxicidad es predominantemente vestibular, causando mareo, inestabilidad de la marcha y ataxia, que puede ser irreversible con tratamientos prolongados, característicos de los esquemas antituberculosos de varios meses de duración.',

    objetivoTerapeutico: 'Componente de los esquemas de retratamiento de la tuberculosis (cuarto fármaco inyectable) · Tratamiento combinado de la brucelosis (con doxiciclina) · Alternativa en el tratamiento de la peste (Yersinia pestis) · Tratamiento de la tularemia',

    preparacion: {
      'Presentación':          '<b>Estreptomicina Sulfato 1 g — vial polvo liofilizado</b>',
      'Reconstitución':        'Reconstituir con agua para inyección o SF 0.9% según ficha técnica',
      'Vía':                   '<b>EXCLUSIVAMENTE IM profunda</b> — no administrar por vía IV',
      'Dosis antituberculosa (adulto)': '<b>15 mg/kg IM/día</b> (máx 1 g/día), 5-7 días por semana según fase del tratamiento',
      'Dosis brucelosis':      '15 mg/kg IM/día (máx 1 g/día) × 2-3 semanas, combinada con doxiciclina',
      'Zona de inyección':     'Glúteo, rotando el punto en tratamientos prolongados',
      '⏱️ Inicio efecto':       'Pico sérico 1-2 h tras la inyección IM',
      '🧊 Estabilidad':         '<b>24-48 h a temperatura ambiente tras reconstituir, según ficha técnica</b>',
    },

    vigilancia: {
      antes: [
        'Función renal basal: creatinina y ClCr — ajuste de dosis/intervalo obligatorio.',
        'Audiometría y evaluación vestibular basal si se prevé tratamiento prolongado (esquemas antituberculosos de meses).',
        'Peso actual para el cálculo de la dosis en mg/kg.',
        'Descartar embarazo — riesgo de ototoxicidad fetal (efecto de clase de los aminoglucósidos).',
        'Revisar medicación concomitante nefrotóxica u ototóxica (otros aminoglucósidos, furosemida, vancomicina).',
      ],
      durante: [
        'Administrar IM profunda, rotando la zona de inyección en tratamientos prolongados.',
        'Preguntar activamente en cada visita por mareo, inestabilidad al caminar o sensación de vértigo — signos precoces de toxicidad vestibular.',
        'Vigilar signos de bloqueo neuromuscular en pacientes con miastenia gravis o uso de relajantes musculares (efecto de clase de los aminoglucósidos).',
      ],
      despues: [
        'Creatinina periódica (cada 2-4 semanas o más frecuente si hay factores de riesgo) durante todo el tratamiento antituberculoso.',
        'Evaluación auditiva/vestibular periódica (mensual o según protocolo) en tratamientos de varios meses.',
        'Preguntar activamente por acúfenos, hipoacusia, vértigo o inestabilidad en cada control.',
        'Documentar dosis, función renal y evaluación auditiva/vestibular en cada visita.',
      ],
      suspender: [
        'Signos de toxicidad vestibular (mareo, ataxia, inestabilidad de la marcha) — suspender y reevaluar el esquema con el equipo de tuberculosis.',
        'Deterioro significativo de la función renal.',
        'Hipoacusia progresiva.',
        'Al completar la fase del tratamiento que requiere el fármaco inyectable (según protocolo antituberculoso).',
      ],
    },

    incompatibilidades: [
      'No mezclar con otros fármacos en la misma jeringa.',
      'Precaución con otros nefrotóxicos/ototóxicos concomitantes (otros aminoglucósidos, furosemida, vancomicina).',
      'No administrar por vía IV — exclusivamente IM.',
      'Precaución con relajantes musculares — puede potenciar el bloqueo neuromuscular.',
    ],

    alertasSeguridad: [
      '🔴 OTOTOXICIDAD VESTIBULAR — mareo, ataxia, inestabilidad de la marcha; puede ser IRREVERSIBLE. Vigilancia activa en cada visita durante tratamientos prolongados.',
      '🔴 NEFROTOXICIDAD — ajuste renal obligatorio y creatinina periódica durante todo el tratamiento.',
      '🟠 EXCLUSIVAMENTE VÍA IM — no administrar por vía IV.',
      '🟠 Contraindicada/precaución en el embarazo — riesgo de ototoxicidad fetal (efecto de clase de los aminoglucósidos).',
      '🟡 Potencia el bloqueo neuromuscular — precaución con relajantes musculares y en miastenia gravis.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Confirmar que la vía es EXCLUSIVAMENTE IM — nunca administrar por vía IV.',
      'Calcular la dosis con el peso actual y verificar con la prescripción.',
      'Administrar IM profunda en glúteo, rotando la zona en tratamientos prolongados.',
      'Preguntar activamente por mareo, inestabilidad al caminar o vértigo en CADA visita — la ototoxicidad vestibular puede aparecer de forma insidiosa.',
      'Creatinina periódica durante todo el tratamiento antituberculoso.',
      'Coordinar la evaluación auditiva/vestibular periódica según el protocolo institucional de tuberculosis.',
      'Descartar embarazo antes de iniciar, dado el riesgo de ototoxicidad fetal.',
      'Documentar dosis, función renal, y hallazgos de la evaluación vestibular/auditiva en cada control.',
    ],

    efectosAdversos: [
      '🔴 Ototoxicidad vestibular (mareo, ataxia, inestabilidad de la marcha — puede ser irreversible)',
      '🔴 Nefrotoxicidad (acumulativa y dosis-dependiente)',
      '🟠 Bloqueo neuromuscular (potencia relajantes musculares)',
      '🟠 Ototoxicidad coclear (hipoacusia, acúfenos — menos frecuente que la vestibular con este fármaco)',
      '🟡 Reacción local en el punto de inyección IM',
      '🟡 Erupción cutánea, fiebre por fármacos',
    ],

    contraindicaciones: [
      'Hipersensibilidad a aminoglucósidos.',
      'Miastenia gravis (relativa — riesgo de bloqueo neuromuscular grave).',
      'Embarazo (relativa fuerte — riesgo de ototoxicidad fetal, efecto de clase de los aminoglucósidos).',
      'Insuficiencia renal grave sin ajuste ni monitorización estrecha.',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar el vial a temperatura ambiente protegido de luz directa.',

    estabilidad: {
      'Vial sin reconstituir':  'Temperatura ambiente hasta vencimiento',
      'Reconstituido':          '<b>24-48 h a temperatura ambiente según ficha técnica</b>',
      'Aspecto':                 'Solución incolora a ligeramente amarillenta — normal',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro del tiempo indicado tras reconstituir.',
      dosisRestante:     'Desechar sobrante de vial reconstituido no utilizado.',
      infusionPreparada: 'No aplica — administración IM directa, no en perfusión.',
      notas:             'Exclusivamente vía IM. La ototoxicidad vestibular es el efecto adverso más característico y limitante de este fármaco, distinto del patrón de otros aminoglucósidos.',
    },

    presentaciones: [
      'Estreptomicina Sulfato 1 g — vial polvo liofilizado (IM)',
      'Estreptomicina genérica — presentaciones similares según fabricante',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Retratamiento de tuberculosis (4º fármaco)', dosis: '<b>15 mg/kg IM/día (máx 1 g/día)</b>',            via: 'IM' },
      { indicacion: 'Brucelosis (combinada con doxiciclina)',       dosis: '15 mg/kg IM/día × 2-3 semanas',                    via: 'IM' },
      { indicacion: 'Peste (Yersinia pestis, alternativa)',          dosis: '15 mg/kg IM c/12h (según gravedad y protocolo)',  via: 'IM' },
      { indicacion: 'IR (ajuste según ClCr)',                         dosis: 'Ampliar el intervalo según función renal',        via: 'IM' },
    ],

    embarazo: 'Categoría D (FDA). Ototoxicidad fetal documentada (daño del VIII par craneal), efecto de clase de los aminoglucósidos. Evitar durante el embarazo salvo que sea absolutamente necesaria (por ejemplo, tuberculosis multirresistente sin alternativa) — decisión especializada con infectología/neumología.',

    pediatria: 'Tuberculosis pediátrica (esquemas específicos con fármaco inyectable): 20-40 mg/kg/día IM (máx 1 g/día), ajustado según protocolo pediátrico de tuberculosis. Vigilancia auditiva/vestibular especialmente relevante en niños pequeños, en quienes la valoración subjetiva del mareo es más difícil.',

    adultoMayor: 'Mayor riesgo de nefro y ototoxicidad por reducción fisiológica de la función renal. Ajustar por ClCr real (Cockcroft-Gault). Vigilancia vestibular/auditiva más frecuente — el deterioro del equilibrio en el anciano puede confundirse inicialmente con otras causas de inestabilidad.',

    insufRenal: '<b>Ajuste obligatorio del intervalo según ClCr</b> — ampliar el intervalo entre dosis en insuficiencia renal moderada-grave. Consultar protocolo específico de ajuste antituberculoso en insuficiencia renal (frecuentemente 2-3 veces por semana en lugar de diario).',

    insufHepatica: 'Sin ajuste específico necesario — eliminación renal, no hepática. Se usa igualmente en el contexto de hepatotoxicidad por otros fármacos antituberculosos (isoniazida, rifampicina, pirazinamida), precisamente por no depender del metabolismo hepático.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Estreptomicina Sulfato.',
      'WHO Consolidated Guidelines on Tuberculosis Treatment. Module 4: Drug-Resistant TB Treatment. 2022.',
      'Solera J et al. Recognition and management of brucellosis. IDSA/UpToDate Clinical Guidance.',
      'CDC. Plague — Diagnosis and Treatment Recommendations.',
      'Secretaría de Salud México. Cuadro Básico y Catálogo de Medicamentos del Sector Salud.',
    ],
  },

});
