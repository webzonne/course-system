import { Inter } from "next/font/google";
import { useState } from "react";
import Link from 'next/link';
import ModalComponent from "@/components/ModalComponent";
import Pago from "@/components/Pago";
import axios from "axios";
import Gracias from "@/components/Gracias";
import Fallo from "@/components/Fallo";
import Logo from "@/images/logo.png"
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

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
        const response = await sendMenssage(data);
        console.log(response);
        setOpen(false);
        setOpenGracias(true);
      } catch (error) {
        console.log(error);
        setOpenFallo(true);
      }
    }
    const sendMenssage = async (data)=>{
      const response = await axios.post('/api/contacto', data);
      return response.data;
    }

  return (
    <>
    <nav className="py-4 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${menu ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${menu ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className={`${menu ? 'block' : 'hidden'} sm:block sm:ml-6`}>
              <div className="flex items-center space-x-4">
              <div>
                <Image src={Logo} alt='logo'/>
              </div>
              <Link className="text-gray-800" href="/about">
                  INICIO
                </Link>
                <Link className="text-gray-800" href="https://unifi-educacion.com/#nosotros">
                  NOSOTROS
                </Link>
                <Link className="text-gray-800" href="https://unifi-educacion.com/#programas">
                  PROGRAMAS
                </Link>
                <Link className="text-gray-800" href="https://unifi-educacion.com/#experiencia">
                  EXPERIENCIA
                </Link>
                <Link className="text-gray-800" href="https://unifi-educacion.com/Aula-virtual/login/?lang=es">
                  AULA VIRTUAL
                </Link>
                <Link className="text-gray-800" href="https://unifi-educacion.com/revista-mundo-fyde/">
                  REVISTA DIGITAL
                </Link>
                <Link className="text-gray-800" href="https://corpfinancialiuris.com/">
                  CORPORATIVO
                </Link>
                <Link className="text-gray-800" href="https://unifi-educacion.com/#noticias">
                  UNIFI AL DIA
                </Link>
                <Link className="text-gray-800" href="https://unifi-educacion.com/contacto/">
                  CONTACTO
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <ModalComponent
    handleClickPage={handleClickPage} 
    isOpen={isModalOpen} 
    closeModal={closeModal} />

    <Pago
    open ={open}
    closePage={closePage}
    handleChange={handleChange}
    handleSubmit={handleSubmit}
    />

    {openGracias && (
    <Gracias
    closeG={closeG}
    />
    )}

    {openFallo && (
    <Fallo
    closeFail={closeFail}
    />
    )}

    <section className="bg-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Cursos Disponibles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
