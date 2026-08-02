/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/efedrina.js
   Fuentes: CIMA AEMPS, FDA DailyMed, Obstetric Anesthesia
   Guidelines (hipotensión en raquianestesia), Cuadro
   Básico IMSS/Sector Salud México
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'efedrina',
  nombre:         'Efedrina',
  nombreGenerico: 'Ephedrine Sulfate',
  categoria:      'vasopresores',
  tags:           ['vasopresor', 'anestesia obstétrica', 'hipotensión', 'raquianestesia', 'agonista mixto', 'clásico', 'cuadro básico'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Vasopresor de acción mixta (alfa y beta agonista, con liberación de noradrenalina endógena) — la taquifilaxia (pérdida de efecto con dosis repetidas) es frecuente. Riesgo de taquicardia e hipertensión con dosis excesivas. Precaución en cardiopatía isquémica y arritmias por su efecto cronotrópico e inotrópico positivo.',

  nivel1: {

    puntosClave: [
      '<b>Vasopresor clásico en la hipotensión de la anestesia obstétrica</b> (raquianestesia/epidural) — usado durante décadas como primera línea, aunque las guías actuales priorizan la fenilefrina en muchos protocolos.',
      'Dosis: <b>5-10 mg IV en bolo</b>, repetible cada pocos minutos según respuesta (máx habitual 50-60 mg/día).',
      '<b>Mecanismo mixto</b>: efecto alfa (vasoconstricción) y beta (aumenta la FC y la contractilidad) — a diferencia de la fenilefrina (alfa puro), tiende a mantener o aumentar la frecuencia cardíaca.',
      '<b>Taquifilaxia</b> — la respuesta a dosis repetidas disminuye progresivamente por depleción de los depósitos de noradrenalina endógena.',
      'Cruza la placenta en menor proporción relativa que otros vasopresores a dosis estándar, aunque el debate sobre el vasopresor obstétrico óptimo (efedrina vs. fenilefrina) sigue vigente según el contexto clínico (bradicardia materna asociada favorece efedrina).',
    ],

    resumenRapido: 'Vasopresor de acción mixta que actúa tanto por estimulación directa de los receptores alfa y beta adrenérgicos como indirectamente al liberar noradrenalina de las terminaciones nerviosas simpáticas. A diferencia de los vasopresores alfa puros (fenilefrina), la efedrina produce un aumento de la frecuencia cardíaca y la contractilidad además de la vasoconstricción, lo que históricamente la convirtió en el vasopresor de elección en la hipotensión asociada a la anestesia raquídea/epidural en obstetricia, especialmente cuando coexiste bradicardia materna. Su uso repetido se ve limitado por la taquifilaxia (pérdida progresiva de efecto por depleción de los depósitos de noradrenalina), lo que motiva su combinación o sustitución por fenilefrina en muchos protocolos actuales.',

    objetivoTerapeutico: 'Tratamiento de la hipotensión asociada a la anestesia raquídea/epidural, especialmente obstétrica · Tratamiento de la hipotensión perioperatoria con bradicardia asociada · Soporte hemodinámico transitorio en diversas situaciones de hipotensión aguda',

    preparacion: {
      'Presentación':          '<b>Efedrina Sulfato 30 mg/mL o 50 mg/mL — ampolla 1 mL</b>',
      'Diluyente':             'Diluir en SF 0.9% para facilitar la dosificación en bolos pequeños (p. ej. 30 mg en 10 mL → 3 mg/mL)',
      'Dosis estándar':        '<b>5-10 mg IV en bolo</b>, repetible cada pocos minutos según respuesta',
      'Dosis máxima':          '50-60 mg/día (orientativo, según protocolo institucional y respuesta)',
      'Velocidad de administración': 'Bolo IV lento',
      'Vía':                   'IV en bolo · IM (menos frecuente, acción más lenta)',
      '⏱️ Inicio efecto (IV)':  '1-2 min · Duración: 10-15 min (más prolongada que la fenilefrina)',
      '🧊 Estabilidad':         '<b>24 h a temperatura ambiente en SF 0.9% si se diluye</b>',
    },

    vigilancia: {
      antes: [
        'TA y FC basales.',
        'Confirmar el acceso venoso adecuado.',
        'En obstetricia: valorar el estado fetal si se dispone de monitorización.',
        'Antecedente de cardiopatía isquémica, arritmias o hipertensión no controlada — precaución por el efecto cronotrópico e inotrópico positivo.',
      ],
      durante: [
        'TA cada 1-2 min tras el bolo, especialmente en el contexto de anestesia obstétrica.',
        'FC continua — vigilar taquicardia excesiva.',
        'Vigilar la respuesta a dosis repetidas — la taquifilaxia es frecuente, considerando cambio a otro vasopresor si la respuesta disminuye.',
      ],
      despues: [
        'TA y FC hasta la estabilización hemodinámica.',
        'En obstetricia: vigilar el bienestar fetal según protocolo.',
        'Documentar dosis administradas, TA, FC y respuesta clínica.',
      ],
      suspender: [
        'Hipertensión excesiva o taquicardia significativa.',
        'Ausencia de respuesta pese a dosis repetidas (taquifilaxia) — cambiar a otro vasopresor (fenilefrina, noradrenalina según contexto).',
        'Arritmias significativas.',
      ],
    },

    incompatibilidades: [
      'Precaución con IMAO — respuesta presora exagerada e impredecible.',
      'Precaución con otros simpaticomiméticos — efecto aditivo.',
      'No mezclar con soluciones alcalinas.',
      'Compatible con SF 0.9% para dilución.',
    ],

    alertasSeguridad: [
      '🟠 TAQUIFILAXIA — la respuesta disminuye con dosis repetidas; considerar cambio de vasopresor si la eficacia decae.',
      '🟠 Taquicardia e hipertensión con dosis excesivas — vigilar FC y TA de forma continua.',
      '🟡 Precaución en cardiopatía isquémica y arritmias por el efecto cronotrópico/inotrópico positivo.',
      '🟡 Interacción con IMAO — respuesta presora exagerada.',
      '🟢 Preferida sobre la fenilefrina cuando coexiste bradicardia materna significativa en el contexto obstétrico.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Diluir la ampolla en SF 0.9% para facilitar la dosificación precisa en bolos de 5-10 mg.',
      'TA y FC continuas o muy frecuentes tras cada bolo, especialmente en anestesia obstétrica.',
      'Vigilar la disminución progresiva de la respuesta con dosis repetidas (taquifilaxia) y comunicar al equipo médico si es necesario cambiar de vasopresor.',
      'En obstetricia: coordinar con el equipo de anestesia y obstetricia la monitorización fetal.',
      'Vigilar signos de taquicardia excesiva o hipertensión tras la administración.',
      'Registrar la dosis acumulada durante el procedimiento.',
      'Documentar TA, FC, dosis y respuesta clínica en cada administración.',
    ],

    efectosAdversos: [
      '🟠 Taquicardia',
      '🟠 Hipertensión (con dosis excesivas)',
      '🟡 Ansiedad, temblor',
      '🟡 Cefalea',
      '🟡 Palpitaciones',
      '🟡 Náuseas',
    ],

    contraindicaciones: [
      'Hipertensión arterial grave no controlada.',
      'Taquiarritmias significativas.',
      'Cardiopatía isquémica grave (precaución, no siempre contraindicación absoluta según el contexto clínico).',
      'Feocromocitoma.',
      'Uso concomitante con IMAO (riesgo de crisis hipertensiva).',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar la ampolla a temperatura ambiente protegida de luz directa.',

    estabilidad: {
      'Ampolla sin abrir':     'Temperatura ambiente hasta vencimiento',
      'Diluida en SF 0.9%':   '<b>24 h a temperatura ambiente</b>',
      'Aspecto':               'Solución incolora — desechar si turbia',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de 24 h tras apertura.',
      dosisRestante:     'Desechar sobrante de ampolla abierta.',
      infusionPreparada: '24 h en SF 0.9% a temperatura ambiente si se diluye.',
      notas:             'Diluir para facilitar la dosificación precisa en bolos pequeños. La taquifilaxia es un fenómeno esperado con dosis repetidas.',
    },

    presentaciones: [
      'Efedrina Sulfato 30 mg/mL — ampolla 1 mL',
      'Efedrina Sulfato 50 mg/mL — ampolla 1 mL',
      'Efedrina genérica — presentaciones similares según fabricante',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Hipotensión en raquianestesia/epidural (bolo)', dosis: '<b>5-10 mg IV en bolo</b>, repetible según respuesta', via: 'IV' },
      { indicacion: 'Hipotensión perioperatoria con bradicardia',      dosis: '5-10 mg IV en bolo',                                   via: 'IV' },
      { indicacion: 'Dosis máxima orientativa',                        dosis: '50-60 mg/día (según respuesta y protocolo)',           via: 'IV' },
    ],

    embarazo: 'Ampliamente utilizada históricamente en la hipotensión de la anestesia obstétrica; sigue siendo una opción válida, especialmente cuando coexiste bradicardia materna, aunque muchos protocolos actuales prefieren la fenilefrina como primera línea por su perfil ácido-base fetal ligeramente más favorable en el uso rutinario. Ambos vasopresores se consideran aceptables según el contexto clínico específico.',

    pediatria: 'Uso excepcional en pediatría, bajo supervisión especializada. Datos limitados; dosis ajustada por peso según protocolo específico si es necesaria.',

    adultoMayor: 'Mayor sensibilidad a los efectos cronotrópicos e inotrópicos — precaución especial en cardiopatía isquémica o arritmias conocidas. Iniciar con dosis más bajas y vigilar estrechamente la respuesta.',

    insufRenal: 'Sin ajuste de dosis específico necesario para el uso puntual en bolos.',

    insufHepatica: 'Sin ajuste de dosis específico necesario para el uso puntual en bolos.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Efedrina Sulfato.',
      'Kee WD et al. Prophylactic and therapeutic use of vasopressors in obstetric anesthesia. Anesthesiology. 2009.',
      'Lee A et al. A quantitative, systematic review of randomized controlled trials of ephedrine versus phenylephrine for the management of hypotension during spinal anesthesia for cesarean delivery. Anesth Analg. 2002.',
      'Habib AS. A review of the impact of phenylephrine versus ephedrine on maternal hemodynamics and neonatal outcomes. Anesth Analg. 2012.',
      'Secretaría de Salud México. Cuadro Básico y Catálogo de Medicamentos del Sector Salud.',
    ],
  },

});
