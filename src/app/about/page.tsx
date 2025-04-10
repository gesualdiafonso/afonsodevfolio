import Container from "@/components/container/index"
import CardProfile from "./components/cardProfile/index"
import { FaCloudDownloadAlt } from "react-icons/fa"
import Link from "next/link"

export default function About() {
    return(
        <main className="flex flex-col items-center justify-center">
            <Container>
                <h1 className="text-white w-full text-center text-4xl lg:text-5xl font-bold italic my-10">About <span className="text-[#8A2BE2]">me</span></h1>
                <div className="flex flex-col md:flex-row justify-center items-center my-10 gap-10">
                    <div>
                        <CardProfile />
                    </div>
                    <div className="text-white text-xl px-2">
                        <p className="mb-4 lg:text-2xl">
                            Hello, my name is <strong className="text-[#8A2BE2]">Afonso Arruda Gesualdi</strong>.
                        </p>
                        <p className="mb-4 lg:text-2xl">
                            I am a Web Developer and Designer, a Brazilian living in Argentina since 2019. My academic journey includes 4 years of 
                            Medicine at Maimonides University until 2022 and 2 years of Industrial Engineering at the University of Palermo, where I 
                            discovered my passion for programming, design, communication, and Business. I have completed professional studies 
                            in Branding Management at EBAC-BR and I'm study Web Development and Programming and Design Multimedia at Da Vinci.
                        </p>
                        <p className="mt-4 lg:text-2xl">
                            I have extensive experience in Digital Marketing, helping brands position themselves without conflicts. My goal is to reach 
                            the level of Full-Stack Developer and deepen my knowledge in Artificial Intelligence and app development for iOS and 
                            Android.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center my-10 gap-10">
                    <Link href='/contact' className="relative px-6 py-3 text-lg font-bold text-[#00FFFF] uppercase tracking-widest bg-[#8A2BE2] border-2 border-[#00FFFF] rounded-lg shadow-[0px_0px_10px_#8A2BE2] transition-all duration-500 hover:shadow-[0px_0px_20px_#8A2BE2,0px_0px_40px_#00FFFF] hover:text-[#8A2BE2] hover:bg-[#00FFFF] overflow-hidden group">
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#8A2BE2] to-[#00FFFF] opacity-0 transition-opacity duration-500 group-hover:opacity-10"></span>
                        <span className="absolute w-1 h-1 bg-[#00FFFF] top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:w-full group-hover:h-full group-hover:opacity-10"></span>
                            Contact Me
                        <span className="absolute left-0 top-0 w-full h-full mix-blend-color-dodge opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="absolute -top-2 left-2 w-10 h-10 bg-[#00FFFF] blur-lg opacity-50 animate-pulse"></div>
                        <div className="absolute bottom-2 right-2 w-10 h-10 bg-[#8A2BE2] blur-lg opacity-50 animate-pulse"></div>
                        </span>
                    </Link>
                    <a href="/assets/CV-Afonso-Web.pdf" download="Curriculo_Afonso.pdf">
                        <button className="relative flex items-center gap-2 px-6 py-3 text-lg font-bold text-[#00FFFF] uppercase tracking-widest bg-[#8A2BE2] border-2 border-[#00FFFF] rounded-lg shadow-[0px_0px_10px_#8A2BE2] transition-all duration-500 overflow-hidden group hover:shadow-[0px_0px_20px_#8A2BE2,0px_0px_40px_#00FFFF] hover:text-[#8A2BE2] hover:bg-[#00FFFF]">
                            <span className="absolute w-0 h-0 bg-[#00FFFF] opacity-20 group-hover:w-full group-hover:h-full transition-all duration-500"></span>

                            <span className="relative transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105">
                            Download
                            </span>

                            <FaCloudDownloadAlt className="relative w-6 h-6 transition-transform duration-500 group-hover:translate-y-1 group-hover:scale-110" />
                        </button>
                    </a>
                </div>
                <div className="text-white flex flex-col md:flex-row justify-center items-center my-10 gap-40 mx-20">
                    <div className="w-full">
                        <h2 className="text-2xl lg:text-3xl font-bold italic">What are My Motivations?</h2>
                        <p className="mt-4 lg:text-2xl">
                            I seek to deepen my knowledge in Artificial Intelligence, software development, and user experience, applying a strategic approach to connect brands and people in the digital world.
                        </p>
                    </div>
                    <div className="w-full">
                        <h2 className="text-2xl lg:text-3xl font-bold italic">My Skills</h2>
                        <ul className="mt-2 lg:text-2xl">
                            <li>Analytical Thinking</li>
                            <li>Adaptability</li>
                            <li>Efective Communication</li>
                            <li>Creativity</li>
                            <li>Leadership and Teamwork</li>
                            <li>Time Management</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </main>
    )
}