/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/prometazina.js
   Fuentes: CIMA AEMPS (Fenergan), FDA DailyMed (Black Box
   Warning respiratory depression), Cuadro Básico IMSS México
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'prometazina',
  nombre:         'Prometazina',
  nombreComercial: 'Fenergan®',
  nombreGenerico: 'Promethazine Hydrochloride',
  categoria:      'otros',
  tags:           ['antihistamínico', 'antiemético', 'sedante', 'fenotiazina', 'premedicación', 'alergia', 'cuadro básico'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Advertencia de recuadro negro (FDA) por depresión respiratoria grave, incluida apnea, especialmente en menores de 2 años (CONTRAINDICADO en este grupo) y con administración IV. Riesgo de necrosis tisular grave por extravasación o inyección intraarterial accidental — es altamente irritante. Efecto anticolinérgico y sedante marcado; potencia otros depresores del SNC.',

  nivel1: {

    puntosClave: [
      '<b>Antihistamínico fenotiazínico</b> con efecto antiemético, sedante y anticolinérgico marcado — muy usado en el cuadro básico latinoamericano.',
      '<b>CONTRAINDICADO en menores de 2 años</b> — riesgo de depresión respiratoria/apnea potencialmente fatal (advertencia de recuadro negro de la FDA).',
      'Dosis: <b>12.5-25 mg IM profunda o IV MUY diluida y lenta c/4-6 h</b> (máx 100 mg/día).',
      '<b>Riesgo de necrosis tisular grave</b> por extravasación o inyección intraarterial accidental — es uno de los fármacos con mayor riesgo de daño tisular grave de uso hospitalario común.',
      '<b>Vía IM profunda es la preferida</b> — la vía IV, si se usa, requiere máxima dilución y extrema precaución para confirmar la posición intravenosa.',
    ],

    resumenRapido: 'Antihistamínico H1 de la familia de las fenotiazinas, con marcado efecto sedante, antiemético y anticolinérgico central, además de cierto efecto antipsicótico débil por su estructura fenotiazínica. Se emplea como premedicación anestésica, en el tratamiento de náuseas/vómitos y reacciones alérgicas, y como coadyuvante sedante en diversos contextos. Su uso está limitado por dos riesgos graves bien documentados: la depresión respiratoria (con advertencia de recuadro negro de la FDA, especialmente relevante en niños pequeños, en quienes está contraindicada por debajo de los 2 años) y la posibilidad de necrosis tisular grave si se extravasa o se inyecta accidentalmente por vía intraarterial, dado su marcado efecto irritante tisular.',

    objetivoTerapeutico: 'Tratamiento de náuseas y vómitos de diversas causas · Tratamiento sintomático de reacciones alérgicas · Premedicación sedante antes de procedimientos o cirugía · Coadyuvante sedante en el manejo del dolor (potenciación de analgésicos)',

    preparacion: {
      'Presentación':          '<b>Fenergan® 25 mg/mL — ampolla 1-2 mL</b>',
      'Vía de elección':       '<b>IM profunda (glúteo)</b> — es la vía más segura de administración parenteral',
      'Dosis estándar adulto': '<b>12.5-25 mg IM o IV c/4-6 h</b> (máx 100 mg/día)',
      'Vía IV (si es necesaria)': '<b>Diluir al máximo posible (mínimo 10 veces) e infundir muy lento</b> — confirmar la posición intravenosa correcta antes de administrar',
      'Premedicación anestésica': '25-50 mg IM la noche antes o 1-2 h antes del procedimiento',
      'Vía':                   '<b>IM profunda (de elección)</b> · IV muy diluida (con extrema precaución) · Oral',
      '⏱️ Inicio efecto (IM)':  '15-20 min · Pico: 2-3 h',
      '⏱️ Duración':            '4-6 h (hasta 12 h en algunos pacientes)',
      '🧊 Estabilidad':         'Ampolla lista para usar; si se diluye para IV, usar de inmediato',
    },

    vigilancia: {
      antes: [
        '<b>Confirmar la edad del paciente — contraindicado en menores de 2 años.</b>',
        'FR, SpO2 y nivel de consciencia basal.',
        'Verificar el acceso venoso si se opta por la vía IV — la posición correcta es crítica para evitar la inyección intraarterial.',
        'Antecedente de glaucoma de ángulo estrecho o hipertrofia prostática (efecto anticolinérgico).',
        'Revisar el uso de otros depresores del SNC (opioides, benzodiacepinas, alcohol) — potenciación del efecto sedante y respiratorio.',
      ],
      durante: [
        'Preferir la administración IM profunda siempre que sea posible.',
        'Si se administra IV: infundir extremadamente lento, diluida, vigilando el punto de infusión de forma continua.',
        'FR y SpO2 continuas durante y después de la administración, especialmente en niños y ancianos.',
        'Vigilar cualquier signo de dolor intenso, quemazón o cambio de coloración en el punto de infusión — sospechar inyección intraarterial o extravasación.',
      ],
      despues: [
        'FR, SpO2 y nivel de consciencia cada 15-30 min hasta la recuperación completa.',
        'Vigilar signos tardíos de daño tisular en el punto de inyección (dolor persistente, cambios de coloración, induración).',
        'No dar de alta sin acompañante tras sedación ambulatoria.',
        'Documentar dosis, vía y respuesta clínica.',
      ],
      suspender: [
        '🚨 Signos de inyección intraarterial o extravasación — detener inmediatamente y avisar de forma urgente (riesgo de necrosis/gangrena).',
        'FR <10 rpm o SpO2 <90% — depresión respiratoria, requiere soporte inmediato.',
        'Sedación excesiva no deseada.',
        'Reacción alérgica.',
      ],
    },

    incompatibilidades: [
      'No mezclar con soluciones alcalinas.',
      'Precaución con otros depresores del SNC (opioides, benzodiacepinas) — efecto sedante y respiratorio aditivo.',
      'No mezclar con otros fármacos en la misma jeringa sin verificar compatibilidad.',
    ],

    alertasSeguridad: [
      '🔴 CONTRAINDICADO en menores de 2 años — depresión respiratoria/apnea potencialmente fatal (advertencia FDA).',
      '🔴 RIESGO DE NECROSIS TISULAR GRAVE por extravasación o inyección intraarterial accidental — preferir siempre la vía IM.',
      '🔴 DEPRESIÓN RESPIRATORIA — vigilar estrechamente, especialmente combinado con otros depresores del SNC.',
      '🟠 Efecto anticolinérgico marcado — precaución en glaucoma, hipertrofia prostática y ancianos.',
      '🟡 Sedación intensa y prolongada — advertir sobre no conducir ni operar maquinaria.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Confirmar SIEMPRE la edad del paciente antes de administrar — contraindicado en menores de 2 años.',
      'Preferir la vía IM profunda — es la vía más segura para este fármaco.',
      'Si se requiere vía IV: diluir al máximo, confirmar la posición correcta de la vía e infundir extremadamente lento.',
      'FR y SpO2 continuas durante y después de la administración.',
      'Vigilar de forma activa el punto de infusión/inyección — cualquier dolor intenso o cambio de coloración requiere detener de inmediato.',
      'Advertir sobre la sedación marcada — no conducir ni operar maquinaria tras la dosis.',
      'Vigilar retención urinaria y sequedad de boca (efecto anticolinérgico), especialmente en ancianos.',
      'Documentar dosis, vía, hora y respuesta clínica en cada administración.',
    ],

    efectosAdversos: [
      '🔴 Depresión respiratoria / apnea (especialmente en niños pequeños y con otros depresores del SNC)',
      '🔴 Necrosis tisular por extravasación o inyección intraarterial accidental',
      '🟠 Sedación marcada y prolongada',
      '🟠 Hipotensión (con IV)',
      '🟡 Efecto anticolinérgico: sequedad de boca, visión borrosa, retención urinaria',
      '🟡 Reacción paradójica (agitación, especialmente en niños)',
      '🟡 Síntomas extrapiramidales (raros, por su estructura fenotiazínica)',
    ],

    contraindicaciones: [
      '<b>Menores de 2 años (contraindicación absoluta).</b>',
      'Depresión respiratoria o del SNC preexistente no monitorizada.',
      'Glaucoma de ángulo estrecho no tratado.',
      'Hipertrofia prostática con retención urinaria.',
      'Hipersensibilidad a fenotiazinas.',
      'Uso concomitante con otros depresores del SNC sin vigilancia estrecha.',
    ],

    fotosensibilidad: 'Sí — fármaco fotosensible. Conservar la ampolla protegida de la luz. Puede producir fotosensibilidad cutánea con exposición solar en tratamientos prolongados.',

    estabilidad: {
      'Ampolla sin abrir':     'Temperatura ambiente hasta vencimiento, proteger de la luz',
      'Diluida para IV':       '<b>Usar de inmediato tras diluir</b>',
      'Aspecto':                'Solución incolora a ligeramente amarillenta — desechar si oscurecida',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar inmediatamente tras abrir.',
      dosisRestante:     'Desechar sobrante de ampolla abierta.',
      infusionPreparada: 'Si se diluye para IV, administrar de inmediato tras la dilución.',
      notas:             'Preferir siempre la vía IM. Verificar la posición correcta de la vía antes de cualquier administración IV — el riesgo de daño tisular grave es alto.',
    },

    presentaciones: [
      'Fenergan® 25 mg/mL — ampolla 1-2 mL (IM)',
      'Fenergan® 25 mg — comprimidos (oral)',
      'Prometazina genérica — jarabe y comprimidos según país',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Náuseas/vómitos, reacción alérgica',  dosis: '<b>12.5-25 mg IM (de elección) o IV muy diluida</b>', via: 'IM/IV' },
      { indicacion: 'Repetición',                              dosis: 'Cada 4-6 h (máx 100 mg/día)',                          via: 'IM/IV' },
      { indicacion: 'Premedicación anestésica',                dosis: '25-50 mg IM antes del procedimiento',                  via: 'IM' },
      { indicacion: 'Mantenimiento oral',                       dosis: '25 mg VO c/4-6 h',                                    via: 'VO' },
    ],

    embarazo: 'Categoría C (FDA). Se ha usado en las náuseas y vómitos del embarazo cuando otras medidas fallan, aunque hoy se prefieren antieméticos con mejor perfil de seguridad establecido (dimenhidrinato, piridoxina, metoclopramida) como primera línea. Evitar cerca del parto por el riesgo de depresión respiratoria neonatal.',

    pediatria: '<b>CONTRAINDICADO en menores de 2 años.</b> >2 años: 0.25-0.5 mg/kg IM/VO c/4-6 h (máx 25 mg/dosis), con extrema precaución y solo si es claramente necesario, vigilando estrechamente la función respiratoria. Preferir alternativas más seguras siempre que sea posible en este grupo de edad.',

    adultoMayor: 'Uso con precaución (lista Beers) — mayor riesgo de efectos anticolinérgicos centrales (confusión, delirium), sedación excesiva, caídas y retención urinaria. Si se usa, dosis reducida y vigilancia estrecha.',

    insufRenal: 'Sin ajuste de dosis formal establecido. Usar con precaución en insuficiencia renal grave por posible prolongación del efecto sedante.',

    insufHepatica: 'Precaución en insuficiencia hepática grave — el metabolismo es principalmente hepático, con posible prolongación del efecto. Considerar reducción de dosis.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Fenergan® (prometazina).',
      'FDA. Black Box Warning: Promethazine and risk of severe respiratory depression. Prescribing Information.',
      'American Geriatrics Society. 2023 Updated AGS Beers Criteria. J Am Geriatr Soc. 2023.',
      'FDA DailyMed. Promethazine Hydrochloride Injection — Prescribing Information (tissue necrosis warning).',
      'Secretaría de Salud México. Cuadro Básico y Catálogo de Medicamentos del Sector Salud.',
    ],
  },

});
