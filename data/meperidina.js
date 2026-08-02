/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/meperidina.js
   Fuentes: CIMA AEMPS (Dolantina/Demerol), FDA DailyMed,
   ISMP High-Alert Medications, Cuadro Básico IMSS México
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'meperidina',
  nombre:         'Meperidina (Petidina)',
  nombreComercial: 'Demerol® / Dolantina®',
  nombreGenerico: 'Meperidine Hydrochloride (Pethidine)',
  categoria:      'analgesia',
  tags:           ['opioide', 'analgésico', 'petidina', 'trabajo de parto', 'escalofríos postanestésicos', 'cuadro básico', 'normeperidina'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Opioide con metabolito activo neurotóxico (normeperidina) que se acumula con dosis repetidas o insuficiencia renal, causando temblor, mioclonías y convulsiones. Interacción potencialmente MORTAL con IMAO (síndrome serotoninérgico grave). Uso limitado a tratamientos cortos por su perfil de toxicidad acumulativa — ya no es de primera línea para dolor crónico ni tratamientos prolongados según guías actuales.',

  nivel1: {

    puntosClave: [
      '<b>Opioide con metabolito tóxico acumulativo (normeperidina)</b> — a diferencia de otros opioides, la toxicidad aumenta con dosis repetidas, no solo con la dosis única.',
      'Uso clásico en <b>analgesia del trabajo de parto</b> y en el <b>tratamiento de los escalofríos postanestésicos</b> (indicación única donde es superior a otros opioides).',
      'Dosis: <b>50-100 mg IV/IM c/3-4 h</b> — limitar la DURACIÓN del tratamiento (máx 48 h en muchos protocolos) por la acumulación de normeperidina.',
      '<b>Interacción MORTAL con IMAO</b> — contraindicación absoluta; puede causar síndrome serotoninérgico grave.',
      '<b>Contraindicado en insuficiencia renal</b> — la normeperidina se acumula y puede causar convulsiones.',
    ],

    resumenRapido: 'Analgésico opioide sintético con una particularidad farmacocinética relevante: se metaboliza a normeperidina, un metabolito activo con propiedades neuroexcitatorias (no analgésicas) y vida media más larga que el fármaco original, que se acumula con dosis repetidas o en presencia de insuficiencia renal, causando temblor, mioclonías, irritabilidad y, en casos graves, convulsiones. Por este motivo, las guías actuales han desplazado a la meperidina como opioide de primera línea para el dolor moderado-intenso, reservándola para tratamientos de corta duración y para una indicación en la que sigue siendo superior a otros opioides: el tratamiento de los escalofríos (tiritona) postanestésicos y post-transfusionales. Mantiene también un uso histórico relevante en la analgesia del trabajo de parto en muchos países de América Latina.',

    objetivoTerapeutico: 'Tratamiento de los escalofríos postanestésicos y post-transfusionales (indicación de elección) · Analgesia del trabajo de parto (uso de corta duración) · Tratamiento del dolor agudo moderado-intenso de corta duración cuando otros opioides no son adecuados',

    preparacion: {
      'Presentación':          '<b>Meperidina/Petidina 50 mg/mL o 100 mg/2 mL — ampolla</b>',
      'Diluyente':             'Puede administrarse sin diluir (IV lenta) o diluido en SF 0.9%/SG 5%',
      'Dosis estándar adulto': '<b>50-100 mg IV/IM/SC c/3-4 h</b> (máx 600 mg/día, pero limitar la duración del tratamiento)',
      'Dosis escalofríos postanestésicos': '<b>12.5-25 mg IV lento</b> — dosis mucho menor que la analgésica',
      'Velocidad IV':          'Bolo lento en 3-5 min — la inyección rápida puede causar hipotensión marcada',
      'Duración máxima recomendada': 'Limitar a 48-72 h de tratamiento continuo por la acumulación de normeperidina',
      'Vía':                   'IV lenta · IM · SC',
      '⏱️ Inicio efecto (IV)':  '5 min · (IM/SC): 10-15 min',
      '⏱️ Duración':            '2-4 h (más corta que la morfina)',
      '🧊 Estabilidad':         '<b>24 h a temperatura ambiente en SF 0.9% o SG 5% si se diluye</b>',
    },

    vigilancia: {
      antes: [
        'FC, FR y SpO2 basal.',
        '<b>Revisar la medicación del paciente: descartar IMAO (uso actual o en las últimas 2 semanas) — contraindicación absoluta.</b>',
        'Función renal — contraindicado o usar con extrema precaución en insuficiencia renal.',
        'Historial de convulsiones — mayor riesgo con la acumulación de normeperidina.',
        'En trabajo de parto: valorar la fase del parto y el estado fetal.',
      ],
      durante: [
        'SpO2 y FR durante la administración — vigilar depresión respiratoria.',
        'Administrar en bolo lento (IV) — la inyección rápida puede causar hipotensión marcada.',
        'Vigilar signos de excitación neurológica (temblor, mioclonías) — pueden indicar acumulación de normeperidina.',
        'En trabajo de parto: monitorización de la frecuencia cardíaca fetal según protocolo.',
      ],
      despues: [
        'SpO2 y nivel de consciencia cada 30-60 min.',
        'Vigilar signos de toxicidad por normeperidina en tratamientos de más de 2-3 días: temblor, irritabilidad, mioclonías, convulsiones.',
        'Si se administró cerca del parto: vigilar al recién nacido por depresión respiratoria neonatal.',
        'Reevaluar la necesidad de continuar — transicionar a otro analgésico si se requiere tratamiento prolongado.',
        'Documentar dosis, vía, hora y respuesta clínica.',
      ],
      suspender: [
        'Signos de toxicidad por normeperidina (temblor, mioclonías, convulsiones) — suspender y cambiar a otro opioide.',
        'SpO2 <90% o FR <10 rpm — depresión respiratoria significativa.',
        'Al completar la duración máxima recomendada de tratamiento.',
        'Reacción alérgica.',
      ],
    },

    incompatibilidades: [
      '<b>CONTRAINDICACIÓN ABSOLUTA con IMAO</b> — riesgo de síndrome serotoninérgico grave, potencialmente mortal.',
      'Precaución con ISRS/ISRN — riesgo de síndrome serotoninérgico (menor que con IMAO, pero presente).',
      'No mezclar con soluciones alcalinas.',
      'Precaución con otros depresores del SNC — efecto sedante y respiratorio aditivo.',
    ],

    alertasSeguridad: [
      '🔴 CONTRAINDICACIÓN ABSOLUTA CON IMAO — síndrome serotoninérgico potencialmente mortal.',
      '🔴 ACUMULACIÓN DE NORMEPERIDINA con dosis repetidas o insuficiencia renal — convulsiones, mioclonías, temblor.',
      '🔴 CONTRAINDICADO O EXTREMA PRECAUCIÓN en insuficiencia renal.',
      '🟠 Limitar la duración del tratamiento (48-72 h) — ya no es de primera línea para tratamientos prolongados.',
      '🟠 Depresión respiratoria como con cualquier opioide.',
      '🟢 Indicación de elección en escalofríos postanestésicos/post-transfusionales — superior a otros opioides en este contexto específico.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Revisar la medicación del paciente antes de la primera dosis — descartar IMAO de forma explícita (contraindicación absoluta).',
      'Administrar IV lento (3-5 min) — la inyección rápida causa hipotensión marcada.',
      'SpO2 y FR durante y después de la administración.',
      'Vigilar signos de acumulación de normeperidina en tratamientos de más de 2-3 días: temblor, irritabilidad, mioclonías.',
      'Limitar la duración del tratamiento — comunicar al equipo médico si se prevé necesidad de analgesia prolongada (cambiar a otro opioide).',
      'En trabajo de parto: coordinar con el equipo obstétrico la monitorización fetal.',
      'Para escalofríos postanestésicos: usar la dosis baja específica (12.5-25 mg), no la dosis analgésica completa.',
      'Documentar dosis, vía, hora, duración acumulada del tratamiento y respuesta clínica.',
    ],

    efectosAdversos: [
      '🔴 Convulsiones/mioclonías por acumulación de normeperidina (dosis repetidas, insuficiencia renal)',
      '🔴 Síndrome serotoninérgico (con IMAO — contraindicación absoluta)',
      '🟠 Depresión respiratoria',
      '🟠 Hipotensión (con IV rápido)',
      '🟡 Sedación, mareo',
      '🟡 Náuseas, vómitos',
      '🟡 Depresión respiratoria neonatal (si se administra cerca del expulsivo)',
    ],

    contraindicaciones: [
      'Uso de IMAO actual o en las últimas 2 semanas (contraindicación absoluta).',
      'Insuficiencia renal (contraindicación relativa fuerte por la acumulación de normeperidina).',
      'Antecedente de convulsiones (mayor riesgo con la acumulación del metabolito).',
      'Depresión respiratoria grave no controlada.',
      'Hipersensibilidad a meperidina.',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar la ampolla a temperatura ambiente protegida de luz directa.',

    estabilidad: {
      'Ampolla sin abrir':     'Temperatura ambiente hasta vencimiento',
      'Diluida en SF 0.9%':   '<b>24 h a temperatura ambiente</b>',
      'Diluida en SG 5%':     '24 h a temperatura ambiente',
      'Aspecto':               'Solución incolora — desechar si turbia',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de 24 h tras apertura.',
      dosisRestante:     'Desechar sobrante de ampolla abierta.',
      infusionPreparada: '24 h en SF 0.9% o SG 5% a temperatura ambiente si se diluye.',
      notas:             'Sustancia sujeta a control (opioide) — registrar según normativa local. Limitar la duración del tratamiento por la toxicidad acumulativa de la normeperidina.',
    },

    presentaciones: [
      'Dolantina® 50 mg/mL — ampolla 2 mL (100 mg)',
      'Demerol® 50 mg/mL o 100 mg/2 mL — ampolla',
      'Meperidina genérica — varios fabricantes',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Dolor moderado-intenso (corta duración)', dosis: '<b>50-100 mg IV/IM/SC c/3-4 h</b> (limitar a 48-72 h)', via: 'IV/IM/SC' },
      { indicacion: 'Escalofríos postanestésicos/post-transfusionales', dosis: '<b>12.5-25 mg IV lento</b> (dosis baja específica)',    via: 'IV' },
      { indicacion: 'Analgesia en trabajo de parto',              dosis: '50-100 mg IM/IV, repetible según protocolo obstétrico',      via: 'IV/IM' },
    ],

    embarazo: 'Categoría C/D según fase (FDA). Uso histórico extendido en la analgesia del trabajo de parto en muchos países de América Latina, aunque hoy se prefieren alternativas con menor riesgo de depresión respiratoria neonatal (nalbufina) cuando están disponibles. Evitar dosis repetidas cerca del expulsivo por el riesgo de depresión respiratoria neonatal prolongada (metabolito activo).',

    pediatria: '>6 meses: 1-1.8 mg/kg IV/IM/SC c/3-4 h (máx 100 mg/dosis). Uso limitado por el mismo perfil de toxicidad acumulativa que en adultos — preferir otros opioides para tratamientos de más de 48 h.',

    adultoMayor: 'Mayor riesgo de acumulación de normeperidina por reducción fisiológica de la función renal — usar con extrema precaución, dosis reducida y duración muy limitada. Preferir otros opioides para el manejo del dolor en este grupo.',

    insufRenal: '<b>Contraindicado o extrema precaución</b> — la normeperidina se acumula significativamente, aumentando el riesgo de convulsiones y mioclonías. Evitar en insuficiencia renal moderada-grave; si es imprescindible, usar la dosis mínima eficaz durante el menor tiempo posible.',

    insufHepatica: 'Precaución en insuficiencia hepática grave — el metabolismo es hepático; considerar reducción de dosis y vigilar acumulación de metabolitos.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Dolantina® (meperidina/petidina).',
      'ISMP. List of High-Alert Medications in Acute Care Settings.',
      'Latta KS et al. Meperidine: a critical review. Am J Ther. 2002.',
      'ACOG Practice Bulletin. Approaches to Limit Intervention During Labor and Birth. Obstet Gynecol. 2019.',
      'Secretaría de Salud México. Cuadro Básico y Catálogo de Medicamentos del Sector Salud.',
    ],
  },

});
