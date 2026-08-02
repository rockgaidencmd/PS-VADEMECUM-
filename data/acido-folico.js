/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/acido-folico.js
   Fuentes: CIMA AEMPS, FDA DailyMed, ACOG Folic Acid
   Supplementation Guidelines, BSH B12/Folate Guidelines,
   Cuadro Básico IMSS/Sector Salud México
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'acido-folico',
  nombre:         'Ácido Fólico',
  nombreGenerico: 'Folic Acid',
  categoria:      'otros',
  tags:           ['vitamina', 'folato', 'anemia megaloblástica', 'embarazo', 'defectos del tubo neural', 'déficit vitamínico', 'cuadro básico'],
  prioridad:      'moderate',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      '<b>Vitamina esencial para la prevención de defectos del tubo neural</b> — suplementación preconcepcional y en el primer trimestre del embarazo, la indicación de mayor impacto en salud pública.',
      '<b>NUNCA administrar ácido fólico solo si hay déficit de B12 no descartado</b> — puede corregir la anemia pero enmascarar y empeorar la neuropatía por B12.',
      'Dosis de tratamiento del déficit: <b>1-5 mg/día VO/IM/IV</b>; dosis preventiva en el embarazo: <b>0.4-0.8 mg/día</b> (5 mg/día en alto riesgo de defecto del tubo neural).',
      '<b>Distinto de la leucovorina (ácido folínico)</b> — el ácido fólico simple NO sirve como rescate de metotrexato (requiere la dihidrofolato reductasa, que está bloqueada).',
      'Vía IV/IM disponible para casos de malabsorción grave o cuando la vía oral no es viable — la mayoría de indicaciones se tratan por vía oral.',
    ],

    resumenRapido: 'Vitamina hidrosoluble del grupo B (B9), precursora de los folatos activos necesarios para la síntesis de ADN y la división celular, con un papel crítico en el cierre del tubo neural durante las primeras semanas del desarrollo embrionario. Su suplementación preconcepcional y durante el primer trimestre del embarazo es una de las intervenciones de salud pública más eficaces para prevenir defectos congénitos graves (espina bífida, anencefalia). También se emplea en el tratamiento de la anemia megaloblástica por déficit de folato, aunque siempre debe descartarse o corregirse simultáneamente el déficit de vitamina B12, ya que administrar ácido fólico aislado en presencia de un déficit de B12 no diagnosticado puede mejorar la anemia mientras permite que la neuropatía por B12 progrese sin ser detectada.',

    objetivoTerapeutico: 'Prevención de defectos del tubo neural (suplementación preconcepcional y primer trimestre del embarazo) · Tratamiento de la anemia megaloblástica por déficit de folato (tras descartar/corregir déficit de B12) · Corrección del déficit de folato en malabsorción, alcoholismo, desnutrición · Prevención del déficit en pacientes con hemólisis crónica (mayor recambio celular)',

    preparacion: {
      'Presentación oral':      '<b>Ácido Fólico 5 mg — comprimidos</b> (presentación más habitual)',
      'Presentación IV/IM':     'Ácido Fólico 5-15 mg/mL — ampolla, para casos de malabsorción o vía oral no viable',
      'Dosis tratamiento del déficit': '<b>1-5 mg/día VO (de elección si hay vía oral disponible)</b> o IV/IM si es necesario',
      'Dosis preventiva embarazo (riesgo estándar)': '<b>0.4-0.8 mg/día VO</b>, idealmente desde 1-3 meses antes de la concepción',
      'Dosis preventiva embarazo (alto riesgo)': '<b>5 mg/día VO</b> (antecedente de defecto del tubo neural previo, epilepsia con ácido valproico/carbamazepina, diabetes, obesidad)',
      'Vía':                    'Oral (de elección en la mayoría de casos) · IV/IM (malabsorción grave o vía oral no viable)',
      '⏱️ Inicio efecto':        'Mejoría hematológica en 1-2 semanas',
      '🧊 Estabilidad':          'Comprimidos: temperatura ambiente. Ampolla IV/IM: proteger de la luz',
    },

    vigilancia: {
      antes: [
        '<b>Descartar o corregir el déficit de vitamina B12 antes o simultáneamente</b> — evita enmascarar la neuropatía.',
        'Confirmar el déficit de folato (niveles séricos, hemograma con VCM elevado) si la indicación es terapéutica, no preventiva.',
        'En el embarazo: iniciar idealmente antes de la concepción o en cuanto se confirme, lo antes posible en el primer trimestre.',
        'Identificar factores de alto riesgo que requieran dosis mayor (5 mg/día): antecedente de defecto del tubo neural, epilepsia con ciertos antiepilépticos, diabetes, obesidad.',
      ],
      durante: [
        'Vía oral: sin requerimientos especiales de vigilancia durante la administración.',
        'Vía IV/IM (si se usa): vigilar reacción local o alérgica (rara).',
      ],
      despues: [
        'Reevaluar la respuesta hematológica con hemograma en las semanas siguientes si la indicación fue el tratamiento de anemia megaloblástica.',
        'Reforzar la adherencia a la suplementación diaria durante todo el primer trimestre del embarazo (y preferentemente desde antes de la concepción).',
        'Documentar la indicación, dosis y duración prevista del tratamiento.',
      ],
      suspender: [
        'No aplicable en la mayoría de los casos de suplementación preventiva (continuar según el esquema obstétrico).',
        'Reacción alérgica (muy rara).',
        'Corrección del déficit confirmada en el tratamiento de la anemia megaloblástica (aunque suele mantenerse mientras persista el factor de riesgo).',
      ],
    },

    incompatibilidades: [
      'No hay interacciones relevantes que contraindiquen su uso habitual.',
      'Puede reducir los niveles de algunos antiepilépticos (fenitoína) con dosis muy altas — relevancia clínica generalmente menor a las dosis habituales.',
      'Compatible con la administración conjunta de vitamina B12 si ambos déficits coexisten.',
    ],

    alertasSeguridad: [
      '🟠 NUNCA administrar ácido fólico solo sin descartar déficit de B12 — puede enmascarar y empeorar la neuropatía por B12 no diagnosticada.',
      '🟡 No confundir con la leucovorina (ácido folínico) — el ácido fólico simple NO sirve como rescate de metotrexato.',
      '🟡 En el embarazo, iniciar lo antes posible (idealmente preconcepcional) — el cierre del tubo neural ocurre en las primeras semanas, a menudo antes de que se sepa del embarazo.',
      '🟢 Perfil de seguridad muy favorable — vitamina hidrosoluble con amplio margen terapéutico.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Confirmar con el equipo médico que se ha descartado o corregido el déficit de B12 antes de tratar un déficit de folato aislado.',
      'Administrar preferentemente por vía oral — reservar IV/IM para malabsorción grave o vía oral no viable.',
      'En gestantes: reforzar la importancia de la suplementación diaria continuada durante todo el primer trimestre.',
      'Identificar a las pacientes de alto riesgo que requieren la dosis mayor (5 mg/día) según antecedentes.',
      'Reevaluar la respuesta hematológica en el tratamiento del déficit confirmado.',
      'Educar sobre la diferencia entre ácido fólico (suplementación/déficit simple) y leucovorina (rescate específico de metotrexato) si el paciente pregunta.',
      'Documentar la indicación, dosis y duración del tratamiento.',
    ],

    efectosAdversos: [
      '🟡 Muy bien tolerado, efectos adversos infrecuentes',
      '🟡 Reacción alérgica (muy rara)',
      '🟡 Náuseas leves (infrecuente, más con dosis muy altas)',
      '🟡 Puede enmascarar el déficit de B12 si se usa sin descartarlo (no es un efecto adverso directo, pero es una consecuencia clínica relevante a vigilar)',
    ],

    contraindicaciones: [
      'Hipersensibilidad conocida al ácido fólico (muy rara).',
      'No usar como sustituto de la leucovorina en el rescate de metotrexato (ineficaz para ese propósito).',
      'No hay contraindicaciones absolutas relevantes para el uso preventivo/terapéutico habitual.',
    ],

    fotosensibilidad: 'La formulación inyectable es fotosensible — proteger de la luz. Los comprimidos orales no requieren protección especial más allá del almacenamiento estándar.',

    estabilidad: {
      'Comprimidos':          'Temperatura ambiente hasta vencimiento',
      'Ampolla IV/IM':        'Proteger de la luz, temperatura ambiente hasta vencimiento',
      'Diluida (si se usa IV)': '24 h a temperatura ambiente tras diluir',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar dentro de 24 h tras abrir si se utiliza la vía IV/IM.',
      dosisRestante:     'Desechar sobrante de ampolla abierta.',
      infusionPreparada: '24 h a temperatura ambiente si se diluye para uso IV.',
      notas:             'La vía oral es la habitual y de elección en la mayoría de las indicaciones; la vía parenteral se reserva para casos específicos.',
    },

    presentaciones: [
      'Ácido Fólico 5 mg — comprimidos (presentación oral más común)',
      'Ácido Fólico 0.4 mg — comprimidos (dosis preventiva estándar en el embarazo)',
      'Ácido Fólico — ampolla IV/IM (según fabricante, uso menos frecuente que la vía oral)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Prevención defecto tubo neural (riesgo estándar)', dosis: '<b>0.4-0.8 mg/día VO</b>, desde preconcepción', via: 'VO' },
      { indicacion: 'Prevención defecto tubo neural (alto riesgo)',     dosis: '<b>5 mg/día VO</b>',                             via: 'VO' },
      { indicacion: 'Tratamiento del déficit / anemia megaloblástica', dosis: '1-5 mg/día VO (o IV/IM si es necesario)',        via: 'VO/IV/IM' },
      { indicacion: 'Hemólisis crónica (prevención de déficit)',        dosis: '1 mg/día VO',                                    via: 'VO' },
    ],

    embarazo: 'Es precisamente la indicación de mayor relevancia — la suplementación preconcepcional y durante el primer trimestre reduce significativamente el riesgo de defectos del tubo neural. Dosis estándar 0.4-0.8 mg/día; 5 mg/día en gestantes de alto riesgo (antecedente previo, epilepsia con ácido valproico/carbamazepina, diabetes pregestacional, obesidad).',

    pediatria: 'Tratamiento del déficit confirmado: 0.5-1 mg/día VO según edad y gravedad. Uso también en anemias hemolíticas crónicas pediátricas (talasemia, esferocitosis) para prevenir el déficit por el mayor recambio celular.',

    adultoMayor: 'El déficit de folato es relativamente frecuente por menor ingesta dietética. Igual importancia de descartar el déficit concomitante de B12 antes de tratar. Sin ajuste de dosis específico por edad.',

    insufRenal: 'Sin ajuste de dosis específico necesario. Puede requerirse suplementación adicional en pacientes en hemodiálisis por la pérdida de folato durante la diálisis.',

    insufHepatica: 'Sin ajuste de dosis específico necesario. El déficit de folato es relativamente frecuente en hepatopatía crónica asociada a alcoholismo — vigilar y suplementar según corresponda.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Ácido Fólico.',
      'ACOG Committee Opinion. Folic Acid Supplementation for the Prevention of Neural Tube Defects. Obstet Gynecol.',
      'Devalia V et al. Guidelines for the diagnosis and treatment of cobalamin and folate disorders. British Society for Haematology. Br J Haematol. 2014.',
      'De-Regil LM et al. Effects and safety of periconceptional folate supplementation for preventing birth defects. Cochrane Database Syst Rev. 2015.',
      'Secretaría de Salud México. Cuadro Básico y Catálogo de Medicamentos del Sector Salud.',
    ],
  },

});
