"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
    FaHtml5, FaCss3Alt, FaJs, 
    FaSass, FaBootstrap, FaReact,
    FaAngular, FaVuejs, FaNodeJs, 
    FaPhp, FaPython, FaFigma, 
    FaWordpress, FaShopify, FaSquarespace, FaAws, FaWix
} from 'react-icons/fa';
import {
    TbBrandNextjs, TbBrandTailwind, TbBrandMongodb,
    TbBrandTypescript, TbBrandFirebase, TbBrandMysql
} from 'react-icons/tb';
import { DiJqueryLogo } from "react-icons/di";
import { SiMui, SiWebpack, SiAdobeillustrator, 
    SiAdobephotoshop, SiAdobexd, SiAdobe, SiCanva
} from "react-icons/si";

const technologies = [
    FaHtml5, FaCss3Alt, FaJs, FaBootstrap, DiJqueryLogo, TbBrandTypescript, FaSass,
    SiAdobe, SiAdobephotoshop, SiAdobeillustrator, SiAdobexd, SiCanva, FaFigma,
    FaAngular, FaReact, TbBrandNextjs, FaVuejs, TbBrandTailwind, SiMui, FaNodeJs,
    FaPhp, FaPython, TbBrandFirebase, TbBrandMongodb, TbBrandMysql, FaAws,
    SiWebpack, FaWordpress, FaShopify, FaSquarespace, FaWix
];

const MarqueeRow = ({ icons, reverse }: { icons: any[], reverse?: boolean }) => {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (marqueeRef.current) {
            const list = marqueeRef.current;
            const iconsWidth = list.scrollWidth / 2 ; // Pega a largura da lista
            const speed = 30; // Tempo da animação

            gsap.to(list, {
                x: reverse ? `+=${iconsWidth}px` : `-=${iconsWidth}px`,
                duration: speed,
                repeat: -1,
                ease: "power2.inOut",
                modifiers: {
                    x: gsap.utils.unitize((x) => parseFloat(x) % iconsWidth) // Reinicia ao fim
                }
            });
        }
    }, [reverse]);

    return (
        <div className='w-full flex overflow-hidden whitespace-nowrap py-2'>
            <div ref={marqueeRef} className='flex gap-8 min-w-max mx-4'>
                {icons.map((Icon, index) => (
                    <Icon key={index} size={70} className="text-white" />
                ))}
                {icons.map((Icon, index) => ( // Clona automaticamente para loop
                    <Icon key={`dup-${index}`} size={70} className="text-white" />
                ))}
            </div>
        </div>
    );
};

export default function TechCarousel() {
    return (
        <div className='w-full py-10 overflow-hidden'>
            {[...Array(5)].map((_, index) => ( // Gera 3 linhas dinâmicas
                <MarqueeRow key={index} icons={technologies} reverse={index % 2 === 0} />
            ))}
        </div>
    );
}
