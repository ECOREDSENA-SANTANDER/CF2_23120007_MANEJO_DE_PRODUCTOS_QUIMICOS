<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Transporte interno de productos químicos

    .cajon.color-primario.p-4(data-aos="fade-right")
      p El transporte interno introduce riesgos que no existen durante el almacenamiento estático: movimientos, vibraciones, contactos accidentales y exposición a condiciones ambientales variables. Cada operación de traslado debe planificarse, ejecutarse según procedimiento documentado y registrarse adecuadamente.
    
    separador
    #t_2_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.1  Condiciones del área de trabajo

    p El transporte interno de productos químicos inicia mucho antes de desplazar el primer recipiente: comienza con la verificación y preparación del área de trabajo. Una inadecuada preparación del entorno puede generar exposiciones y derrames fuera de los sitios de almacenamiento, permitiendo que concentraciones peligrosas de vapores o gases se dispersen por el área y comprometan la seguridad de los trabajadores. Las condiciones del entorno de manipulación determinan en gran medida la seguridad de la operación de traslado y la integridad tanto del trabajador y como del producto.
    p Antes de realizar cualquier operación de traslado de productos químicos, el área de trabajo debe cumplir las siguientes condiciones:

    SlyderB.mb-2(:datos="datosSlyder").fondo02.p-5(data-aos="fade-left") 

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text Señalización y elementos de protección colectiva

    p.mb-4 La adecuada preparación del área de trabajo para la manipulación y el transporte interno de productos químicos no solo incluye la verificación de las condiciones ambientales y operativas, sino también la presencia y el correcto funcionamiento de los elementos de protección colectiva y de la señalización preventiva. Estos dos componentes actúan de manera complementaria para reducir los riesgos durante las operaciones de traslado.

    .row.fila-altura-igual.mb-3(data-aos="zoom-in-left")
        .col-lg-4
          img(src='@/assets/curso/Tema2/img01.svg' alt='')
        .col-lg-8
          .cajon.color-primario.p-5
            p Los #[b elementos de protección colectiva], como los equipos de extracción localizada, cumplen un papel fundamental en el control de contaminantes generados durante la manipulación. Estos equipos deben encontrarse en buen estado, ser accesibles para todo el personal y someterse a verificaciones periódicas que garanticen su operación adecuada. Cualquier anomalía detectada en su funcionamiento debe ser reportada de inmediato al personal responsable del mantenimiento, dado que su falla puede favorecer la dispersión de vapores, gases o partículas peligrosas en el área de trabajo.

    p.mb-4 De manera articulada, #[b la señalización de seguridad] en las zonas de manipulación y traslado de productos químicos cumple una función preventiva fundamental: comunicar de forma inmediata y universal los peligros presentes y las conductas requeridas. Toda área de manipulación debe contar con:

    .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-7
          ul.lista-ul.lista-ul--separador
            li.d-flex.mb-0
              i.fas.fa-flask
              p.mb-0 Señales de advertencia de los peligros químicos presentes (conforme al SGA).
            li.d-flex.mb-0
              i.fas.fa-flask
              p.mb-0 Señales de obligación indicando el uso de EPP específico requerido en el área.
            li.d-flex
              i.fas.fa-flask
              p.mb-0 Señales de prohibición para acciones no permitidas (fumar, usar llamas abiertas, ingerir alimentos, entre otras).
            li.d-flex.mb-0
              i.fas.fa-flask
              p.mb-0 Delimitación visual de zonas de circulación peatonal y vehicular (si aplica) para evitar interferencias.

            li.d-flex.mb-0
              i.fas.fa-flask
              p.mb-0 Señalización de rutas de evacuación y ubicación de equipos de emergencia.
        
        .col-lg-5.col-10.col-md-8
          img(src="@/assets/curso/Tema2/img02.png")
        
    .col-lg-12(data-aos="zoom-in-left")
      .cajon.color-primario.p-5
        p La integración de estos dos componentes (protección colectiva y señalización) permite que el área de trabajo esté correctamente preparada antes de movilizar cualquier sustancia. De esta forma se minimiza la probabilidad de exposición, derrames o la dispersión de concentraciones peligrosas de vapores y gases fuera de los sitios de almacenamiento, asegurando un entorno de trabajo más seguro y controlado para todo el personal.

    separador
    #t_2_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.2  Condiciones de transporte interno

    p Por definición, el transporte es una operación dinámica que implica el movimiento de productos, personas y en muchos casos equipos de transporte. Esta dinámica eleva temporalmente los riesgos respecto al almacenamiento estático, lo que exige una planificación cuidadosa de cada operación de traslado.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text Planificación de la ruta y selección del equipo
    p Antes de iniciar el traslado, el operario debe planificar la ruta más segura y eficiente, considerando:
  

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-10
        PasosA.color-primario.mb-5(tipo="n")
          .row
            .col-md-8.mb-4.mb-md-0
              h3 Distancia y características del recorrido
              p Identificar rampas, escaleras, puertas de vaivén, cruces con zonas de alta circulación o puntos de riesgo específico.
            .col-md-3
              figure
                img(src='@/assets/curso/Tema2/1.svg', alt='Texto que describa la imagen')


          .row
            .col-md-3.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/Tema2/2.svg', alt='Texto que describa la imagen')

            .col-md-8
              h3.text-left Compatibilidad del producto
              p.text-left Verificar compatibilidad con otros productos que pueda encontrar en la ruta. Nunca trasladar sustancias incompatibles simultáneamente.

          .row
            .col-md-8.mb-4.mb-md-0
              h3 Equipo de transporte disponible
              p Evaluar carretillas manuales, montacargas, carros de plataforma o contenedores especiales según compatibilidad con el producto y la ruta.
            .col-md-3
              figure
                img(src='@/assets/curso/Tema2/3.svg', alt='Texto que describa la imagen')
            

          .row
            .col-md-3
              figure
                img(src='@/assets/curso/Tema2/4.svg', alt='Texto que describa la imagen')
            .col-md-8.mb-4.mb-md-0
              h3.text-left Estado de los recipientes
              p.text-left Verificar tapa bien cerrada, etiqueta legible, ausencia de fugas, grietas o deformaciones.
          
          .row
              .col-md-9.mb-4.mb-md-0
                h3 EPP requerido según FDS
                p Mínimo: guantes, gafas y calzado de seguridad. Elementos adicionales según peligro: delantal, protección respiratoria, traje de protección química.
              .col-md-3
                figure
                  img(src='@/assets/curso/Tema2/5.svg', alt='Texto que describa la imagen')
  

    p Asimismo, la selección del equipo para transporte interno depende de las dimensiones del almacén, del volumen y la rotación de las sustancias, así como de la relación costo-uso de los equipos, los movimientos requeridos y la distancia a recorrer. Es común en los procedimientos de transporte local emplear grúas elevadoras mecánicas y otros equipos de manipulación que facilitan el traslado seguro de cargas. 
    p.mb-4 Otros equipos usados para el transporte interno incluyen:

    .row.mb-1(data-aos="fade-right")
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4.col-md-5
              figure
                img(src='@/assets/curso/Tema2/001.svg', alt='Texto que describa la imagen')
          h4.text-center Transpalés
          p.text-small.mb-0.text-center Equipo básico que permite trasladar mercancía horizontalmente y cargas dispuestas sobre palés. Es posible elevar la carga una pequeña distancia del suelo para evitar roces. 

      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in-left")
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4.col-md-5
              figure
                img(src='@/assets/curso/Tema2/002.svg', alt='Texto que describa la imagen')
          h4.text-center Carretillas
          p.text-small.mb-0.text-center Usadas para trasladar mercancías de forma horizontal o vertical según su diseño. Se prefieren aquellas eléctricas para disminuir riesgos asociados. 
      
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4.col-md-5
              figure
                img(src='@/assets/curso/Tema2/003.svg', alt='Texto que describa la imagen')
          h4.text-center Apiladoras
          p.text-small.mb-0.text-center Poseen un mástil por el que se desplaza una horquilla en sentido vertical que permite la elevación de la mercancía y facilitando las operaciones de carga, descarga y apilamiento. 

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg4.py-2.w-card-text Manipulación de envases

    p.mb-5 La manipulación incorrecta de envases es una de las principales causas de derrames durante el transporte interno. Las siguientes prácticas son obligatorias:
    
    .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-7
          ul.lista-ul.lista-ul--separador
            li.d-flex.mb-0
              i.fas.fa-flask
              p.mb-0 Los productos químicos nunca deben transportarse en elevadores de pasajeros. Se deben usar montacargas o vías de carga específicas.
            li.d-flex.mb-0
              i.fas.fa-flask
              p.mb-0 Al transportar una botella de galón manualmente, una mano va en la base del  recipiente y otra en el cuello. Nunca se sujeta solo por la tapa o el cuello.
            li.d-flex
              i.fas.fa-flask
              p.mb-0 Nunca se transportan envases sin tapa firme o con tapas de otros productos.
            li.d-flex.mb-0
              i.fas.fa-flask
              p.mb-0 Para trasladar dos o más galones simultáneamente, se usa una carretilla construida con materiales resistentes al producto y con capacidad de contención en caso de rotura.
            li.d-flex.mb-0
              i.fas.fa-flask
              p.mb-0 No se recomienda transportar más de 48 galones en una misma carga, ni mezclar sustancias incompatibles en el mismo equipo de transporte.
            li.d-flex.mb-0
              i.fas.fa-flask
              p.mb-0 Los envases vacíos se trasladan con la misma precaución que los llenos: pueden contener residuos del producto original y generar los mismos riesgos.
        
        .col-lg-5.col-10.col-md-8
          img(src="@/assets/curso/Tema2/img04.png")

    separador
    #t_2_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.3  Procedimientos de transporte interno

    p.mb-2 Los procedimientos de transporte interno deben estar documentados, difundidos a todo el personal involucrado y actualizados periódicamente. A continuación se describen los procedimientos más críticos.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg4.py-2.w-card-text Procedimiento de traslado seguro


    .tarjeta.fondo03.p-4(data-aos="zoom-in-left")
      PasosB.color-primario
        .row.justify-content-center.align-items-center(titulo="")
          .col-lg-5.col-md-8.mb-4
            figure
              img(src='@/assets/curso/Tema2/img1.png', alt='')
          .col-lg-5.mb-4.mb-md-0.col-md-12
            p Verificar la HDS del producto para confirmar los riesgos, el EPP requerido y las condiciones especiales de traslado.
        .row.justify-content-center.align-items-center(titulo="")
          .col-lg-5.col-md-8.mb-4
            figure
              img(src='@/assets/curso/Tema2/img2.png', alt='')
          .col-lg-5.mb-4.mb-md-0.col-md-12
            p Colocarse el EPP completo antes de manipular el recipiente.

        .row.justify-content-center.align-items-center(titulo="")
          .col-lg-5.col-md-8.mb-4
            figure
              img(src='@/assets/curso/Tema2/img3.png', alt='')
          .col-lg-5.mb-4.mb-md-0.col-md-12
            p Inspeccionar el recipiente: tapa hermética, etiqueta legible, ausencia de deformaciones, fugas o daños.

        .row.justify-content-center.align-items-center(titulo="")
          .col-lg-5.col-md-8.mb-4
            figure
              img(src='@/assets/curso/Tema2/img4.png', alt='')
          .col-lg-5.mb-4.mb-md-0.col-md-12
            p Seleccionar el equipo de transporte adecuado según el peso, el volumen y las propiedades del producto.

        .row.justify-content-center.align-items-center(titulo="")
          .col-lg-5.col-md-8.mb-4
            figure
              img(src='@/assets/curso/Tema2/img5.png', alt='')
          .col-lg-5.mb-4.mb-md-0.col-md-12
            p Asegurar el recipiente en el equipo de transporte con los elementos de sujeción disponibles (cintas, bordes, cámaras de contención).

        .row.justify-content-center.align-items-center(titulo="")
          .col-lg-5.col-md-8.mb-4
            figure
              img(src='@/assets/curso/Tema2/img6.png', alt='')
          .col-lg-5.mb-4.mb-md-0.col-md-12
            p Trazar la ruta más segura, verificando que el camino esté libre de obstáculos.

        .row.justify-content-center.align-items-center(titulo="")
          .col-lg-5.col-md-8.mb-4
            figure
              img(src='@/assets/curso/Tema2/img7.png', alt='')
          .col-lg-5.mb-4.mb-md-0.col-md-12
            p Transportar a velocidad controlada, sin correr, sin desviar la atención del recorrido y sin dejar el equipo desatendido en ningún punto.

        .row.justify-content-center.align-items-center(titulo="")
          .col-lg-5.col-md-8.mb-4
            figure
              img(src='@/assets/curso/Tema2/img8.png', alt='')
          .col-lg-5.mb-4.mb-md-0.col-md-12
            p Entregar el producto en el área de destino, verificando que se ubique de manera segura y que el receptor sepa los riesgos del producto.

        .row.justify-content-center.align-items-center(titulo="")
          .col-lg-5.col-md-8.mb-4
            figure
              img(src='@/assets/curso/Tema2/img9.png', alt='')
          .col-lg-5.mb-4.mb-md-0.col-md-12
            p Registrar el traslado en el formato de control de movimientos del inventario.

        .row.justify-content-center.align-items-center(titulo="")
          .col-lg-5.col-md-8.mb-4
            figure
              img(src='@/assets/curso/Tema2/img10.png', alt='')
          .col-lg-5.mb-4.mb-md-0.col-md-12
            p Limpiar el equipo de transporte si hubo contacto con el producto, y reportar cualquier incidente o condición insegura observada durante el traslado.
          
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg4.py-2.w-card-text Condiciones según la sustancia a manipular

    p.mb-4 La naturaleza fisicoquímica de cada producto impone condiciones específicas de transporte que van más allá de los procedimientos generales. Las más relevantes son:

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 5.
            span Condiciones de transporte por tipo de sustancia      

    .tabla-a.color-primario.mb-4(data-aos="zoom-in-left")
      table
        thead
          tr
            th Tipo de sustancia
            th Condiciones especiales de transporte
        tbody
          tr
            td Líquidos inflamables (clase de peligro 3 SGA)
            td.text-left Eliminar fuentes de ignición en la ruta. No usar equipos generadores de chispas. Ventilación del área previa al traslado.
          tr
            td Ácidos y bases corrosivas
            td.text-left Contenedor secundario obligatorio. EPP resistente a corrosivos (guantes de nitrilo o neopreno, gafas herméticas, delantal). Neutralizante disponible.
          tr
            td Sustancias tóxicas agudas
            td.text-left Protección respiratoria según concentración de vapor (consultar FDS). Minimizar el tiempo de exposición. Evitar traslados en áreas concurridas.
          tr
            td Gases comprimidos (cilindros)
            td.text-left Cilindros siempre en posición vertical, asegurados en carro especial. Protectores de válvula puestos. Nunca en posición horizontal ni rodando.
          tr
            td Sustancias reactivas con agua
            td.text-left Verificar que la ruta no tenga fuentes de agua (tuberías, duchas, lavaojos). EPP impermeable. Extintor de polvo seco disponible.
          tr
            td Criogénicos (nitrógeno líquido, CO₂ líquido)
            td.text-left Recipientes especializados Dewar. Verificar presurización. Riesgo de quemaduras criogénicas. Protección térmica y facial.


    img(src='@/assets/curso/Tema2/podcast.svg', alt='Texto que describa la imagen')(data-aos="zoom-in-left")
    .row.justify-content-center.g-0(data-aos="fade-right").mb-4
      .col-lg-12
        .tarjeta.clr--pink.p-4.rounded-0.h-100.color-primario
          .tarjeta.bg-white.p-4
            TarjetaAudio.color-acento-botones(
            texto="Podcast: Mover productos químicos sin mover los riesgos"
            :audio="require('@/assets/curso/Tema2/podcast.svg')"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
































































































</template>

<script>
export default {
  name: 'Tema2',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Limpieza y orden',
        texto:
          'Pisos libres de derrames previos, obstáculos, cables sueltos o materiales que puedan provocar tropiezos o caídas durante el traslado.',
        imagen: require('@/assets/curso/Tema2/01.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Ventilación adecuada',
        texto:
          'Especialmente en áreas cerradas o semicerradas donde los vapores del producto puedan acumularse. La ventilación natural debe verificarse; si es insuficiente, debe activarse la ventilación mecánica antes de iniciar el traslado.',
        imagen: require('@/assets/curso/Tema2/02.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Iluminación',
        texto:
          'Debe ser suficiente en toda la ruta de traslado, incluyendo pasillos, rampas, montacargas y zonas de entrega.',
        imagen: require('@/assets/curso/Tema2/03.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Pisos en buen estado',
        texto:
          'Sin grietas, desniveles abruptos ni superficies resbaladizas. Los pisos mojados deben señalizarse o eliminarse antes de iniciar el traslado.',
        imagen: require('@/assets/curso/Tema2/04.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Temperatura y humedad',
        texto:
          'Estos parámetros deben mantenerse dentro de los rangos admisibles para el producto a trasladar, especialmente en el caso de sustancias termosensibles o higroscópicas, cuya estabilidad puede verse afectada por las variaciones ambientales. ',
        imagen: require('@/assets/curso/Tema2/05.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
