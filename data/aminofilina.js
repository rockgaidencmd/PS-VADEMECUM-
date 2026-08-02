/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/aminofilina.js
   Fuentes: CIMA AEMPS (Eufilina), FDA DailyMed,
   GINA/GOLD Guidelines Asma/EPOC, Cuadro Básico
   IMSS/Sector Salud México
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'aminofilina',
  nombre:         'Aminofilina',
  nombreComercial: 'Eufilina®',
  nombreGenerico: 'Aminophylline (Theophylline Ethylenediamine)',
  categoria:      'otros',
  tags:           ['broncodilatador', 'metilxantina', 'asma', 'EPOC', 'cuadro básico', 'estrecho margen terapéutico', 'clásico'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Margen terapéutico muy estrecho — la diferencia entre dosis eficaz y tóxica es pequeña. Riesgo de arritmias graves y convulsiones con niveles elevados. Múltiples interacciones farmacológicas relevantes (macrólidos, quinolonas, cimetidina aumentan niveles; tabaquismo, fenobarbital los reducen). Requiere niveles plasmáticos si se dispone de ellos. Infundir SIEMPRE diluida y lenta — nunca en bolo rápido.',

  nivel1: {

    puntosClave: [
      '<b>Broncodilatador metilxantínico clásico</b> — actualmente de 3ª línea en asma/EPOC grave refractaria a broncodilatadores inhalados y corticoides, pero sigue disponible y usada en muchos hospitales de América Latina.',
      '<b>Margen terapéutico muy estrecho</b> — nivel objetivo 10-20 mcg/mL; sobre 20 mcg/mL aumenta el riesgo de toxicidad (arritmias, convulsiones).',
      'Dosis de carga: <b>5-6 mg/kg IV en 20-30 min</b> (si el paciente NO toma teofilina/aminofilina previamente) → mantenimiento en perfusión continua.',
      '<b>Múltiples interacciones farmacológicas</b> — macrólidos, quinolonas y cimetidina AUMENTAN los niveles; el tabaquismo y algunos anticonvulsivantes los REDUCEN.',
      '<b>Infundir SIEMPRE diluida y lenta</b> — la inyección rápida puede causar arritmias graves, convulsiones e incluso muerte súbita.',
    ],

    resumenRapido: 'Metilxantina broncodilatadora con mecanismo de acción complejo (inhibición de la fosfodiesterasa, antagonismo de adenosina) que relaja el músculo liso bronquial y tiene efecto estimulante respiratorio central leve. Su uso ha disminuido notablemente con la aparición de broncodilatadores beta-2 de acción prolongada y corticoides inhalados más seguros y eficaces, pero sigue teniendo un papel como tratamiento de tercera línea en el broncoespasmo grave refractario, especialmente en contextos de recursos limitados donde es ampliamente disponible y de bajo costo. Su principal limitación es el margen terapéutico extremadamente estrecho: la diferencia entre la dosis eficaz y la tóxica es pequeña, y numerosos fármacos e incluso hábitos como el tabaquismo alteran significativamente sus niveles plasmáticos.',

    objetivoTerapeutico: 'Tratamiento del broncoespasmo grave refractario a broncodilatadores inhalados de primera línea (asma/EPOC) · Coadyuvante en la exacerbación grave de asma/EPOC cuando otras medidas son insuficientes · Estimulación respiratoria en apnea del prematuro (uso neonatal específico)',

    preparacion: {
      'Presentación':          '<b>Eufilina® 25 mg/mL — ampolla 10 mL (250 mg)</b>',
      'Diluyente':             'SF 0.9% o SG 5%',
      'Dosis de carga':        '<b>5-6 mg/kg IV en 20-30 min</b> (SOLO si el paciente no ha tomado teofilina/aminofilina en las últimas 24 h; si ya la toma, omitir o reducir a la mitad)',
      'Dosis de mantenimiento (perfusión)': '<b>0.5-0.9 mg/kg/h en perfusión continua</b>, ajustada según niveles plasmáticos y respuesta',
      'Dilución para carga':   'Diluir en 100 mL SF/SG 5%, infundir en 20-30 min',
      'Dilución para perfusión': 'Diluir en 250-500 mL SF/SG 5% según protocolo institucional',
      '⏱️ Tiempo de infusión (carga)': '<b>MÍNIMO 20-30 min — NUNCA en bolo rápido</b>',
      'Vía':                   'IV en perfusión (carga y mantenimiento) — no usar IM (muy irritante) ni SC',
      '🧊 Estabilidad':         '<b>24 h a temperatura ambiente en SF 0.9% o SG 5% tras diluir</b>',
    },

    vigilancia: {
      antes: [
        'Preguntar si el paciente ya toma teofilina/aminofilina — determina si se omite o reduce la dosis de carga.',
        'Revisar medicación concomitante: macrólidos, quinolonas, cimetidina (aumentan niveles); fenobarbital, rifampicina (los reducen).',
        'Antecedente de arritmias, epilepsia o cardiopatía — mayor riesgo de toxicidad.',
        'Función hepática — el metabolismo es hepático, la insuficiencia hepática prolonga la vida media.',
        'Confirmar si el paciente es fumador — el tabaquismo acelera el metabolismo, requiriendo dosis mayores.',
      ],
      durante: [
        'Infundir la dosis de carga en 20-30 min mínimo — nunca en bolo rápido.',
        'Monitorización ECG continua — vigilar arritmias.',
        'Vigilar signos de toxicidad: náuseas, vómitos, temblor, taquicardia, agitación (signos precoces antes de las convulsiones).',
        'Constantes vitales frecuentes durante la carga y al iniciar la perfusión.',
      ],
      despues: [
        'Niveles plasmáticos de teofilina/aminofilina si están disponibles (objetivo 10-20 mcg/mL) — ajustar la perfusión según el resultado.',
        'Vigilar FC y ritmo cardíaco durante toda la perfusión.',
        'Vigilar signos de toxicidad de forma continua: temblor, náuseas, cefalea, agitación, convulsiones.',
        'Reevaluar la respuesta broncodilatadora y la necesidad de continuar.',
        'Documentar dosis, velocidad de perfusión y respuesta clínica.',
      ],
      suspender: [
        'Signos de toxicidad: arritmias, convulsiones, vómitos incoercibles.',
        'Niveles plasmáticos >20 mcg/mL con síntomas de toxicidad.',
        'Taquiarritmia significativa.',
        'Mejoría clínica que permite el paso a broncodilatadores inhalados exclusivamente.',
      ],
    },

    incompatibilidades: [
      'No mezclar con soluciones ácidas.',
      'Incompatible con muchos fármacos en la misma vía — administrar por separado.',
      'No administrar por vía IM ni SC (muy irritante tisular).',
      'Compatible con SF 0.9% y SG 5% para dilución.',
    ],

    alertasSeguridad: [
      '🔴 MARGEN TERAPÉUTICO MUY ESTRECHO — la diferencia entre dosis eficaz y tóxica es pequeña; niveles plasmáticos si están disponibles.',
      '🔴 NUNCA en bolo rápido — arritmias graves, convulsiones e incluso muerte súbita con infusión rápida.',
      '🔴 MÚLTIPLES INTERACCIONES — macrólidos/quinolonas/cimetidina aumentan niveles; tabaquismo/fenobarbital los reducen.',
      '🟠 Signos precoces de toxicidad (náuseas, temblor, taquicardia) pueden preceder a convulsiones graves — no ignorar.',
      '🟡 Reducir o considerar omitir la dosis de carga si el paciente ya toma teofilina/aminofilina.',
      '🟡 Actualmente de 3ª línea — usar solo cuando los broncodilatadores inhalados y corticoides son insuficientes.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Preguntar si el paciente ya toma teofilina/aminofilina antes de administrar la dosis de carga.',
      'Diluir siempre e infundir la carga en mínimo 20-30 min — nunca en bolo rápido.',
      'Monitorización ECG continua durante la carga y la perfusión.',
      'Vigilar signos precoces de toxicidad: náuseas, vómitos, temblor, taquicardia, agitación.',
      'Usar bomba de infusión para la perfusión continua — el margen terapéutico estrecho exige precisión.',
      'Comunicar al equipo médico cualquier cambio en la medicación concomitante que pueda alterar los niveles.',
      'Solicitar/verificar niveles plasmáticos si están disponibles en la institución.',
      'Documentar dosis, velocidad de perfusión y respuesta clínica en cada turno.',
    ],

    efectosAdversos: [
      '🔴 Arritmias cardíacas graves',
      '🔴 Convulsiones (toxicidad)',
      '🟠 Taquicardia',
      '🟠 Náuseas, vómitos (frecuentes, a veces signo precoz de toxicidad)',
      '🟡 Temblor, nerviosismo, insomnio',
      '🟡 Cefalea',
      '🟡 Reflujo gastroesofágico (relaja el esfínter esofágico inferior)',
    ],

    contraindicaciones: [
      'Arritmias cardíacas no controladas.',
      'Epilepsia no controlada.',
      'Hipersensibilidad a xantinas.',
      'Precaución extrema en insuficiencia hepática grave (prolonga significativamente la vida media).',
      'Uso concomitante sin ajuste con inhibidores potentes del metabolismo (macrólidos, quinolonas, cimetidina).',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar la ampolla a temperatura ambiente protegida de luz directa.',

    estabilidad: {
      'Ampolla sin abrir':     'Temperatura ambiente hasta vencimiento',
      'Diluida en SF/SG 5%':  '<b>24 h a temperatura ambiente</b>',
      'Aspecto':                'Solución incolora a ligeramente amarillenta — normal',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de 24 h tras apertura.',
      dosisRestante:     'Desechar sobrante de ampolla abierta.',
      infusionPreparada: '24 h en SF 0.9% o SG 5% a temperatura ambiente.',
      notas:             'Nunca administrar en bolo rápido. Usar bomba de infusión para el mantenimiento por su margen terapéutico estrecho.',
    },

    presentaciones: [
      'Eufilina® 25 mg/mL — ampolla 10 mL (250 mg)',
      'Aminofilina genérica — presentaciones similares según fabricante',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Carga (sin uso previo de teofilina)', dosis: '<b>5-6 mg/kg IV en 20-30 min</b>',                 via: 'IV' },
      { indicacion: 'Mantenimiento (perfusión)',            dosis: '<b>0.5-0.9 mg/kg/h</b>, ajustar según niveles',    via: 'IV' },
      { indicacion: 'Con uso previo de teofilina/aminofilina', dosis: 'Omitir la carga o reducir a la mitad (2.5-3 mg/kg)', via: 'IV' },
      { indicacion: 'Nivel objetivo (si se dispone)',         dosis: '10-20 mcg/mL',                                    via: '—' },
    ],

    embarazo: 'Categoría C (FDA). Puede usarse cuando esté claramente indicado en asma grave refractaria durante el embarazo, con ajuste cuidadoso de dosis y monitorización de niveles si es posible, dado el margen terapéutico estrecho y los cambios farmacocinéticos propios de la gestación.',

    pediatria: 'Carga: 5-6 mg/kg IV en 20-30 min (igual que en adultos). Mantenimiento pediátrico variable según edad (mayor aclaramiento en niños que en adultos, requiere dosis por kg más altas en algunos grupos etarios). Uso en apnea del prematuro con dosis y protocolo neonatal específico. Vigilancia estrecha por el margen terapéutico estrecho.',

    adultoMayor: 'Mayor riesgo de toxicidad por reducción del aclaramiento hepático relacionada con la edad. Reducir la dosis de mantenimiento y vigilar estrechamente signos de toxicidad. Mayor prevalencia de comorbilidad cardiovascular que aumenta el riesgo de arritmias.',

    insufRenal: 'Sin ajuste de dosis específico necesario — el metabolismo es fundamentalmente hepático, no renal.',

    insufHepatica: '<b>Reducir significativamente la dosis de mantenimiento</b> — la insuficiencia hepática prolonga notablemente la vida media del fármaco, con mayor riesgo de acumulación y toxicidad. Vigilancia estrecha de niveles si están disponibles.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Eufilina® (aminofilina).',
      'Global Initiative for Asthma (GINA). Global Strategy for Asthma Management and Prevention. 2023.',
      'Global Initiative for Chronic Obstructive Lung Disease (GOLD). Global Strategy for Diagnosis, Management, and Prevention of COPD. 2023.',
      'Barnes PJ. Theophylline. Am J Respir Crit Care Med. 2013.',
      'Secretaría de Salud México. Cuadro Básico y Catálogo de Medicamentos del Sector Salud.',
    ],
  },

});
