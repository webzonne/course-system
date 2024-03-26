import { useState, useEffect } from "react";
import Link from 'next/link';
import ModalComponent from "@/components/ModalComponent";
import Pago from "@/components/Pago";
import axios from "axios";
import Gracias from "@/components/Gracias";
import Fallo from "@/components/Fallo";
import Logo from "@/images/logo.png";
import Logo2 from "@/images/logo2.jpeg";
import Image from "next/image";
import Box from "@/components/Box";
import curso_ima1 from '@/images/curso_ima1.png';
import Cargando from '@/components/Cargando.js';


export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState(false)
  const [openGracias, setOpenGracias] = useState(false);
  const [openFallo, setOpenFallo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

    // const handleClickPage = ()=>{
    //   setOpen(!open)
    //   setIsModalOpen(false);
    // }

    const handleClickPage = () => { // Recibe el nombre del curso como argumento
      setOpen(!open);
      setIsModalOpen(false);
    };

    const handleImpri = (titulo)=>{
      const nuevaData = {...data, curso:titulo}
      setData(nuevaData)
    }

    const handleChange = (e)=>{
      const {name, value} = e.target
      setData({...data, [name]:value})
    }
    const handleSubmit = async (e)=>{
      e.preventDefault()
      setIsLoading(true); // Mostrar spinner al iniciar la solicitud
      try {
        const response = await sendMensage(data);
        console.log(response);
        setOpen(false);
        setOpenGracias(true);
      } catch (error) {
        console.log(error);
        setOpenFallo(true);
      } finally {
        setIsLoading(false); // Ocultar spinner al finalizar la solicitud
      }
    }
    const sendMensage = async (data)=>{
      const response = await axios.post('/api/contacto', data);
      return response.data;
    }

    // FUNCIONES

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
            <Image src={Logo2} width={140} alt='logo2'/>
          </div>
          <div>
            <Image src={Logo} width={80} alt='logo'/>
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

    {isLoading && <Cargando />} {/* Mostrar spinner cuando isLoading es true */}

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
          <Box
          openModal={openModal}
          titulo={'Curso de Adiestramiento de PCLC/FT/FPAD'}
          by={'MSc. Abog. Silumerany Rodriguez RUF Nro.15'}
          handleImpri={handleImpri}
          curso_ima1={curso_ima1}
          />
          {/* <Box
          openModal={openModal}
          titulo={'Introduccion a la IA generativa y sus aplicaciones practicas'}
          by={'Genialita latam'}
          handleImpri={handleImpri}
          />
          <Box
          openModal={openModal}
          titulo={'Como solicitar vehiculo objetos y diligencias de investigacion en proceso'}
          by={'Mario Romero'}
          handleImpri={handleImpri}
          /> */}
        </div>
      </div>
    </section>
    </>
  );
}
