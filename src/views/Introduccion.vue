<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/portada/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El almacenamiento, el transporte interno y la documentación son tres procesos críticos en el manejo de productos químicos. Cuando alguno de estos tres procesos falla, el riesgo de incendios, derrames, intoxicaciones o explosiones aumenta significativamente. Por eso, dominar estos tres aspectos es tan importante como conocer las propiedades del producto mismo.
          br
          br
          | El almacenamiento seguro exige condiciones técnicas precisas en el sitio, procedimientos claros de recepción y una separación correcta entre sustancias incompatibles, apoyada en las hojas de datos de seguridad y la matriz guía de compatibilidad. El transporte interno, por su parte, requiere verificar las condiciones del área de manipulación, seleccionar el equipo adecuado según la naturaleza del producto y seguir un procedimiento documentado que contemple desde la planificación de la ruta hasta el registro del traslado.
    
    p.mb-4 La documentación de todo este proceso se articula dentro del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST), que a través del ciclo Planificar, Hacer, Verificar y Actuar (PHVA) integra los registros, los procedimientos y las responsabilidades de empleadores, trabajadores y administradoras de riesgos laborales en una cultura de mejora continua que convierte cada operación en evidencia de una gestión química segura y responsable.
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
