import Image from "next/image";
import backgroundImg from "../../../public/assets/ciberpunk/Ciberpunk-montage.jpg";

export default function Thanks() {
    return (
        <main className="relative h-[70vh] bg-[#2E2E2E] text-white overflow-hidden">
            {/* Imagem como background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImg}
                    alt="Imagem de fundo gerada por IA"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                    className="opacity-40"
                />
            </div>

            {/* Conteúdo acima da imagem */}
            <div className="relative z-10 flex items-center justify-center h-full px-4">
                <div className="text-center max-w-xl">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 
                        bg-gradient-to-r from-[#8A2BE2] via-[#00FFFF] to-[#00FF99] 
                        bg-clip-text text-transparent drop-shadow-[0_0_10px_#00FFFF]">
                        Thank you!
                    </h1>
                    <p className="text-lg md:text-xl text-[#00FF99] drop-shadow-[0_0_5px_#00FF99]">
                        We've received your message. We'll be in touch shortly.
                    </p>

                    <div className="mt-10">
                        <a 
                            href="/"
                            className="inline-block px-6 py-3 rounded-xl text-lg font-semibold 
                            border border-[#00FFFF] hover:border-[#8A2BE2] 
                            text-[#00FFFF] hover:text-[#8A2BE2] 
                            transition duration-300 
                            shadow-[0_0_10px_#00FFFF] hover:shadow-[0_0_15px_#8A2BE2]"
                        >
                            Back to Home
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
