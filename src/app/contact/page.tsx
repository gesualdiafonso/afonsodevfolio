"use client"
import Container from "@/components/container/index"
import { useState } from 'react'
import { useRouter } from "next/navigation"
import {useForm} from 'react-hook-form'
import { FaInstagramSquare, FaGithub, FaBehance, FaFacebook } from 'react-icons/fa'


const countries = [
    { name: "Argentina", code: "+54" },
    { name: "Brasil", code: "+55" },
    { name: "Estados Unidos", code: "+1" },
    { name: "Portugal", code: "+351" },
    { name: "Reino Unido", code: "+44" },
    { name: "Chile", code: "+56" },
    { name: "Colômbia", code: "+57" },
    { name: "México", code: "+52" },
    { name: "Peru", code: "+51" },
    { name: "Venezuela", code: "+58" },
    { name: "Uruguai", code: "+598" },
    { name: "Paraguai", code: "+595" },
    { name: "Bolívia", code: "+591" },
    
]

interface FormData {
    name: string;
    email: string;
    phone: string;
    country: string;
    company?: string;
    message: string;
}


export default function Contact(){
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormData>();

    const [loading, setLoaging] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const router = useRouter();

    const onSubmit = async (data: FormData) => {
        setLoaging(true);
        setErrorMessage("");
    
        try {
            const res = await fetch("/api/sendEmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
    
            // Checa se a resposta é um JSON válido
            const contentType = res.headers.get("content-type");
    
            let result;
            if (contentType && contentType.includes("application/json")) {
                result = await res.json();
            } else {
                throw new Error("Resposta da API não é JSON válida.");
            }
    
            if (res.ok && result.success) {
                setSuccess(true);
                router.push("/thanks");
            } else {
                throw new Error(result?.error || "Erro ao enviar o formulário.");
            }
        } catch (error: any) {
            setErrorMessage("Falha ao enviar o formulário. Tente Novamente!");

        } finally {
            setLoaging(false);
        }
    };
    

    return(
        <main className="mt-10 text-white">
            <Container>
                <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="w-full px-5 flex flex-col justify-center">
                        <span className="text-xs text-center lg:text-xl text-[#00ccff] uppercase font-bold">How about we have a chat?</span>
                        <h2 className="text-xl lg:text-3xl text-[#00fbff] mb-5 text-center">Shall we create something amazing together?</h2>
                        <p className="lg:text-xl md:text-center md:p-5">Turn your ideas into reality with innovative design, cutting-edge technology, and creative strategies that will make your brand stand out. Shall we start creating something unique and impactful?</p>
                        <div className="m5-5">
                            <span className="font-bold text-[#007bff] lg:text-2xl">Contact me:</span>
                            <p>Email: <a href="mailto:gesualdiafonsoarr@gmail.com" className="text-[#00fbff] hover:text-[#4fc2c4] hover:underline transition-colors duration-300">gesualdiafonsoarr@gmail.com</a></p>
                            <p><span className="text-[#00fbff]">Location:</span> Buenos Aires, Arginetina</p>
                        </div>
                        <div className="my-5">
                            <span className="text-xl lg:text-2xl">Finde me on social media:</span>
                            <ul className="flex flex-row items-center justify-center gap-10 my-8">
                                <li><a href="https://github.com/gesualdiafonso" target="_blank"><FaGithub  className='text-[#007bff] hover:text-[#00ff99] transition-colors duration-300' size={40}/></a></li>
                                <li><a href="https://www.behance.net/afonsogesualdi" target="_blank"><FaBehance  className='text-[#007bff] hover:text-[#00ff99] transition-colors duration-300' size={40} /></a></li>
                                <li><a href="https://www.instagram.com/gesualdi.design" target="_blank"><FaInstagramSquare className='text-[#007bff] hover:text-[#00ff99] transition-colors duration-300' size={40} /></a></li>
                                <li><a href="https://www.facebook.com/share/1DzRTzxJMH/?mibextid=wwXIfr" target="_blank"><FaFacebook className='text-[#007bff] hover:text-[#00ff99] transition-colors duration-300' size={40} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center">
                        <h2 className="text-center text-4xl mb-2 font-bold text-[#00ccff]">Get in touch</h2>
                        {success ? (
                            <p className="text-green-600">Message sent successfully!</p>
                        ): (
                            <form 
                                onSubmit={(event) => {
                                    event.preventDefault(); // Impede o envio caso haja erros
                                        if (Object.keys(errors).length > 0) {
                                            setErrorMessage("Please, fill in all the required fields correctly before sending.");
                                        } else {
                                            handleSubmit(onSubmit)();
                                        }
                                    }} 
                                className="bg-[#F8F8FF] text-[#1e1f26] font-(var(--font-poppins)) rounded-lg py-10 px-8 flex flex-col gap-4"
                            >
                                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                                <h3 className="text-center lg:text-2xl text-[#007bff] mb-4">Send a message</h3>
                                <div >
                                    <label htmlFor="name" className="block font-medium">Name</label>
                                    <input 
                                        type="text" 
                                        className="w-full p-2 border-[#007bff] border-2 rounded-xl bg-[#f8f8f8] outline-none focus:border-[#00ccff] focus:transition-discrete duration-300"
                                        {...register("name", { required: "The name field is obligatory!"})}
                                    />
                                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                                </div>

                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        type="text" 
                                        className="w-full p-2 border-[#007bff] border-2 rounded-xl bg-[#f8f8f8] outline-none focus:border-[#00ccff] focus:transition-discrete duration-300"
                                        {...register("email", { required: "The email field is obligatory", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "The eamil you entered is invalid!" }})}
                                    />
                                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                                </div>

                                <div >
                                    <label htmlFor="name">Country</label>
                                    <select id="country"
                                        className="w-1/2 p-2 border rounded-xl ml-6"
                                        {...register("country", {required: "This select is a borigatory"})}
                                    >
                                        <option value="">Select the country...</option>
                                        {countries.map((country) => (
                                            <option key={country.code} value={country.code}>
                                                {country.name} ({country.code})
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div >
                                    <label htmlFor="phone">Phone</label>
                                    <input 
                                        type="tel" 
                                        className="w-full p-2 border-[#007bff] border-2 rounded-xl bg-[#f8f8f8] outline-none focus:border-[#00ccff] focus:transition-discrete duration-300"
                                        {...register("phone", { required: "You need to enter your telephone number", pattern: { value:  /^[0-9]+$/, message: "It's only numbers!"}})}
                                    />
                                    {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                                </div>

                                <div > 
                                    <label htmlFor="name">Company Name</label>
                                    <input 
                                        type="text" 
                                        className="w-full p-2 border-[#007bff] border-2 rounded-xl bg-[#f8f8f8] outline-none focus:border-[#00ccff] focus:transition-discrete duration-300"
                                        {...register("company")}
                                    />
                                </div>

                                <div >
                                    <label htmlFor="message">Massange</label>
                                    <textarea  
                                        {...register("message", {required: "This field is obrigatory!"})}
                                        className="w-full p-2 border-[#007bff] border-2 rounded-xl bg-[#f8f8f8] outline-none focus:border-[#00ccff] focus:transition-discrete duration-300 resize-none"
                                    ></textarea>
                                    {errors.message && <p className="text-red-500">{errors.message.message}</p>}
                                </div>

                                <button 
                                    type="submit"
                                    className="bg-[#007bff] text-white px-15 py-1 text-center text-lg rounded-lg font-bold cursor-pointer uppercase hover:bg-[#00ff99] hover:-translate-y-2 duration-600"
                                >Submit</button>
                            </form>
                        )}
                        
                    </div>
                </div>
            </Container>
        </main>
    )
}