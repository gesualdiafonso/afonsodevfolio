import Image from "next/image"
import profileImg from '../../../../../public/assets/foto200x200.jpg'
import { FaGithub, FaLinkedinIn, FaInstagram, FaBehance, FaFacebook  } from 'react-icons/fa'

export default function CardProfile(){
    return(
        <div className="w-60 h-auto lg:w-80 p-2 flex flex-col justify-center items-center shadow-lg bg-gray-900 rounded-2xl py-4 px-2 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex flex-col items-center mb-2">
                <Image
                        src={profileImg}
                        alt="Afonso Gesualdi Profile Image"
                        priority={true}
                        quality={100}
                        width={200}
                        height={200}
                        className="w-[150px] h-[150] lg:w-[200px] lg:h-[200px] border-[#00ccff] border-2 rounded-xl mb-3 transition-transform duration-300 hover:-translate-y-1"
                />
                <h2 className="m-1 text-xl font-bold mb-2 lg:text-2xl text-white">Afonso  Arruda Gesualdi</h2>
                <span className="text-[#00ff99] text-md font-light lg:text-lg">Web Developer and Designer</span>
            </div>
            <div className="flex gap-3 items-center justify-center mt-2">
                <a 
                    href="https://github.com/gesualdiafonso" 
                    target="_blank"
                    className="text-[#00ccff] text-2xl transition-transform duration-300 hover:text-[#00ff99] hover:-translate-y-1"
                >
                    <FaGithub size={24}/>
                </a>
                <a 
                    href="https://www.linkedin.com/in/afonso-gesualdi-aaa9bb244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                    target="_blank"
                    className="text-[#00ccff] text-2xl transition-transform duration-300 hover:text-[#00ff99] hover:-translate-y-1"
                >
                    <FaLinkedinIn size={24}/>
                </a>
                <a 
                    href="https://www.instagram.com/gesualdi.design?igsh=MTd0ZHY2N2I1N3k1ZA%3D%3D&utm_source=qr" 
                    target="_blank"
                    className="text-[#00ccff] text-2xl transition-transform duration-300 hover:text-[#00ff99] hover:-translate-y-1"
                >
                    <FaInstagram size={24} />
                </a>
                <a 
                    href="https://www.behance.net/afonsogesualdi" 
                    target="_blank"
                    className="text-[#00ccff] text-2xl transition-transform duration-300 hover:text-[#00ff99] hover:-translate-y-1"
                >
                    <FaBehance size={24} />
                </a>
                <a 
                    href="https://www.facebook.com/share/1DzRTzxJMH/?mibextid=wwXIfr" 
                    target="_blank"
                    className="text-[#00ccff] text-2xl transition-transform duration-300 hover:text-[#00ff99] hover:-translate-y-1"
                >
                    <FaFacebook size={24} />
                </a>
            </div>
        </div>
    )
}