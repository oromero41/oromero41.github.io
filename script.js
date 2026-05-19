// === script.js (FIXED) ===

// Helper seguro (no revienta si falta un elemento)
const setHTML = (sel, val) => { const el = document.querySelector(sel); if (el) el.innerHTML = val; };
const setText = (sel, val) => { const el = document.querySelector(sel); if (el) el.textContent = val; };

const translations = {
  en: {
    aboutTitle: "About Me",
    aboutText: "I’m a technology professional with over 10 years of experience working in real-world IT environments, including customer operations, technical support, and digital platforms used at scale.\n\nMy background in global tech companies has given me a strong understanding of users, systems, processes, and the realities of production environments — beyond just tools or code.\n\nI’m currently completing my BSc (Hons) in Computing and developing practical projects to deepen my understanding of software fundamentals, web systems, and security concepts. I’m motivated to keep growing within the technology field by contributing to reliable digital products and learning from experienced teams.",
    projectsTitle: "Featured Projects",
    expTitle: "Experience",
    eduTitle: "Education & Certifications",
    contactTitle: "Contact Me",
    contactText: `📍 São Paulo – SP | Remote or Hybrid.`,
    heroGreeting: "Hi, I’m <span class='highlight'>Oscar</span>",
    heroTitle: "Technology Professional |<span class='accent'> IT, Systems & Digital Platforms</span>",
    heroSubtitle: "Experience across technology operations, digital platforms, and system support in real-world production environments.",
    viewWork: "ABOUT ME",
    flag: "https://flagcdn.com/w20/gb.png",
    code: "EN",
    navAbout: "About",
    navProjects: "Projects",
    navExperience: "Experience",
    navEducation: "Education",
    navContact: "Contact",
    projBookworm: "Business Systems Analysis",
    projBattle: "Full-stack Tournament Platform",
    projIntellect: "Wellness Mini Website",
    projBotium: "Cybersecurity Audit",
    projBattleDesc: "A full-stack tournament platform built with PHP, MySQL, HTML & JS.",
    projIntellectDesc: "A five-page HTML/CSS website encouraging creativity, exploration, and physical activity.",
    projBookwormDesc: "Systems Analysis & Design case study for a national UK book retailer.",
    projBotiumDesc: "Security audit assessment reviewing controls, risks and compliance gaps.",
    exp1Title: "2023 – 2025 • Motorsport Events",
    exp1Role: "Account Operations Specialist",
    exp1Text: "Managed CRM workflows, order allocation and supplier coordination for F1 and MotoGP events. Built dashboards, secured VIP client operations, and supported internal systems.",
    expTitle: "Experience",
    exp2Title: "2022 – 2023 • Motorsport Events",
    exp2Role: "Customer Success Executive",
    exp2Text: "Solved complex customer cases, processed B2B ticketing, managed order issues and supported sales teams across major events worldwide.",
    exp3Title: "2019 – 2020 • Google / HCL Technologies",
    exp3Role: "Product Support Engineer",
    exp3Text: "Provided technical troubleshooting for Google products, APIs and internal tooling. Handled escalations and supported engineers with logs, diagnostics and product behaviour.",
    exp4Title: "2018 – 2019 • Fujitsu",
    exp4Role: "Help Desk Analyst (L1 / L2)",
    exp4Text: "Supported 30k+ end users across Europe, diagnosing incidents, access issues, network faults and hardware/software problems.",
    exp5Title: "2017 – 2018 • Instagram / Cognizant",
    exp5Role: "Content Analyst",
    exp5Text: "Analysed content moderation cases, detected behavioural patterns, performed compliance checks and conducted policy investigations.",
    exp6Title: "2015 – 2016 • Meta / Atento",
    exp6Role: "Ads Management Specialist",
    exp6Text: "Supported Meta advertisers with campaign optimisation, billing issues, pixel troubleshooting and platform policy guidance.",
    exp7Title: "2014 – 2015 • Google / Cognizant",
    exp7Role: "Google Ads Specialist",
    exp7Text: "Managed Google Ads optimisation, keyword diagnostics, account audits and advertiser onboarding.",
    eduTitle: "Education & Certifications",
    eduUniTag: "University Degree",
    eduUniTitle: "🎓 Arden University – BSc (Hons) Computing",
    eduUniText: "Undergraduate degree covering software engineering, databases, systems design and professional practice.",
    eduUniBtn: "See details",
    eduCapitaTag: "Professional Course",
    eduCapitaTitle: "💻 Capita – Software Developer Bootcamp",
    eduCapitaText: "Intensive bootcamp in Python programming, database fundamentals and applied software development.",
    eduCapitaBtn: "See details",
    eduFiapTag: "Professional Course",
    eduFiapTitle: "☕ FIAP – Java Xpert (Full Stack Development)",
    eduFiapText: "Full-stack training focused on Java, OOP, APIs, databases and web development.",
    eduFiapBtn: "See details",
    eduIUTARTag: "University Degree",
    eduIUTARTitle: "🏫 IUTAR – Higher National Diploma in Computer Science",
    eduIUTARText: "Three-year diploma in core computing, systems and information technology.",
    eduIUTARBtn: "See details",
    contactTitle: "Contact Me",
    mNavAbout: "About",
    mNavProjects: "Projects",
    mNavExperience: "Experience",
    mNavEducation: "Education",
    mNavContact: "Contact",















    // Texto de los Modal
    modalBattleTitle: "Battle of the Living Room",

    modalBattleText: `
    <strong>Battle of the Living Room</strong> is a full-stack browser-based 
    tournament system built entirely with raw HTML, CSS, JavaScript, PHP and MySQL.<br><br>

    It includes:<br>
    • Dynamic fixture generation<br>
    • Editable match results<br>
    • Automatic ranking logic<br>
    • Full CRUD system<br>
    • Hidden admin dashboard<br><br>

    This project showcases end-to-end development: backend logic, database design, 
    state handling, and deployment on a live server.
    `,

    modalBattleLive: "🌐 Live Project",
    modalBattleAdmin: "🔧 Live Admin Panel",


    modalIntellectTitle: "IntellectQuests – Wellness Mini Website",

    modalIntellectDesc: `
    <strong>IntellectQuests</strong> is a five-page HTML & CSS wellness-themed website 
    I built in my first year of the BSc (Hons) Computing degree.  
    The goal was to design a clean, accessible site that encourages users to explore 
    new interests and stay mentally and physically active.
    `,

    modalIntellectFeaturesTitle: "✨ Key Features",
    modalIntellectFeatures: [
      "Five fully written pages with original content.",
      "Responsive navigation and layout.",
      "Custom wellness-themed visuals and structure.",
      "Hand-coded using pure HTML & CSS (no templates)."
    ],

    modalIntellectSkillsTitle: "🧠 Skills Demonstrated",
    modalIntellectSkills: [
      "Front-end development (HTML/CSS)",
      "Wireframing & user personas",
      "Accessibility & usability basics"
    ],

    modalIntellectLive: "🌐 Live Project",





    modalBookTitle: "BookWorm Lounge – Systems Analysis & Design",

    modalBookDesc: `
    A complete business systems analysis project developed in Year 2 of the 
    BSc (Hons) Computing degree.  
    The case study focused on <strong>BookWorm Lounge (BWL)</strong>, a national book 
    retailer seeking to improve its stock ordering and workflow processes.
    `,

    modalBookListTitle: "📘 Project Deliverables",
    modalBookList: [
      "Business environment & current system review",
      "Selection of an appropriate SDLC model",
      "Functional & non-functional requirements",
      "Constraints & compliance considerations",
      "Level 0–2 Data Flow Diagrams (DFDs)",
      "Use cases for logistics and sales teams",
      "Implementation & communication strategy"
    ],

    modalBookSummary: `
    This project demonstrates applied systems thinking and professional-grade documentation.
    `,

    modalBookLink: "📄 Open Full PDF",




    modalBotiumTitle: "Controls & Compliance – Botium Toys",

    modalBotiumDesc: `
    A concise cybersecurity assessment completed as part of a practical audit 
    simulation for <strong>Botium Toys</strong>.  
    The task focused on reviewing existing controls, identifying compliance gaps, 
    and recommending realistic security improvements.
    `,

    modalBotiumList: [
      "Review of current security & access controls",
      "Data protection & policy assessment",
      "Compliance-based gap analysis",
      "Actionable security recommendations"
    ],

    modalBotiumSummary: `
    Key recommendations included stronger access control, encryption of 
    sensitive data, centralised credential management, IDS deployment, and 
    disaster recovery planning.
    `,

    modalBotiumLink1: "📁 Assessment Questions (PDF)",
    modalBotiumLink2: "📝 Completed Answers (PDF)",




    modalArdenTitle: "Arden University – BSc (Hons) Computing",
    modalArdenText1: `
    I am currently completing my final year of the 
    <strong>BSc (Hons) Computing</strong> programme at Arden University.  
    The degree provides a comprehensive foundation in modern computing principles,
    covering software development, systems design, databases and IT management.
    `,
    modalArdenText2: `Throughout the programme, I have developed practical and academic experience in:`,

    modalArdenList: [
      "Software engineering and object-oriented development",
      "Database design, SQL and information systems",
      "Systems analysis, modelling and documentation",
      "Cybersecurity fundamentals and risk awareness",
      "Cloud services, professional practice and IT operations"
    ],

    modalArdenFooter: "🎓 Degree in progress — documentation available upon request.",




    modalCapitaTitle: "Capita – Software Developer Bootcamp",
    modalCapitaDesc: `
    A hands-on <strong>Software Developer Bootcamp</strong> completed with Capita,
    focused on core programming principles, problem solving and modern development practices.
    The programme combined structured lessons with practical exercises and project-based learning.
    `,
    modalCapitaListTitle: "Key areas covered:",
    modalCapitaList: [
      "Python fundamentals and scripting",
      "Object-oriented programming (OOP)",
      "Data structures, logic and debugging",
      "Database basics and SQL operations",
      "APIs, JSON and working with real data",
      "Software development practices and documentation"
    ],
    modalCapitaSummary: "The bootcamp concluded with a graded assessment (Level 3), demonstrating proficiency in core software development concepts.",
    modalCapitaNote: "Digital copy available upon request.",



    modalFiapTitle: "FIAP – Java Xpert (Full Stack Development)",
    modalFiapDesc: `
    A professional training programme completed with <strong>FIAP (Brazil)</strong>,
    focused on modern full-stack development using Java as the core backend technology.
    The course covered both fundamental and applied programming skills used in real-world software projects.
    `,
    modalFiapListTitle: "Main topics covered:",
    modalFiapList: [
      "Java syntax, OOP principles and code architecture",
      "REST APIs and backend service development",
      "Database design and SQL (MySQL/PostgreSQL)",
      "Frontend fundamentals (HTML, CSS, JS)",
      "Full Stack integration and API consumption",
      "Practical exercises and real coding challenges"
    ],
    modalFiapSummary: "This certification strengthened my foundation in backend engineering and full-stack development, complementing my academic studies and hands-on projects.",
    modalFiapLink: "📄 View Certificate (FIAP Official)",



    modalIutarTitle: "IUTAR – Higher National Diploma in Computer Science",
    modalIutarDesc1: `
    A three-year diploma programme focused on computing fundamentals,
    systems operations, networking basics, programming logic and
    information technology principles.
    `,
    modalIutarDesc2: `
    This diploma provided the foundation for my career in technology,
    covering core modules that later supported my work in IT operations,
    software development and Computing studies in the UK.
    `,
    modalIutarLink: "📄 Digital diploma available upon request.",





  },
  es: {
    aboutTitle: "Sobre mí",
    aboutText: "Soy un profesional de tecnología con más de 10 años de experiencia trabajando en entornos IT reales, incluyendo operaciones con clientes, soporte técnico y plataformas digitales utilizadas a gran escala.\n\nMi experiencia en empresas tecnológicas globales me ha dado una comprensión sólida de los usuarios, los sistemas, los procesos y las realidades de los entornos de producción, más allá de las herramientas o el código.\n\nActualmente estoy cursando el BSc (Hons) en Computing y desarrollando proyectos prácticos para profundizar mis conocimientos en fundamentos de software, sistemas web y conceptos de seguridad. Estoy motivado a seguir creciendo dentro del área tecnológica, contribuyendo a productos digitales confiables y aprendiendo de equipos con experiencia.",
    projectsTitle: "Proyectos Destacados",
    expTitle: "Experiencia",
    eduTitle: "Educación y Certificaciones",
    contactTitle: "Contáctame",
    contactText: `📍 São Paulo – SP | Remoto o Híbrido.`,
    heroGreeting: "Hola, soy <span class='highlight'>Oscar</span>",
    heroTitle: "Profesional de Tecnología |<span class='accent'> IT, Sistemas y Plataformas Digitales</span>",
    heroSubtitle: "Experiencia en operaciones tecnológicas, plataformas digitales y soporte de sistemas en entornos de producción reales.",
    viewWork: "SOBRE MÍ",
    flag: "https://flagcdn.com/w20/ve.png",
    code: "ES",
    navAbout: "Sobre mí",
    navProjects: "Proyectos",
    navExperience: "Experiencia",
    navEducation: "Educación",
    navContact: "Contacto",
    projBookworm: "Análisis de Sistemas Empresariales",
    projBattle: "Plataforma de Torneos Full-stack",
    projIntellect: "Sitio Web de Bienestar",
    projBotium: "Auditoría de Ciberseguridad",
    projBattleDesc: "Una plataforma de torneos full-stack construida con PHP, MySQL, HTML y JS.",
    projIntellectDesc: "Un sitio web de cinco páginas en HTML/CSS que fomenta la creatividad, la exploración y la actividad física.",
    projBookwormDesc: "Caso de estudio de Análisis y Diseño de Sistemas para una librería nacional del Reino Unido.",
    projBotiumDesc: "Evaluación de auditoría de seguridad revisando controles, riesgos y brechas de cumplimiento.",
    exp1Title: "2023 – 2025 • Motorsport Events",
    exp1Role: "Especialista en Operaciones de Cuentas",
    exp1Text: "Gestioné flujos de trabajo en el CRM, asignación de órdenes y coordinación con proveedores para eventos de F1 y MotoGP. Construí dashboards, aseguré operaciones VIP para clientes y di soporte a los sistemas internos.",
    expTitle: "Experiencia",
    exp2Title: "2022 – 2023 • Motorsport Events",
    exp2Role: "Ejecutivo de Customer Success",
    exp2Text: "Resolví casos complejos de clientes, procesé ticketing B2B, gestioné incidencias de pedidos y apoyé a los equipos de ventas en eventos importantes a nivel mundial.",
    exp3Title: "2019 – 2020 • Google / HCL Technologies",
    exp3Role: "Ingeniero de Soporte de Productos",
    exp3Text: "Brindé soporte técnico para productos de Google, APIs y herramientas internas. Manejé escalaciones y apoyé a ingenieros con registros, diagnósticos y comportamiento del producto.",
    exp4Title: "2018 – 2019 • Fujitsu",
    exp4Role: "Analista de Help Desk (L1 / L2)",
    exp4Text: "Brindé soporte a más de 30.000 usuarios en Europa, diagnosticando incidentes, problemas de acceso, fallas de red y problemas de hardware/software.",
    exp5Title: "2017 – 2018 • Instagram / Cognizant",
    exp5Role: "Analista de Contenido",
    exp5Text: "Analicé casos de moderación de contenido, detecté patrones de comportamiento, realicé verificaciones de cumplimiento e investigué casos de políticas internas.",
    exp6Title: "2015 – 2016 • Meta / Atento",
    exp6Role: "Especialista en Gestión de Anuncios",
    exp6Text: "Brindé soporte a anunciantes de Meta con optimización de campañas, problemas de facturación, resolución de fallos del píxel y orientación sobre políticas de la plataforma.",
    exp7Title: "2014 – 2015 • Google / Cognizant",
    exp7Role: "Especialista en Google Ads",
    exp7Text: "Gestioné la optimización de Google Ads, el diagnóstico de palabras clave, auditorías de cuentas y el onboarding de anunciantes.",
    eduTitle: "Educación y Certificaciones",
    eduUniTag: "Título Universitario",
    eduUniTitle: "🎓 Arden University – BSc (Hons) Computing",
    eduUniText: "Grado universitario que cubre ingeniería de software, bases de datos, diseño de sistemas y práctica profesional.",
    eduUniBtn: "Ver detalles",
    eduCapitaTag: "Curso Profesional",
    eduCapitaTitle: "💻 Capita – Bootcamp de Desarrollo de Software",
    eduCapitaText: "Bootcamp intensivo en programación con Python, fundamentos de bases de datos y desarrollo de software aplicado.",
    eduCapitaBtn: "Ver detalles",
    eduFiapTag: "Curso Profesional",
    eduFiapTitle: "☕ FIAP – Java Xpert (Desarrollo Full Stack)",
    eduFiapText: "Formación full-stack enfocada en Java, POO, APIs, bases de datos y desarrollo web.",
    eduFiapBtn: "Ver detalles",
    eduIUTARTag: "Título Universitario",
    eduIUTARTitle: "🏫 IUTAR – Técnico Superior en Informática",
    eduIUTARText: "Diplomado de tres años en computación, sistemas y tecnologías de la información.",
    eduIUTARBtn: "Ver detalles",
    contactTitle: "Contáctame",
    mNavAbout: "Sobre mí",
    mNavProjects: "Proyectos",
    mNavExperience: "Experiencia",
    mNavEducation: "Educación",
    mNavContact: "Contacto",
    








    // Texto de los Modal
    modalBattleTitle: "Battle of the Living Room",

    modalBattleText: `
    <strong>Battle of the Living Room</strong> es un sistema de torneos 
    full-stack basado en navegador, construido completamente con HTML, CSS, 
    JavaScript, PHP y MySQL.<br><br>

    Incluye:<br>
    • Generación dinámica de fixtures<br>
    • Edición de resultados de partidos<br>
    • Lógica automática de ranking<br>
    • Sistema completo CRUD<br>
    • Panel de administración oculto<br><br>

    Este proyecto demuestra desarrollo end-to-end: lógica backend, diseño de base 
    de datos, gestión de estado y despliegue en un servidor real.
    `,

    modalBattleLive: "🌐 Proyecto en Vivo",
    modalBattleAdmin: "🔧 Panel Admin en Vivo",




    modalIntellectTitle: "IntellectQuests – Sitio Web de Bienestar",

    modalIntellectDesc: `
    <strong>IntellectQuests</strong> es un sitio web de bienestar de cinco páginas 
    creado completamente con HTML y CSS durante mi primer año del grado BSc (Hons) Computing.  
    El objetivo fue diseñar un sitio limpio, accesible y que motive a los usuarios a descubrir 
    nuevos intereses y mantenerse activos física y mentalmente.
    `,

    modalIntellectFeaturesTitle: "✨ Características Principales",
    modalIntellectFeatures: [
      "Cinco páginas completas con contenido original.",
      "Navegación y diseño responsive.",
      "Visuales temáticos de bienestar creados a medida.",
      "Código hecho a mano usando sólo HTML y CSS (sin plantillas)."
    ],

    modalIntellectSkillsTitle: "🧠 Habilidades Demostradas",
    modalIntellectSkills: [
      "Desarrollo front-end (HTML/CSS)",
      "Wireframing y creación de user personas",
      "Fundamentos de accesibilidad y usabilidad"
    ],

    modalIntellectLive: "🌐 Proyecto en Vivo",


    modalBookTitle: "BookWorm Lounge – Análisis y Diseño de Sistemas",

    modalBookDesc: `
    Proyecto completo de análisis de sistemas empresariales desarrollado en el 
    segundo año del grado BSc (Hons) Computing.  
    El estudio se centró en <strong>BookWorm Lounge (BWL)</strong>, un minorista nacional 
    de libros que buscaba mejorar su proceso de pedidos y su flujo de trabajo.
    `,

    modalBookListTitle: "📘 Entregables del Proyecto",
    modalBookList: [
      "Análisis del entorno empresarial y revisión del sistema actual",
      "Selección de un modelo SDLC adecuado",
      "Requisitos funcionales y no funcionales",
      "Restricciones y consideraciones de cumplimiento",
      "Diagramas de Flujo de Datos (DFD) Nivel 0–2",
      "Casos de uso para los equipos de logística y ventas",
      "Estrategia de implementación y comunicación"
    ],

    modalBookSummary: `
    Este proyecto demuestra pensamiento sistémico aplicado y documentación de nivel profesional.
    `,

    modalBookLink: "📄 Abrir PDF Completo",



    modalBotiumTitle: "Controles y Cumplimiento – Botium Toys",

    modalBotiumDesc: `
    Evaluación de ciberseguridad realizada como parte de una simulación práctica 
    de auditoría para <strong>Botium Toys</strong>.  
    El trabajo se centró en revisar los controles existentes, identificar brechas 
    de cumplimiento y proponer mejoras realistas de seguridad.
    `,

    modalBotiumList: [
      "Revisión de controles actuales de seguridad y acceso",
      "Evaluación de protección de datos y políticas internas",
      "Análisis de brechas basado en estándares de cumplimiento",
      "Recomendaciones prácticas de seguridad"
    ],

    modalBotiumSummary: `
    Las recomendaciones clave incluyeron controles de acceso más estrictos, 
    cifrado de datos sensibles, gestión centralizada de credenciales, 
    implementación de IDS y planificación de recuperación ante desastres.
    `,

    modalBotiumLink1: "📁 Preguntas de la Evaluación (PDF)",
    modalBotiumLink2: "📝 Respuestas Completadas (PDF)",



    modalArdenTitle: "Arden University – BSc (Hons) Computing",
    modalArdenText1: `
    Actualmente estoy completando mi último año del programa 
    <strong>BSc (Hons) Computing</strong> en Arden University.  
    El grado ofrece una base completa en los principios modernos de la computación,
    cubriendo desarrollo de software, diseño de sistemas, bases de datos y gestión de TI.
    `,
    modalArdenText2: `A lo largo del programa he desarrollado experiencia práctica y académica en:`,

    modalArdenList: [
      "Ingeniería de software y desarrollo orientado a objetos",
      "Diseño de bases de datos, SQL y sistemas de información",
      "Análisis de sistemas, modelado y documentación",
      "Fundamentos de ciberseguridad y conciencia de riesgos",
      "Servicios en la nube, práctica profesional y operaciones de TI"
    ],

    modalArdenFooter: "🎓 Grado en curso — documentación disponible bajo solicitud.",



    modalCapitaTitle: "Capita – Bootcamp de Desarrollo de Software",
    modalCapitaDesc: `
    Bootcamp práctico de <strong>Desarrollo de Software</strong> realizado con Capita,
    centrado en fundamentos de programación, resolución de problemas y prácticas modernas de desarrollo.
    El programa combinó clases guiadas con ejercicios prácticos y proyectos reales.
    `,
    modalCapitaListTitle: "Áreas clave cubiertas:",
    modalCapitaList: [
      "Fundamentos de Python y scripting",
      "Programación orientada a objetos (POO)",
      "Estructuras de datos, lógica y depuración",
      "Fundamentos de bases de datos y operaciones SQL",
      "APIs, JSON y uso de datos reales",
      "Prácticas de desarrollo de software y documentación"
    ],
    modalCapitaSummary: "El bootcamp finalizó con una evaluación calificada (Nivel 3), demostrando dominio de los conceptos esenciales del desarrollo de software.",
    modalCapitaNote: "Copia digital disponible bajo solicitud.",




    modalFiapTitle: "FIAP – Java Xpert (Desarrollo Full Stack)",
    modalFiapDesc: `
    Programa profesional completado con <strong>FIAP (Brasil)</strong>,
    centrado en desarrollo full-stack moderno utilizando Java como tecnología principal de backend.
    El curso abarcó habilidades fundamentales y prácticas aplicadas usadas en proyectos reales.
    `,
    modalFiapListTitle: "Temas principales cubiertos:",
    modalFiapList: [
      "Sintaxis de Java, POO y arquitectura de código",
      "REST APIs y desarrollo de servicios backend",
      "Diseño de bases de datos y SQL (MySQL/PostgreSQL)",
      "Fundamentos de frontend (HTML, CSS, JS)",
      "Integración Full Stack y consumo de APIs",
      "Ejercicios prácticos y desafíos reales de programación"
    ],
    modalFiapSummary: "Esta certificación fortaleció mi base en ingeniería backend y desarrollo full-stack, complementando mis estudios académicos y proyectos prácticos.",
    modalFiapLink: "📄 Ver Certificado (FIAP Oficial)",




    modalIutarTitle: "IUTAR – Técnico Superior en Informática",
    modalIutarDesc1: `
    Programa de tres años enfocado en fundamentos de computación,
    operación de sistemas, conceptos de redes, lógica de programación
    y principios de tecnología de la información.
    `,
    modalIutarDesc2: `
    Este diploma sentó las bases de mi carrera en tecnología,
    cubriendo módulos esenciales que luego apoyaron mi trabajo
    en operaciones de TI, desarrollo de software y estudios de Computing en el Reino Unido.
    `,
    modalIutarLink: "📄 Diploma digital disponible bajo solicitud.",






  },
  pt: {
    aboutTitle: "Sobre mim",
    aboutText: "Sou um profissional de tecnologia com mais de 10 anos de experiência atuando em ambientes de TI do mundo real, incluindo operações com clientes, suporte técnico e plataformas digitais utilizadas em larga escala.\n\nMinha trajetória em empresas globais de tecnologia me proporcionou uma compreensão sólida de usuários, sistemas, processos e das realidades de ambientes de produção, indo além de ferramentas ou código.\n\nAtualmente curso o Bacharelado (BSc Hons) em Computing e desenvolvo projetos práticos para aprofundar meus conhecimentos em fundamentos de software, sistemas web e conceitos de segurança. Sou motivado a continuar evoluindo na área de tecnologia, contribuindo para produtos digitais confiáveis e aprendendo com equipes experientes.",
    projectsTitle: "Projetos em Destaque",
    expTitle: "Experiência",
    eduTitle: "Educação e Certificações",
    contactTitle: "Contato",
    contactText: `📍 São Paulo – SP | Remoto ou Híbrido.`,
    heroGreeting: "Olá, eu sou <span class='highlight'>Oscar</span>",
    heroTitle: "Profissional de Tecnologia |<span class='accent'> TI, Sistemas e Plataformas Digitais</span>",
    heroSubtitle: "Experiência em operações de tecnologia, plataformas digitais e suporte a sistemas em ambientes reais de produção.",
    viewWork: "SOBRE MIM",
    flag: "https://flagcdn.com/w20/br.png",
    code: "PT",
    navAbout: "Sobre mim",
    navProjects: "Projetos",
    navExperience: "Experiência",
    navEducation: "Educação",
    navContact: "Contato",
    projBookworm: "Análise de Sistemas Empresariais",
    projBattle: "Plataforma de Torneios Full-stack",
    projIntellect: "Site de Bem-Estar",
    projBotium: "Auditoria de Cibersegurança",
    projBattleDesc: "Uma plataforma de torneios full-stack desenvolvida com PHP, MySQL, HTML e JS.",
    projIntellectDesc: "Um site de cinco páginas em HTML/CSS que incentiva criatividade, exploração e atividade física.",
    projBookwormDesc: "Estudo de caso de Análise e Design de Sistemas para uma livraria nacional do Reino Unido.",
    projBotiumDesc: "Avaliação de auditoria de segurança analisando controles, riscos e lacunas de conformidade.",
    exp1Title: "2023 – 2025 • Motorsport Events",
    exp1Role: "Especialista em Operações de Contas",
    exp1Text: "Gerenciei fluxos de trabalho no CRM, alocação de pedidos e coordenação com fornecedores para eventos de F1 e MotoGP. Desenvolvi dashboards, garanti operações VIP para clientes e dei suporte aos sistemas internos.",
    expTitle: "Experiência",
    exp2Title: "2022 – 2023 • Motorsport Events",
    exp2Role: "Executivo de Customer Success",
    exp2Text: "Resolvi casos complexos de clientes, processei ticketing B2B, gerenciei problemas de pedidos e dei suporte às equipes de vendas em grandes eventos ao redor do mundo.",
    exp3Title: "2019 – 2020 • Google / HCL Technologies",
    exp3Role: "Engenheiro de Suporte de Produtos",
    exp3Text: "Forneci troubleshooting técnico para produtos do Google, APIs e ferramentas internas. Tratei escalonamentos e apoiei engenheiros com logs, diagnósticos e comportamento dos produtos.",
    exp4Title: "2018 – 2019 • Fujitsu",
    exp4Role: "Analista de Help Desk (L1 / L2)",
    exp4Text: "Dei suporte a mais de 30 mil usuários em toda a Europa, diagnosticando incidentes, problemas de acesso, falhas de rede e problemas de hardware/software.",
    exp5Title: "2017 – 2018 • Instagram / Cognizant",
    exp5Role: "Analista de Conteúdo",
    exp5Text: "Analisei casos de moderação de conteúdo, identifiquei padrões de comportamento, realizei verificações de conformidade e investigações de políticas.",
    exp6Title: "2015 – 2016 • Meta / Atento",
    exp6Role: "Especialista em Gestão de Anúncios",
    exp6Text: "Dei suporte a anunciantes da Meta com otimização de campanhas, problemas de faturamento, troubleshooting do pixel e orientações sobre políticas da plataforma.",
    exp7Title: "2014 – 2015 • Google / Cognizant",
    exp7Role: "Especialista em Google Ads",
    exp7Text: "Gerenciei otimização do Google Ads, diagnóstico de palavras-chave, auditorias de contas e onboarding de anunciantes.",
    eduTitle: "Educação e Certificações",
    eduUniTag: "Graduação Universitária",
    eduUniTitle: "🎓 Arden University – BSc (Hons) Computing",
    eduUniText: "Graduação que inclui engenharia de software, bancos de dados, design de sistemas e prática profissional.",
    eduUniBtn: "Ver detalhes",
    eduCapitaTag: "Curso Profissionalizante",
    eduCapitaTitle: "💻 Capita – Bootcamp de Desenvolvimento de Software",
    eduCapitaText: "Bootcamp intensivo em programação Python, fundamentos de banco de dados e desenvolvimento de software aplicado.",
    eduCapitaBtn: "Ver detalhes",
    eduFiapTag: "Curso Profissionalizante",
    eduFiapTitle: "☕ FIAP – Java Xpert (Desenvolvimento Full Stack)",
    eduFiapText: "Formação full-stack focada em Java, POO, APIs, bancos de dados e desenvolvimento web.",
    eduFiapBtn: "Ver detalhes",
    eduIUTARTag: "Formação Universitária",
    eduIUTARTitle: "🏫 IUTAR – Tecnólogo em Informática",
    eduIUTARText: "Diploma de três anos em computação, sistemas e tecnologia da informação.",
    eduIUTARBtn: "Ver detalhes",
    contactTitle: "Contato",
    mNavAbout: "Sobre mim",
    mNavProjects: "Projetos",
    mNavExperience: "Experiência",
    mNavEducation: "Educação",
    mNavContact: "Contato",














    // Texto de los Modal
    modalBattleTitle: "Battle of the Living Room",

    modalBattleText: `
    <strong>Battle of the Living Room</strong> é um sistema de torneios full-stack 
    baseado em navegador, construído inteiramente com HTML, CSS, JavaScript, PHP e MySQL.<br><br>

    Inclui:<br>
    • Geração dinâmica de partidas<br>
    • Edição de resultados<br>
    • Lógica automática de ranking<br>
    • Sistema completo CRUD<br>
    • Painel administrativo oculto<br><br>

    Este projeto demonstra desenvolvimento end-to-end: lógica backend, design de 
    banco de dados, gestão de estado e deploy em servidor real.
    `,

    modalBattleLive: "🌐 Projeto Online",
    modalBattleAdmin: "🔧 Painel Admin Online",





    modalIntellectTitle: "IntellectQuests – Website de Bem-Estar",

    modalIntellectDesc: `
    <strong>IntellectQuests</strong> é um website de bem-estar com cinco páginas 
    feito totalmente em HTML e CSS no meu primeiro ano do curso BSc (Hons) Computing.  
    O objetivo foi criar um site limpo, acessível e que incentive os usuários a explorar 
    novos interesses e manter-se ativos mental e fisicamente.
    `,

    modalIntellectFeaturesTitle: "✨ Principais Funcionalidades",
    modalIntellectFeatures: [
      "Cinco páginas completas com conteúdo original.",
      "Navegação e layout responsivo.",
      "Visuais temáticos de bem-estar criados manualmente.",
      "Código escrito à mão usando apenas HTML e CSS (sem templates)."
    ],

    modalIntellectSkillsTitle: "🧠 Competências Demonstradas",
    modalIntellectSkills: [
      "Desenvolvimento front-end (HTML/CSS)",
      "Wireframing e criação de user personas",
      "Fundamentos de acessibilidade e usabilidade"
    ],

    modalIntellectLive: "🌐 Projeto Online",


    modalBookTitle: "BookWorm Lounge – Análise e Design de Sistemas",

    modalBookDesc: `
    Projeto completo de análise de sistemas empresariais desenvolvido no 
    segundo ano do curso BSc (Hons) Computing.  
    O estudo teve como foco a <strong>BookWorm Lounge (BWL)</strong>, uma livraria nacional 
    que buscava melhorar seu processo de pedidos e fluxo de trabalho.
    `,

    modalBookListTitle: "📘 Entregáveis do Projeto",
    modalBookList: [
      "Análise do ambiente de negócios e revisão do sistema atual",
      "Seleção de um modelo SDLC adequado",
      "Requisitos funcionais e não funcionais",
      "Restrições e considerações de conformidade",
      "Diagramas de Fluxo de Dados (DFD) Nível 0–2",
      "Casos de uso para equipes de logística e vendas",
      "Estratégia de implementação e comunicação"
    ],

    modalBookSummary: `
    Este projeto demonstra pensamento sistêmico aplicado e documentação em nível profissional.
    `,

    modalBookLink: "📄 Abrir PDF Completo",





    modalBotiumTitle: "Controles e Conformidade – Botium Toys",

    modalBotiumDesc: `
    Avaliação de cibersegurança realizada como parte de uma simulação prática 
    de auditoria para a <strong>Botium Toys</strong>.  
    O trabalho focou na revisão dos controles existentes, identificação de 
    lacunas de conformidade e recomendação de melhorias de segurança realistas.
    `,

    modalBotiumList: [
      "Revisão dos controles atuais de segurança e acesso",
      "Avaliação de proteção de dados e políticas internas",
      "Análise de lacunas baseada em padrões de conformidade",
      "Recomendações práticas de segurança"
    ],

    modalBotiumSummary: `
    As recomendações incluíram controles de acesso mais rígidos, criptografia de 
    dados sensíveis, gestão centralizada de credenciais, implantação de IDS e 
    planejamento de recuperação de desastres.
    `,

    modalBotiumLink1: "📁 Perguntas da Avaliação (PDF)",
    modalBotiumLink2: "📝 Respostas Completas (PDF)",



    modalArdenTitle: "Arden University – BSc (Hons) Computing",
    modalArdenText1: `
    Atualmente estou concluindo meu último ano do programa 
    <strong>BSc (Hons) Computing</strong> na Arden University.  
    O curso oferece uma base completa em princípios modernos de computação,
    abrangendo desenvolvimento de software, design de sistemas, bancos de dados e gestão de TI.
    `,
    modalArdenText2: `Ao longo do programa desenvolvi experiência prática e acadêmica em:`,

    modalArdenList: [
      "Engenharia de software e desenvolvimento orientado a objetos",
      "Design de banco de dados, SQL e sistemas de informação",
      "Análise de sistemas, modelagem e documentação",
      "Fundamentos de cibersegurança e conscientização sobre riscos",
      "Serviços em nuvem, prática profissional e operações de TI"
    ],

    modalArdenFooter: "🎓 Graduação em andamento — documentação disponível sob solicitação.",




    modalCapitaTitle: "Capita – Bootcamp de Desenvolvimento de Software",
    modalCapitaDesc: `
    Bootcamp prático de <strong>Desenvolvimento de Software</strong> realizado com a Capita,
    focado em princípios de programação, resolução de problemas e práticas modernas de desenvolvimento.
    O programa combinou aulas estruturadas com exercícios práticos e projetos reais.
    `,
    modalCapitaListTitle: "Principais áreas estudadas:",
    modalCapitaList: [
      "Fundamentos de Python e scripting",
      "Programação orientada a objetos (POO)",
      "Estruturas de dados, lógica e debugging",
      "Conceitos básicos de banco de dados e SQL",
      "APIs, JSON e trabalho com dados reais",
      "Práticas de desenvolvimento de software e documentação"
    ],
    modalCapitaSummary: "O bootcamp foi concluído com uma avaliação final (Nível 3), demonstrando domínio dos conceitos essenciais de desenvolvimento de software.",
    modalCapitaNote: "Cópia digital disponível mediante solicitação.",



    modalFiapTitle: "FIAP – Java Xpert (Desenvolvimento Full Stack)",
    modalFiapDesc: `
    Programa profissional realizado com a <strong>FIAP (Brasil)</strong>,
    focado em desenvolvimento full-stack moderno utilizando Java como tecnologia principal de backend.
    O curso abordou habilidades fundamentais e práticas aplicadas usadas em projetos reais.
    `,
    modalFiapListTitle: "Principais tópicos estudados:",
    modalFiapList: [
      "Sintaxe Java, POO e arquitetura de código",
      "REST APIs e desenvolvimento de serviços backend",
      "Modelagem de banco de dados e SQL (MySQL/PostgreSQL)",
      "Fundamentos de frontend (HTML, CSS, JS)",
      "Integração Full Stack e consumo de APIs",
      "Exercícios práticos e desafios reais de programação"
    ],
    modalFiapSummary: "Esta certificação fortaleceu minha base em engenharia backend e desenvolvimento full-stack, complementando meus estudos acadêmicos e projetos práticos.",
    modalFiapLink: "📄 Ver Certificado (FIAP Oficial)",






    modalIutarTitle: "IUTAR – Tecnólogo Superior em Ciência da Computação",
    modalIutarDesc1: `
    Programa de três anos focado em fundamentos de computação,
    operações de sistemas, conceitos básicos de redes, lógica de programação
    e princípios de tecnologia da informação.
    `,
    modalIutarDesc2: `
    Este diploma serviu como base para minha carreira em tecnologia,
    abrangendo módulos essenciais que mais tarde apoiaram meu trabalho
    em operações de TI, desenvolvimento de software e estudos de Computing no Reino Unido.
    `,
    modalIutarLink: "📄 Diploma digital disponível sob solicitação.",


  },
};

let currentLang = "en";




const buttonTranslations = {
  en: {
    buttonTech: "Access Briefing",
    buttonDoc: "Access Briefing",
    buttonCourse: "View Course",
    buttonUni: "View Degree"
  },
  es: {
    buttonTech: "Ver Proyecto",
    buttonDoc: "Ver Documento",
    buttonCourse: "Ver Curso",
    buttonUni: "Ver Carrera"
  },
  pt: {
    buttonTech: "Ver Projeto",
    buttonDoc: "Ver Documento",
    buttonCourse: "Ver Curso",
    buttonUni: "Ver Graduação"
  }
};




function detectInitialLanguage() {
  const savedLang = localStorage.getItem("lang");
  if (savedLang) return savedLang; // respeta elección manual

  const lang = navigator.language.toLowerCase();

  // Portugués
  if (lang.startsWith("pt")) {
    return "pt";
  }

  // Español (LatAm + España)
  if (lang.startsWith("es")) {
    return "es";
  }

  // Default: inglés
  return "en";
}

document.addEventListener("DOMContentLoaded", () => {
  const initialLang = detectInitialLanguage();
  currentLang = initialLang;
  setLanguage(initialLang);
});






function setLanguage(lang) {
  const t = translations[lang];

  // Textos de seções
  setText("#aboutTitle", t.aboutTitle);
  setHTML("#aboutText", t.aboutText.replace(/\n\n/g, "<br><br>"));  setText("#projectsTitle", t.projectsTitle);
  setText("#expTitle", t.expTitle);
  setText("#eduTitle", t.eduTitle);
  setText("#contactTitle", t.contactTitle);
  setHTML("#contactText", t.contactText);
  setText("#nav-about", t.navAbout);
  setText("#nav-projects", t.navProjects);
  setText("#nav-experience", t.navExperience);
  setText("#nav-education", t.navEducation);
  setText("#nav-contact", t.navContact);
  setText("#proj-bookworm-sub", t.projBookworm);
  setText("#proj-battle-sub", t.projBattle);
  setText("#proj-intellect-sub", t.projIntellect);
  setText("#proj-botium-sub", t.projBotium);
  setText("#proj-battle-desc", t.projBattleDesc);
  setText("#proj-intellect-desc", t.projIntellectDesc);
  setText("#proj-bookworm-desc", t.projBookwormDesc);
  setText("#proj-botium-desc", t.projBotiumDesc);
  setText("#expTitle", t.expTitle);
  setHTML("#exp1Title", t.exp1Title);
  setHTML("#exp1Role", t.exp1Role);
  setHTML("#exp1Text", t.exp1Text);
  setText("#exp2Title", t.exp2Title);
  setText("#exp2Role", t.exp2Role);
  setText("#exp2Text", t.exp2Text);
  setHTML("#exp3Title", t.exp3Title);
  setHTML("#exp3Role", t.exp3Role);
  setHTML("#exp3Text", t.exp3Text);
  setHTML("#exp4Title", t.exp4Title);
  setHTML("#exp4Role", t.exp4Role);
  setHTML("#exp4Text", t.exp4Text);
  setHTML("#exp5Title", t.exp5Title);
  setHTML("#exp5Role", t.exp5Role);
  setHTML("#exp5Text", t.exp5Text);
  setHTML("#exp6Title", t.exp6Title);
  setHTML("#exp6Role", t.exp6Role);
  setHTML("#exp6Text", t.exp6Text);
  setHTML("#exp7Title", t.exp7Title);
  setHTML("#exp7Role", t.exp7Role);
  setHTML("#exp7Text", t.exp7Text);
  setText("#eduTitle", t.eduTitle);
  setText("#edu-uni-tag", t.eduUniTag);
  setHTML("#edu-uni-title", t.eduUniTitle);
  setText("#edu-uni-text", t.eduUniText);
  setText("#edu-uni-btn", t.eduUniBtn);
  setText("#edu-capita-tag", t.eduCapitaTag);
  setHTML("#edu-capita-title", t.eduCapitaTitle);
  setText("#edu-capita-text", t.eduCapitaText);
  setText("#edu-capita-btn", t.eduCapitaBtn);
  setText("#edu-fiap-tag", t.eduFiapTag);
  setHTML("#edu-fiap-title", t.eduFiapTitle);
  setText("#edu-fiap-text", t.eduFiapText);
  setText("#edu-fiap-btn", t.eduFiapBtn);
  setText("#edu-iutar-tag", t.eduIUTARTag);
  setHTML("#edu-iutar-title", t.eduIUTARTitle);
  setText("#edu-iutar-text", t.eduIUTARText);
  setText("#edu-iutar-btn", t.eduIUTARBtn);





  // Textos de los Modal
  setHTML("#modal-battle-title", t.modalBattleTitle);
  setHTML("#modal-battle-text", t.modalBattleText);
  setText("#modal-battle-live", t.modalBattleLive);
  setText("#modal-battle-admin", t.modalBattleAdmin);
  setHTML("#modal-intellect-title", t.modalIntellectTitle);
  setHTML("#modal-intellect-desc", t.modalIntellectDesc);
  setText("#modal-intellect-features-title", t.modalIntellectFeaturesTitle);
  setText("#modal-intellect-skills-title", t.modalIntellectSkillsTitle);
  setText("#modal-intellect-live", t.modalIntellectLive);
  setHTML("#modal-bookworm-title", t.modalBookTitle);
  setHTML("#modal-bookworm-desc", t.modalBookDesc);
  setText("#modal-bookworm-list-title", t.modalBookListTitle);
  setHTML("#modal-bookworm-summary", t.modalBookSummary);
  setText("#modal-bookworm-link", t.modalBookLink);
  setHTML("#modal-botium-title", t.modalBotiumTitle);
  setHTML("#modal-botium-desc", t.modalBotiumDesc);
  setHTML("#modal-botium-summary", t.modalBotiumSummary);





  // Mobile menu
  setText("#mnav-about", t.mNavAbout);
  setText("#mnav-projects", t.mNavProjects);
  setText("#mnav-experience", t.mNavExperience);
  setText("#mnav-education", t.mNavEducation);
  setText("#mnav-contact", t.mNavContact);


  document.getElementById("modal-botium-list").innerHTML =
    t.modalBotiumList.map(item => `<li>${item}</li>`).join("");

  setText("#modal-botium-link1", t.modalBotiumLink1);
  setText("#modal-botium-link2", t.modalBotiumLink2);

  setHTML("#modal-arden-title", t.modalArdenTitle);
  setHTML("#modal-arden-text1", t.modalArdenText1);
  setHTML("#modal-arden-text2", t.modalArdenText2);

  document.getElementById("modal-arden-list").innerHTML =
    t.modalArdenList.map(item => `<li>${item}</li>`).join("");

  setText("#modal-arden-footer", t.modalArdenFooter);


  setHTML("#modal-capita-title", t.modalCapitaTitle);
  setHTML("#modal-capita-desc", t.modalCapitaDesc);
  setText("#modal-capita-list-title", t.modalCapitaListTitle);

  document.getElementById("modal-capita-list").innerHTML =
    t.modalCapitaList.map(item => `<li>${item}</li>`).join("");

  setText("#modal-capita-summary", t.modalCapitaSummary);
  setText("#modal-capita-note", t.modalCapitaNote);

  

  setHTML("#modal-fiap-title", t.modalFiapTitle);
  setHTML("#modal-fiap-desc", t.modalFiapDesc);
  setText("#modal-fiap-list-title", t.modalFiapListTitle);

  document.getElementById("modal-fiap-list").innerHTML =
    t.modalFiapList.map(item => `<li>${item}</li>`).join("");

  setText("#modal-fiap-summary", t.modalFiapSummary);
  setText("#modal-fiap-link", t.modalFiapLink);


  setHTML("#modal-iutar-title", t.modalIutarTitle);
  setHTML("#modal-iutar-desc1", t.modalIutarDesc1);
  setHTML("#modal-iutar-desc2", t.modalIutarDesc2);
  setText("#modal-iutar-link", t.modalIutarLink);





  // lista dinámica
  document.getElementById("modal-bookworm-list").innerHTML =
    t.modalBookList.map(item => `<li>${item}</li>`).join("");


  // listas UL
  const featList = document.getElementById("modal-intellect-features");
  const skillsList = document.getElementById("modal-intellect-skills");
  featList.innerHTML = t.modalIntellectFeatures.map(x => `<li>${x}</li>`).join("");
  skillsList.innerHTML = t.modalIntellectSkills.map(x => `<li>${x}</li>`).join("");











  
  // Hero
  setHTML("#heroGreeting", t.heroGreeting);
  setHTML("#heroTitle", t.heroTitle);   
  setText("#heroSubtitle", t.heroSubtitle);
  setText("#viewWorkBtn", t.viewWork);

  // Bandera y código
  const flag = document.getElementById("current-flag");
  const code = document.getElementById("current-code");
  if (flag) flag.src = t.flag;
  if (code) code.textContent = t.code;

  currentLang = lang;

  // Ocultar idioma actual en el dropdown
  document.querySelectorAll(".lang-options button").forEach((btn) => {
    btn.style.display = btn.dataset.lang === currentLang ? "none" : "flex";
  });

  // Cerrar menú si estaba abierto
  const menu = document.querySelector(".lang-menu");
  if (menu) menu.classList.remove("open");





  

  const b = buttonTranslations[lang];

  // TECH
  document.querySelectorAll(".see-more-btn.tech").forEach(btn => {
    btn.textContent = b.buttonTech;
  });

  // DOC
  document.querySelectorAll(".see-more-btn.doc").forEach(btn => {
    btn.textContent = b.buttonDoc;
  });

  // COURSE
  document.querySelectorAll(".see-more-btn.course").forEach(btn => {
    btn.textContent = b.buttonCourse;
  });

  // UNI
  document.querySelectorAll(".see-more-btn.uni").forEach(btn => {
    btn.textContent = b.buttonUni;
  });


}









// Control del menú
const langMenu = document.querySelector(".lang-menu");
const currentBtn = document.getElementById("current-lang");

if (currentBtn && langMenu) {
  currentBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    langMenu.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!langMenu.contains(e.target)) langMenu.classList.remove("open");
  });

  document.querySelectorAll(".lang-options button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const lang = e.currentTarget.dataset.lang;
        localStorage.setItem("lang", lang);
        currentLang = lang;
      setLanguage(lang);
    });
  });
}



// === Smooth scroll con offset para el header fijo ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      const headerOffset = 80; // altura del header (ajustala si querés más o menos espacio)
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
});





























document.querySelectorAll(".see-more-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const modalID = btn.dataset.modal;
    document.getElementById(modalID).classList.add("active");
  });
});

document.querySelectorAll(".modal-close").forEach(closeBtn => {
  closeBtn.addEventListener("click", () => {
    closeBtn.closest(".modal-overlay").classList.remove("active");
  });
});


















document.getElementById("copy-email").addEventListener("click", () => {
  const email = document.getElementById("email-text").innerText;
  navigator.clipboard.writeText(email);

  const btn = document.getElementById("copy-email");
  btn.innerText = "Copied!";
  setTimeout(() => btn.innerText = "Copy", 1200);
});











// === MOBILE MENU TOGGLE ===
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.style.display =
    mobileMenu.style.display === "flex" ? "none" : "flex";
});






// === CERRAR MODAL EN MOBILE TOCANDO CUALQUIER PARTE ===
document.querySelectorAll(".modal-box").forEach(box => {

  // 1️⃣ Si el usuario toca un link o botón → NO cerrar
  box.querySelectorAll("a, button, li, strong").forEach(el => {
    el.addEventListener("click", e => {
      e.stopPropagation(); // NO deja que cierre
    });
  });

  // 2️⃣ Cualquier otro toque dentro del modal → CERRAR
  box.addEventListener("click", () => {
    const modal = box.closest(".modal-overlay");
    modal.classList.remove("active");
  });
});