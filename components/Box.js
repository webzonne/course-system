import React from 'react'

export default function Box({openModal, titulo, by}) {
  return (
    <>
    <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">{titulo}</h3>
        <p className="mt-10 text-gray-700">by: {by}</p>
        <div className="mt-4 text-center w-full">
            <button onClick={openModal} className="w-full text-black border border-slate-200 font-bold py-2 px-4 rounded">Comprar</button>
        </div>
    </div>
    </>
  )
}

