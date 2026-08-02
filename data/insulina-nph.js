/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/insulina-nph.js
   Fuentes: DailyMed/FDA, ADA Standards of Care 2024,
   Micromedex, ISMP, Guías ALAD, OPS/OMS
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'insulina-nph',
  nombre:         'Insulina NPH',
  nombreComercial: 'Humulin N® · Novolin N® · Insulatard®',
  nombreGenerico: 'Insulina Isófana (NPH — Neutral Protamine Hagedorn)',
  categoria:      'insulinas',
  tags:           ['diabetes', 'acción intermedia', 'insulina basal', 'alto riesgo', 'hipoglucemia', 'cuadro básico', 'subcutánea'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Medicamento de alto riesgo ISMP. Suspensión turbia que requiere resuspensión homogénea antes de cada dosis — la administración de una suspensión mal homogeneizada causa dosificación errática e hipoglucemia/hiperglucemia impredecibles. Su pico de acción marcado (4-10 h) genera riesgo significativo de hipoglucemia nocturna. Vía EXCLUSIVAMENTE subcutánea — NUNCA IV ni IM.',

  nivel1: {

    puntosClave: [
      'Insulina de <b>acción intermedia</b> — suspensión turbia (isófana, unida a protamina y zinc) que retrasa su absorción.',
      'Inicio de acción: <b>2-4 h</b> · Pico: <b>4-10 h</b> · Duración: <b>12-18 h</b> — habitualmente administrada 1-2 veces al día.',
      '<b>Vía EXCLUSIVAMENTE subcutánea</b> — NUNCA administrar IV ni IM (a diferencia de la insulina Regular).',
      '<b>Resuspender homogéneamente</b> (rodar el vial/pluma entre las manos 10-20 veces, NO agitar vigorosamente) antes de cada dosis — su aspecto debe quedar uniformemente turbio/lechoso.',
      'El pico de acción marcado genera <b>riesgo elevado de hipoglucemia nocturna</b> cuando se administra antes de dormir — vigilar glucemia a media noche en pacientes de riesgo.',
    ],

    resumenRapido: 'Insulina humana modificada con protamina y zinc para retrasar su absorción subcutánea, prolongando su efecto respecto a la insulina Regular. Se utiliza como insulina basal o intermedia en esquemas de 1-2 dosis diarias, sola o mezclada con insulina de acción rápida en la misma jeringa. A diferencia de las insulinas basales modernas (glargina, detemir), su perfil de acción tiene un pico definido, lo que exige coordinar la dosis con las comidas y vigilar estrechamente el riesgo de hipoglucemia en el horario del pico, especialmente durante la noche si se administra antes de dormir.',

    objetivoTerapeutico: 'Control glucémico basal/intermedio en esquemas de insulina de 1-2 dosis diarias · Complemento de insulina de acción rápida en esquema mezclado · Alternativa de menor costo a las insulinas basales análogas en contextos de recursos limitados',

    preparacion: {
      'Presentación':          'Vial 10 mL 100 UI/mL (U-100) · Cartucho 3 mL · Pluma precargada',
      'Aspecto':               'Suspensión turbia/lechosa uniforme — NUNCA usar si hay grumos, partículas o el líquido permanece transparente',
      'Resuspensión':          'Rodar el vial/pluma suavemente entre las manos 10-20 veces (NO agitar) hasta homogeneizar antes de cada dosis',
      'Vía':                   'SC EXCLUSIVAMENTE — NUNCA IV ni IM',
      'Mezcla con insulina rápida': 'Si se mezcla en la misma jeringa: cargar PRIMERO la insulina de acción rápida (clara), LUEGO la NPH (turbia) — "de claro a turbio"',
      'Jeringa':               'Usar SIEMPRE jeringas de insulina graduadas en UI — nunca jeringas de mL estándar',
      'Temperatura':           'Sacar de refrigeración unos minutos antes de uso para reducir el dolor en la inyección',
      '⏱️ Inicio efecto (SC)':  '2-4 h · Pico: 4-10 h · Duración: 12-18 h',
      '🧊 Estabilidad':         'Vial/pluma en uso: 28-42 días a temperatura ambiente según fabricante',
    },

    vigilancia: {
      antes: [
        'Verificar glucemia capilar antes de cada dosis.',
        'Confirmar que la suspensión esté homogéneamente turbia — desechar si hay grumos, partículas o floculación visible.',
        'Confirmar tipo de insulina: NPH (turbia) — NO confundir con insulina Regular o análogos rápidos (transparentes) ni con glargina.',
        'Doble verificación independiente: tipo de insulina, dosis en UI, vía de administración.',
        'Revisar el horario de la última comida y el patrón de hipoglucemias previas.',
      ],
      durante: [
        'Rotar el sitio de inyección SC — abdomen, muslos, brazos, glúteos — documentar zona utilizada.',
        'Si se mezcla con insulina rápida en la misma jeringa: administrar de inmediato tras la preparación.',
        'Vigilar especialmente el horario del pico de acción (4-10 h post-dosis) por riesgo de hipoglucemia.',
      ],
      despues: [
        'Glucemia de control coincidiendo con el pico esperado de acción (aprox. 4-10 h post-dosis).',
        'Si se administra antes de dormir: vigilar glucemia nocturna (2-3 AM) en pacientes con riesgo de hipoglucemia.',
        'Registrar dosis administrada, hora, sitio y glucemia correspondiente.',
        'Inspeccionar sitios de inyección — rotar zonas según esquema institucional para prevenir lipodistrofia.',
      ],
      suspender: [
        'Glucemia &lt; 70 mg/dL — hipoglucemia confirmada: suspender la dosis programada si aún no se administró y tratar de inmediato.',
        'Signos de hipoglucemia grave: convulsiones, pérdida de consciencia, sudoración profusa nocturna, pesadillas (sugestivos de hipoglucemia nocturna).',
        'Aspecto anómalo de la suspensión (grumos, floculación, cambio de color).',
      ],
    },

    incompatibilidades: [
      'NUNCA mezclar con insulina glargina ni detemir en la misma jeringa (altera el perfil de acción de ambas).',
      'Compatible con insulina Regular y análogos rápidos en la misma jeringa, cargando primero la insulina clara.',
      'No administrar por vía IV — puede causar embolismo por las partículas de la suspensión.',
      'Precaución con soluciones alcalinas — degradación de la insulina.',
    ],

    alertasSeguridad: [
      '🔴 NUNCA administrar por vía IV ni IM — es una suspensión, riesgo de embolia y absorción errática.',
      '🔴 Resuspender SIEMPRE homogéneamente antes de cada dosis — una suspensión mal mezclada causa dosis subterapéuticas o excesivas impredecibles.',
      '🟠 Riesgo elevado de hipoglucemia nocturna si se administra antes de dormir — coordinar con horario de cena y snack nocturno según protocolo.',
      '🟠 NUNCA usar jeringa de mL estándar para medir insulina — 1 mL ≠ 1 UI.',
      '🟡 Todos los viales de insulina tienen aspecto similar en el empaque — verificar etiqueta y tipo 3 veces antes de administrar.',
    ],
  },

  modulos: {

    hipoglucemia: `
      <b>Protocolo de hipoglucemia:</b><br/><br/>
      <b>Glucemia 54-70 mg/dL (sintomático o asintomático):</b><br/>
      • Paciente consciente y con vía oral: 15-20 g de carbohidratos de acción rápida (jugo, glucosa oral).<br/>
      • Paciente sin vía oral: <b>Dextrosa al 50% — 25-50 mL IV</b> (12.5-25 g dextrosa).<br/>
      • Controlar glucemia a los 15 min — repetir si persiste &lt; 70 mg/dL.<br/><br/>
      <b>Glucemia &lt; 54 mg/dL (hipoglucemia grave) o hipoglucemia nocturna:</b><br/>
      • <b>Dextrosa 50% — 50 mL IV en bolo</b> inmediato si hay acceso IV.<br/>
      • Si no hay acceso IV: <b>Glucagón 1 mg IM o SC</b>.<br/>
      • Considerar hipoglucemia nocturna ante sudoración excesiva, pesadillas o cefalea matutina — revisar la dosis vespertina de NPH.<br/>
      • Monitorizar glucemia cada 15 min hasta ≥ 100 mg/dL.<br/><br/>
      <b>Documentar:</b> glucemia, hora, síntomas, tratamiento, respuesta y notificación médica.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Rodar el vial/pluma entre las manos 10-20 veces antes de cada dosis — NUNCA agitar vigorosamente (genera espuma y burbujas que alteran la dosis).',
      'Rotar siempre los sitios de inyección SC y documentar la zona utilizada.',
      'Si se mezcla con insulina rápida en la misma jeringa, cargar primero la insulina clara y administrar de inmediato tras la preparación.',
      'Educar al paciente sobre el horario esperado del pico de acción y los signos de hipoglucemia a vigilar en ese periodo.',
      'En pacientes con dosis nocturna: valorar junto al equipo médico un snack antes de dormir si hay riesgo de hipoglucemia nocturna.',
      'No inyectar en zonas con lipodistrofia, induración, hematoma o edema.',
      'Etiqueta obligatoria en jeringa/pluma: tipo de insulina, dosis en UI, hora y preparador.',
      'Documentar dosis, hora, glucemia y respuesta clínica en cada administración.',
    ],

    efectosAdversos: [
      '🔴 Hipoglucemia grave — pérdida de consciencia, convulsiones, daño neurológico',
      '🟠 Hipoglucemia nocturna (frecuente por el pico de acción tardío)',
      '🟠 Lipodistrofia en sitios de inyección (por falta de rotación)',
      '🟡 Reacción local en sitio de inyección: eritema, prurito, induración',
      '🟡 Aumento de peso con uso prolongado',
      '🟡 Hipersensibilidad local (rara)',
    ],

    contraindicaciones: [
      'Hipoglucemia activa — contraindicación absoluta.',
      'Hipersensibilidad conocida a la insulina NPH, protamina o excipientes (precaución en alergia conocida al pescado, por reactividad cruzada con protamina).',
      'Administración IV o IM — contraindicada por ser una suspensión.',
    ],

    fotosensibilidad: 'No requiere protección de la luz durante la administración. El vial/pluma debe protegerse de la luz solar directa y del calor excesivo. No congelar.',

    estabilidad: {
      'Vial/pluma sin abrir':   'Hasta fecha de vencimiento en refrigeración (2-8°C)',
      'Vial/pluma en uso':      '28-42 días a temperatura ambiente (15-25°C) según fabricante — no refrigerar de nuevo una vez iniciado',
      'Temperatura':            'NO congelar · NO exponer a temperaturas &gt; 30°C · NO agitar vigorosamente',
      'Aspecto':                'Suspensión turbia/lechosa homogénea tras resuspender — desechar si hay grumos o floculación persistente',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Vial/pluma en uso: 28-42 días a temperatura ambiente según fabricante. Anotar fecha de apertura.',
      dosisRestante:     'Vial multidosis abierto: conservar a temperatura ambiente durante el periodo indicado por el fabricante.',
      infusionPreparada: 'No aplica — uso exclusivo SC, no se prepara en infusión IV.',
      notas:             'Resuspender homogéneamente antes de cada dosis; nunca usar si la suspensión no se homogeneiza o presenta grumos.',
    },

    presentaciones: [
      'Insulina NPH Humana 100 UI/mL — vial 10 mL (Humulin N®, Novolin N®, Insulatard®)',
      'Insulina NPH — cartucho 3 mL para pluma reutilizable',
      'Insulina NPH — pluma precargada desechable',
      'Mezclas premezcladas NPH/Regular (70/30) o NPH/análogo rápido (75/25, 70/30, 50/50) disponibles en algunos mercados',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Insulina basal/intermedia (inicio)',       dosis: '0.1-0.2 UI/kg/día, dividida en 1-2 dosis',       via: 'SC' },
      { indicacion: 'Esquema de 2 dosis diarias',                dosis: '2/3 de la dosis total AM, 1/3 PM (orientativo)', via: 'SC' },
      { indicacion: 'Ajuste según respuesta',                    dosis: 'Titular 10-20% según glucemias en ayuno/pre-comida', via: 'SC' },
    ],

    embarazo: 'Ha sido utilizada históricamente como insulina basal en el embarazo con perfil de seguridad establecido, aunque las insulinas basales análogas de acción prolongada son preferidas en muchos protocolos actuales por su perfil más predecible. Sigue siendo una opción válida, especialmente en contextos de recursos limitados. Las necesidades de insulina aumentan progresivamente durante el embarazo. Compatible con lactancia materna.',

    pediatria: 'Utilizada en esquemas de insulina de 2 dosis diarias en niños, especialmente en contextos de recursos limitados sin acceso a análogos basales. Dosis inicial orientativa 0.5-1 UI/kg/día total, dividida según esquema. Vigilar estrechamente el riesgo de hipoglucemia nocturna, particularmente en niños pequeños.',

    adultoMayor: 'Mayor riesgo de hipoglucemia nocturna por el pico de acción marcado, alimentación irregular y menor percepción de síntomas. Objetivos glucémicos más permisivos. Considerar insulinas basales de perfil más plano (glargina) si están disponibles en pacientes de alto riesgo de hipoglucemia.',

    insufRenal: 'La insuficiencia renal prolonga la vida media de la insulina y aumenta el riesgo de hipoglucemia. Reducir dosis en IRT según respuesta, iniciando con dosis conservadoras. Monitorizar glucemia más frecuentemente.',

    insufHepatica: 'Mayor sensibilidad a la insulina y riesgo de hipoglucemia en insuficiencia hepática grave por menor gluconeogénesis. Reducir dosis e intensificar monitorización.',
  },

  nivel4: {
    referencias: [
      'American Diabetes Association. Standards of Medical Care in Diabetes 2024. Diabetes Care. 2024;47(Suppl 1):S1-S321.',
      'ISMP. High-Alert Medications in Acute Care Settings. Institute for Safe Medication Practices. 2023.',
      'DailyMed. Insulin Isophane (NPH) Human Injection. U.S. National Library of Medicine.',
      'Moghissi ES, et al. AACE/ADA Consensus Statement on Inpatient Glycemic Control. Endocr Pract. 2009;15(4):353-369.',
      'ALAD. Guías ALAD sobre el Diagnóstico, Control y Tratamiento de la Diabetes Mellitus Tipo 2. Rev ALAD. 2019.',
      'OPS/OMS. Insulina — Medicamento esencial. Lista Modelo de Medicamentos Esenciales OMS.',
      'Secretaría de Salud México. Cuadro Básico y Catálogo de Medicamentos del Sector Salud.',
    ],
  },

});
