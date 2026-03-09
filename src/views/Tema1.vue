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
          p.mb-0 El almacenamiento de productos químicos es uno de los procesos más críticos en cualquier organización que manipule o utilice este tipo de sustancias. Un sitio de almacenamiento mal diseñado, un procedimiento de recepción incompleto o una separación incorrecta de productos incompatibles pueden desencadenar accidentes graves: incendios, explosiones, derrames o intoxicaciones. Por esta razón, las condiciones técnicas del sitio, los procedimientos operativos y los criterios de separación deben responder a estándares técnicos precisos, sustentados en la normativa nacional e internacional vigente.
            br
            br

      separador
      #t_1_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.1  Sitio de almacenamiento

      p.mb-3 El almacenamiento de productos químicos exige que las instalaciones cumplan condiciones técnicas precisas, cuyo nivel de exigencia varía según el tipo de sustancia, la cantidad almacenada, el tipo de recipiente (fijo o móvil), la ubicación (exterior, interior o soterrado) y el tipo de instalación utilizada (armarios de seguridad, salas o almacenes industriales). Estas condiciones están reguladas por las Hojas de Datos de Seguridad (HDS) de cada producto, elaboradas conforme al Sistema Globalmente Armonizado de Clasificación y Etiquetado de Productos Químicos (SGA), y por la normativa colombiana de seguridad y salud en el trabajo.
      .cajon.color-secundario.p-4.mb-4
        p En Colombia, el Decreto 1072 de 2015 establece que los empleadores deben garantizar condiciones seguras para el almacenamiento de sustancias químicas peligrosas como parte del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST). Esto incluye condiciones estructurales del edificio, sistemas de ventilación, control de temperatura, iluminación y sistemas de detección y extinción de incendios adecuados al tipo de productos almacenados.

      .row.justify-content-center.align-items-center.mb-2(data-aos="fade-right")
        .col-lg-10.col-md-9
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 1.
            span Almacén de productos químicos
          img(src='@/assets/curso/Tema1/fig1.png', alt='Almacén industrial de productos químicos con estanterías metálicas de tres niveles, bidones en palés de madera, piso de concreto limpio e iluminación cenital.')

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text Características y ubicación del sitio de almacenamiento  

      p.mb-4 Las características físicas y técnicas del sitio de almacenamiento deben responder a los tipos de sustancias que albergan. A continuación, se describen las condiciones generales que debe reunir un sitio de almacenamiento de productos químicos:

      .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-6.col-10.mb-3.col-md-8
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

      .row.justify-content-center.align-items-center.mb-2(data-aos="fade-right")
        .col-lg-3.col-8.mb-4.col-md-5
          img(src='@/assets/curso/Tema1/img03.png', alt='')
        .col-lg-9
          SlyderF.circl-arrow.mb-4(columnas="col-lg-6 col-xl-4")
            .tarjeta.bg1.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/Tema1/1.svg' alt='')
              p.text-center Estar alejado de zonas densamente pobladas, lejos de fuentes de captación de agua potable y de áreas inundables. 
            
            .tarjeta.bg1.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/Tema1/2.svg' alt='')
              p.text-center Mantener una distancia de seguridad respecto a las zonas de producción, oficinas, comedores y salidas de emergencia.
            
            .tarjeta.bg1.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/Tema1/3.svg' alt='')
              p.text-center Contar con acceso directo para vehículos de carga y para el cuerpo de bomberos en caso de emergencia.
            
            .tarjeta.bg1.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/Tema1/4.svg' alt='')
              p.text-center Localizarse en un terreno estable que soporte adecuadamente la estructura y con una orientación que minimice la acumulación de vapores en áreas ocupadas. 
            
            .tarjeta.bg1.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/Tema1/5.svg' alt='')
              p.text-center Disponer de redes de servicios básicos (agua, gas, electricidad) o protección especial de los servicios que no puedan reubicarse. 
              
            .tarjeta.bg1.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/Tema1/6.svg' alt='')
              p.text-center Incorporar un sistema de drenaje que evite la contaminación de fuentes de agua o del alcantarillado en caso de emergencia.
            


      separador
      #t_1_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.2  Operación del sitio de almacenamiento

      .cajon.color-secundario.p-4.mb-2(data-aos="fade-right")
        p La operación segura de un sitio de almacenamiento no depende únicamente de sus condiciones físicas. Los procedimientos que se desarrollan dentro de él, desde la recepción de productos hasta su despacho, pasando por el mantenimiento de las instalaciones, determinan en gran medida el nivel de riesgo al que están expuestos los trabajadores y el entorno.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text Desarrollo de operaciones 

      p.mb-4 Las operaciones en el sitio de almacenamiento deben estar documentadas mediante procedimientos escritos que establezcan paso a paso cómo realizar cada tarea. Entre las operaciones más críticas se encuentran:
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-10
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 2.
            span Operaciones críticas del almacén de productos químicos
        .col-lg-8  
          img(src="@/assets/curso/Tema1/fig2.svg", alt="Diagrama de flujo vertical mostrando cinco operaciones del almacén de productos químicos: ingreso y egreso con registro sistemático, verificación mediante inspección de recipientes, ubicación por organización compatible, rotación bajo principio PEPS y control mediante inventario periódico.")
      .row.justify-content-center.align-items-center.mb-2(data-aos="fade-right")
        .col-lg-12
          .tarjeta.fondo01.p-4
            SlyderA(tipo="b")
              .row.justify-content-center
                .col-lg-6.mb-4.mb-md-0.col-12
                  h4 Descarga de la mercancía
                  p El transportista debe preparar el vehículo y permitir el acceso seguro para la operación, siguiendo recomendaciones de manejo de cargas y trabajo en equipo. El personal encargado de la descarga debe usar los Elementos de Protección Personal (EPP) y disponer de los equipos de contención necesarios según la HDS. 
                .col-lg-6.col-md-8
                  figure
                    img(src='@/assets/curso/Tema1/img04.png', alt='')
              .row.justify-content-center
                .col-lg-6.mb-4.mb-md-0
                  h4 Recepción y control de productos químicos
                  p Es un proceso fundamental del sitio de almacenamiento en el que se reciben los productos provenientes de fábricas u otros centros de despacho. En este punto se transfiere la custodia del producto y se finaliza el contrato de transporte. La recepción requiere de controles que garanticen la conformidad de la mercancía antes de su incorporación al inventario. Esto significa verificar el estado físico de embalajes y etiquetas, identificar los productos presentes en la factura o remisión y realizar un control del número de unidades recibidas.
                .col-lg-6.col-md-8
                  figure
                    img(src='@/assets/curso/Tema1/img05.png', alt='')
              
              .row.justify-content-center
                .col-lg-6.mb-4.mb-md-0
                  h4 Integración de productos al almacén
                  p En caso de darse un registro de entrada sin incidencias, se pasa a la etapa de integración de los productos (inventario), donde son identificados, separados y almacenados. La integración de sustancias debe ser realizada por personal capacitado y con experiencia para verificar las buenas condiciones de los productos por medio de un sistema de gestión documental.
                .col-lg-6.col-md-8
                  figure
                    img(src='@/assets/curso/Tema1/img06.png', alt='')
              
              .row.justify-content-center
                .col-lg-6.mb-4.mb-md-0
                  h4 Mantenimiento, limpieza y manejo de residuos
                  p El programa de mantenimiento preventivo del almacén debe contemplar inspecciones periódicas de la estructura física, los sistemas eléctricos, la ventilación, los equipos contra incendios y los dispositivos de contención. Las actividades de limpieza requieren productos y métodos compatibles con los productos químicos almacenados, personal capacitado y EPP adecuado.
                  p Cualquier derrame, aunque sea menor, debe registrarse, contenerse, limpiarse y reportarse conforme al procedimiento de respuesta a emergencias. Los recipientes vacíos se gestionan como residuos peligrosos, nunca se reutilizan sin descontaminación certificada y se disponen según el plan de gestión de residuos de la organización.

                .col-lg-6.col-md-8
                  figure
                    img(src='@/assets/curso/Tema1/img07.png', alt='')
                    
                    
              .row.justify-content-center
                .col-lg-6.mb-4.mb-md-0
                  h4 Seguridad en el manejo de visitantes
                  p Ninguna persona ajena al personal autorizado del almacén debe ingresar sin cumplir protocolos de seguridad. Esto incluye la entrega y uso obligatorio de EPP básicos, la capacitación previa sobre las normas de conducta dentro del área y el acompañamiento permanente de un responsable del almacén. Se debe llevar registro de todos los visitantes con nombre, empresa, propósito de la visita, hora de ingreso y de salida.
                .col-lg-6.col-md-8  
                  figure
                    img(src='@/assets/curso/Tema1/img08.png', alt='')

      separador
      #t_1_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.3  Separación y almacenamiento de productos químicos 

      .cajon.color-primario.p-4.mb-4(data-aos="fade-right")
        p La separación correcta de productos químicos incompatibles es uno de los controles más críticos en la gestión del riesgo de almacenamiento. La mezcla accidental de sustancias incompatibles puede generar reacciones violentas, liberación de gases tóxicos, incendios o explosiones. Para gestionar adecuadamente este riesgo se requiere un proceso sistemático de tres etapas.
      
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text Recopilación de la información

      p.mb-4 Antes de definir la distribución del almacén, se debe recopilar la información técnica de cada producto que se va a almacenar. Esta información proviene principalmente de las Hojas de Datos de Seguridad (HDS), que deben estar disponibles y actualizadas para todos los productos del inventario. La información relevante para la separación incluye:

      SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="fade-right")
        .tarjeta.tarjeta1.p-4
          .row.justify-content-center.mb-3
            .col-6.col-md-4
              img(src='@/assets/curso/Tema1/01.svg' alt='')
          p.text-center.p-3 Clasificación de peligros conforme al Sistema Globalmente Armonizado SGA (inflamabilidad, toxicidad, corrosividad, reactividad, peligros para la salud y el medio ambiente).
        .tarjeta.tarjeta1.p-4
          .row.justify-content-center.mb-3
            .col-6.col-md-4
              img(src='@/assets/curso/Tema1/02.svg' alt='')
          p.text-center.p-3 Incompatibilidades químicas: sustancias o materiales con los que el producto no debe almacenarse ni entrar en contacto porque pueden generar reacciones peligrosas, como ácidos con bases, oxidantes con inflamables o sustancias reactivas con agua.

        .tarjeta.tarjeta1.p-4
          .row.justify-content-center.mb-3
            .col-6.col-md-4
              img(src='@/assets/curso/Tema1/03.svg' alt='')
          p.text-center.p-3 Requisitos especiales de almacenamiento: temperatura, protección de la luz, humedad relativa.
        
        .tarjeta.tarjeta1.p-4
          .row.justify-content-center.mb-3
            .col-6.col-md-4
              img(src='@/assets/curso/Tema1/04.svg' alt='')
          p.text-center.p-3 Estado físico del producto (sólido, líquido, gas) y tipo de recipiente (bidones, cilindros, bolsas, entre otros).
      
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text Conformación de grupos de almacenamiento

      p.mb-4 Con base en la información recopilada, los productos se clasifican en grupos según sus propiedades de peligro predominantes (National Research Council, 2011). Este enfoque general es ampliamente utilizado en áreas operativas donde se requiere una guía rápida para separar las sustancias según riesgos comunes. Los principales grupos de almacenamiento son:
      
      .row.justify-content-center.align-items-center.mb-2(data-aos="fade-right")
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 1.
            span Grupos de almacenamiento de productos químicos según clase de peligro
      .tabla-a.color-primario
        table
          thead
            tr
              th.w-25 Grupo
              th Tipo de sustancia
              th Consideraciones
          tbody
            tr
              td.text-left 1. Inflamables
              td.text-left Líquidos, sólidos y gases inflamables
              td.text-left Almacenar lejos de fuentes de ignición y oxidantes. Ventilación reforzada.
            tr
              td.text-left 2. Oxidantes
              td.text-left Peróxidos, nitratos, cloratos
              td.text-left Separar de inflamables y materias orgánicas. Riesgo de incendio intenso.
            tr
              td.text-left 3. Tóxicos
              td.text-left Pesticidas, disolventes clorados, cianuros
              td.text-left Control de acceso estricto. Ventilación adecuada. Recipientes herméticos.
            tr
              td.text-left 4. Corrosivos
              td.text-left Ácidos y bases concentradas
              td.text-left Separar ácidos de bases. Recipientes resistentes. Cubetos de contención.
            tr
              td.text-left 5. Reactivos con agua
              td.text-left Metales alcalinos, carburos
              td.text-left Almacenar en zonas secas. Prohibido uso de agua para extinción.
            tr
              td.text-left 6. Explosivos
              td.text-left Peróxidos orgánicos, azidas
              td.text-left Almacenamiento especial. Mínimas cantidades. Acceso muy restringido.
            tr
              td.text-left 7. Gases comprimidos
              td.text-left Gas Licuado de Petróleo (GLP), nitrógeno, oxígeno
              td.text-left Posición vertical asegurada. Temperatura controlada. Alejados de calor.
      
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text Matriz guía de almacenamiento

      p La matriz de compatibilidad o matriz guía de almacenamiento es una herramienta que indica visualmente qué grupos de sustancias pueden almacenarse juntos, cuáles requieren separación física y cuáles son absolutamente incompatibles. Su uso correcto evita la colocación accidental de productos incompatibles en la misma zona o estantería.
      p A continuación, se presenta una matriz simplificada de compatibilidad entre los grupos de almacenamiento más comunes.   
      p La simbología es: ✓ Compatible, ✗ Incompatible (separación obligatoria), ⚠ Precaución (evaluar HDS individuales).
      
      .row.justify-content-center.align-items-center.mb-2
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 2.
            span Matriz de compatibilidad para almacenamiento de productos químicos
      .tabla-a.color-primario.mb-4(data-aos="fade-right")
        table
          thead
            tr
              th Grupo
              th Inflamables
              th Oxidantes
              th Tóxicos
              th Corrosivos
              th Reactivos con agua
          tbody
            tr
              td Inflamables
              td ✓
              td X
              td 
                span.icono-advertencia 
              td 
                span.icono-advertencia 
              td X
            tr
              td Oxidantes
              td X
              td ✓
              td 
                span.icono-advertencia 
              td 
                span.icono-advertencia 
              td X
            tr
              td Tóxicos
              td 
                span.icono-advertencia 
              td 
                span.icono-advertencia 
              td ✓
              td 
                span.icono-advertencia 
              td 
                span.icono-advertencia 
            tr
              td Corrosivos
              td 
                span.icono-advertencia 
              td
                span.icono-advertencia 
              td
                span.icono-advertencia 
              td ✓
              td X
            tr
              td Reactivos con agua
              td X
              td X
              td 
                span.icono-advertencia 
              td X
              td ✓
      
      .cajon.color-primario.p-4.mb-4(data-aos="fade-right")
        p #[b Importante:] la matriz anterior es una guía general. Para cada par de productos específicos, siempre debe consultarse la HDS de cada uno y la reactividad de la sustancia (sección 10) para confirmar la compatibilidad real. Nunca se debe almacenar según la intuición o la apariencia física de los productos.
      
      separador
      #t_1_4.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.4  Condiciones seguras de almacenamiento
      
      p.mb-3 Además de la separación de productos, el almacenamiento seguro requiere la implementación de medidas de seguridad activas y pasivas que minimicen la probabilidad de accidentes y sus consecuencias en caso de que ocurran.
      
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text Medidas de seguridad
      p.mb-4 Las medidas de seguridad en el almacén deben contemplar tanto la prevención como la respuesta. Entre las medidas esenciales se incluyen:

      .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-7
          ul.lista-ul.lista-ul--separador
            li.d-flex
              i.fas.fa-flask
              p.mb-0 Señalización completa del almacén con pictogramas SGA, señales de advertencia, obligación y prohibición, identificación de zonas por grupo de peligro y rutas de evacuación.
            li.d-flex
              i.fas.fa-flask
              p.mb-0 Sistemas de detección temprana: detectores de humo, sensores de gases y alarmas conectadas a la brigada de emergencias.
            li.d-flex
              i.fas.fa-flask
              p.mb-0 Sistemas de extinción apropiados al tipo de riesgo presente. No todos los agentes extintores son adecuados para todos los tipos de fuego: el agua puede ser inadecuada o contraproducente con metales reactivos, ácido sulfúrico concentrado o materiales criogénicos.
            li.d-flex
              i.fas.fa-flask
              p.mb-0 Kits de contención de derrames ubicados estratégicamente dentro y fuera del almacén, con materiales absorbentes compatibles con los tipos de productos almacenados.
            li.d-flex
              i.fas.fa-flask
              p.mb-0 Duchas de emergencia y lavaojos instalados en las proximidades del almacén o dentro de él, con acceso despejado y señalizado.
        
        .col-lg-5.col-10.col-md-8
          img(src="@/assets/curso/Tema1/img09.png")

      .row.justify-content-center.align-items-center.mb-2(data-aos="fade-right")
        .col-lg-10
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 3.
            span Elementos de protección personal para manejo de productos químicos
          img(src='@/assets/curso/Tema1/fig3.png' alt='Trabajador con elementos de protección personal para el manejo de productos químicos que incluye: traje de cuerpo completo desechable, careta facial con protección para la cabeza y guantes.')

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text Hojas de Datos de Seguridad (HDS)
      p.mb-4 Las Hojas de Datos de Seguridad denominadas también Ficha de Datos de Seguridad (FDS) o MSDS por sus siglas en inglés (Material Safety Data Sheet), son documentos técnicos normalizados elaborados por el fabricante o importador del producto que contienen información detallada sobre sus propiedades físicas, químicas y toxicológicas, los peligros que representa, las medidas de primeros auxilios y las instrucciones para su manejo, almacenamiento y eliminación seguros.
      p Conforme al SGA, una HDS completa debe contener 16 secciones estandarizadas. Las más críticas para el proceso de almacenamiento son:

      .row.justify-content-center.align-items-center.mb-2
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 3.
            span Secciones clave de la HDS para el almacenamiento de productos químicos

      .tabla-a.color-primario.mb-4(data-aos="fade-right")
        table
          thead
            tr
              th Sección
              th Contenido relevante para almacenamiento
          tbody
            tr
              td.text-left Sección 2. Identificación de peligros
              td.text-left Clasificación del producto y pictogramas SGA. Base para la zonificación del almacén.
            tr
              td.text-left Sección 7. Manipulación y almacenamiento
              td.text-left Condiciones específicas de temperatura, humedad, contenedores recomendados y restricciones.
            tr
              td.text-left Sección 8. Controles de exposición/EPP
              td.text-left EPP requerido para ingresar al área de almacenamiento.
            tr
              td.text-left Sección 10. Reactividad e inestabilidad
              td.text-left Materiales incompatibles con los que no debe almacenarse el producto.
            tr
              td.text-left Sección 13. Consideraciones de eliminación
              td.text-left Gestión de residuos y recipientes vacíos.

      .cajon.color-primario.p-4.mb-4
        p Las HDS de todos los productos presentes en el almacén deben estar disponibles físicamente en el sitio, actualizadas y accesibles a todos los trabajadores que laboran en el área.

      separador
      #t_1_5.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.5  Emergencias en el almacenamiento

      .row.fila-altura-igual.mb-3
        .col-lg-4
          img(src='@/assets/curso/Tema1/img10.svg' alt='')
        .col-lg-8
          .cajon.color-primario.p-5
            p La gestión de emergencias en sitios de almacenamiento de productos químicos requiere planeación previa, entrenamiento del personal y disponibilidad inmediata de los recursos necesarios para responder. Un accidente sin respuesta coordinada puede escalar rápidamente a una emergencia mayor con consecuencias graves para los trabajadores, las instalaciones y el entorno.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text Plan de emergencias
      p.mb-4 El plan de emergencias del almacén debe definir claramente los procedimientos de actuación ante los escenarios más probables según el tipo de productos almacenados. Debe incluir, como mínimo:

      .row.justify-content-center.mb-2(data-aos="fade-right")
        .col-lg-7
          ul.lista-ul.lista-ul--separador
            li.d-flex
              i.fas.fa-flask
              p.mb-0 Identificación de los escenarios de emergencia posibles (derrames, incendios, explosiones, liberación de gases, intoxicaciones).
            li.d-flex
              i.fas.fa-flask
              p.mb-0 Cadena de llamadas y notificaciones: quién avisa a quién, en qué orden y qué información comunicar.
            li.d-flex
              i.fas.fa-flask
              p.mb-0 Roles y responsabilidades de cada miembro de la brigada de emergencias.
            li.d-flex
              i.fas.fa-flask
              p.mb-0 Procedimientos específicos de evacuación con puntos de encuentro definidos.
            li.d-flex
              i.fas.fa-flask
              p.mb-0 Inventario y ubicación de equipos de emergencia (extintores, kits de derrames, botiquines, EPP de emergencia).
            li.d-flex
              i.fas.fa-flask
              p.mb-0 Procedimiento de notificación a autoridades externas: bomberos, Centro de Información de Seguridad sobre Productos Químicos (CISPROQUIM) y autoridad ambiental.
            li.d-flex
              i.fas.fa-flask
              p.mb-0 Registro y análisis posterior de cada emergencia para aprendizaje organizacional.
        
        .col-lg-5.col-10.col-md-8
          img(src="@/assets/curso/Tema1/img11.png")
      
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text Seguridad contra incendios

      .row.fila-equal.mb-4.bg2
        .col-lg-5.p-0
          img.img-full(src='@/assets/curso/Tema1/img12.png')
        .col-lg-7.bg2.p-4.d-flex
          .contenido-texto
            .row.align-items-center.mb-4
              .col-lg-2.mb-4.col-4.col-md-2
                img(src='@/assets/curso/Tema1/img13.svg')
              .col-lg-12
                p El fuego en un almacén de productos químicos puede progresar rápidamente y generar efectos catastróficos si no se controla de inmediato. La seguridad contraen estos espacios se fundamenta en tres principios: prevención (eliminar o controlar fuentes de ignición y materiales combustibles), detección temprana (sensores y alarmas) y extinción oportuna (equipos adecuados y personal entrenado).

      p La selección del agente extintor es crítica en entornos químicos. La siguiente tabla resume los tipos de extintores y su aplicabilidad:
      
      .row.justify-content-center.align-items-center.mb-2(data-aos="fade-right")
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 4.
            span Tipos de extintores y su aplicabilidad en almacenes químicos
      .tabla-a.color-primario
        table
          thead
            tr
              th Tipo de extintor
              th Clase de fuego
              th Usos / restricciones
          tbody
            tr
              td.text-left Agua
              td.text-left Clase A (sólidos)
              td.text-left No usar en fuegos eléctricos, metales reactivos ni líquidos inflamables.
            tr
              td.text-left Espuma AFFF
              td.text-left Clases A y B
              td.text-left Efectivo en líquidos inflamables (gasolina, diésel, solventes). No apto para metales o fuegos eléctricos.
            tr
              td.text-left CO₂
              td.text-left Clases B y C
              td.text-left Eficaz en equipos eléctricos y líquidos inflamables. No deja residuos.
            tr
              td.text-left Polvo químico ABC
              td.text-left Clases A, B y C
              td.text-left Versátil y multipropósito. Puede dañar equipos. No usar en espacios confinados.
            tr
              td.text-left Agente limpio (Halón sustituto)
              td.text-left B y C
              td.text-left Para equipos sensibles y salas de cómputo. Menor impacto ambiental.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text Primeros auxilios

      p.mb-4 Las emergencias más frecuentes en el manejo de productos químicos que requieren primeros auxilios son: exposición cutánea, exposición ocular, inhalación de vapores o gases y la ingestión accidental. Los principios generales de actuación ante cada uno son:

      .row.mb-2(data-aos="fade-right")
        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-5
                figure
                  img(src='@/assets/curso/Tema1/001.svg', alt='Texto que describa la imagen')
            h4.text-center Exposición cutánea
            p.text-small.mb-0.text-izq Retirar la ropa contaminada y lavar abundantemente la zona afectada con agua fría durante mínimo 15-20 minutos. Cubrir con apósito estéril y trasladar a atención médica.

        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-5
                figure
                  img(src='@/assets/curso/Tema1/003.svg', alt='Texto que describa la imagen')
            h3.text-center Exposición ocular
            p.text-small.mb-0.text-izq Irrigar el ojo afectado con agua limpia o solución salina durante mínimo 15 a 20 minutos, manteniendo los párpados abiertos. No frotar. Trasladar inmediatamente a urgencias.

        .col-sm-6.col-lg-3.mb-4.mb-sm-0
          .tarjeta--boton.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-5
                figure
                  img(src='@/assets/curso/Tema1/004.svg', alt='Texto que describa la imagen')
            h3.text-center Inhalación
            p.text-small.mb-0.text-izq Retirar a la persona afectada hacia una zona ventilada de inmediato. Si hay inconsciencia o dificultad respiratoria, llamar a servicios de emergencia y aplicar RCP si está capacitado para ello.
        
        .col-sm-6.col-lg-3.mb-4.mb-sm-0
          .tarjeta--boton.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-5
                figure
                  img(src='@/assets/curso/Tema1/005.svg', alt='Texto que describa la imagen')
            h3.text-center Ingestión accidental 
            p.text-small.mb-0.text-izq No inducir el vómito a menos que la HDS lo indique explícitamente. Llamar a la línea de toxicología o servicios de emergencia y proporcionar la HDS del producto al personal médico.

      p Para profundizar sobre la aplicación práctica de los protocolos de atención integral a víctimas de exposición química en situaciones reales de emergencia, se recomienda explorar el siguiente video: 

      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")         
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/GweipfeInM8 " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Atención integral de urgencias a víctimas de ataque con agentes químicos

      .cajon.color-primario.p-4(data-aos="fade-right")
        p #[b Nota:] ante cualquier emergencia con productos químicos, la Hoja de Datos de Seguridad (Sección 4, primeros auxilios) es la fuente primaria de instrucciones específicas para cada producto. Siempre debe estar disponible en el sitio de almacenamiento y de uso.





































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
