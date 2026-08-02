/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/insulina-accion-rapida.js
   Fuentes: DailyMed/FDA, ADA Standards of Care 2024,
   Micromedex, ISMP, Guías ALAD, OPS/OMS
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'insulina-accion-rapida',
  nombre:         'Insulina de Acción Rápida (Análogos Ultrarrápidos)',
  nombreComercial: 'Humalog® (Lispro) · NovoRapid® (Aspart) · Apidra® (Glulisina)',
  nombreGenerico: 'Insulina Lispro / Aspart / Glulisina',
  categoria:      'insulinas',
  tags:           ['diabetes', 'análogo', 'bolo prandial', 'alto riesgo', 'hipoglucemia', 'bomba de insulina', 'subcutánea'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Medicamento de alto riesgo ISMP. Su inicio de acción ultrarrápido (5-15 min) exige coincidencia estricta con la ingesta de alimentos — administrarla sin que el paciente vaya a comer de inmediato puede causar hipoglucemia grave. Errores de dosis o confusión con otras insulinas pueden causar hipoglucemia grave, daño neurológico o muerte. Requiere doble verificación independiente.',

  nivel1: {

    puntosClave: [
      'Análogos de <b>insulina ultrarrápida</b> (lispro, aspart, glulisina) — inicio de acción en <b>5-15 min</b>, pico 1-2 h, duración 3-5 h.',
      'Uso principal: <b>bolo prandial (cobertura de comidas)</b> y <b>corrección de hiperglucemia</b> según escala móvil — administrar inmediatamente antes o justo después de comer.',
      'Es la <b>única categoría de insulina apta para bombas de infusión subcutánea continua (CSII)</b>.',
      'Vía habitual: <b>SC exclusivamente</b> (excepto en protocolos específicos de bomba); NO es la primera opción para uso IV — para eso se prefiere la insulina Regular.',
      '<b>Nunca administrar sin tener el alimento disponible de inmediato</b> — a diferencia de la insulina Regular (30 min antes), los análogos ultrarrápidos se administran justo antes o incluso después de iniciar la comida.',
    ],

    resumenRapido: 'Análogos de insulina humana modificados genéticamente (lispro, aspart, glulisina) diseñados para una absorción subcutánea más rápida que la insulina humana regular, reproduciendo mejor el pico de insulina fisiológico postprandial. Se utilizan principalmente como insulina prandial en esquemas basal-bolo, en escalas de corrección de hiperglucemia y en bombas de insulina subcutánea continua. Su rápido inicio de acción exige una coordinación estricta con la ingesta de alimentos para evitar hipoglucemia.',

    objetivoTerapeutico: 'Control glucémico postprandial · Cobertura de bolo prandial en esquema basal-bolo · Corrección de hiperglucemia (escala móvil) · Insulina de elección en bombas de infusión subcutánea continua (CSII)',

    preparacion: {
      'Presentación':          'Vial 10 mL 100 UI/mL (U-100) · Cartucho 3 mL · Plumas precargadas · Vial U-200 (lispro concentrada)',
      'Vía SC (bolo prandial)': 'Sin diluir · Jeringa de insulina U-100 graduada en UI o pluma precargada · Ángulo 45-90°',
      'Vía SC (bomba CSII)':    'Sin diluir · Reservorio de la bomba · Cambio de catéter/reservorio cada 2-3 días',
      'Momento de administración': 'Inmediatamente antes de comer (0-15 min antes) o inmediatamente después si hay incertidumbre sobre la ingesta',
      'Jeringa':               'Usar SIEMPRE jeringas de insulina graduadas en UI — nunca jeringas de mL estándar',
      'Temperatura':           'Sacar de refrigeración unos minutos antes de uso para reducir el dolor en la inyección',
      '⏱️ Inicio efecto (SC)':  '5-15 min · Pico: 1-2 h · Duración: 3-5 h',
      '🧊 Estabilidad':         'Vial/pluma en uso: 28 días a temperatura ambiente (15-25°C)',
    },

    vigilancia: {
      antes: [
        'Verificar glucemia capilar antes de cada dosis.',
        'Confirmar que el alimento esté disponible y el paciente vaya a comer de inmediato — NUNCA administrar si hay riesgo de que la comida se retrase o no se sirva.',
        'Confirmar tipo de insulina: análogo ultrarrápido (transparente) — NO confundir con NPH (turbia) ni con insulinas basales.',
        'Doble verificación independiente: tipo de insulina, dosis en UI, vía de administración.',
        'Revisar la glucemia previa y la ingesta estimada de carbohidratos si se usa conteo de carbohidratos.',
      ],
      durante: [
        'Rotar el sitio de inyección SC — abdomen (absorción más rápida y predecible), muslos, brazos, glúteos.',
        'En bombas CSII: verificar la permeabilidad del catéter y ausencia de oclusión, eritema o dolor en el sitio de inserción.',
        'Vigilar signos tempranos de hipoglucemia dado el inicio de acción rápido.',
      ],
      despues: [
        'Glucemia postprandial de control a las 2 h.',
        'Confirmar que el paciente efectivamente ingirió los alimentos previstos tras la administración.',
        'Registrar dosis administrada, hora, tipo de análogo y glucemia correspondiente.',
        'Vigilar hipoglucemia especialmente si la comida se retrasó o fue menor a lo estimado.',
      ],
      suspender: [
        'Glucemia &lt; 70 mg/dL — hipoglucemia confirmada: suspender la dosis programada y tratar de inmediato.',
        'Ayuno no planificado o suspensión de la vía oral tras la administración — vigilancia estrecha y aviso médico inmediato.',
        'Signos de hipoglucemia grave: convulsiones, pérdida de consciencia.',
        'Oclusión o falla del catéter en bomba CSII — sustituir de inmediato y descartar cetoacidosis.',
      ],
    },

    incompatibilidades: [
      'No mezclar con insulina glargina ni detemir en la misma jeringa (precipitación/alteración del perfil de acción).',
      'Compatible con insulina NPH en la misma jeringa en algunos esquemas (aspirar primero el análogo rápido, luego la NPH) — verificar protocolo institucional.',
      'Precaución con soluciones alcalinas — degradación de la insulina.',
      'En bombas CSII: usar solo el diluyente/insulina indicado por el fabricante del dispositivo.',
    ],

    alertasSeguridad: [
      '🔴 NUNCA administrar sin que el alimento esté disponible de inmediato — el inicio ultrarrápido causa hipoglucemia si se retrasa la comida.',
      '🟠 NUNCA usar jeringa de mL estándar para medir insulina — 1 mL ≠ 1 UI. Siempre jeringas de insulina en UI.',
      '🟠 Todos los viales de insulina tienen aspecto similar — verificar etiqueta y tipo de análogo 3 veces antes de administrar.',
      '🟡 En bombas CSII, la interrupción del suministro (oclusión) puede llevar a cetoacidosis en pocas horas por la ausencia de depósito de insulina de acción prolongada.',
      '🟡 La hipoglucemia con análogos ultrarrápidos tiene un inicio más súbito que con insulina Regular — vigilar de cerca tras la administración.',
    ],
  },

  modulos: {

    hipoglucemia: `
      <b>Protocolo de hipoglucemia:</b><br/><br/>
      <b>Glucemia 54-70 mg/dL (sintomático o asintomático):</b><br/>
      • Paciente consciente y con vía oral: 15-20 g de carbohidratos de acción rápida (jugo, glucosa oral).<br/>
      • Paciente sin vía oral: <b>Dextrosa al 50% — 25-50 mL IV</b> (12.5-25 g dextrosa).<br/>
      • Controlar glucemia a los 15 min — repetir si persiste &lt; 70 mg/dL.<br/><br/>
      <b>Glucemia &lt; 54 mg/dL (hipoglucemia grave):</b><br/>
      • <b>Dextrosa 50% — 50 mL IV en bolo</b> inmediato.<br/>
      • Notificar al médico de inmediato.<br/>
      • Si no hay acceso IV: <b>Glucagón 1 mg IM o SC</b>.<br/>
      • Monitorizar glucemia cada 15 min hasta ≥ 100 mg/dL.<br/><br/>
      <b>Documentar:</b> glucemia, hora, síntomas, tratamiento, respuesta y notificación médica.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Coordinar la administración con la llegada de la bandeja de alimentos — nunca administrar con anticipación excesiva en pacientes con apetito variable.',
      'Rotar siempre los sitios de inyección SC y documentar la zona utilizada.',
      'El abdomen tiene la absorción más rápida y predecible — preferido para el bolo prandial.',
      'No inyectar en zonas con lipodistrofia, induración, hematoma o edema.',
      'En bombas CSII: cambiar el sitio de inserción del catéter cada 2-3 días y vigilar signos de infección o inflamación.',
      'Etiqueta obligatoria en jeringa/pluma: tipo de análogo, dosis en UI, hora y preparador.',
      'Educar al paciente/familia sobre la importancia de comer inmediatamente tras la inyección.',
      'Documentar dosis, hora, glucemia y respuesta clínica en cada administración.',
    ],

    efectosAdversos: [
      '🔴 Hipoglucemia grave — pérdida de consciencia, convulsiones, daño neurológico',
      '🟠 Hipoglucemia de inicio súbito por el efecto ultrarrápido',
      '🟠 Lipodistrofia en sitios de inyección (por falta de rotación)',
      '🟡 Reacción local en sitio de inyección: eritema, prurito, induración',
      '🟡 Dolor leve en la inyección (menor que con insulina Regular)',
      '🟡 Aumento de peso con uso prolongado',
      '🟡 Hipersensibilidad local (rara)',
    ],

    contraindicaciones: [
      'Hipoglucemia activa — contraindicación absoluta.',
      'Hipersensibilidad conocida al análogo específico o a sus excipientes.',
      'Precaución en pacientes con ingesta oral incierta o riesgo de ayuno súbito (procedimientos, náuseas).',
    ],

    fotosensibilidad: 'No requiere protección de la luz durante la administración. El vial/pluma debe protegerse de la luz solar directa y del calor excesivo. No congelar.',

    estabilidad: {
      'Vial/pluma sin abrir':   'Hasta fecha de vencimiento en refrigeración (2-8°C)',
      'Vial/pluma en uso':      '28 días a temperatura ambiente (15-25°C) · No refrigerar de nuevo una vez iniciado',
      'Reservorio de bomba CSII': '6-7 días según fabricante, cambiar antes por riesgo de pérdida de potencia',
      'Temperatura':            'NO congelar · NO exponer a temperaturas &gt; 30°C · NO agitar vigorosamente',
      'Aspecto':                'Transparente, incolora, sin partículas — desechar si hay turbidez o color',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Vial/pluma en uso: 28 días a temperatura ambiente. Anotar fecha de apertura.',
      dosisRestante:     'Vial multidosis abierto: conservar a temperatura ambiente hasta 28 días desde la apertura.',
      infusionPreparada: 'No habitual en infusión IV — uso predominante SC y en reservorio de bomba (6-7 días).',
      notas:             'El inicio de acción ultrarrápido exige coordinación estricta con la ingesta — evaluar siempre disponibilidad del alimento antes de administrar.',
    },

    presentaciones: [
      'Insulina Lispro 100 UI/mL — vial 10 mL, cartucho 3 mL, pluma precargada (Humalog®)',
      'Insulina Lispro 200 UI/mL — pluma precargada concentrada (Humalog® U-200)',
      'Insulina Aspart 100 UI/mL — vial 10 mL, cartucho 3 mL, pluma precargada (NovoRapid®/NovoLog®)',
      'Insulina Glulisina 100 UI/mL — vial 10 mL, pluma precargada (Apidra®)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Bolo prandial (esquema basal-bolo)',    dosis: 'Según conteo de carbohidratos o dosis fija individualizada', via: 'SC' },
      { indicacion: 'Escala de corrección (hiperglucemia)',  dosis: 'Según protocolo institucional (escala móvil)',               via: 'SC' },
      { indicacion: 'Bomba de infusión subcutánea (CSII)',   dosis: 'Tasa basal + bolos programados según perfil individual',     via: 'SC (bomba)' },
      { indicacion: 'Inicio orientativo en debut diabético', dosis: '0.1-0.15 UI/kg por comida, ajustar según respuesta',          via: 'SC' },
    ],

    embarazo: 'Los análogos lispro y aspart cuentan con amplia evidencia de seguridad en el embarazo y son de uso preferente sobre la insulina Regular en muchos esquemas por su mejor control postprandial; la glulisina tiene menos datos y se usa con más precaución. No cruzan la placenta en cantidades clínicamente relevantes. Las necesidades de insulina aumentan progresivamente durante el embarazo. Compatible con lactancia materna.',

    pediatria: 'Ampliamente utilizados en el manejo de diabetes tipo 1 pediátrica, incluidas bombas de insulina desde edades tempranas. Dosis individualizada según edad, peso y conteo de carbohidratos. Vigilar estrechamente la ingesta real de alimentos tras la administración, especialmente en niños pequeños con apetito variable.',

    adultoMayor: 'Mayor riesgo de hipoglucemia por alimentación irregular y menor percepción de síntomas. Objetivos glucémicos más permisivos. Considerar administrar inmediatamente después de comer en pacientes con ingesta impredecible (fragilidad, demencia) en lugar de antes de la comida.',

    insufRenal: 'La insuficiencia renal prolonga la vida media de la insulina y aumenta el riesgo de hipoglucemia. Reducir dosis en IRT según respuesta. Monitorizar glucemia más frecuentemente.',

    insufHepatica: 'Mayor sensibilidad a la insulina y riesgo de hipoglucemia en insuficiencia hepática grave por menor gluconeogénesis. Reducir dosis e intensificar monitorización.',
  },

  nivel4: {
    referencias: [
      'American Diabetes Association. Standards of Medical Care in Diabetes 2024. Diabetes Care. 2024;47(Suppl 1):S1-S321.',
      'ISMP. High-Alert Medications in Acute Care Settings. Institute for Safe Medication Practices. 2023.',
      'DailyMed. Insulin Lispro / Aspart / Glulisine Injection. U.S. National Library of Medicine.',
      'Moghissi ES, et al. AACE/ADA Consensus Statement on Inpatient Glycemic Control. Endocr Pract. 2009;15(4):353-369.',
      'ALAD. Guías ALAD sobre el Diagnóstico, Control y Tratamiento de la Diabetes Mellitus Tipo 2. Rev ALAD. 2019.',
      'OPS/OMS. Insulina — Medicamento esencial. Lista Modelo de Medicamentos Esenciales OMS.',
    ],
  },

});
