/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/doxiciclina.js
   Fuentes: CIMA AEMPS (Vibramicina), FDA DailyMed,
   CDC Rickettsial Disease Guidelines, SEIMC Guía
   Antibióticos 2023, Cuadro Básico IMSS México
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'doxiciclina',
  nombre:         'Doxiciclina IV',
  nombreComercial: 'Vibramicina®',
  nombreGenerico: 'Doxycycline Hyclate',
  categoria:      'antibioticos',
  tags:           ['antibiótico', 'tetraciclina', 'rickettsiosis', 'brucelosis', 'atípicos', 'fiebre manchada', 'cuadro básico'],
  prioridad:      'high',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      '<b>Antibiótico de elección en rickettsiosis</b> (fiebre manchada de las Montañas Rocosas/rickettsiosis, muy relevante en México y otros países de América Latina) — no retrasar el tratamiento esperando confirmación de laboratorio.',
      'Dosis: <b>100 mg IV c/12 h</b>, infundida en 1-2 horas.',
      'Cobertura de <b>gérmenes atípicos</b> (Mycoplasma, Chlamydophila, Legionella), Brucella, y Borrelia (enfermedad de Lyme).',
      '<b>Contraindicado en menores de 8 años</b> y en el embarazo — tinción dental permanente e inhibición del crecimiento óseo fetal (excepción: rickettsiosis grave, donde el beneficio puede superar el riesgo incluso en niños pequeños según CDC).',
      'Fotosensibilidad marcada — proteger de la exposición solar durante el tratamiento.',
    ],

    resumenRapido: 'Antibiótico tetraciclínico de amplio espectro, activo frente a gérmenes atípicos (Mycoplasma pneumoniae, Chlamydophila, Legionella), Rickettsia (fiebre manchada de las Montañas Rocosas y otras rickettsiosis, endémicas en amplias zonas de México y América Latina), Brucella, Borrelia burgdorferi (enfermedad de Lyme) y algunos gram positivos/negativos. Es el tratamiento de elección, sin alternativa equivalente, en la sospecha de rickettsiosis: dado que el retraso del tratamiento se asocia a mayor mortalidad, las guías del CDC recomiendan iniciar doxiciclina de forma empírica ante la sospecha clínica, incluso en niños pequeños, sin esperar la confirmación de laboratorio.',

    objetivoTerapeutico: 'Tratamiento de la rickettsiosis (fiebre manchada, tifus) — inicio empírico inmediato ante sospecha clínica · Tratamiento de la brucelosis (combinado con otro antibiótico) · Neumonía atípica y exacerbaciones respiratorias por gérmenes atípicos · Enfermedad de Lyme',

    preparacion: {
      'Presentación':          '<b>Vibramicina® IV 100 mg — vial polvo liofilizado</b>',
      'Reconstitución':        'Reconstituir con agua para inyección según ficha técnica',
      'Diluyente':             'SF 0.9% o SG 5%',
      'Dilución final':        'Diluir en 100-250 mL SF/SG 5%',
      'Dosis estándar adulto': '<b>100 mg IV c/12 h</b>',
      '⏱️ Tiempo de infusión':  '<b>1-2 horas</b> — no administrar en bolo rápido',
      'Vía':                   'IV intermitente · Oral (misma dosis, buena biodisponibilidad — transición temprana recomendada)',
      '🧊 Estabilidad':         '<b>12-24 h a temperatura ambiente en SF 0.9% o SG 5% tras diluir</b>',
    },

    vigilancia: {
      antes: [
        'Ante sospecha de rickettsiosis: NO retrasar el inicio del tratamiento esperando confirmación de laboratorio.',
        'Confirmar la edad — contraindicado en menores de 8 años salvo indicación específica de rickettsiosis grave según protocolo.',
        'Confirmar que no hay embarazo.',
        'Función hepática basal si tratamiento prolongado.',
        'Alergia a tetraciclinas.',
      ],
      durante: [
        'Infundir en 1-2 horas — evitar la exposición solar directa durante la infusión si es ambulatoria.',
        'Vigilar reacción alérgica: rash, prurito.',
        'Vigilar la zona de punción por flebitis.',
      ],
      despues: [
        'Vigilar signos de fotosensibilidad cutánea — reforzar la protección solar.',
        'Reevaluar la respuesta clínica (fiebre, exantema en rickettsiosis) a las 24-48 h — la mejoría clínica suele ser rápida y apoya el diagnóstico.',
        'Transicionar a vía oral en cuanto el paciente tolere (misma eficacia, buena biodisponibilidad).',
        'Documentar dosis, hora y respuesta clínica.',
      ],
      suspender: [
        'Reacción alérgica grave.',
        'Al completar la pauta indicada según la infección (habitualmente 7-14 días en rickettsiosis, según respuesta clínica).',
        'Diagnóstico alternativo confirmado que no requiere doxiciclina.',
      ],
    },

    incompatibilidades: [
      'No mezclar con soluciones que contengan calcio (Ringer Lactato) — puede formar complejos insolubles.',
      'No administrar junto con antiácidos, hierro o suplementos de calcio/magnesio por la misma vía (relevante en la formulación oral, menos en IV).',
      'Compatible con SF 0.9% y SG 5% para dilución.',
    ],

    alertasSeguridad: [
      '🟠 EN SOSPECHA DE RICKETTSIOSIS: iniciar sin demora, no esperar confirmación de laboratorio — el retraso aumenta la mortalidad.',
      '🟠 CONTRAINDICADO en menores de 8 años (tinción dental permanente) — EXCEPCIÓN: rickettsiosis grave, donde el CDC recomienda su uso pese a la edad por el beneficio vital.',
      '🟠 CONTRAINDICADO en el embarazo (afecta el desarrollo dental y óseo fetal).',
      '🟡 Fotosensibilidad marcada — proteger de la exposición solar durante el tratamiento.',
      '🟡 Transición a vía oral recomendada en cuanto sea posible (buena biodisponibilidad, misma eficacia).',
    ],
  },

  modulos: {
    respiratorio: `
      <b>Protocolo Sospecha de Rickettsiosis (Fiebre Manchada) — Doxiciclina:</b><br/>
      <b>Contexto:</b> fiebre + exantema + antecedente de picadura de garrapata o exposición rural/zona endémica (relevante en amplias regiones de México y América Latina).<br/><br/>
      <b>Regla clave:</b> INICIAR EL TRATAMIENTO DE INMEDIATO ante la sospecha clínica — NO esperar la confirmación serológica/de laboratorio, ya que el retraso se asocia a mayor mortalidad.<br/><br/>
      <b>Dosis:</b> 100 mg IV/VO c/12 h × 7-14 días (o hasta 2-3 días después de la defervescencia y mejoría clínica).<br/><br/>
      <b>Aplica incluso en niños pequeños</b> según recomendación del CDC — el riesgo de la enfermedad no tratada supera ampliamente el riesgo dental de un ciclo corto de doxiciclina en este contexto de emergencia.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Ante sospecha de rickettsiosis: administrar la primera dosis sin demora, incluso antes de confirmación diagnóstica.',
      'Diluir según ficha técnica; infundir en 1-2 horas.',
      'Vigilar reacción alérgica durante la administración.',
      'Reforzar la educación sobre fotosensibilidad — evitar la exposición solar directa durante el tratamiento.',
      'Vigilar la zona de punción por flebitis.',
      'Transicionar a vía oral en cuanto el paciente tolere.',
      'En sospecha de rickettsiosis pediátrica grave: confirmar con el equipo médico la indicación pese a la edad, dado el beneficio vital documentado.',
      'Documentar dosis, hora y respuesta clínica (evolución de la fiebre y el exantema).',
    ],

    efectosAdversos: [
      '🟠 Fotosensibilidad cutánea marcada',
      '🟠 Esofagitis/ulceración esofágica (más relevante en la vía oral si no se toma con suficiente agua)',
      '🟡 Náuseas, vómitos, diarrea',
      '🟡 Flebitis en el punto de infusión',
      '🟡 Elevación transitoria de transaminasas',
      '🟡 Tinción dental (con uso repetido/prolongado en menores de 8 años)',
    ],

    contraindicaciones: [
      'Menores de 8 años, salvo indicación específica de rickettsiosis grave (excepción reconocida por el CDC).',
      'Embarazo (afecta el desarrollo dental y óseo fetal).',
      'Hipersensibilidad a tetraciclinas.',
      'Insuficiencia hepática grave (precaución, no siempre contraindicación absoluta).',
    ],

    fotosensibilidad: 'Sí, marcada — efecto de clase de las tetraciclinas. Recomendar protección solar estricta (factor alto) y evitar la exposición solar directa durante el tratamiento y algunos días después.',

    estabilidad: {
      'Vial sin reconstituir':  'Temperatura ambiente hasta vencimiento',
      'Diluida en SF/SG 5%':   '<b>12-24 h a temperatura ambiente, proteger de la luz directa</b>',
      'Aspecto':                 'Solución amarillenta — color propio del fármaco, normal',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro del tiempo indicado tras reconstituir.',
      dosisRestante:     'Desechar sobrante de vial reconstituido.',
      infusionPreparada: '12-24 h en SF 0.9% o SG 5% a temperatura ambiente, protegida de la luz.',
      notas:             'No mezclar con soluciones que contengan calcio. Transición a oral recomendada en cuanto sea posible.',
    },

    presentaciones: [
      'Vibramicina® IV 100 mg — vial polvo liofilizado',
      'Doxiciclina 100 mg — comprimidos/cápsulas (oral)',
      'Doxiciclina genérica — varios fabricantes',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Rickettsiosis (fiebre manchada)',     dosis: '<b>100 mg IV/VO c/12 h × 7-14 días</b>',                        via: 'IV/VO' },
      { indicacion: 'Neumonía atípica',                      dosis: '100 mg IV/VO c/12 h × 7-14 días',                                via: 'IV/VO' },
      { indicacion: 'Brucelosis (combinada)',                dosis: '100 mg VO c/12 h × 6 semanas + estreptomicina o gentamicina',  via: 'VO' },
      { indicacion: 'Enfermedad de Lyme',                     dosis: '100 mg VO c/12 h × 10-21 días según estadio',                   via: 'VO' },
    ],

    embarazo: '<b>Contraindicado</b> — efecto de clase de las tetraciclinas sobre el desarrollo dental y óseo fetal. En rickettsiosis grave durante el embarazo, valorar con infectología alternativas o el uso individualizado según gravedad, dado que la enfermedad no tratada también supone un riesgo materno-fetal significativo.',

    pediatria: '<b>Contraindicado en menores de 8 años en general</b>, PERO es el tratamiento de elección en la rickettsiosis grave independientemente de la edad, según recomendación del CDC — el beneficio vital de tratar la infección supera ampliamente el riesgo de tinción dental de un ciclo corto. Dosis pediátrica: 2.2 mg/kg IV/VO c/12 h (máx 100 mg/dosis).',

    adultoMayor: 'Sin ajuste de dosis específico por edad. Vigilar función hepática y renal según comorbilidad. Reforzar la educación sobre fotosensibilidad, especialmente relevante si hay exposición solar frecuente.',

    insufRenal: 'Sin ajuste de dosis necesario — a diferencia de otras tetraciclinas más antiguas, la doxiciclina no se acumula significativamente en insuficiencia renal (eliminación no exclusivamente renal).',

    insufHepatica: 'Precaución en insuficiencia hepática grave — el metabolismo tiene un componente hepático. Vigilar función hepática en tratamientos prolongados o hepatopatía preexistente.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Vibramicina® IV (doxiciclina).',
      'CDC. Diagnosis and Management of Tickborne Rickettsial Diseases. MMWR Recommendations and Reports. 2016.',
      'SEIMC. Guía de terapia antimicrobiana. 2023.',
      'Todd SR et al. No visible dental staining in children treated with doxycycline for suspected Rocky Mountain Spotted Fever. J Pediatr. 2015.',
      'Secretaría de Salud México. Cuadro Básico y Catálogo de Medicamentos del Sector Salud.',
    ],
  },

});
