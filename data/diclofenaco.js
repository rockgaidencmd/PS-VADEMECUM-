/* ═══════════════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — data/diclofenaco.js
   Fuentes: CIMA AEMPS (Voltaren), FDA DailyMed,
   AEMPS/EMA Nota de Seguridad Cardiovascular AINEs,
   Cuadro Básico IMSS/Sector Salud México
═══════════════════════════════════════════════════════ */

window.MEDS_DB = window.MEDS_DB || [];

window.MEDS_DB.push({

  id:             'diclofenaco',
  nombre:         'Diclofenaco',
  nombreComercial: 'Voltaren®',
  nombreGenerico: 'Diclofenac Sodium',
  categoria:      'analgesia',
  tags:           ['AINE', 'analgésico', 'antiinflamatorio', 'cólico renal', 'dolor musculoesquelético', 'postoperatorio', 'cuadro básico', 'clásico'],
  prioridad:      'moderate',
  altoRiesgo:     false,
  altoRiesgoTexto: '',

  nivel1: {

    puntosClave: [
      '<b>AINE clásico del cuadro básico</b> — uno de los antiinflamatorios más usados en dolor musculoesquelético, cólico renal y postoperatorio en América Latina.',
      'Dosis: <b>75 mg IM profunda c/12-24 h</b> (la vía IV requiere dilución y perfusión, mucho menos frecuente que la IM).',
      '<b>Riesgo cardiovascular</b> con uso prolongado o dosis altas — aumenta el riesgo de eventos trombóticos (IAM, ACV), similar a otros AINEs no selectivos.',
      '<b>Riesgo de sangrado gastrointestinal y nefrotoxicidad</b> — igual que otros AINEs, no combinar con otros AINEs ni anticoagulantes sin valorar riesgo/beneficio.',
      'Muy eficaz en <b>cólico renal</b> — alternativa/complemento al ketorolaco y la butilescopolamina.',
    ],

    resumenRapido: 'Antiinflamatorio no esteroideo (AINE) derivado del ácido fenilacético, con potente actividad analgésica, antiinflamatoria y antipirética por inhibición no selectiva de la ciclooxigenasa (COX-1/COX-2). Es uno de los AINEs de mayor uso en los servicios de urgencias y hospitalización de América Latina, especialmente en dolor musculoesquelético, cólico renal/biliar y dolor postoperatorio. Comparte el perfil de riesgo de clase de los AINEs no selectivos: riesgo cardiovascular con uso prolongado, sangrado gastrointestinal y nefrotoxicidad, lo que exige limitar la dosis y la duración del tratamiento a lo estrictamente necesario.',

    objetivoTerapeutico: 'Tratamiento del dolor musculoesquelético agudo moderado-grave · Tratamiento del cólico renal y biliar · Analgesia postoperatoria (efecto ahorrador de opioides) · Tratamiento de procesos inflamatorios agudos (bursitis, tendinitis, gota)',

    preparacion: {
      'Presentación':          '<b>Voltaren® 75 mg/3 mL — ampolla 3 mL</b>',
      'Vía de elección':       '<b>IM profunda (glúteo)</b> — es la vía habitual de administración parenteral',
      'Dosis estándar adulto': '<b>75 mg IM c/12-24 h</b> (máx 150 mg/día, excepcionalmente 2 dosis de 75 mg separadas varias horas)',
      'Vía IV (excepcional)':  'Requiere dilución específica en SF/SG 5% alcalinizada con bicarbonato según ficha técnica, en perfusión lenta — uso hospitalario específico, menos frecuente que la IM',
      'Duración del tratamiento': 'Limitar a la dosis mínima eficaz durante el menor tiempo posible',
      'Vía':                   'IM profunda (de elección) · IV en perfusión (excepcional, requiere preparación especial) · Oral/rectal para continuar el tratamiento',
      '⏱️ Inicio efecto (IM)':  '10-20 min · Pico: 30-60 min',
      '⏱️ Duración':            '8-12 h',
      '🧊 Estabilidad':         'Ampolla lista para usar; para IV requiere dilución específica según ficha técnica del fabricante',
    },

    vigilancia: {
      antes: [
        'Función renal basal: creatinina y ClCr — contraindicado si insuficiencia renal moderada-grave.',
        'Antecedente de sangrado gastrointestinal, úlcera péptica activa o reciente.',
        'Revisar medicación concomitante: otros AINEs, anticoagulantes, antiagregantes, IECA/ARA-II, diuréticos.',
        'Alergia a AINEs o ácido acetilsalicílico (riesgo de reacción cruzada, incluido broncoespasmo en asmáticos).',
        'Antecedente cardiovascular (IAM, insuficiencia cardíaca, HTA no controlada) — mayor riesgo con AINEs.',
      ],
      durante: [
        'Administrar IM profunda en glúteo (técnica en Z si aplica según protocolo) — evitar la vía IV directa sin la dilución/preparación adecuada.',
        'Vigilar signos de reacción alérgica: rash, broncoespasmo.',
        'Vigilar dolor/induración en el punto de inyección IM.',
      ],
      despues: [
        'Vigilar signos de sangrado digestivo en tratamientos de varios días.',
        'Función renal si el tratamiento se prolonga o hay factores de riesgo.',
        'Diuresis — vigilar oliguria como signo precoz de nefrotoxicidad.',
        'Reevaluar la necesidad de continuar; transicionar a vía oral en cuanto sea posible.',
      ],
      suspender: [
        'Signos de sangrado gastrointestinal.',
        'Deterioro de la función renal.',
        'Reacción alérgica o broncoespasmo.',
        'Al alcanzar la duración máxima recomendada para el uso agudo (habitualmente unos pocos días).',
      ],
    },

    incompatibilidades: [
      'No mezclar con opioides ni otros fármacos en la misma jeringa.',
      '<b>No combinar con otros AINEs, anticoagulantes o corticoides sistémicos</b> sin valorar riesgo/beneficio.',
      'La vía IV requiere preparación específica (alcalinización) — no diluir de forma improvisada.',
    ],

    alertasSeguridad: [
      '🟠 RIESGO CARDIOVASCULAR — evitar en cardiopatía isquémica activa o insuficiencia cardíaca; limitar dosis y duración.',
      '🟠 RIESGO DE SANGRADO GASTROINTESTINAL — mayor con uso prolongado, combinación con otros AINEs o anticoagulantes.',
      '🟠 CONTRAINDICADO en insuficiencia renal moderada-grave y en depleción de volumen no corregida.',
      '🟡 Reacción cruzada con alergia a AAS/AINEs — riesgo de broncoespasmo en asmáticos con poliposis nasal.',
      '🟡 La vía IV requiere dilución/preparación específica — la vía IM es la habitual y de elección.',
    ],
  },

  nivel2: {

    cuidadosEnfermeria: [
      'Administrar preferentemente por vía IM profunda (glúteo) — es la vía habitual.',
      'Si se indica vía IV, verificar la preparación específica (dilución alcalinizada) según ficha técnica antes de administrar.',
      'Preguntar por alergia a AINEs/AAS y antecedente de asma con poliposis nasal antes de la primera dosis.',
      'Función renal y diuresis si el paciente tiene factores de riesgo o el tratamiento se prolonga.',
      'Vigilar signos de sangrado digestivo durante el tratamiento.',
      'Limitar la duración del tratamiento a lo estrictamente necesario — transicionar a vía oral en cuanto sea posible.',
      'Vigilar el punto de inyección IM por posible induración o dolor.',
      'Documentar dosis, vía y respuesta analgésica en cada administración.',
    ],

    efectosAdversos: [
      '🔴 Sangrado gastrointestinal (úlcera, hemorragia digestiva) con uso prolongado',
      '🟠 Eventos cardiovasculares (IAM, ACV) con uso prolongado o dosis altas',
      '🟠 Nefrotoxicidad con uso prolongado o deshidratación',
      '🟡 Dolor/induración en el punto de inyección IM',
      '🟡 Náuseas, dispepsia',
      '🟡 Broncoespasmo en asmáticos sensibles a AINEs (reacción cruzada)',
    ],

    contraindicaciones: [
      'Insuficiencia renal moderada-grave o riesgo de deterioro renal.',
      'Antecedente de úlcera péptica o sangrado gastrointestinal activo o reciente.',
      'Hipersensibilidad a AINEs o ácido acetilsalicílico (incluido broncoespasmo).',
      'Insuficiencia cardíaca grave o cardiopatía isquémica activa.',
      'Tercer trimestre del embarazo.',
      'Coagulopatía o riesgo hemorrágico elevado.',
    ],

    fotosensibilidad: 'No relevante clínicamente para la formulación inyectable. Conservar la ampolla a temperatura ambiente protegida de luz directa.',

    estabilidad: {
      'Ampolla sin abrir':     'Temperatura ambiente hasta vencimiento',
      'Uso IM':                'Administrar directamente de la ampolla, sin dilución',
      'Uso IV (excepcional)':  'Requiere dilución específica alcalinizada según ficha técnica del fabricante — no improvisar',
      'Aspecto':                'Solución incolora a ligeramente amarillenta — normal',
    },

    estabilidadUsoClinico: {
      ampollaAbierta:    'Usar inmediatamente tras abrir para vía IM.',
      dosisRestante:     'Desechar sobrante de ampolla abierta.',
      infusionPreparada: 'Si se usa vía IV, seguir estrictamente la preparación de la ficha técnica; no conservar la mezcla más allá del tiempo indicado.',
      notas:             'La vía IM es la habitual y de elección; la IV requiere preparación especializada y es mucho menos frecuente en la práctica.',
    },

    presentaciones: [
      'Voltaren® 75 mg/3 mL — ampolla 3 mL (IM)',
      'Diclofenaco genérico — ampolla 75 mg/3 mL',
      'Diclofenaco 50 mg — comprimidos (oral, para continuar el tratamiento)',
      'Diclofenaco gel — uso tópico (indicación distinta)',
    ],
  },

  nivel3: {

    dosis: [
      { indicacion: 'Dolor musculoesquelético / cólico',  dosis: '<b>75 mg IM c/12-24 h</b> (máx 150 mg/día)',       via: 'IM' },
      { indicacion: 'Dolor postoperatorio',                  dosis: '75 mg IM c/12-24 h, transición a oral',            via: 'IM' },
      { indicacion: 'Cólico renal',                           dosis: '75 mg IM, puede combinarse con butilescopolamina', via: 'IM' },
      { indicacion: 'Mantenimiento oral',                     dosis: '50 mg VO c/8-12 h (tras la vía parenteral)',       via: 'VO' },
    ],

    embarazo: 'Contraindicado en el tercer trimestre (cierre prematuro del ductus arterioso, oligohidramnios). Evitar en el primer y segundo trimestre salvo indicación clara, usando la dosis mínima eficaz durante el menor tiempo posible.',

    pediatria: 'Uso limitado en menores de 14-18 años según ficha técnica local — preferir otros analgésicos/antiinflamatorios (ibuprofeno, paracetamol) como primera línea en pediatría. Uso excepcional bajo supervisión especializada.',

    adultoMayor: 'Mayor riesgo de sangrado gastrointestinal, nefrotoxicidad y eventos cardiovasculares. Usar la dosis mínima eficaz durante el menor tiempo posible, con vigilancia estrecha de función renal y signos de sangrado.',

    insufRenal: '<b>Contraindicado en insuficiencia renal moderada-grave</b>. En IR leve: usar con precaución, dosis reducida y buena hidratación. Evitar en depleción de volumen no corregida.',

    insufHepatica: 'Precaución en insuficiencia hepática — puede requerir reducción de dosis. Evitar en hepatopatía grave. Vigilar función hepática si se usa en hepatopatía leve-moderada.',
  },

  nivel4: {
    referencias: [
      'CIMA AEMPS. Ficha Técnica Voltaren® (diclofenaco sódico).',
      'AEMPS/EMA. Diclofenaco: restricciones de uso por riesgo cardiovascular. Nota informativa de seguridad.',
      'Bhala N et al. Vascular and upper gastrointestinal effects of non-steroidal anti-inflammatory drugs: meta-analyses. Lancet. 2013.',
      'SEMES. Manejo del dolor agudo en Urgencias. Guía de práctica clínica.',
      'Secretaría de Salud México. Cuadro Básico y Catálogo de Medicamentos del Sector Salud.',
    ],
  },

});
