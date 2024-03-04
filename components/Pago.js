import React from 'react';

export default function Pago({ open, closePage, handleChange, handleSubmit }) {
  return (
    <>
      <div className={`fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 ${open ? "block" : "hidden"}`}>
        <div className='flex items-center justify-center min-h-screen'>
          <div className="bg-white py-8 w-[430px] px-12 rounded-md">
            <form onSubmit={handleSubmit}>
              {/* Nombre completo */}
              <label className='block text-gray-700 text-sm font-bold mb-2'>Nombre completo</label>
              <input required name='name' onChange={handleChange} type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' />
              {/* Numero telefonico */}
              <label className='block text-gray-700 text-sm font-bold mb-2'>Numero telefonico</label>
              <input required name='telefono' onChange={handleChange} type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' />
              {/* CEDULA/RIF */}
              <label className='block text-gray-700 text-sm font-bold mb-2'>Cedula/Rif</label>
              <input required name='cedula' onChange={handleChange} type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' />
              {/* Correo electronico */}
              <label className='block text-gray-700 text-sm font-bold mb-2'>Correo electronico</label>
              <input required name='email' onChange={handleChange} type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' />
              {/* Fecha del depósito */}
              <label className='block text-gray-700 text-sm font-bold mb-2'>Fecha del depósito</label>
              <input required name='fechaDeposito' onChange={handleChange} type='date' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' />
              {/* BANCO */}
              <label className='block text-gray-700 text-sm font-bold mb-2'>Banco a transferir:</label>
              <select name='banco' onChange={handleChange} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' required>
                <option value="" disabled>Elige el banco</option>
                <option value="Banco nacional de credito">Banco Nacional de Credito</option>
                <option value="banco de venezuela">Banco de Venezuela</option>
                <option value="Zelle">ZELLE</option>
              </select>
               {/*REFERNCIA */}
              <label className='block text-gray-700 text-sm font-bold mb-2'>Numero de Referencia:</label>
              <input required name='referencia' onChange={handleChange} type='text' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
              <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>
              </div>
            </form>
          </div>
        </div>

        <button
          onClick={closePage}
          className="absolute top-0 right-0 m-3 text-gray-100 hover:text-gray-700"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

      </div>
    </>
  )
}
