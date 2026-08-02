/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/cianocobalamina.js
   Fuentes: CIMA AEMPS (Optovite B12), FDA DailyMed,
   BSH Guidelines B12 Deficiency, Cuadro Básico
   IMSS/Sector Salud México
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'cianocobalamina',
  nombre:         'Cianocobalamina (Vitamina B12)',
  nombreComercial: 'Optovite B12®',
  nombreGenerico: 'Cyanocobalamin (Vitamin B12)',
  categoria:      'otros',
  tags:           ['vitamina B12', 'anemia perniciosa', 'anemia megaloblástica', 'neuropatía', 'déficit vitamínico', 'cuadro básico'],
  prioridad:      'moderate',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      '<b>Tratamiento del déficit de vitamina B12</b> — anemia perniciosa, anemia megaloblástica, neuropatía periférica y afectación neurológica por déficit de B12.',
      'Vía de administración clásica: <b>IM</b> (la vía preferida en la mayoría de protocolos, aunque también existe IV).',
      'Esquema típico: <b>1000 mcg IM/día × 5-7 días → luego semanal × 4 semanas → luego mensual de mantenimiento</b> (esquemas variables según protocolo y causa).',
      'En <b>anemia perniciosa</b> (déficit de factor intrínseco): el tratamiento con B12 parenteral suele ser de <b>por vida</b>.',
      'Corregir SIEMPRE el déficit de <b>ácido fólico concomitante si existe</b> — dar solo ácido fólico sin B12 en un déficit combinado puede enmascarar y empeorar la neuropatía por B12.',
    ],

    resumenRapido: 'Forma sintética estable de la vitamina B12 (cobalamina), cofactor esencial en la síntesis de ADN y en el metabolismo de los ácidos grasos y aminoácidos, con un papel crítico en la mielinización del sistema nervioso. Su déficit produce anemia megaloblástica y, si no se corrige, alteraciones neurológicas potencialmente irreversibles (neuropatía periférica, degeneración combinada subaguda de la médula espinal). La causa más frecuente en adultos es la anemia perniciosa (déficit de factor intrínseco de origen autoinmune, que impide la absorción intestinal de B12), lo que obliga a la administración parenteral de por vida, ya que la vía oral es ineficaz en ausencia de factor intrínseco.',

    objetivoTerapeutico: 'Tratamiento del déficit de vitamina B12 (anemia perniciosa, anemia megaloblástica) · Tratamiento y prevención de la neuropatía periférica por déficit de B12 · Corrección del déficit vitamínico en malabsorción, cirugía bariátrica, dieta vegana estricta, alcoholismo · Coadyuvante en el "complejo B" para neuropatías de diversas causas',

    preparacion: {
      'Presentación':          '<b>Optovite B12® 1000 mcg/mL (1 mg/mL) — ampolla 1-2 mL</b>',
      'Vía de elección':       '<b>IM profunda</b> — vía clásica y más utilizada',
      'Dosis de carga (déficit confirmado)': '<b>1000 mcg IM/día × 5-7 días</b>',
      'Fase de consolidación': '1000 mcg IM semanal × 4 semanas',
      'Mantenimiento (anemia perniciosa)': '<b>1000 mcg IM mensual, de por vida</b>',
      'Vía IV (excepcional)':  'Puede diluirse y administrarse IV lenta en algunos protocolos, aunque la IM sigue siendo la vía preferida',
      'Vía':                   'IM profunda (de elección) · SC · IV (menos frecuente) · Oral (dosis altas, en casos seleccionados sin anemia perniciosa)',
      '⏱️ Inicio efecto':       'Mejoría hematológica en 1-2 semanas · Mejoría neurológica puede tardar meses',
      '🧊 Estabilidad':         'Ampolla lista para usar, proteger de la luz',
    },

    vigilancia: {
      antes: [
        'Confirmar el déficit de B12 (niveles séricos, hemograma con VCM elevado) antes de iniciar el tratamiento.',
        'Investigar la causa del déficit: anemia perniciosa (anticuerpos anti-factor intrínseco), malabsorción, dieta, cirugía bariátrica previa.',
        'Descartar déficit concomitante de ácido fólico — corregir ambos si están presentes.',
        'Evaluar la presencia de síntomas neurológicos (parestesias, alteración de la marcha) que orienten la urgencia del tratamiento.',
      ],
      durante: [
        'Administrar IM profunda (técnica adecuada, rotar zonas de inyección en tratamientos prolongados).',
        'Vigilar reacción local en el punto de inyección.',
        'Vigilar reacción alérgica (rara, pero descrita, especialmente con formulaciones que contienen cobalto).',
      ],
      despues: [
        'Reevaluar la respuesta hematológica con hemograma en las semanas siguientes (mejoría esperada del VCM y la hemoglobina).',
        'Vigilar la mejoría de los síntomas neurológicos, que puede ser más lenta y a veces incompleta si el diagnóstico fue tardío.',
        'Potasio sérico en la primera semana de tratamiento en pacientes con anemia megaloblástica grave — la respuesta hematopoyética brusca puede consumir potasio (hipopotasemia de "recuperación").',
        'Planificar el esquema de mantenimiento a largo plazo si la causa es irreversible (anemia perniciosa).',
        'Documentar dosis, esquema y respuesta clínica.',
      ],
      suspender: [
        'No aplicable en la mayoría de los casos — el tratamiento de mantenimiento en anemia perniciosa es de por vida.',
        'Reacción alérgica (rara).',
        'Si se identifica y corrige la causa reversible del déficit (por ejemplo, cambio dietético en veganos sin causa de malabsorción).',
      ],
    },

    incompatibilidades: [
      'No mezclar con agentes oxidantes o reductores fuertes en la misma jeringa.',
      'Compatible con la administración conjunta de ácido fólico si ambos déficits coexisten (vías/jeringas separadas).',
      'No hay interacciones relevantes que contraindiquen su uso habitual.',
    ],

    alertasSeguridad: [
      '🟠 CORREGIR SIEMPRE el déficit de ácido fólico concomitante si existe — dar solo fólico en un déficit combinado puede enmascarar y empeorar la neuropatía por B12.',
      '🟡 Vigilar potasio en la primera semana de tratamiento de anemia megaloblástica grave — riesgo de hipopotasemia de "recuperación" por la respuesta hematopoyética brusca.',
      '🟡 En anemia perniciosa, el tratamiento parenteral es de por vida — reforzar la adherencia al esquema de mantenimiento mensual.',
      '🟢 Perfil de seguridad muy favorable — vitamina hidrosoluble con amplio margen terapéutico.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Confirmar el diagnóstico de déficit de B12 antes de iniciar (o coordinar con el resultado de laboratorio pendiente si la sospecha clínica es alta).',
      'Administrar IM profunda, rotando las zonas de inyección en tratamientos prolongados.',
      'Verificar si existe déficit concomitante de ácido fólico — ambos deben corregirse si están presentes.',
      'Vigilar potasio sérico en la primera semana si la anemia megaloblástica es grave.',
      'Explicar al paciente con anemia perniciosa la necesidad de tratamiento de mantenimiento de por vida (mensual).',
      'Vigilar la mejoría clínica: hematológica en semanas, neurológica puede ser más lenta.',
      'Documentar dosis, esquema (carga/consolidación/mantenimiento) y respuesta clínica.',
    ],

    efectosAdversos: [
      '🟡 Reacción local en el punto de inyección IM',
      '🟡 Hipopotasemia de "recuperación" en la primera semana de tratamiento de anemia megaloblástica grave',
      '🟡 Reacción alérgica (rara, más descrita con formulaciones que contienen cobalto/conservantes)',
      '🟡 Rubor facial transitorio',
      '🟡 Diarrea leve (infrecuente)',
    ],

    contraindicaciones: [
      'Hipersensibilidad conocida a la cianocobalamina o al cobalto.',
      'No hay contraindicaciones absolutas relevantes para el uso habitual del déficit de B12.',
    ],

    fotosensibilidad: 'Sí — el fármaco es fotosensible. Conservar la ampolla protegida de la luz. No relevante para la piel del paciente.',

    estabilidad: {
      'Ampolla sin abrir':     'Temperatura ambiente hasta vencimiento, proteger de la luz',
      'Aspecto':                'Solución rosada/roja — color característico de la cobalamina, normal',
      'Uso':                    'Administrar directamente de la ampolla sin dilución para uso IM',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar inmediatamente tras abrir para uso IM.',
      dosisRestante:     'Desechar sobrante de ampolla abierta.',
      infusionPreparada: 'No aplica habitualmente — administración IM directa.',
      notas:             'El color rosado/rojo de la solución es normal y característico de la vitamina B12, no indica alteración.',
    },

    presentaciones: [
      'Optovite B12® 1000 mcg/mL — ampolla 1 mL o 2 mL (IM)',
      'Cianocobalamina genérica — presentaciones similares',
      'Complejo B — combinación con tiamina y piridoxina (IM), uso distinto y con dosis menores de B12',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Déficit confirmado (carga)',          dosis: '<b>1000 mcg IM/día × 5-7 días</b>',                  via: 'IM' },
      { indicacion: 'Consolidación',                          dosis: '1000 mcg IM semanal × 4 semanas',                    via: 'IM' },
      { indicacion: 'Mantenimiento (anemia perniciosa)',     dosis: '<b>1000 mcg IM mensual, de por vida</b>',           via: 'IM' },
      { indicacion: 'Neuropatía por déficit de B12',          dosis: '1000 mcg IM según esquema de carga y mantenimiento', via: 'IM' },
    ],

    embarazo: 'Categoría A/C según fuente (esencial, seguro a dosis fisiológicas). El déficit de B12 en el embarazo debe corregirse — es importante para el desarrollo neurológico fetal. Uso seguro durante la gestación y la lactancia a las dosis terapéuticas habituales.',

    pediatria: 'Déficit de B12 pediátrico (raro, salvo en dietas veganas estrictas maternas/infantiles o errores congénitos del metabolismo): dosis ajustada por edad y gravedad según protocolo pediátrico específico, habitualmente 100-1000 mcg IM según el caso.',

    adultoMayor: 'El déficit de B12 es más frecuente en este grupo (menor absorción por gastritis atrófica, uso de IBP prolongado, metformina). Cribado y tratamiento importantes por el impacto cognitivo y neurológico del déficit no corregido.',

    insufRenal: 'Sin ajuste de dosis específico necesario.',

    insufHepatica: 'Sin ajuste de dosis específico necesario — el hígado es el principal depósito de B12, pero esto no requiere modificar la dosis terapéutica.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Optovite B12® (cianocobalamina).',
      'Devalia V et al. Guidelines for the diagnosis and treatment of cobalamin and folate disorders. British Society for Haematology. Br J Haematol. 2014.',
      'Green R et al. Vitamin B12 deficiency. Nat Rev Dis Primers. 2017.',
      'Stabler SP. Vitamin B12 Deficiency. NEJM. 2013.',
      'Secretaría de Salud México. Cuadro Básico y Catálogo de Medicamentos del Sector Salud.',
    ],
  },

});
