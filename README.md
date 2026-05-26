# 🌌 Adonis Dev | Portafolio Web Profesional

Bienvenido al repositorio de mi portafolio web personal. Este proyecto está diseñado y desarrollado para presentar mi trayectoria, mis habilidades técnicas y los sistemas reales que he creado. Es una vitrina interactiva y moderna construida con tecnologías de vanguardia como **Next.js**, **React 19**, **TypeScript**, **Tailwind CSS (v4)** y componentes inmersivos 3D utilizando **Three.js**.

> **"De la lógica del servidor a la interactividad en pantalla."**  
> Desarrollo sistemas eficientes, flujos de automatización inteligentes y experiencias de usuario memorables.

---

## 🚀 Tecnologías & Herramientas

Mi stack tecnológico está enfocado en la robustez en el backend, la velocidad e interactividad en el frontend y la optimización de procesos mediante automatizaciones avanzadas y agentes de IA:

*   **Frontend & UI**: ⚛️ React 19, ⚡ Next.js (App Router), 🟦 TypeScript, 🎨 Tailwind CSS (v4)
*   **Visuales & Interactividad 3D**: 🌌 Three.js / React Three Fiber (Efectos de partículas, estrellas e interactividad), 🌀 React Tilt
*   **Backend**: 🐍 Python (FastAPI / Flask), ☁️ Supabase (PostgreSQL, Autenticación segura y comunicación en tiempo real)
*   **Inteligencia Artificial & Automatización**: 🤖 Groq API (Llama-3b), 🔄 n8n (Orquestación de flujos de trabajo inteligentes)
*   **Integraciones & Mensajería**: 💬 EvolutionApi (Automatización y ruteo de WhatsApp/Telegram)
*   **DevOps & Entorno**: 🐳 Docker, Git, Node.js / npm

---

## 💼 Proyectos Destacados

El portafolio expone proyectos complejos a nivel de producción en los cuales he diseñado la arquitectura y desarrollado el código completo:

### 1. 📦 Sistema de Gestión de Recursos (ERP) Ligero
Plataforma B2B para la optimización de la cadena de suministro. Permite a las distribuidoras gestionar catálogos dinámicos, controlar el inventario en tiempo real y automatizar el ciclo de pedidos.
*   **Tecnologías**: `Next.js`, `Tailwind CSS`, `Supabase (PostgreSQL & Realtime)`, `Middleware`.
*   **Características Frontend**:
    *   Enfoque mobile-first y soporte como Progressive Web App (PWA).
    *   Catálogo interactivo con sincronización instantánea.
*   **Características Backend**:
    *   Arquitectura multi-rol (Administrador, Vendedor, Cliente) controlada por middlewares de acceso.
    *   Generación en caliente de notas de entrega y facturas en formato PDF.
    *   Sincronización de inventario reactiva en tiempo real utilizando las capacidades de canales de suscripción de Supabase.

### 2. 📄 Análisis Inteligente de CV (ATS Optimizer)
Herramienta de optimización de perfiles profesionales basada en Inteligencia Artificial. Analiza la compatibilidad entre currículums y vacantes laborales, proporcionando métricas de éxito frente a sistemas de filtrado ATS.
*   **Tecnologías**: `Angular`, `FastAPI`, `Supabase`, `Groq API (Llama-3b)`.
*   **Características Frontend**:
    *   Visualizador y validador intuitivo con carga directa de documentos.
    *   Métricas de compatibilidad con gráficas y sugerencias dinámicas.
*   **Características Backend**:
    *   Pipeline optimizado de carga, extracción y preprocesamiento de texto desde documentos PDF.
    *   Motor de inferencia inteligente mediante la API de Groq para obtener recomendaciones de palabras clave e impacto del perfil en segundos.

### 3. ⚡ Sistemas Kinetix (SaaS de Automatización y CRM)
Plataforma SaaS enfocada en la digitalización de negocios mediante la integración de agentes de IA y CRM personalizado. Permite centralizar la atención de múltiples canales y automatizar el onboarding de nuevos clientes.
*   **Tecnologías**: `Next.js`, `FastAPI`, `Supabase`, `Groq API (Llama-3b)`, `n8n`, `EvolutionApi`.
*   **Características Frontend**:
    *   Páginas de servicios, pasarela de suscripción y portales interactivos de administración del CRM.
*   **Características Backend**:
    *   Flujos automáticos de onboarding y cobro de suscripciones orquestados con n8n.
    *   Motor de procesamiento de lenguaje natural (NLP) integrado a Groq para clasificación e intención de mensajes de clientes.
    *   Conexión con servicios de mensajería (WhatsApp, Telegram) mediante EvolutionApi para notificaciones automáticas y ruteo inteligente.

---

## 📐 Arquitectura del Proyecto

El portafolio está estructurado de manera modular y limpia, facilitando la escalabilidad de cada sección:

```
porfolioweb/
├── src/
│   ├── app/                    # Enrutador de Next.js (App Router)
│   │   ├── globals.css         # Estilos globales y variables de diseño
│   │   └── page.tsx            # Ensamblado principal de la landing page
│   ├── assets/                 # Recursos de medios e imágenes de proyectos
│   ├── component/              # Componentes de React principales
│   │   ├── ui/                 # Elementos de interfaz atómicos y reutilizables
│   │   │   ├── canvas/         # Escenas interactivos de Three.js (ComputerCanvas, StarCanvas)
│   │   │   ├── cards/          # Tarjetas de proyectos con efectos dinámicos
│   │   │   ├── esphere/        # Esferas interactivas en 3D (ThreeSphere)
│   │   │   ├── loader/         # Pantallas de carga en transiciones
│   │   │   └── techCard/       # Tarjetas de tecnologías para la terminal interactiva
│   │   ├── navBar/             # Barra de navegación receptiva y animada
│   │   ├── AboutMe.tsx         # Sección sobre mí y panel interactivo tipo terminal
│   │   ├── Carrer.tsx          # Sección con la línea de tiempo de mis estudios
│   │   ├── Projects.tsx        # Sección de proyectos con filtrado y visualización
│   │   └── Contact.tsx         # Sección de contacto que une el formulario e interactividad 3D
│   ├── constants/              # Datos estáticos del sitio (proyectos, stacks, botones)
│   └── types.d.ts              # Declaración de tipos TypeScript
├── next.config.ts              # Configuración de compilación de Next.js
├── tailwind.config.ts          # Integración del diseño CSS
└── tsconfig.json               # Configuración del compilador TypeScript
```

---

## 🎓 Trayectoria & Estudios

Mi formación combina la disciplina y fundamentos teóricos de la educación superior con la agilidad y adaptación del aprendizaje autodidacta continuo:

*   **Estudios Universitarios de Informática**: Instituto Universitario Jesús Obrero (**IUJO**), Barquisimeto, Venezuela. Desarrollo de sólidas bases lógicas, algoritmos, metodologías de software y resolución de problemas.
*   **Desarrollo Web Full-Stack & Automatización**: Especialización autodidacta mediante la construcción de software real. Dominio práctico en arquitecturas modernas backend, automatizaciones e integraciones de IA con Groq.

---

## 🛠️ Instalación y Configuración Local

Sigue estos sencillos pasos para levantar el portafolio en tu computadora:

1.  **Clonar el repositorio**:
    ```bash
    git clone https://github.com/tu-usuario/porfolioweb.git
    cd porfolioweb
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Iniciar el entorno de desarrollo**:
    ```bash
    npm run dev
    ```
    El servidor se levantará en [http://localhost:3000](http://localhost:3000).

4.  **Generar compilación de producción**:
    ```bash
    npm run build
    npm run start
    ```

---

## 📬 Contacto

¡Siempre estoy abierto a discutir nuevas oportunidades de desarrollo, automatizaciones de procesos o proyectos con Inteligencia Artificial!

*   **Desarrollador**: Adonis Dev
*   **Especialidad**: Full-Stack Developer | Automation Specialist
*   **Ubicación**: Barquisimeto, Lara, Venezuela

---
Desarrollado con dedicación y 🌌 por Adonis Dev.
