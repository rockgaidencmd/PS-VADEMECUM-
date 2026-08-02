/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/carbetocina.js
   Fuentes: CIMA AEMPS (Duratocin/Pabal), FDA/EMA,
   OMS Guías Hemorragia Posparto, FIGO PPH Guidelines,
   Cuadro Básico IMSS/Sector Salud México
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'carbetocina',
  nombre:         'Carbetocina',
  nombreComercial: 'Duratocin® / Pabal®',
  nombreGenerico: 'Carbetocin',
  categoria:      'otros',
  tags:           ['uterotónico', 'hemorragia posparto', 'atonía uterina', 'obstetricia', 'oxitocina sintética', 'cesárea', 'cuadro básico'],
  prioridad:      'high',
  altoRiesgo:     true,
  altoRiesgoTexto: 'Análogo sintético de oxitocina de acción prolongada. Solo debe usarse tras el nacimiento del bebé (parto vaginal) o la extracción fetal (cesárea) — nunca durante el trabajo de parto. Contraindicado antes del parto por el riesgo de hipertonía uterina y sufrimiento fetal. Precaución en cardiopatía por su efecto hemodinámico transitorio.',

  nivel1: {

    puntosClave: [
      '<b>Análogo sintético de oxitocina de acción prolongada</b> — una sola dosis mantiene la contracción uterina durante horas, a diferencia de la oxitocina que requiere perfusión continua.',
      '<b>Dosis única de 100 mcg IV lenta (1 min)</b> — sustituye a la perfusión de oxitocina en la profilaxis de la hemorragia posparto, especialmente tras cesárea.',
      '<b>SOLO tras el nacimiento</b> del bebé (parto vaginal) o la extracción fetal (cesárea) — nunca antes ni durante el trabajo de parto.',
      'Ventaja práctica: <b>no requiere perfusión continua ni bomba de infusión</b> — simplifica el manejo, especialmente útil en contextos con recursos limitados.',
      'Mismo perfil de efectos adversos que la oxitocina pero <b>de mayor duración</b> — vigilar hipotensión y taquicardia transitorias tras la administración.',
    ],

    resumenRapido: 'Análogo sintético de la oxitocina con una modificación estructural que le confiere una vida media considerablemente más larga (40 minutos frente a los pocos minutos de la oxitocina natural), lo que permite mantener el tono uterino adecuado con una única dosis en bolo IV, sin necesidad de perfusión continua. Está indicada específicamente para la prevención de la atonía uterina y la hemorragia posparto tras el nacimiento, siendo especialmente valorada en la cesárea programada y en contextos donde la simplicidad de una dosis única facilita el manejo. Comparte el mecanismo de acción y los efectos adversos hemodinámicos transitorios (hipotensión, taquicardia, rubor) de la oxitocina, aunque de mayor duración por su vida media prolongada.',

    objetivoTerapeutico: 'Prevención de la hemorragia posparto por atonía uterina tras el parto vaginal o la cesárea · Alternativa de dosis única a la perfusión continua de oxitocina en la profilaxis del sangrado posparto',

    preparacion: {
      'Presentación':          '<b>Duratocin® / Pabal® 100 mcg/mL — ampolla 1 mL</b>',
      'Vía':                   '<b>IV lenta (de elección) — puede usarse IM si no hay acceso IV</b>',
      'Dosis estándar':        '<b>100 mcg (1 mL) IV en bolo lento, administrado en 1 minuto</b>',
      'Momento de administración': '<b>Inmediatamente tras el nacimiento del bebé (parto vaginal) o la extracción fetal (cesárea) — dosis ÚNICA</b>',
      'Sin necesidad de dilución': 'Se administra directamente de la ampolla, sin diluir',
      '⏱️ Inicio efecto':       '2 min · Duración: aproximadamente 1 hora de contracción sostenida, efecto residual varias horas',
      '🧊 Estabilidad':         'Ampolla lista para usar; verificar condiciones de conservación según ficha técnica (algunas presentaciones requieren refrigeración, otras son estables a temperatura ambiente)',
    },

    vigilancia: {
      antes: [
        '<b>Confirmar que el bebé ya ha nacido / se ha extraído</b> — nunca administrar antes del nacimiento.',
        'TA y FC basales.',
        'Antecedente de cardiopatía — vigilar más estrechamente por el efecto hemodinámico transitorio.',
        'Confirmar que es dosis única — no repetir la dosis de carbetocina (a diferencia de la oxitocina, que sí puede repetirse/mantenerse en perfusión).',
      ],
      durante: [
        'Administrar en bolo IV lento (1 min) inmediatamente tras el nacimiento.',
        'Vigilar TA y FC durante los minutos siguientes — hipotensión y taquicardia transitorias son frecuentes.',
        'Evaluar el tono uterino tras la administración.',
      ],
      despues: [
        'TA y FC cada 15 min durante la primera hora.',
        'Vigilar el tono uterino y el sangrado vaginal.',
        'Si persiste atonía/sangrado pese a la carbetocina: escalar según protocolo de hemorragia posparto (metilergometrina si no hay contraindicación, ácido tranexámico, misoprostol).',
        'Documentar la hora de administración y la respuesta al sangrado.',
      ],
      suspender: [
        'No aplicable — es una dosis única, no una perfusión que deba suspenderse.',
        'Reacción alérgica (rara).',
      ],
    },

    incompatibilidades: [
      'No mezclar en la misma jeringa con otros fármacos.',
      'No administrar antes del nacimiento del bebé bajo ninguna circunstancia.',
      'No combinar rutinariamente con oxitocina en perfusión simultánea (redundante, no se ha demostrado beneficio adicional y aumenta el riesgo de efectos adversos hemodinámicos).',
    ],

    alertasSeguridad: [
      '🔴 SOLO TRAS EL NACIMIENTO — nunca antes ni durante el trabajo de parto (riesgo de hipertonía uterina y sufrimiento fetal).',
      '🟠 Hipotensión y taquicardia transitorias frecuentes — vigilar TA/FC tras la administración, especialmente en cardiópatas.',
      '🟡 Es una dosis ÚNICA — no repetir; si persiste el sangrado, escalar a otros uterotónicos según protocolo.',
      '🟢 No requiere perfusión continua ni bomba — ventaja práctica sobre la oxitocina en contextos de recursos limitados.',
    ],
  },

  modulos: {
    obstetricia: `
      <b>Carbetocina en la Profilaxis de la Hemorragia Posparto:</b><br/>
      <b>Indicación:</b> prevención de la atonía uterina tras el parto vaginal o la cesárea, como alternativa de dosis única a la perfusión de oxitocina.<br/><br/>
      <b>Administración:</b><br/>
      • 100 mcg (1 mL) IV en bolo lento, en 1 minuto.<br/>
      • Inmediatamente después del nacimiento del bebé o la extracción fetal — NUNCA antes.<br/>
      • Dosis única — no requiere perfusión continua.<br/><br/>
      <b>Si persiste el sangrado pese a la carbetocina:</b><br/>
      • Metilergometrina 0.2 mg IM (si NO hay contraindicación: hipertensión/preeclampsia).<br/>
      • Ácido tranexámico 1 g IV (dentro de las 3 h del parto).<br/>
      • Misoprostol 800-1000 mcg rectal/sublingual.<br/>
      • Masaje uterino bimanual y medidas quirúrgicas según protocolo institucional si el sangrado persiste.
    `,
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Confirmar que el bebé ya ha nacido antes de administrar — es un error crítico administrarla antes del parto.',
      'Administrar en bolo IV lento (1 minuto), sin necesidad de diluir.',
      'TA y FC cada 15 min durante la primera hora tras la administración.',
      'Evaluar el tono uterino (globo de seguridad) y el sangrado vaginal tras la dosis.',
      'Recordar que es dosis ÚNICA — no repetir; comunicar al médico si persiste el sangrado para escalar a otro uterotónico.',
      'Vigilar signos de hipotensión/taquicardia, especialmente en pacientes con cardiopatía conocida.',
      'Documentar la hora exacta de administración (inmediatamente posparto) y la respuesta al sangrado.',
    ],

    efectosAdversos: [
      '🟠 Hipotensión transitoria',
      '🟠 Taquicardia transitoria',
      '🟡 Rubor facial, sensación de calor',
      '🟡 Cefalea',
      '🟡 Náuseas, vómitos',
      '🟡 Dolor abdominal (contracción uterina)',
    ],

    contraindicaciones: [
      'Antes del nacimiento del bebé o durante el trabajo de parto (contraindicación absoluta).',
      'Hipersensibilidad a la carbetocina o a la oxitocina.',
      'Precaución en cardiopatía grave, preeclampsia grave y epilepsia (por el efecto hemodinámico transitorio, similar a la oxitocina).',
    ],

    fotosensibilidad: 'No relevante clínicamente. Conservar según ficha técnica del fabricante — verificar si la presentación concreta requiere refrigeración o es estable a temperatura ambiente.',

    estabilidad: {
      'Ampolla sin abrir':  'Según ficha técnica del fabricante — algunas formulaciones requieren refrigeración (2-8°C), otras son estables a temperatura ambiente hasta 30°C',
      'Uso único':           'Cada ampolla es de dosis única, sin sobrante que conservar',
      'Aspecto':              'Solución incolora — desechar si turbia',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar inmediatamente tras abrir — desechar sobrante.',
      dosisRestante:     'No aplica — dosis única por ampolla.',
      infusionPreparada: 'No aplica — administración directa en bolo IV sin dilución.',
      notas:             'Verificar las condiciones de conservación específicas del fabricante disponible en la institución (refrigerada vs. temperatura ambiente).',
    },

    presentaciones: [
      'Duratocin® 100 mcg/mL — ampolla 1 mL',
      'Pabal® 100 mcg/mL — ampolla 1 mL',
      'Carbetocina genérica — presentaciones similares',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Profilaxis hemorragia posparto (cesárea)', dosis: '<b>100 mcg IV en bolo lento (1 min), dosis única</b>', via: 'IV' },
      { indicacion: 'Profilaxis hemorragia posparto (parto vaginal)', dosis: '100 mcg IV o IM, dosis única',                    via: 'IV/IM' },
    ],

    embarazo: '<b>Contraindicada durante el embarazo y el trabajo de parto</b> — solo se administra INMEDIATAMENTE DESPUÉS del nacimiento del bebé o la extracción fetal. Uso exclusivamente en el puerperio inmediato.',

    pediatria: 'No aplica — fármaco de uso exclusivamente obstétrico en la mujer tras el parto.',

    adultoMayor: 'No aplica en el contexto habitual de uso (población obstétrica en edad reproductiva).',

    insufRenal: 'Sin ajuste de dosis formal establecido para la dosis única estándar.',

    insufHepatica: 'Sin ajuste de dosis formal establecido para la dosis única estándar.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Duratocin® / Pabal® (carbetocina).',
      'OMS. Recomendaciones de la OMS para la prevención y el tratamiento de la hemorragia posparto. 2012 (con actualizaciones).',
      'Widmer M et al. Heat-stable carbetocin versus oxytocin to prevent hemorrhage after vaginal birth. NEJM. 2018.',
      'FIGO. Prevention and treatment of postpartum haemorrhage. Int J Gynaecol Obstet. 2012.',
      'Secretaría de Salud México. Cuadro Básico y Catálogo de Medicamentos del Sector Salud.',
    ],
  },

});
