import React from 'react';
import Image from 'next/image';


export default function Box({openModal, curso_ima1, handleImpri, titulo, by}) {
  return (
    <>
    <div onClick={()=>{handleImpri(titulo)}} className="bg-gray-100 rounded-lg relative h-full min-h-[560px]">
        <div>
          <Image src={curso_ima1} alt='imagen'/>
        </div>
        <h3 className="p-6 mt-4 mb-6 text-xl font-semibold  text-slate-400 mb-2">{titulo}</h3>
        {/* absolute */}
        <div className='absolute bottom-0 left-0 w-full p-6'>
          <p className="mt-10 text-gray-700">by: {by}</p>
          <div className="mt-6 text-center w-full">
            <button onClick={openModal} className="bg-teal-800 w-full text-white border text-cyan-950 border-slate-200 font-semibold py-2 px-4 rounded">Comprar</button>
          </div>
        </div>
    </div>
    </>
  )
}

