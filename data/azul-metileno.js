/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/azul-metileno.js
   Fuentes: CIMA AEMPS, FDA DailyMed, ACMT Methemoglobinemia
   Guidelines, Cuadro Básico IMSS/Sector Salud México
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'azul-metileno',
  nombre:         'Azul de Metileno',
  nombreGenerico: 'Methylene Blue',
  categoria:      'otros',
  tags:           ['antídoto', 'metahemoglobinemia', 'shock vasopléjico', 'urgencia', 'toxicología', 'cuadro básico', 'síndrome serotoninérgico'],
  prioridad:      'critical',
  altoRiesgo:     true,
  altoRiesgoTexto: 'CONTRAINDICADO en pacientes con déficit de glucosa-6-fosfato deshidrogenasa (G6PD) — puede desencadenar hemólisis grave. Interacción potencialmente MORTAL con ISRS/IRSN y otros serotoninérgicos (síndrome serotoninérgico grave) — el azul de metileno es un inhibidor de la MAO-A. A dosis altas puede paradójicamente EMPEORAR la metahemoglobinemia. Tiñe la piel, orina y secreciones de color azul-verdoso (esperado, no patológico).',

  nivel1: {

    puntosClave: [
      '<b>Antídoto de elección en la metahemoglobinemia sintomática</b> (>20-30% o sintomática a cualquier nivel) — dosis 1-2 mg/kg IV lenta.',
      '<b>CONTRAINDICADO en déficit de G6PD</b> — puede causar hemólisis grave; si se desconoce el estado y la situación es de riesgo vital, individualizar la decisión con el equipo médico.',
      '<b>Interacción MORTAL con antidepresivos serotoninérgicos</b> (ISRS, IRSN, IMAO) — riesgo de síndrome serotoninérgico grave; revisar la medicación antes de administrar si la situación lo permite.',
      'También usado en <b>shock vasopléjico refractario</b> (séptico, post-bypass cardíaco) como coadyuvante vasopresor de rescate en algunos protocolos de UCI.',
      'Produce <b>coloración azul-verdosa de la piel, orina y secreciones</b> — es esperado y no indica toxicidad ni empeoramiento clínico.',
    ],

    resumenRapido: 'Colorante con propiedades de agente reductor que actúa como antídoto específico en la metahemoglobinemia, acelerando la conversión de la metahemoglobina (forma oxidada de la hemoglobina, incapaz de transportar oxígeno) de vuelta a hemoglobina funcional mediante la vía de la NADPH-metahemoglobina reductasa. Su eficacia depende de esta vía enzimática dependiente de G6PD, por lo que está contraindicado (o es ineficaz e incluso peligroso) en pacientes con déficit de esta enzima. También se ha empleado como agente vasopresor de rescate en el shock vasopléjico refractario por su capacidad de inhibir la guanilato ciclasa e interferir con la vía del óxido nítrico, aunque esta indicación es menos establecida que la de antídoto.',

    objetivoTerapeutico: 'Tratamiento de la metahemoglobinemia sintomática o grave (>20-30%) · Coadyuvante vasopresor de rescate en el shock vasopléjico refractario a catecolaminas (uso en UCI, menos establecido) · Uso diagnóstico/quirúrgico como colorante (localización de estructuras, no relevante en el contexto de urgencia)',

    preparacion: {
      'Presentación':          '<b>Azul de Metileno 10 mg/mL — ampolla 10 mL (100 mg)</b>',
      'Diluyente':             'Puede administrarse sin diluir (IV lenta) o diluido en SF 0.9%',
      'Dosis metahemoglobinemia': '<b>1-2 mg/kg IV lenta en 5 min</b> — puede repetirse a la hora si persisten los síntomas (máx dosis acumulada 7 mg/kg)',
      'Dosis shock vasopléjico (rescate, UCI)': '1-2 mg/kg en bolo, seguido de perfusión 0.5 mg/kg/h según protocolo institucional',
      'Velocidad de infusión': '<b>Infundir lento (mínimo 5 min)</b> — la infusión muy rápida puede causar dolor torácico y disnea',
      'Vía':                   'IV lenta',
      '⏱️ Inicio efecto':       'Minutos — mejoría de la cianosis/saturación en la metahemoglobinemia',
      '🧊 Estabilidad':         'Ampolla lista para usar; si se diluye, usar poco después',
    },

    vigilancia: {
      antes: [
        '<b>Descartar déficit de G6PD si es posible</b> (historia clínica, antecedentes familiares, origen étnico de mayor prevalencia) antes de administrar, salvo emergencia vital sin tiempo para investigar.',
        '<b>Revisar la medicación del paciente</b>: ISRS, IRSN, IMAO — riesgo de síndrome serotoninérgico.',
        'Confirmar el diagnóstico de metahemoglobinemia (cianosis desproporcionada a la SpO2, sangre de color "achocolatado", gasometría con cooximetría si está disponible).',
        'Identificar la causa desencadenante (fármacos oxidantes: dapsona, nitratos, anestésicos locales tipo benzocaína/prilocaína, algunos antipalúdicos).',
      ],
      durante: [
        'Infundir lento (mínimo 5 min) — la infusión rápida puede causar dolor torácico, disnea y opresión precordial.',
        'Vigilar la respuesta: mejoría del color de la piel y de la saturación de oxígeno.',
        'Vigilar signos de hemólisis si hay sospecha de déficit de G6PD no descartado (orina oscura, ictericia, caída brusca de hemoglobina).',
        'Constantes vitales continuas.',
      ],
      despues: [
        'Reevaluar el nivel de metahemoglobina (cooximetría) a los 30-60 min si está disponible — puede repetirse la dosis si persisten los síntomas.',
        'Vigilar signos de hemólisis en las horas siguientes, especialmente si el estado de G6PD es desconocido.',
        'Informar al paciente/familia sobre la coloración azul-verdosa esperada de la piel y la orina — no es motivo de alarma.',
        'Identificar y retirar el agente causal de la metahemoglobinemia si es posible.',
        'Documentar dosis, respuesta clínica y nivel de metahemoglobina si se dispone de control.',
      ],
      suspender: [
        'Dosis acumulada máxima alcanzada (7 mg/kg) sin respuesta — considerar causas alternativas o exanguinotransfusión en casos extremos.',
        'Signos de hemólisis significativa — sospechar déficit de G6PD no descartado.',
        'Empeoramiento paradójico de la cianosis con dosis muy altas (efecto oxidante paradójico del propio azul de metileno a dosis excesivas).',
        'Signos de síndrome serotoninérgico si el paciente toma serotoninérgicos.',
      ],
    },

    incompatibilidades: [
      '<b>CONTRAINDICACIÓN funcional en déficit de G6PD</b> — la vía de acción depende de esta enzima; en su ausencia, es ineficaz y puede causar hemólisis.',
      '<b>Interacción grave con ISRS/IRSN/IMAO</b> — inhibidor de la MAO-A, riesgo de síndrome serotoninérgico.',
      'No mezclar con soluciones alcalinas fuertes.',
      'Precaución con otros agentes oxidantes/reductores.',
    ],

    alertasSeguridad: [
      '🔴 CONTRAINDICADO en déficit de G6PD — riesgo de hemólisis grave; ineficaz por el mecanismo de acción dependiente de esta enzima.',
      '🔴 INTERACCIÓN POTENCIALMENTE MORTAL con serotoninérgicos (ISRS, IRSN, IMAO) — síndrome serotoninérgico grave.',
      '🟠 A dosis muy altas puede EMPEORAR paradójicamente la metahemoglobinemia (efecto oxidante).',
      '🟡 Coloración azul-verdosa de piel, orina y secreciones — esperada, no patológica, informar al paciente.',
      '🟡 Puede interferir con la lectura de la pulsioximetría (falsa disminución de SpO2 transitoria) y con algunos análisis de laboratorio.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Revisar la medicación del paciente antes de administrar — descartar ISRS/IRSN/IMAO si la situación clínica lo permite.',
      'Investigar el antecedente de déficit de G6PD si es posible antes de la administración.',
      'Infundir lento (mínimo 5 min) — vigilar dolor torácico o disnea durante la administración.',
      'Constantes vitales y SpO2 continuas durante y después de la administración.',
      'Informar al paciente/familia sobre la coloración azul-verdosa esperada de la piel y la orina.',
      'Vigilar signos de hemólisis en las horas siguientes (orina oscura, ictericia).',
      'Identificar y retirar, si es posible, el agente causal de la metahemoglobinemia.',
      'Documentar dosis, hora, respuesta clínica y nivel de metahemoglobina si se controla.',
    ],

    efectosAdversos: [
      '🔴 Hemólisis grave (en déficit de G6PD no descartado)',
      '🔴 Síndrome serotoninérgico (con ISRS/IRSN/IMAO concomitantes)',
      '🟠 Empeoramiento paradójico de la metahemoglobinemia (dosis muy altas)',
      '🟠 Dolor torácico, disnea (infusión rápida)',
      '🟡 Coloración azul-verdosa de piel, orina y secreciones (esperada)',
      '🟡 Náuseas, mareo',
      '🟡 Cefalea',
    ],

    contraindicaciones: [
      'Déficit de glucosa-6-fosfato deshidrogenasa (G6PD) — contraindicación relativa fuerte, salvo emergencia vital sin alternativa.',
      'Uso concomitante de antidepresivos serotoninérgicos (ISRS, IRSN, IMAO) sin valorar cuidadosamente el riesgo/beneficio.',
      'Insuficiencia renal grave (precaución, eliminación renal).',
      'Hipersensibilidad al azul de metileno.',
    ],

    fotosensibilidad: 'No relevante clínicamente en el sentido tradicional. El color azul-verdoso de la piel y las mucosas es un efecto esperado del propio fármaco, no una reacción de fotosensibilidad.',

    estabilidad: {
      'Ampolla sin abrir':     'Temperatura ambiente hasta vencimiento',
      'Diluida en SF 0.9%':   'Usar poco después de diluir',
      'Aspecto':               'Solución azul intensa — color característico del fármaco, normal',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de las horas siguientes tras abrir.',
      dosisRestante:     'Desechar sobrante de ampolla abierta.',
      infusionPreparada: 'Administrar poco después de la dilución si se diluye.',
      notas:             'El color azul intenso de la solución tiñe temporalmente la piel, orina y secreciones del paciente — informar para evitar alarma innecesaria.',
    },

    presentaciones: [
      'Azul de Metileno 10 mg/mL — ampolla 10 mL (100 mg)',
      'Azul de Metileno genérico — presentaciones similares según fabricante',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Metahemoglobinemia sintomática',      dosis: '<b>1-2 mg/kg IV lenta en 5 min</b>, repetible a la hora si persiste (máx 7 mg/kg acumulado)', via: 'IV' },
      { indicacion: 'Shock vasopléjico refractario (rescate, UCI)', dosis: '1-2 mg/kg bolo + perfusión 0.5 mg/kg/h según protocolo', via: 'IV' },
    ],

    embarazo: 'Categoría X (FDA) para uso intraamniótico (contraindicado por riesgo de atresia intestinal fetal); para uso IV sistémico en emergencia vital materna (metahemoglobinemia grave), el beneficio de tratar una emergencia potencialmente mortal para la madre supera el riesgo teórico — decisión individualizada con el equipo obstétrico.',

    pediatria: 'Metahemoglobinemia pediátrica (frecuente por exposición a nitritos, anestésicos locales tópicos como benzocaína, o defectos congénitos de la enzima): 1-2 mg/kg IV lenta, misma dosis por kg que en adultos. Igual precaución con el déficit de G6PD.',

    adultoMayor: 'Sin ajuste de dosis específico por edad. Mayor prevalencia de polifarmacia — revisar con especial atención la posible interacción con antidepresivos serotoninérgicos, frecuentes en este grupo.',

    insufRenal: 'Precaución — la eliminación es parcialmente renal. Considerar en insuficiencia renal grave, aunque no suele contraindicar su uso en una emergencia vital como la metahemoglobinemia grave.',

    insufHepatica: 'Sin ajuste de dosis específico necesario para el uso puntual como antídoto de emergencia.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Azul de Metileno.',
      'Ashurst JV, Wasson MN. Methemoglobinemia: a systematic review of the pathophysiology, detection, and treatment. Del Med J. 2011.',
      'American College of Medical Toxicology (ACMT). Guidance Document: Methemoglobinemia.',
      'Ng BS et al. Methylene blue for vasoplegic syndrome. Ann Card Anaesth. 2019.',
      'Secretaría de Salud México. Cuadro Básico y Catálogo de Medicamentos del Sector Salud.',
    ],
  },

});
