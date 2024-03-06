import { useState } from "react";
import Link from 'next/link';
import ModalComponent from "@/components/ModalComponent";
import Pago from "@/components/Pago";
import axios from "axios";
import Gracias from "@/components/Gracias";
import Fallo from "@/components/Fallo";
import Logo from "@/images/logo.png";
import Image from "next/image";

export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState(false)
  const [openGracias, setOpenGracias] = useState(false);
  const [openFallo, setOpenFallo] = useState(false);
  const init = {
      name:'',
      cedula:'',
      telefono:'',
      email:'',
      banco:'',
      fechaDeposito:'',
      referencia:''
  }
  const [data, setData] = useState(init)

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closePage = ()=>{
    setOpen(false)
  }

  const closeG = () => {
    setOpenGracias(false);
  };

  const closeFail = () =>{
    setOpenFallo(false);
  }
  
    const toggleMenu = () => {
      setMenu(!menu);
    };

    const handleClickPage = ()=>{
      setOpen(!open)
      setIsModalOpen(false);
    }

    const handleChange = (e)=>{
      const {name, value} = e.target
      setData({...data, [name]:value})
    }
    const handleSubmit = async (e)=>{
      e.preventDefault()
      try {
        const response = await sendMensage(data);
        console.log(response);
        setOpen(false);
        setOpenGracias(true);
      } catch (error) {
        console.log(error);
        setOpenFallo(true);
      }
    }
    const sendMensage = async (data)=>{
      const response = await axios.post('/api/contacto', data);
      return response.data;
    }

  return (
    <>
    <nav className="py-4 bg-white">
      <div className="flex justify-center items-center px-6">
        {/* BOTON MOBILE */}
        <div className="block sm:hidden cursor-pointer" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        <div className="hidden sm:flex items-center">
          <div>
            <Image src={Logo} alt='logo'/>
          </div>
          <div className="flex ml-6 space-x-4">
            <Link className="text-gray-800 hover:text-blue-900 font-bold cursor-pointer" href="/about">
              INICIO
            </Link>
            <Link className="text-gray-800 hover:text-blue-900 font-bold cursor-pointer" href="https://unifi-educacion.com/#nosotros">
              NOSOTROS
            </Link>
            <Link className="text-gray-800 hover:text-blue-900 font-bold cursor-pointer"  href="https://unifi-educacion.com/#programas">
              PROGRAMAS
            </Link>
            <Link className="text-gray-800 hover:text-blue-900 font-bold cursor-pointer" href="https://unifi-educacion.com/#experiencia">
              EXPERIENCIA
            </Link>
            <Link className="text-gray-800 hover:text-blue-900 font-bold cursor-pointer" href="https://unifi-educacion.com/Aula-virtual/login/?lang=es">
              AULA VIRTUAL
            </Link>
            <Link className="text-gray-800 hover:text-blue-900 font-bold cursor-pointer" href="https://unifi-educacion.com/revista-mundo-fyde/">
              REVISTA DIGITAL
            </Link>
            <Link className="text-gray-800 hover:text-blue-900 font-bold cursor-pointer" href="https://corpfinancialiuris.com/">
              CORPORATIVO
            </Link>
            <Link className="text-gray-800 hover:text-blue-900 font-bold cursor-pointer" href="https://unifi-educacion.com/#noticias">
             UNIFI AL DIA
            </Link>
            <Link className="text-gray-800 hover:text-blue-900 font-bold cursor-pointer" href="https://unifi-educacion.com/contacto/">
              CONTACTO
            </Link>
          </div>
        </div>
      </div>
      {/* MENU MOBILE */}
      <div className={`sm:hidden ${menu ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center">
          <Link className="text-center text-gray-800 hover:text-blue-900 font-bold cursor-pointer p-4 border w-full" href="/about">
            INICIO
          </Link>
          <Link className="text-center text-gray-800 hover:text-blue-900 font-bold cursor-pointer p-4 border w-full" href="https://unifi-educacion.com/#nosotros">
            NOSOTROS
          </Link>
          <Link className="text-center text-gray-800 hover:text-blue-900 font-bold cursor-pointer p-4 border w-full" href="https://unifi-educacion.com/#programas">
           PROGRAMAS
          </Link>
          <Link className="text-center text-gray-800 hover:text-blue-900 font-bold cursor-pointer p-4 border w-full" href="https://unifi-educacion.com/#experiencia">
           EXPERIENCIA
          </Link>
          <Link className="text-center text-gray-800 hover:text-blue-900 font-bold cursor-pointer p-4 border w-full" href="https://unifi-educacion.com/Aula-virtual/login/?lang=es">
            AULA VIRTUAL
          </Link>
          <Link className="text-center text-gray-800 hover:text-blue-900 font-bold cursor-pointer p-4 border w-full" href="https://unifi-educacion.com/revista-mundo-fyde/">
            REVISTA DIGITAL
          </Link>
          <Link className="text-center text-gray-800 hover:text-blue-900 font-bold cursor-pointer p-4 border w-full" href="https://corpfinancialiuris.com/">
            CORPORATIVO
          </Link>
          <Link className="text-center text-gray-800 hover:text-blue-900 font-bold cursor-pointer p-4 border w-full" href="https://unifi-educacion.com/#noticias">
          UNIFI AL DIA
          </Link>
          <Link className="text-center text-gray-800 hover:text-blue-900 font-bold cursor-pointer p-4 border w-full" href="https://unifi-educacion.com/contacto/">
           CONTACTO
          </Link>
        </div>
      </div>
    </nav>
    <ModalComponent
      handleClickPage={handleClickPage} 
      isOpen={isModalOpen} 
      closeModal={closeModal} 
    />
    <Pago
      open ={open}
      closePage={closePage}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
    {openGracias && (
      <Gracias closeG={closeG} />
    )}
    {openFallo && (
      <Fallo closeFail={closeFail} />
    )}
    <section className="bg-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Cursos Disponibles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Curso {index + 1}</h3>
              <p className="text-gray-700">Descripción del curso {index + 1}</p>
              <div className="mt-10 text-right">
                <button onClick={openModal} className="bg-green-500 text-white font-bold py-2 px-4 rounded">Comprar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
