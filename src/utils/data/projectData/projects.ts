
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
        link: "https://lexus-app.vercel.app",
        restricted: true
    },
];

export default ProjectInfo;