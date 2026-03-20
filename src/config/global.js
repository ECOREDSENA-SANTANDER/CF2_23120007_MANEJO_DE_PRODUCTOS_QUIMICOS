export default {
  global: {
    Name:
      'Almacenamiento, transporte interno y gestión documental de productos químicos',
    Description:
      'Orientado a la gestión segura y documentada de productos químicos, este componente fortalece las competencias para el almacenamiento según criterios de compatibilidad, el transporte interno conforme a procedimientos establecidos y la documentación del proceso dentro del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST) de la organización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Almacenamiento de productos químicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Sitio de almacenamiento',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Operación del sitio de almacenamiento',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Separación y almacenamiento de productos químicos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Condiciones seguras de almacenamiento',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Emergencias en el almacenamiento',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Transporte interno de productos químicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Condiciones del área de manipulación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Condiciones de transporte interno',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Procedimientos de transporte interno',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sistema de gestión y documentación del proceso',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST)',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Obligaciones de los actores del SG-SST',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Documentación del proceso de manipulación',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA2_23120007_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Administradora de Riesgos Laborales (ARL)',
      significado:
        'Entidad que asesora técnicamente en prevención de riesgos laborales y atiende accidentes de trabajo.',
    },
    {
      termino: 'Almacenamiento',
      significado:
        'Acción de guardar productos químicos en condiciones técnicas específicas que garanticen seguridad y trazabilidad.',
    },
    {
      termino: 'Compatibilidad química',
      significado:
        'Capacidad de dos o más sustancias de almacenarse juntas sin generar reacciones peligrosas.',
    },
    {
      termino: 'Cubeto de contención',
      significado:
        'Sistema de barrera física que retiene derrames de productos químicos evitando su dispersión.',
    },
    {
      termino: 'Elementos de Protección Colectiva (EPC)',
      significado:
        'Dispositivos que protegen a todos los trabajadores del área sin requerir acción individual.',
    },
    {
      termino: 'Elementos de Protección Personal (EPP)',
      significado:
        'Equipos o dispositivos que protegen al trabajador de riesgos específicos durante su labor.',
    },
    {
      termino: 'Gas comprimido',
      significado:
        'Gas almacenado a presión en cilindros que requiere condiciones especiales de manipulación y transporte.',
    },
    {
      termino: 'Hoja de Datos de Seguridad (HDS)',
      significado:
        'Documento técnico con información sobre propiedades, peligros y manejo seguro de productos químicos.',
    },
    {
      termino: 'Incompatibilidad química',
      significado:
        'Condición en la que dos sustancias no deben contactar porque generan reacciones violentas o peligrosas.',
    },
    {
      termino: 'Inflamable',
      significado:
        'Sustancia que se enciende fácilmente y mantiene la combustión con facilidad a temperatura ambiente.',
    },
    {
      termino: 'Matriz de compatibilidad',
      significado:
        'Herramienta visual que indica qué grupos de productos químicos pueden almacenarse juntos de forma segura.',
    },
    {
      termino: 'Oxidante',
      significado:
        'Sustancia que favorece la combustión al liberar oxígeno o aceptar electrones en reacciones químicas.',
    },
    {
      termino: 'PEPS',
      significado:
        'Principio de rotación Primero en Entrar, Primero en Salir que evita vencimiento de productos almacenados.',
    },
    {
      termino: 'PHVA',
      significado:
        'Ciclo de mejora continua: Planificar, Hacer, Verificar, Actuar que estructura el sistema de gestión.',
    },
    {
      termino: 'Producto químico peligroso',
      significado:
        'Sustancia que por sus propiedades fisicoquímicas representa riesgos para salud, seguridad o medio ambiente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (2012). Ley 1562 de 2012. Por la cual se modifica el sistema de riesgos laborales y se dictan otras disposiciones en materia de salud ocupacional. Diario Oficial n.º 48488.',
      link: '',
    },
    {
      referencia:
        'Consejo Colombiano de Seguridad. (s.f.). CISPROQUIM - Centro de Información de Seguridad sobre Productos Químicos.',
      link: '',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2015). Decreto 1072 de 2015. Por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo. Diario Oficial n.º 49523.',
      link: '',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2019). Resolución 0312 de 2019. Por la cual se definen los estándares mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo SG-SST.',
      link: '',
    },
    {
      referencia:
        'Naciones Unidas. (2025). Sistema Globalmente Armonizado de Clasificación y Etiquetado de Productos Químicos (SGA) (Rev. 11).',
      link: '',
    },
    {
      referencia:
        'National Research Council. (2011). Prudent Practices in the Laboratory: Handling and Management of Chemical Hazards (Updated Edition). National Academies Press.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje. (2016). Manejo de productos químicos: Sitio de manipulación, transporte interno y sistemas de gestión. Centro de Gestión Industrial.',
      link: '',
    },
  ],

  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Felipe Correa Mahecha',
          cargo: 'Experto técnico',
          centro: 'Centro de Gestión Industrial – Regional Distrito Capital',
        },
        {
          nombre: 'Angélica Varón Quintero',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico – Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
