
export interface ProjectsProp {
    title: string;
    setings: string[];
    description: string;
    image: string;
    technologies: string[];
    link: string;
    restricted?: boolean;
}

const ProjectInfo: ProjectsProp[] = [
    {
        title: "Éclat E-commerce Website",
        setings: [
            "E-commerce, Electronic Service",
            "Online Store Development"
        ],
        description: "Full e-commerce platform built with Laravel and MySQL, featuring authentication, dynamic shopping cart, and admin dashboard. The main challenge was optimizing the checkout flow and ensuring high performance under multiple real-time requests.",
        image: "/assets/Mockups/eclat.png",
        technologies: [
            "laravel",
            "php",
            "nodejs",
            "mysql",
            "tailwindcss",
            "js",
            "html",
        ],
        link: "https://github.com/gesualdiafonso/eclat.git"
    },
    {
        title: "Movie Review Website",
        setings: [
            "Film Review System, CRUD Application",
            "Web Application Development"
        ],
        description: "Movie review platform developed with Vue.js and Vite. Designed a seamless interface with API integration for dynamic data rendering and implemented a complete CRUD system for managing films and user reviews efficiently.",
        image: "/assets/Mockups/moviereview.jpeg",
        technologies: [
            "php",
            "vuejs",
            "tailwindcss",
            "vuetify",
            "nodejs",
            "vite",
            "js",
        ],
        link: "https://github.com/gesualdiafonso/P-Final-ADM-ARRUDA_AFONSO.git"
    },    
    {
        title: "Malba Gallery E-commerce",
        setings: [
            "E-commerce, Web Design, Web Page Institucional",
            "Web Page Institucional & E-commerce"
        ],
        description: "Built a full system with native PHP, JavaScript, and CSS. Developed custom routing and data logic, separating front-end from back-end cleanly. Delivered a robust web application from scratch with no frameworks, demonstrating deep understanding of raw web tech",
        image: "/assets/Mockups/mockup-malbagallery.png",
        technologies: [
            "php",
            "mysql",
            "uikit",
            "css",
            "js",
            "html",
        ],
        link: "https://malbagallery.onrender.com"
    },
    {
        title: "E-commerce Liga Cosmic",
        setings: [
            "E-commerce, Web Design, Web Page Institucional",
            "E-commerce Web & Page Institucional"
        ],
        description: "Built a full system with native PHP, JavaScript, and CSS. Developed custom routing and data logic, separating front-end from back-end cleanly. Delivered a robust web application from scratch with no frameworks, demonstrating deep understanding of raw web tech.",
        image: "/assets/Mockups/mockup-ligacosmic.png",
        technologies: [
            "php",
            "mysql",
            "bootstrap",
            "css",
            "js",
            "html",
        ],
        link: "https://liga-cosmic.onrender.com"
    },
    {
        title: "Vida Plus Group",
        setings: [
            "Institucional Page, Web Design",
            "Web Design Institucional Page"
        ],
        description: "Used Next.js (App Router), React, TypeScript, TailwindCSS and Node.js to create a scalable, SEO-optimized site. Focused on performance and accessible UX. Delivered a modern and modular digital experience.",
        image: "/assets/Mockups/mockup-vidaplus.png",
        technologies: [
            "nextjs",
            "nodejs",
            "typescript",
            "tailwindcss",
            "python",
            "react",
            "figma",
            "html",
        ],
        link: "https://vida-plus-sepia.vercel.app/"
    },
    {
        title: "Van Gogh App Vue Progressive Web Application",
        setings: [
            "Progressive Web Application, Web Design, VueJS",
            "VueJS Progressive Web Application"
        ],
        description: "Progressive Web App using Vue 3, Vue Router, Service Workers and Bootstrap. Enabled oﬄine mode, push notifications, and installability. Full PWA stack integration achieved with optimized performance.",
        image: "/assets/Mockups/mockup-vangogh.png",
        technologies: [
            "vuejs",
            "pwa",
            "nodejs",
            "js",
            "bootstrap",
            "html",
        ],
        link: "https://app-vue-vangogh.vercel.app/"
    },
    {
        title: "Space Animated 3D, in Vue,JS",
        setings: [
            "Page Animated, WebGraphic Design, 3D",
            "Web Graphic Design"
        ],
        description: "Created a 3D space visualization using Three.js, Vue 3 and TypeScript. Overcame technical challenges integrating WebGL and reactive UI logic, including scene controls, lighting and smooth animations.",
        image: "/assets/Mockups/mockup-space.jpg",
        technologies: [
            "threejs",
            "vuejs",
            "nodejs",
            "typescript",
        ],
        link: "https://space-animated-vue.vercel.app"
    },
    {
        title: "Lexus Coupe App",
        setings: [
            "Landing Page Promotional",
            "Web Design"
        ],
        description: "Promotional project for the Lexus LC Coupe Edition Limited, made in Spanish as a language, page without action functionality with buttons, Tools used: TypeScript, React-Vite, Sass. NON-RESPONSIVE PAGE.",
        image: "/assets/Mockups/mockup-lexus.png",
        technologies: [
            "figma",
            "react",
            "nodejs",
            "typescript",
            "sass"
        ],
        link: "https://lexus-app.vercel.app"
    },
    {
        title: "Spectra Labs",
        setings: [
            "E-commerce",
            "Web Design"
        ],
        description: "Freelance e-commerce development project with the aim of a product gallery with stock, finalization and data accreditation via a form, information gallery with modal creation, Json database construction, use of HTML, CSS, Bootstrap and Javascript.",
        image: "/assets/Mockups/mockup-spectra.png",
        technologies: [
            "figma",
            "html",
            "css",
            "typescript",
            "js",
            "bootstrap"
        ],
        link: "https://spectralabs.vercel.app"
    },
    {
        title: "Copy Nintendo",
        setings: [
            "Landing Page",
            "Web Design"
        ],
        description: "Copy of Nintendo's website, project to develop adaptability for different devices with a critical eye on mobile-first, without using a browser, just a simple form of a browser that is touchable, used css, html and javaScript for game gallery.",
        image: "/assets/Mockups/mockups-nintendo.png",
        technologies: [
            "adobe",
            "html",
            "css",
            "js"
        ],
        link: "https://nintendoswitch.vercel.app"
    },
    {
        title: "Funerária do Paulinho",
        setings: [
            "Institucional Page",
            "Web Design"
        ],
        description: "Work project for a Sanitary Services company, Institutional Web with the aim of training new clients, SEO and SEM inclusion, Database for sending and receiving contact e-mails, all sections with CTA.",
        image: "/assets/Mockups/Mockups-Funerária.png",
        technologies: [
            "figma",
            "html",
            "css",
            "js",
            "react",
            "nodejs"
        ],
        link: "https://funerariapaulinho.vercel.app/",
        restricted: true
    },
];

export default ProjectInfo;