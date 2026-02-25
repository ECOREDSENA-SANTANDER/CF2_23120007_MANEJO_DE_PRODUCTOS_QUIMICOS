<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Almacenamiento de productos químicos
        
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-right")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El manejo seguro de cualquier producto químico exige un conocimiento previo sobre su composición, los riesgos que conlleva y su potencial impacto en la salud y el entorno. Para dar respuesta a estos interrogantes, se utiliza un sistema de identificación global que estandariza la comunicación de peligros de forma clara, garantizando que la información sea comprensible en cualquier industria, país o idioma, antes de proceder a su manipulación, almacenamiento o transporte.
            br
            br

      separador
      #t_1_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.1  Sitio de almacenamiento

      p.mb-3 El almacenamiento de productos químicos exige que las instalaciones cumplan condiciones técnicas precisas, cuyo nivel de exigencia varía según el tipo de sustancia, la cantidad almacenada, el tipo de recipiente (fijo o móvil), la ubicación (exterior, interior o soterrado) y el tipo de instalación utilizada (armarios de seguridad, salas o almacenes industriales). Estas condiciones están reguladas por las Hojas de Datos de Seguridad (HDS) de cada producto, elaboradas conforme al Sistema Globalmente Armonizado de Clasificación y Etiquetado de Productos Químicos (SGA), y por la normativa colombiana de seguridad y salud en el trabajo.
      .cajon.color-secundario.p-4.mb-4
        p En Colombia, el Decreto 1072 de 2015 establece que los empleadores deben garantizar condiciones seguras para el almacenamiento de sustancias químicas peligrosas como parte del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST). Esto incluye condiciones estructurales del edificio, sistemas de ventilación, control de temperatura, iluminación y sistemas de detección y extinción de incendios adecuados al tipo de productos almacenados.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 1.
            span #[em Almacén de productos químicos]
          img(src='@/assets/curso/Tema1/fig1.png', alt='Almacén industrial de productos químicos con estanterías metálicas de tres niveles, bidones en palés de madera, piso de concreto limpio e iluminación cenital.')

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text Características y ubicación del sitio de almacenamiento  

      p.mb-4 Las características físicas y técnicas del sitio de almacenamiento deben responder a los tipos de sustancias que albergan. A continuación, se describen las condiciones generales que debe reunir un sitio de almacenamiento de productos químicos:

      .row.justify-content-center.mb-5
        .col-lg-6
          img(src="@/assets/curso/Tema1/img02.png")
        .col-lg-6
          LineaTiempoD.color-primario
            .row(numero="1" titulo="Estructura resistente al fuego")
              .col-md-12.mb-4.mb-md-0
                p.text-small Materiales incombustibles o de baja inflamabilidad en paredes, techos y pisos.
            .row(numero="2" titulo="Ventilación natural o forzada")
              .col-md-12.mb-4.mb-md-0
                p.text-small Suficiente para evitar la acumulación de vapores, gases tóxicos o inflamables. La renovación de aire debe ser continua y adecuada al tipo de productos almacenados.

            .row(numero="3" titulo="Pisos impermeables")
              .col-md-12.mb-4.mb-md-0
                p.text-small Antideslizantes y con sistema de contención (cubetos o canales de drenaje) para evitar la dispersión de derrames hacia el suelo o sistemas de alcantarillado.

            .row(numero="4" titulo="Temperatura controlada")
              .col-md-12.mb-4.mb-md-0
                p.text-small Con sistemas de refrigeración o calefacción según lo requieran las especificaciones de cada producto, evitando extremos que puedan comprometer su estabilidad o seguridad.

            .row(numero="5" titulo="Iluminación adecuada")
              .col-md-12.mb-4.mb-md-0
                p.text-small Preferiblemente antiexplosiva en zonas con almacenamiento de materiales inflamables o explosivos.

            .row(numero="6" titulo="Señalización completa")
              .col-md-12.mb-4.mb-md-0
                p.text-small De accesos, rutas de evacuación, identificación de zonas de riesgo y pictogramas de peligro conforme al Sistema Globalmente Armonizado (SGA)

            .row(numero="7" titulo="Acceso restringido")
              .col-md-12.mb-4.mb-md-0
                p.text-small Con control de ingreso solo para personal autorizado y debidamente capacitado.

            .row(numero="8" titulo="Instalaciones eléctricas protegidas")
              .col-md-12.mb-4.mb-md-0
                p.text-small Certificadas, con sistemas antiexplosivos en áreas donde se almacenen materiales inflamables.

      p.mb-4 Por otro lado, la ubicación estratégica del sitio de almacenamiento dentro de la planta o establecimiento es un factor determinante para minimizar los riesgos. Los criterios de ubicación incluyen:

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-3
          img(src='@/assets/curso/Tema1/img03.png', alt='')
        .col-lg-9


      separador
      #t_1_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.2  Operación del sitio de almacenamiento

      .cajon.color-secundario.p-4.mb-4
        p La operación segura de un sitio de almacenamiento no depende únicamente de sus condiciones físicas. Los procedimientos que se desarrollan dentro de él, desde la recepción de productos hasta su despacho, pasando por el mantenimiento de las instalaciones, determinan en gran medida el nivel de riesgo al que están expuestos los trabajadores y el entorno.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text Desarrollo de operaciones 

      p.mb-4 Las operaciones en el sitio de almacenamiento deben estar documentadas mediante procedimientos escritos que establezcan paso a paso cómo realizar cada tarea. Entre las operaciones más críticas se encuentran:






































  </template>

<script>
export default {
  name: 'Tema1',
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
