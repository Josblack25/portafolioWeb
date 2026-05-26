import { atsWeb, b2bWeb, kinetixWeb } from "../assets/project/index.js";

const proyectos = [
    {
        id: 'fullstack',

        title: 'Sistema de Gestión de Recursos (ERP) ligero',

        descriptionFront: 'Plataforma B2B para la optimización de la cadena de suministro. Permite a la distribuidora gestionar catálogos dinámicos, controlar el inventario en tiempo real y automatizar el ciclo de pedidos.',
        descriptionBack: 'Plataforma B2B para la optimización de la cadena de suministro. Permite a la distribuidora gestionar catálogos dinámicos, controlar el inventario en tiempo real y automatizar el ciclo de pedidos.',

        functionalityFront: [
            'Catalogo de productos disponible.',
            'Generación dinámica de notas de entrega en formato PDF',
            'Sincronización de inventario en tiempo real.',
            'PWA con enfoque mobile-first y optimización de rendimiento',
        ],

        functionalityBack: [
            'Arquitectura multi-rol (Admin, Vendedor, Cliente) con control de acceso basado en middleware',
            'Generación dinámica de notas de entrega en formato PDF',
            'Sincronización de inventario en tiempo real utilizando las capacidades de suscripción de Supabase.',
            'PWA con enfoque mobile-first y optimización de rendimiento',
        ],

        tagsFront: [
            {
                name: 'Next.js'
            },

            {
                name: 'Tailwind CSS,'
            },

        ],

        tagsBack: [

            {
                name: 'Supabase'
            },
            {
                name: 'Autenticación y Middleware'
            }
        ],
        image: b2bWeb,
        source_code_link: "https://github.com/",
    },

    {
        id: 'fullstack',

        title: 'Análisis Inteligente de CV',

        descriptionFront: 'Herramienta de optimización de perfiles profesionales basada en IA. Analiza la compatibilidad entre currículums y vacantes laborales, proporcionando métricas de éxito frente a sistemas de filtrado ATS.',
        descriptionBack: 'Herramienta de optimización de perfiles profesionales basada en IA. Analiza la compatibilidad entre currículums y vacantes laborales, proporcionando métricas de éxito frente a sistemas de filtrado ATS.',

        functionalityFront: [
            'Procesamiento de documentos y extracción de texto.',
            'Análisis de CV con IA (Llama-3b vía Groq) para sugerencias de mejora y palabras clave.',
            'Validación de compatibilidad ATS para maximizar las tasas de contratación.'
        ],
        functionalityBack: [
            'Pipeline de procesamiento de documentos y extracción de texto.',
            'Motor de análisis con IA (Llama-3b vía Groq) para sugerencias de mejora y palabras clave.',
            'Validación de compatibilidad ATS para maximizar las tasas de contratación.'
        ],

        tagsFront: [
            {
                name: 'Angular'
            },
            {
                name: 'Tailwind CSS,'
            },
        ],

        tagsBack: [

            {
                name: 'FastAPI'
            },

            {
                name: 'Supabase'
            },
            {
                name: 'Groq API (IA)'
            }
        ],
        image: atsWeb,
        source_code_link: "https://github.com/",
    },
    {
        id: 'fullstack',

        title: 'Sistemas Kinetix (SaaS de Automatización y CRM)',

        descriptionFront: 'Plataforma SaaS enfocada en la digitalización de negocios mediante la integración de agentes de IA y CRM personalizado. Permite centralizar la atención al cliente de múltiples canales y automatizar el onboarding de nuevos suscriptores.',
        descriptionBack: 'Plataforma SaaS enfocada en la digitalización de negocios mediante la integración de agentes de IA y CRM personalizado. Permite centralizar la atención al cliente de múltiples canales y automatizar el onboarding de nuevos suscriptores.',

        functionalityFront: [
            'Paginas de servicios web e integracion de agentes con IA.',
            'Portal de suscripcion y pagos para nuevos clientes.',
            'Automatizacion de procesos de onboarding.'
        ],
        functionalityBack: [
            'Motor de procesamiento de lenguaje natural para análisis y clasificación de consultas.',
            'Integraciones con servicios de mensajería (WhatsApp, Telegram) y APIs externas.',
            'Motor de análisis con IA (Llama-3b vía Groq) para sugerencias de mejora y palabras clave.',
            'Validación de compatibilidad ATS para maximizar las tasas de contratación.'
        ],

        tagsFront: [
            {
                name: 'Next.js'
            },
            {
                name: 'Tailwind CSS,'
            },
        ],

        tagsBack: [
            {
                name: 'FastAPI'
            },
            {
                name: 'Supabase'
            },
            {
                name: 'Groq API (IA)'
            },
            {
                name: 'N8N'
            },
            {
                name: 'EvolutionApi'
            }
        ],
        image: kinetixWeb,
        source_code_link: "https://github.com/",
    }
]

export default proyectos;