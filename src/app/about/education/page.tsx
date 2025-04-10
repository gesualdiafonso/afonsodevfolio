'use client'
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Container from "@/components/container/index"
import { VscDebugBreakpointLog } from "react-icons/vsc";
import TechCarousel from "./components/techCarousel";


gsap.registerPlugin(ScrollTrigger);

interface EducationProps {
    title: string;
    institute: string;
    description: string;
    image: string;
}

const education: EducationProps[] = [
    {
        title: "Medicine",
        institute: "University Maimonides",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Umai_isologo_wikipedia.jpg",
        description: "Not completed | 2019 - 2022",
    },
    {
        title: "Industrial Engineering",
        institute: "University of Palermo",
        image: "https://pbs.twimg.com/profile_images/1309487393150586882/tyiNKxnC_400x400.jpg",
        description: "Not completed | 2022 - 2024 ",
    },
    {
        title: "Front-End Development",
        institute: "Johns Hopkins University, Extension Coursera",
        image: "https://brand.jhu.edu/wp-content/uploads/2024/07/logos-vertical-1024x683.jpg",
        description: "Complete | 2024",
    },
    {
        title: "Marketing Digital",
        institute: "Escuela de Artes Multimediales Da Vinci",
        image: "https://media.glassdoor.com/sqll/2811202/escuela-da-vinci-squarelogo-1671531596037.png",
        description: "Complete | 2024",
    },
    {
        title: "Brand Management",
        institute: "Escuela Britanica de Artes Creativas y Tecnologias",
        image: "https://yt3.googleusercontent.com/ytc/AIdro_l1mQOV0ggZ_UvodYMWrBA8G2QfsxskEFHNaUbgW9Bem8E=s900-c-k-c0x00ffffff-no-rj",
        description: "Complete | 2025",
    },
    {
        title: "Development and Design Web",
        institute: "Escuela de Artes Multimediales Da Vinci",
        image: "https://media.glassdoor.com/sqll/2811202/escuela-da-vinci-squarelogo-1671531596037.png",
        description: "In progress | 2024, 2025",
    }
]
export default function Education() {
    const timelineRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
        '.timeline-item',
        { opacity: 0, y: 50 },
        { 
            opacity: 1, 
            y: 0, 
            stagger: 0.3, 
            duration: 1, 
            ease: 'power2.out', 
            scrollTrigger: { 
                trigger: '.timeline', 
                start: 'top 80%' 
            } 
        });
    }, []);

    return(
        <main>
            <h1 className="text-white text-2xl lg:text-4xl font-bold my-10 text-center">Habilidades</h1>
            <TechCarousel />
            <Container>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-white text-2xl lg:text-4xl font-bold my-10">Education</h2>
                    <div ref={timelineRef} className="relative w-full max-w-4xl timeline">
                    <div className="timeline-item absolute left-1/2 w-1 h-full bg-[#fffafa] rounded-t-full rounded-b-none transform -translate-x-1/2"></div>
                    {education.map((item, index) => (
                        <div key={index} className={`timeline-item relative flex mb-10 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                            <div className={`w-1/2 py-4 px-8  bg-white rounded-lg flex items-center justify-between`}>
                                <div className="flex flex-col">
                                    <h2 className="text-blue-400 text-xl lg:text-2xl font-bold">{item.title}</h2>
                                    <p className="text-[#8a2be2] text-sm lg:text-base">{item.institute}</p>
                                    <p className="text-blue-400 text-sm lg:text-base">{item.description}</p>
                                </div>
                                <div className="">
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        width={100} 
                                        height={100} 
                                        className=""
                                    />
                                </div>
                            </div>
                            <div className="absolute left-1/2 w-6 h-6 bg-blue-500 rounded-full transform -translate-x-1/2 border-2 border-[#fffafa]">
                                <VscDebugBreakpointLog className="text-white w-full h-full" />
                            </div>
                        </div>
                    ))}
                    </div>
                    <div className="bg-[#8a2be2] rounded-full py-2 px-8 timeline-item border-2 border-[#fffafa]">
                        <p className="text-white text-xl lg:text-3xl">Para ver minhas certificações, entre em meu perfil do <a href="https://www.linkedin.com/in/gabriel-santos-b70000200/" target="_blank" className="text-[#00FFFF] hover:text-[#8a2be2] hover:underline hover:bg-[#00FFFF] hover:rounded-full hover:py-1 hover:px-4 transition-all duration-300 font-bold hover:font-normal ">Linkedin</a></p>
                    </div>
                </div>
            </Container>
        </main>
    )
}