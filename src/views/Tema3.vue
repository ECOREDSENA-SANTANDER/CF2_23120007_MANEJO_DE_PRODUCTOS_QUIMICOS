<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Sistema de gestión y documentación del proceso

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-right")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El sistema de gestión y documentación del proceso de manipulación y traslado interno de productos químicos constituye el conjunto estructurado de políticas, procedimientos, registros y mecanismos de control orientados a garantizar la seguridad, trazabilidad y cumplimiento normativo dentro de la organización.
            br
            br
            | La gestión adecuada del riesgo químico requiere no solo la implementación de controles operativos, sino también la formalización documental de cada etapa del proceso. La documentación permite evidenciar el cumplimiento legal, facilitar auditorías, establecer responsabilidades y asegurar la mejora continua.

    p.mb-2 Este sistema se articula con el Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST), el cual establece los lineamientos generales para la identificación, evaluación y control de los riesgos laborales, incluyendo aquellos derivados de sustancias químicas peligrosas.

    separador
    #t_3_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 3.1  Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST)

    p.mb-4 La implementación del SG-SST en una organización que maneja productos químicos debe contemplar, como mínimo, los siguientes elementos:
    
    .row.justify-content-center.mb-2(data-aos="fade-right")
        .col-lg-7
          ul.lista-ul.lista-ul--separador
            li.d-flex
              i.fas.fa-flask
              p.mb-0 #[b Política de seguridad y salud en el trabajo:] declaración escrita y firmada por la alta dirección que expresa el compromiso de la organización con la prevención de accidentes y enfermedades laborales.
            li.d-flex
              i.fas.fa-flask
              p.mb-0 #[b Identificación de peligros y evaluación de riesgos:] proceso sistemático de reconocimiento de todos los peligros presentes en el lugar de trabajo, incluyendo los asociados a los productos químicos y la estimación del nivel de riesgo para priorizar los controles.
            li.d-flex
              i.fas.fa-flask
              p.mb-0 #[b Plan de trabajo anual del SG-SST:] documento que define los objetivos, metas, actividades, responsables, recursos y cronograma de implementación del sistema.
            li.d-flex
              i.fas.fa-flask
              p.mb-0 #[b Programa de capacitación y entrenamiento:] plan específico para que todos los trabajadores que manipulan productos químicos reciban la formación necesaria en identificación de peligros, uso de EPP, respuesta a emergencias y gestión documental.
            li.d-flex
              i.fas.fa-flask
              p.mb-0 #[b Indicadores del SG-SST:] métricas que permiten medir el desempeño del sistema, como la tasa de accidentalidad, la frecuencia de incidentes con productos químicos, el porcentaje de cumplimiento de inspecciones y la cobertura de capacitaciones.
           
        
        .col-lg-5.col-10.col-md-7
          img(src="@/assets/curso/Tema3/img01.png")
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg4.py-2.w-card-text Ciclo PHVA aplicado al manejo de productos químicos

    p.mb-4 El ciclo Planificar, Hacer, Verificar, Actuar (PHVA), también conocido como ciclo de Deming, es el modelo de mejora continua sobre el que se estructura el SG-SST en Colombia (Decreto 1072 de 2015). Cada fase tiene un rol específico en el manejo seguro de productos químicos:

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 6.
          span Ciclo PHVA aplicado al manejo de productos químicos  
        .tabla-a.color-primario
          table
            thead
              tr
                th.w-25 Fase
                th En el contexto químico
                th Ejemplos de actividades
            tbody
              tr
                td.text-left Planificar (P)
                td.text-left Definir objetivos y procedimientos para el manejo seguro de los químicos presentes en la organización.
                td.text-left Elaborar el inventario de productos químicos. Actualizar HDS. Diseñar el plan de separación del almacén. Planificar capacitaciones.
              tr
                td.text-left Hacer (H)
                td.text-left Ejecutar los procedimientos planificados para el almacenamiento, transporte y documentación.
                td.text-left Realizar inspecciones del almacén. Ejecutar traslados según procedimiento. Llevar registros de movimientos de inventario.
              tr
                td.text-left Verificar (V)
                td.text-left Medir los resultados y comparar con los objetivos planificados.
                td.text-left Auditorías internas del almacén. Análisis de incidentes con productos químicos. Revisión de indicadores de accidentalidad.
              tr
                td.text-left Actuar (A)
                td.text-left Implementar mejoras basadas en los hallazgos de la verificación.
                td.text-left Actualizar procedimientos. Reforzar capacitaciones. Mejorar señalización. Ajustar el plan de separación de productos.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg4.py-2.w-card-text Liderazgo y gestión del riesgo
        
    p El liderazgo en seguridad y salud en el trabajo no es exclusivo de la alta dirección: debe permear todos los niveles jerárquicos de la organización. En entornos con presencia de productos químicos, el liderazgo en seguridad se manifiesta en:

    .row.justify-content-center.mb-2(data-aos="zoom-in-left")
      .col-lg-3.d-flex
        .cajon.color-primario.p-4.mb-3
          p La decisión de invertir en condiciones de almacenamiento adecuadas, equipos de transporte seguros y EPP de calidad, por encima de criterios de costo únicamente.

      .col-lg-3.d-flex
        .cajon.color-primario.p-4.mb-3
          p La disposición a detener una operación insegura, incluso cuando ello implica el aumento de los costos de producción o de los tiempos de ejecución.

      .col-lg-3.d-flex
        .cajon.color-primario.p-4.mb-3
          p La participación activa de los supervisores en las inspecciones del almacén y en la verificación del cumplimiento de los procedimientos de traslado.

      .col-lg-3.d-flex
        .cajon.color-primario.p-4.mb-3
          p La apertura a recibir y gestionar reportes de condiciones inseguras sin represalias hacia quien reporta.
    
    separador
    #t_3_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 3.2  Obligaciones de los actores del SG-SST

    p.mb-1 El marco normativo colombiano, en particular el Decreto 1072 de 2015 y la Ley 1562 de 2012, establece obligaciones específicas para cada actor del sistema de gestión en materia de seguridad y salud en el trabajo. En el contexto del manejo de productos químicos, estas obligaciones adquieren dimensiones particulares.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg4.py-2.w-card-text Obligaciones de los empleadores

    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-right")
      .col-lg-12
        .tarjeta.fondo01.p-4
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4.mb-md-0.col-12
                p Diseñar e implementar el SG-SST conforme a los estándares mínimos establecidos en la Resolución 0312 de 2019 del Ministerio del Trabajo.
              .col-lg-5.col-md-8
                figure
                  img(src='@/assets/curso/Tema3/img02.png', alt='')
            
            .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
              .col-lg-6.mb-4.mb-md-0.col-12
                p Garantizar el suministro, mantenimiento y reposición oportuna de todos los EPP requeridos para el manejo de productos químicos.
              .col-lg-5.col-md-8
                figure
                  img(src='@/assets/curso/Tema3/img03.png', alt='')

            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4.mb-md-0.col-12
                p Asegurar que todos los productos químicos presentes en el lugar de trabajo cuenten con su HDS actualizada y que esta esté disponible para los trabajadores.
              .col-lg-5.col-md-8
                figure
                  img(src='@/assets/curso/Tema3/img04.png', alt='')

            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4.mb-md-0.col-12
                p Implementar y mantener actualizados los procedimientos de almacenamiento, transporte interno y gestión documental de productos químicos.
              .col-lg-5.col-md-8
                figure
                  img(src='@/assets/curso/Tema3/img05.png', alt='')

            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4.mb-md-0.col-12
                p Reportar todos los accidentes de trabajo y enfermedades laborales relacionados con la exposición a productos químicos a la Administradora de Riesgos Laborales (ARL), a la Entidad Promotora de Salud (EPS) y al Ministerio del Trabajo, según corresponda.
              .col-lg-5.col-md-8
                figure
                  img(src='@/assets/curso/Tema3/img06.png', alt='')

            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4.mb-md-0.col-12
                p Garantizar la capacitación y el entrenamiento específico de todos los trabajadores que manipulan productos químicos, con registros documentados de cada actividad formativa.
              .col-lg-5.col-md-8
                figure
                  img(src='@/assets/curso/Tema3/img07.png', alt='')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg4.py-2.w-card-text Obligaciones de las Administradoras de Riesgos Laborales (ARL)
    
    .row.justify-content-center.mb-2(data-aos="fade-right")
        .col-lg-9
          ul.lista-ul.lista-ul--separador
            li.d-flex
              i.fas.fa-flask
              p.mb-0 Capacitar y asistir técnicamente a las empresas afiliadas en el diseño e implementación del SG-SST, con énfasis en los riesgos asociados a los productos químicos que cada empresa maneja. 

            li.d-flex
              i.fas.fa-flask
              p.mb-0 Realizar visitas periódicas a los sitios de trabajo para verificar el cumplimiento de las medidas de prevención y control de riesgos químicos. 

            li.d-flex
              i.fas.fa-flask
              p.mb-0 Participar en la investigación de accidentes de trabajo y enfermedades laborales relacionadas con la exposición química. 

            li.d-flex
              i.fas.fa-flask
              p.mb-0 Proveer información actualizada sobre riesgos emergentes en el manejo de productos químicos y las mejores prácticas para su control. 

            li.d-flex
              i.fas.fa-flask
              p.mb-0 Financiar programas de prevención y promoción de la salud laboral en las empresas afiliadas, incluyendo capacitaciones sobre manejo seguro de productos químicos. 
        .col-lg-3.col-8.col-md-6
          img(src="@/assets/curso/Tema3/img08.png")
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg4.py-2.w-card-text Responsabilidades de los trabajadores

    .fondo04.p-4
      .tarjeta.bg5.p-5(data-aos="zoom-in-left")
        PasosB.color-secundario
          .row.justify-content-center(titulo="")
            .col-lg-5.col-md-8.mb-4
              figure
                img(src='@/assets/curso/Tema3/img09.png', alt='')
            .col-lg-5.mb-4.mb-md-0.col-md-12
              p Conocer y cumplir estrictamente los procedimientos de almacenamiento, transporte y gestión documental de productos químicos definidos por la organización.
         
          .row.justify-content-center(titulo="")
            .col-lg-5.col-md-8.mb-4
              figure
                img(src='@/assets/curso/Tema3/img10.png', alt='')
            .col-lg-5.mb-4.mb-md-0.col-md-12
              p Usar siempre el EPP asignado y en buen estado para cada operación, verificando su ajuste y funcionamiento antes de iniciar la tarea.
          
          .row.justify-content-center(titulo="")
            .col-lg-5.col-md-8.mb-4
              figure
                img(src='@/assets/curso/Tema3/img11.png', alt='')
            .col-lg-5.mb-4.mb-md-0.col-md-12
              p Reportar de inmediato cualquier condición insegura, incidente o accidente relacionado con productos químicos, aunque no haya generado lesiones visibles.
          
          .row.justify-content-center(titulo="")
            .col-lg-5.col-md-8.mb-4
              figure
                img(src='@/assets/curso/Tema3/img12.png', alt='')
            .col-lg-5.mb-4.mb-md-0.col-md-12
              p Participar activamente en las capacitaciones y simulacros del SG-SST relacionados con el manejo de productos químicos.
              
              
          .row.justify-content-center(titulo="")
            .col-lg-5.col-md-8.mb-4
              figure
                img(src='@/assets/curso/Tema3/img13.png', alt='')
            .col-lg-5.mb-4.mb-md-0.col-md-12
              p No realizar modificaciones no autorizadas a los procedimientos de manejo de productos químicos ni improvisar soluciones ante situaciones de riesgo sin consultar al responsable de SST.

    separador
    #t_3_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 3.3  Documentación del proceso de manipulación

    p.mb-2 La documentación es la columna vertebral del SG-SST. Sin registros confiables no es posible verificar el cumplimiento de los procedimientos, analizar tendencias de accidentalidad, demostrar ante las autoridades el nivel de implementación del sistema ni aprender de los incidentes ocurridos. En el manejo de productos químicos, la documentación abarca múltiples niveles.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg4.py-2.w-card-text Tipos de documentos y control documental
    p.mb-4 El SG-SST maneja diferentes tipos de documentos, cada uno con una función específica. Los más relevantes en el manejo de productos químicos son:
    
    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 7.
          span Documentos del SG-SST aplicados al manejo químico
        .tabla-a.color-primario
          table
            thead
              tr
                th.w-25 Tipo de documento
                th Descripción
                th Ejemplo en manejo químico
            tbody
              tr
                td.text-left Política
                td.text-left Declaración de intención y compromiso de la alta dirección.
                td.text-left Política de gestión de productos químicos peligrosos.
              tr
                td.text-left Procedimiento
                td.text-left Descripción paso a paso de cómo realizar una actividad.
                td.text-left Procedimiento de almacenamiento de ácidos. Procedimiento de trasvase de solventes.
              tr
                td.text-left Instructivo
                td.text-left Descripción detallada de una tarea específica y operativa.
                td.text-left Instructivo para el uso del extintor CO₂ en el almacén.
              tr
                td.text-left Formato
                td.text-left Documento que captura evidencia de la ejecución de una actividad. Una vez diligenciado el formato, este se convierte en un registro.
                td.text-left Registro de inspección diaria del almacén. Control de ingreso y egreso de productos.
              tr
                td.text-left Plan
                td.text-left Documento que define objetivos, acciones, responsables y cronograma.
                td.text-left Plan de emergencias del almacén. Plan de capacitación en manejo de productos químicos.
              tr
                td.text-left Protocolo
                td.text-left Conjunto de instrucciones para una situación específica de riesgo.
                td.text-left Protocolo de atención a derrames. Protocolo de respuesta a intoxicaciones.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg4.py-2.w-card-text Registros del proceso de manipulación

    p.mb-4 Los siguientes registros son fundamentales para la trazabilidad y el control del proceso de manipulación de productos químicos y forman parte de las evidencias que el SG-SST debe mantener y controlar: 

    ImagenInfografica.color-acento-botones.mb-4
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/Tema3/interactiva.svg', alt='')
      .tarjeta.row.img-infog.bg1.align-items-center.p-4(numero="2" x="50%" y="10%")
        .col-md-12.col-12.px-lg-4.px-3.py-1.contenido
          h5 Registro de entradas y salidas del almacén
          p Control de todos los movimientos de productos con fecha, hora, cantidad, responsable y destino o procedencia.
      .tarjeta.row.img-infog.bg1.align-items-center.p-4(numero="5" x="50%" y="90%")
        .col-md-12.col-12.px-lg-4.px-3.py-1.contenido
          h5 Registro de capacitaciones
          p Evidencia de todas las actividades formativas realizadas, con listados de asistencia firmados, temas tratados y evaluaciones aplicadas.
      .tarjeta.row.img-infog.bg1.align-items-center.p-4(numero="3" x="87%" y="30%")
        .col-md-12.col-12.px-lg-4.px-3.py-1.contenido
          h5 Registro de inspecciones del almacén
          p Evidencia de las verificaciones periódicas de las condiciones físicas, la señalización, los equipos de seguridad y el estado de los productos.
      .tarjeta.row.img-infog.bg1.align-items-center.p-4(numero="1" x="13%" y="30%")
        .col-md-12.col-12.px-lg-4.px-3.py-1.contenido
          h5 Inventario actualizado de productos químicos
          p Lista de todos los productos presentes en la organización con su clasificación de peligro, cantidad, ubicación en el almacén y estado de las HDS.
      .tarjeta.row.img-infog.bg1.align-items-center.p-4(numero="4" x="4%" y="73%")
        .col-md-12.col-12.px-lg-4.px-3.py-1.contenido
          h5 Registro de incidentes y accidentes
          p Reporte de cualquier evento con análisis de causas y acciones correctivas, incluso si no generó lesiones.
      .tarjeta.row.img-infog.bg1.align-items-center.p-4(numero="6" x="96%" y="73%")
        .col-md-12.col-12.px-lg-4.px-3.py-1.contenido
          h5 Certificados de disposición de residuos químicos
          p Soporte de que los residuos peligrosos generados fueron entregados a un gestor autorizado conforme a la normativa ambiental vigente.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg4.py-2.w-card-text Informe de traslado interno
    p.mb-4 El informe de traslado es el documento operativo que evidencia la ejecución de cada operación de transporte interno de productos químicos. Su diligenciamiento es obligatorio y debe conservarse como parte del sistema de registros del SG-SST. La estructura mínima requerida incluye:

    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-right")
        .col-lg-7
          ul.lista-ul.lista-ul--separador
            li.d-flex
              i.fas.fa-flask
              p.mb-0 #[b Fecha y hora:] inicio y finalización del traslado.

            li.d-flex
              i.fas.fa-flask
              p.mb-0 #[b Producto trasladado:] nombre comercial, nombre químico y número CAS si aplica.
            li.d-flex
              i.fas.fa-flask
              p.mb-0 #[b Clasificación de peligro (SGA):] clase y categoría de peligro según la HDS.
            li.d-flex
              i.fas.fa-flask
              p.mb-0 #[b Cantidad trasladada:] volumen o masa con unidades.

            li.d-flex
              i.fas.fa-flask
              p.mb-0 #[b Origen y destino:] área o zona de partida y de llegada.
            li.d-flex
              i.fas.fa-flask
              p.mb-0 #[b Equipo de transporte utilizado:] tipo de equipo empleado durante el traslado.
            li.d-flex
              i.fas.fa-flask
              p.mb-0 #[b EPP utilizado:] descripción del equipo de protección personal usado.
            li.d-flex
              i.fas.fa-flask
              p.mb-0 #[b Condiciones del traslado:] estado del recipiente, condiciones de la ruta, incidencias observadas.
            li.d-flex
              i.fas.fa-flask
              p.mb-0 #[b Responsable del traslado:] nombre y firma del operario que realizó el traslado.
            li.d-flex
              i.fas.fa-flask
              p.mb-0 #[b Supervisor o responsable SST:] nombre y firma de quien autorizó o verificó el traslado.
        .col-lg-5.col-8.col-md-7
          img(src="@/assets/curso/Tema3/img14.png")















































































































</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
