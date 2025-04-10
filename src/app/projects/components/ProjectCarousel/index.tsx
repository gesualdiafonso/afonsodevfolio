"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { JSX } from "react";

import Container from "@/components/container/index";
import { ProjectsProp } from "@/utils/data/projectData/projects";
import { FaFigma, FaReact, FaNodeJs, FaJs, FaSass, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { SiTypescript, SiAdobe } from "react-icons/si";
import Image from "next/image";

interface ProjectCarouselProps {
    data: ProjectsProp[];
}

const iconMap: { [key: string]: JSX.Element } = {
    figma: <FaFigma className="text-[#00ff99] text-2xl" />,
    react: <FaReact className="text-[#00ff99] text-2xl" />,
    nodejs: <FaNodeJs className="text-[#00ff99] text-2xl" />,
    js: <FaJs className="text-[#00ff99] text-2xl" />,
    sass: <FaSass className="text-[#00ff99] text-2xl" />,
    html: <FaHtml5 className="text-[#00ff99] text-2xl" />,
    css: <FaCss3Alt className="text-[#00ff99] text-2xl" />,
    bootstrap: <FaBootstrap className="text-[#00ff99] text-2xl" />,
    typescript: <SiTypescript className="text-[#00ff99] text-2xl" />,
    adobe: <SiAdobe className="text-[#00ff99] text-2xl" />
};

export default function ProjectCarousel({ data }: ProjectCarouselProps) {
    return (
        <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            className="w-full h-[100vh]"
        >
            {data.map((project, index) => (
                <SwiperSlide key={index}>
                    <div
                        className="w-full h-[100vh] bg-cover bg-center bg-no-repeat flex justify-center items-center bg-white/80"
                        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${project.image})` }}
                    >
                        <Container>
                            <div className="flex flex-col lg:flex-row justify-center items-center gap-10 my-10 py-10 bg-gray-500/50 rounded-2xl lg:bg-gray-300/0">
                                <div className="w-full">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={400}
                                        height={200}
                                        className="object-cover rounded-2xl mx-auto w-[400px] h-[200px]"
                                    />
                                </div>
                                <div className="w-full lg:bg-gray-500/50 rounded-2xl py-5 px-10 flex flex-col items-center">
                                    <h2 className="text-2xl lg:text-4xl font-bold italic text-center my-5 text-[#007bff]">
                                        {project.title}
                                    </h2>
                                    <span className="text-center text-[#00ff99] text-lg">{project.setings}</span>
                                    <p className="text-left text-[#fffafa] text-xl">{project.description}</p>
                                    <div className="flex gap-2 mt-5 mb-2 justify-center">
                                        {project.technologies.map((icon, index) => (
                                            <span key={index}>{iconMap[icon]}</span>
                                        ))}
                                    </div>
                                    <a
                                        href={project.restricted ? "/restrictArea" : project.link}
                                        target={project.restricted ? "_self" : "_blank"}
                                        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                                    >
                                        Visit the site
                                    </a>
                                </div>
                            </div>
                        </Container>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
