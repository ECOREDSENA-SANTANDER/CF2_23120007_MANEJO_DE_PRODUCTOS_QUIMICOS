<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      <Actividad :cuestionario="cuestionario"/>
  
</template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'manejo inteligente de químicos y prevención de riesgos.',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar el nivel de comprensión de los conceptos fundamentales asociados al manejo inteligente de productos químicos y la implementación de estrategias para la prevención de riesgos laborales y ambientales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!.',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de las siguientes características no es esencial en un sitio de almacenamiento de productos químicos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Estructura resistente al fuego con materiales incombustibles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ventilación natural o forzada suficiente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ubicación cercana a zonas de alto tráfico peatonal.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Pisos impermeables con sistema de contención.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos del almacenamiento, traslado interno y gestión documental de productos químicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'En la recepción de productos químicos, ¿cuál es el primer paso que debe realizarse?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar el ingreso en el sistema de inventario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Verificar los documentos del lote: remisión, HDS, certificado de calidad y orden de compra.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Inspeccionar físicamente los recipientes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Asignar la ubicación según el plan de separación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos de almacenamiento, traslado interno y gestión documental de productos químicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Qué principio de rotación de inventario debe aplicarse en el almacenamiento de productos químicos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'UEPS (Último en Entrar, Primero en Salir).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'PEPS (Primero en Entrar, Primero en Salir).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Rotación por fecha de vencimiento únicamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Rotación aleatoria según disponibilidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos de almacenamiento, traslado interno y gestión documental de productos químicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿En qué sección de la Hoja de Datos de Seguridad (HDS) se encuentran los materiales incompatibles con el producto?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sección 2 – Identificación de peligros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sección 7 – Manipulación y almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sección 10 – Estabilidad y reactividad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sección 13 – Consideraciones de eliminación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos de almacenamiento, traslado interno y gestión documental de productos químicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'Según la matriz de compatibilidad, ¿pueden almacenarse juntos productos inflamables y productos oxidantes?',
          imagen: require('@/assets/actividad/imagen05.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sí, son completamente compatibles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sí, con precaución.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'No, son incompatibles y requieren separación obligatoria.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Depende de la temperatura del almacén.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos de almacenamiento, traslado interno y gestión documental de productos químicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué tipo de extintor NO debe usarse en fuegos con líquidos inflamables?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Agua',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Espuma 3F',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'CO₂',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Polvo químico seco ABC',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos de almacenamiento, traslado interno y gestión documental de productos químicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'En caso de exposición ocular a un producto químico, ¿cuánto tiempo mínimo debe irrigarse el ojo afectado?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '15 a 10 minutos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '10 a 15 minutos',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '15 a 20 minutos',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '30 minutos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos de almacenamiento, traslado interno y gestión documental de productos químicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de las siguientes condiciones NO es necesaria verificar antes de realizar un traslado de productos químicos?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pisos libres de derrames y obstáculos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ventilación suficiente en el área.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Color de la pintura de las paredes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Iluminación adecuada en toda la ruta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos de almacenamiento, traslado interno y gestión documental de productos químicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cómo debe transportarse manualmente una botella de galón de producto químico?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo sujetándola por el cuello.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo sujetándola por la tapa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Con una mano en la base y otra en el cuello.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Con ambas manos en la base.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos de almacenamiento, traslado interno y gestión documental de productos químicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Cuántos galones como máximo se recomienda transportar en una misma carga?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '24 galones',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '36 galones',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '60 galones',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '48 galones',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos de almacenamiento, traslado interno y gestión documental de productos químicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'En el transporte de gases comprimidos en cilindros, ¿en qué posición deben mantenerse?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Horizontal para mayor estabilidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Vertical asegurada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Inclinada a 45 grados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La posición no es relevante.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos de almacenamiento, traslado interno y gestión documental de productos químicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Pueden transportarse productos químicos en elevadores de pasajeros?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'No, nunca deben transportarse en elevadores de pasajeros.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sí, si se usa EPP adecuado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sí, si la cantidad es menor a 5 litros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sí, en horarios de bajo tráfico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos de almacenamiento, traslado interno y gestión documental de productos químicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'Para el transporte de ácidos y bases corrosivas, ¿qué elemento adicional es obligatorio?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Extintor de CO₂.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Contenedor secundario.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cilindro de aire comprimido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sistema de ventilación portátil.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos de almacenamiento, traslado interno y gestión documental de productos químicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué significan las siglas PHVA en el contexto del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST)?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Proteger, Hacer, Verificar, Accionar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Planificar, Hacer, Verificar, Actuar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Prevenir, Higienizar, Vigilar, Asegurar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Planificar, Higienizar, Verificar, Asegurar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos de almacenamiento, traslado interno y gestión documental de productos químicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuál de las siguientes NO es una obligación de los empleadores en el manejo de productos químicos?',
          imagen: require('@/assets/actividad/imagen05.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Garantizar el suministro y reposición de EPP.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Asegurar que todos los productos tengan su HDS disponible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Financiar programas de prevención en empresas afiliadas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reportar accidentes de trabajo a la ARL.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos de almacenamiento, traslado interno y gestión documental de productos químicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Qué significan las siglas CISPROQUIM?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Centro de Investigación sobre Productos Químicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Centro de Información de Seguridad sobre Productos Químicos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Comité Interinstitucional de Seguridad para Productos Químicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Consejo Integral de Seguridad para Productos Químicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos de almacenamiento, traslado interno y gestión documental de productos químicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál de los siguientes NO es un tipo de documento del SG-SST?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Política',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Procedimiento',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Presupuesto',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Registro',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos de almacenamiento, traslado interno y gestión documental de productos químicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Cuál de los siguientes registros NO es esencial en el proceso de manipulación de productos químicos?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inventario actualizado de productos químicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Registro de entradas y salidas del almacén.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registro de cambios de personal administrativo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Registro de inspecciones del almacén.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos de almacenamiento, traslado interno y gestión documental de productos químicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué información no es obligatoria en el informe de traslado interno de productos químicos?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fecha y hora del traslado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Clasificación de peligro SGA.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'EPP utilizado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Costo del producto trasladado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos de almacenamiento, traslado interno y gestión documental de productos químicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es una responsabilidad de los trabajadores en el manejo de productos químicos?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Financiar programas de capacitación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diseñar el sistema de gestión SG-SST.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reportar de inmediato cualquier condición insegura.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Realizar auditorías externas del almacén.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos de almacenamiento, traslado interno y gestión documental de productos químicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el almacenamiento, transporte interno y gestión documental de productos químicos, así como su comprensión dentro del Sistema de Gestión de Seguridad y Salud en el Trabajo.',
      mensaje_final_reprobado:
        'Mensaje cuando el porcentaje de respuestas correctas es inferior al 70 %	No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
