<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La gestión segura de productos químicos en entornos laborales y formativos se fundamenta en la adecuada organización del almacenamiento, el control del transporte interno y la integración de un sistema de gestión que garantice la prevención de riesgos. El componente aborda las condiciones técnicas del sitio de almacenamiento, la separación por compatibilidad, el uso de hojas de datos de seguridad y la implementación de medidas preventivas y planes de emergencia. Asimismo, establece lineamientos para la manipulación y traslado interno seguro, considerando señalización, equipos adecuados y procedimientos específicos según la sustancia. Finalmente, articula estas prácticas con el Sistema de Gestión de Seguridad y Salud en el Trabajo bajo el ciclo PHVA, definiendo responsabilidades, obligaciones y control documental que aseguran la trazabilidad y mejora continua del proceso.
    
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente formativo sobre almacenamiento, transporte interno y gestión documental de productos químicos se estructura en 3 grandes ejes articulados entre sí. El primero corresponde al almacenamiento seguro, incluyendo características del sitio, operaciones críticas, separación por compatibilidad y medidas de seguridad y emergencia. El segundo desarrolla el transporte interno, considerando condiciones del área, planificación de ruta, selección de equipos y procedimientos de traslado según la sustancia. Finalmente, integra todo el proceso al SG-SST mediante el ciclo PHVA, la gestión del riesgo, las responsabilidades de los actores y el control documental.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
