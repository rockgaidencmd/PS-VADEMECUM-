/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/insulina-glargina.js
   Fuentes: DailyMed/FDA, ADA Standards of Care 2024,
   Micromedex, ISMP, Guías ALAD, OPS/OMS
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'insulina-glargina',
  nombre:         'Insulina Glargina',
  nombreComercial: 'Lantus® · Toujeo® · Basaglar®',
  nombreGenerico: 'Insulina Glargina (análogo de acción prolongada)',
  categoria:      'insulinas',
  tags:           ['diabetes', 'acción prolongada', 'insulina basal', 'alto riesgo', 'hipoglucemia', 'análogo', 'subcutánea'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Medicamento de alto riesgo ISMP. Vía EXCLUSIVAMENTE subcutánea — NUNCA IV ni IM (a diferencia de la insulina Regular). Frecuentemente confundida con otras insulinas por el aspecto similar de los viales/plumas — verificar siempre el tipo antes de administrar. NUNCA mezclar en la misma jeringa con ninguna otra insulina (precipita y altera el perfil de acción de ambas).',

  nivel1: {

    puntosClave: [
      'Análogo de insulina de <b>acción prolongada ("basal")</b> — perfil de liberación relativamente <b>plano, sin pico pronunciado</b>, a diferencia de la NPH.',
      'Inicio de acción: <b>1-2 h</b> · Sin pico marcado · Duración: <b>~20-24 h</b> (Lantus®/Basaglar®) o hasta <b>36 h</b> (Toujeo®, U-300) — habitualmente una vez al día, mismo horario cada día.',
      '<b>Vía EXCLUSIVAMENTE subcutánea</b> — NUNCA administrar IV ni IM.',
      '<b>NUNCA mezclar en la misma jeringa</b> con ninguna otra insulina ni diluir — precipita a pH fisiológico, lo que altera su perfil de liberación prolongada.',
      'Solución <b>transparente</b> (a diferencia de la NPH turbia) — no requiere resuspensión, pero su claridad puede generar confusión visual con insulina Regular o análogos rápidos.',
    ],

    resumenRapido: 'Análogo de insulina humana de acción prolongada, formulado a pH ácido (se solubiliza en el vial y precipita microscópicamente al inyectarse en el tejido subcutáneo de pH fisiológico), lo que genera una liberación lenta y sostenida sin pico pronunciado durante aproximadamente 24 horas. Se utiliza como insulina basal en esquemas basal-bolo, habitualmente combinada con insulina de acción rápida para la cobertura prandial. Su perfil relativamente plano reduce el riesgo de hipoglucemia nocturna en comparación con la insulina NPH, aunque el riesgo de hipoglucemia persiste y requiere vigilancia continua.',

    objetivoTerapeutico: 'Control glucémico basal en esquema basal-bolo · Sustitución de la secreción basal fisiológica de insulina · Reducción del riesgo de hipoglucemia nocturna respecto a NPH en pacientes seleccionados',

    preparacion: {
      'Presentación':          'Vial 10 mL 100 UI/mL (U-100) · Pluma precargada 100 UI/mL o 300 UI/mL (Toujeo®)',
      'Aspecto':               'Solución transparente e incolora — NO requiere resuspensión (a diferencia de la NPH)',
      'Vía':                   'SC EXCLUSIVAMENTE — NUNCA IV ni IM',
      'Mezcla':                'NUNCA mezclar en la misma jeringa con otra insulina ni diluir — usar jeringa/pluma exclusiva',
      'Horario':               'Administrar a la MISMA hora cada día, habitualmente 1 vez/día (Toujeo® también 1 vez/día)',
      'Jeringa':               'Usar SIEMPRE jeringas de insulina graduadas en UI — nunca jeringas de mL estándar; con Toujeo® (U-300) usar la pluma específica, nunca extraer con jeringa convencional',
      'Temperatura':           'Sacar de refrigeración unos minutos antes de uso para reducir el dolor en la inyección',
      '⏱️ Inicio efecto (SC)':  '1-2 h · Sin pico pronunciado · Duración: ~20-24 h (hasta 36 h con Toujeo®)',
      '🧊 Estabilidad':         'Vial/pluma en uso: 28 días (Lantus®) a 42-56 días (Toujeo®) a temperatura ambiente según fabricante',
    },

    vigilancia: {
      antes: [
        'Verificar glucemia capilar antes de cada dosis (habitualmente en ayuno si es dosis única diaria).',
        'Confirmar tipo de insulina: glargina — verificar cuidadosamente que NO se trate de insulina Regular o análogo rápido (ambas también transparentes).',
        'Doble verificación independiente: tipo de insulina, concentración (U-100 vs U-300 en Toujeo®), dosis en UI, vía de administración.',
        'Confirmar el horario habitual de administración del paciente para mantener consistencia.',
      ],
      durante: [
        'Rotar el sitio de inyección SC — abdomen, muslos, brazos, glúteos — documentar zona utilizada.',
        'Administrar siempre con jeringa/pluma exclusiva — nunca reutilizar material que haya contenido otra insulina.',
        'No es necesario coincidir la dosis con una comida específica al no tener pico prandial pronunciado.',
      ],
      despues: [
        'Glucemia en ayuno como principal parámetro de ajuste de dosis (refleja el efecto basal).',
        'Vigilar glucemia a lo largo del día por si aparecen signos de hipoglucemia, aunque el riesgo es menor que con NPH.',
        'Registrar dosis administrada, hora, sitio y glucemia correspondiente.',
        'Inspeccionar sitios de inyección — rotar zonas según esquema institucional para prevenir lipodistrofia.',
      ],
      suspender: [
        'Glucemia &lt; 70 mg/dL persistente o hipoglucemia recurrente — reevaluar la dosis basal con el equipo médico antes de la siguiente aplicación.',
        'Signos de hipoglucemia grave: convulsiones, pérdida de consciencia.',
        'Confirmación de concentración incorrecta administrada (p. ej. Toujeo® medido con jeringa convencional) — notificar de inmediato, riesgo de sobredosis o infradosis.',
      ],
    },

    incompatibilidades: [
      'NUNCA mezclar con ninguna otra insulina en la misma jeringa (NPH, Regular, análogos rápidos) — precipita y altera el perfil de acción.',
      'NUNCA diluir.',
      'No administrar por vía IV ni IM.',
      'Usar jeringa/pluma exclusiva, nunca compartida con otro tipo de insulina.',
    ],

    alertasSeguridad: [
      '🔴 NUNCA mezclar en la misma jeringa con otra insulina — precipita, altera el perfil de liberación prolongada de forma impredecible.',
      '🔴 NUNCA administrar por vía IV ni IM.',
      '🟠 Riesgo de confusión con insulina Regular o análogos rápidos por el aspecto transparente similar — verificar etiqueta 3 veces.',
      '🟠 Con Toujeo® (U-300): usar EXCLUSIVAMENTE la pluma del fabricante — extraer con jeringa convencional causa error de dosis grave por la concentración triplicada.',
      '🟡 Mantener el mismo horario de administración cada día para preservar el perfil basal estable.',
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
      • <b>Dextrosa 50% — 50 mL IV en bolo</b> inmediato si hay acceso IV.<br/>
      • Si no hay acceso IV: <b>Glucagón 1 mg IM o SC</b>.<br/>
      • Dado el efecto prolongado de la glargina (hasta 24-36 h), vigilar recurrencia de hipoglucemia durante varias horas tras el episodio inicial.<br/>
      • Monitorizar glucemia cada 15-30 min hasta ≥ 100 mg/dL y luego cada 2-4 h por el riesgo de recurrencia.<br/><br/>
      <b>Documentar:</b> glucemia, hora, síntomas, tratamiento, respuesta y notificación médica.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Verificar siempre la concentración de la pluma/vial (U-100 vs U-300 Toujeo®) — no son intercambiables unidad por unidad en la práctica clínica sin ajuste.',
      'Rotar siempre los sitios de inyección SC y documentar la zona utilizada.',
      'Nunca mezclar con otra insulina en la misma jeringa ni extraer Toujeo® con jeringa convencional.',
      'Mantener el horario de administración lo más constante posible día a día.',
      'Educar al paciente/familia sobre la diferencia entre esta insulina basal y la insulina prandial que pueda tener indicada.',
      'No inyectar en zonas con lipodistrofia, induración, hematoma o edema.',
      'Etiqueta obligatoria en jeringa/pluma: tipo de insulina, concentración, dosis en UI, hora y preparador.',
      'Documentar dosis, hora, glucemia y respuesta clínica en cada administración.',
    ],

    efectosAdversos: [
      '🔴 Hipoglucemia grave — pérdida de consciencia, convulsiones, daño neurológico',
      '🟠 Hipoglucemia (menor incidencia nocturna que con NPH, pero persiste el riesgo)',
      '🟠 Lipodistrofia en sitios de inyección (por falta de rotación)',
      '🟡 Reacción local en sitio de inyección: eritema, prurito, induración, dolor leve (pH ácido de la formulación)',
      '🟡 Aumento de peso con uso prolongado',
      '🟡 Hipersensibilidad local (rara)',
    ],

    contraindicaciones: [
      'Hipoglucemia activa — contraindicación absoluta.',
      'Hipersensibilidad conocida a la insulina glargina o a sus excipientes.',
      'Administración IV o IM — contraindicada.',
      'Mezcla con otras insulinas — contraindicada por alteración de su perfil farmacocinético.',
    ],

    fotosensibilidad: 'No requiere protección de la luz durante la administración. El vial/pluma debe protegerse de la luz solar directa y del calor excesivo. No congelar.',

    estabilidad: {
      'Vial/pluma sin abrir':   'Hasta fecha de vencimiento en refrigeración (2-8°C)',
      'Vial/pluma en uso (Lantus®/Basaglar®)': '28 días a temperatura ambiente (15-25°C)',
      'Pluma en uso (Toujeo®)': '42-56 días a temperatura ambiente según presentación',
      'Temperatura':            'NO congelar · NO exponer a temperaturas &gt; 30°C',
      'Aspecto':                'Solución transparente e incolora — desechar si turbia o con partículas',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Vial/pluma en uso: 28 días (Lantus®/Basaglar®) o hasta 56 días (Toujeo®) a temperatura ambiente. Anotar fecha de apertura.',
      dosisRestante:     'Vial multidosis abierto: conservar a temperatura ambiente durante el periodo indicado por el fabricante.',
      infusionPreparada: 'No aplica — uso exclusivo SC, no se prepara en infusión IV ni se mezcla.',
      notas:             'Nunca mezclar con otra insulina; usar jeringa/pluma exclusiva. Con Toujeo® respetar siempre la pluma del fabricante.',
    },

    presentaciones: [
      'Insulina Glargina 100 UI/mL — vial 10 mL, pluma precargada (Lantus®)',
      'Insulina Glargina 100 UI/mL — pluma precargada (Basaglar®, biosimilar)',
      'Insulina Glargina 300 UI/mL — pluma precargada concentrada (Toujeo®)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Insulina basal (inicio, naïve a insulina)', dosis: '0.1-0.2 UI/kg/día, 1 vez al día',                 via: 'SC' },
      { indicacion: 'Conversión desde NPH 2 dosis/día',           dosis: 'Reducir la dosis total diaria en 20% al convertir', via: 'SC' },
      { indicacion: 'Titulación',                                 dosis: 'Ajustar 2-4 UI (o 10-20%) cada 3-7 días según glucemia en ayuno', via: 'SC' },
    ],

    embarazo: 'La evidencia acumulada respalda su uso en el embarazo, aunque algunos protocolos aún prefieren insulina NPH o detemir por mayor cantidad de datos históricos específicos en gestación; la decisión se individualiza según el contexto clínico y la disponibilidad. No cruza la placenta en cantidades clínicamente relevantes. Las necesidades de insulina aumentan progresivamente durante el embarazo. Compatible con lactancia materna.',

    pediatria: 'Aprobada para uso en niños desde los 2 años (según formulación/país) como insulina basal en esquema basal-bolo. Dosis individualizada según edad, peso y necesidades basales. Mantener horario constante de administración.',

    adultoMayor: 'Perfil de acción más plano que la NPH reduce el riesgo de hipoglucemia nocturna, lo que la hace preferible en pacientes de edad avanzada con riesgo de hipoglucemia. Objetivos glucémicos más permisivos. Iniciar con dosis conservadoras y titular gradualmente.',

    insufRenal: 'La insuficiencia renal prolonga la vida media de la insulina y aumenta el riesgo de hipoglucemia. Reducir dosis en IRT según respuesta, iniciando con dosis conservadoras. Monitorizar glucemia más frecuentemente.',

    insufHepatica: 'Mayor sensibilidad a la insulina y riesgo de hipoglucemia en insuficiencia hepática grave por menor gluconeogénesis. Reducir dosis e intensificar monitorización.',
  },

  nivel4: {
    referencias: [
      'American Diabetes Association. Standards of Medical Care in Diabetes 2024. Diabetes Care. 2024;47(Suppl 1):S1-S321.',
      'ISMP. High-Alert Medications in Acute Care Settings. Institute for Safe Medication Practices. 2023.',
      'DailyMed. Insulin Glargine Injection (Lantus, Toujeo, Basaglar). U.S. National Library of Medicine.',
      'Riddle MC, et al. The Treat-to-Target Trial: Randomized Addition of Glargine or Human NPH Insulin. Diabetes Care. 2003;26(11):3080-3086.',
      'ALAD. Guías ALAD sobre el Diagnóstico, Control y Tratamiento de la Diabetes Mellitus Tipo 2. Rev ALAD. 2019.',
      'OPS/OMS. Insulina — Medicamento esencial. Lista Modelo de Medicamentos Esenciales OMS.',
    ],
  },

});
