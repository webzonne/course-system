// components/Modal.js

import { useState } from 'react';

const ModalComponent = ({ isOpen, closeModal, handleClickPage }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(paymentData); // Aquí puedes hacer lo que quieras con los datos de pago
    closeModal();
  };
  return (
    <div
      className={`fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white py-8 w-[630px] px-12 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Transferencia:</h2>

          {/* pago mobile */}
          <div className=''>
            {/* venezuela */}
            <div>
              <div className="border p-4 mb-4">
                <p className="mb-4">
                  <strong className='text-blue-400'>Banco de Venezuela:</strong>
                </p>
                 {/* TITULAR */}
                <p>
                  <strong className='text-blue-600'>Titular</strong>
                </p>
                <span>Corporativo Financialiuris SR10, C.A</span><br/><br/>
                <p>
                  <strong className='text-blue-600'>Nº de cuenta</strong>
                </p>
                <span>0102-0131480000330068</span><br/><br/>
                <p>
                  {/* RIF */}
                  <strong className='text-blue-600'>RIF:</strong>
                </p>
                <span>J-412715402</span>
              </div>
            </div>
             {/* Banco Nacional de Credito */}
            <div className='border p-4 mb-4'>
              <div className="mb-4">
                <p className="mb-4">
                  <strong className='text-blue-400'>Banco Nacional de Credito:</strong>
                </p>
                {/* TITULAR */}
                <p>
                  <strong className='text-blue-600'>Titular</strong>
                </p>
                <span>Corporativo Financialiuris SR10, C.A</span><br/><br/>
                <p>
                  {/* RIF */}
                  <strong className='text-blue-600'>RIF:</strong>
                </p>
                <span>J-412715402</span><br/><br/>

                    {/* Numero de transferencia corriente */}
                <p>
                  <strong className='text-blue-600'>Nº de cuenta corriente</strong>
                </p>
                <span>0191-0001-44-2101167938</span><br/><br/>
                      {/* Numero de transferencia divisa */}
                      <p>
                  <strong className='text-blue-600'>Nº de Transferencia cuenta divisa</strong>
                </p>
                <span>0191-0001-40-2301042797</span>
              </div>
            </div>
            {/* ZELLE */}
            <div className='border p-4 mb-4'>
              <p className='mb-4'>
                <strong className='text-blue-400'>ZELLE:</strong><br/>
                <span>afinancialiuris@gmail.com</span><br/>
                <span>Financialiuris LLC</span><br/>
              </p>
            </div>
            {/* EFECTIVO */}
            <div className='border p-4 mb-4'>
              <strong className='text-blue-400'>EFECTIVO:</strong>
              <p className='mb-4'>A ser cancelado en nuestras oficinas, ubicadas en la Torre Cari, piso 6, oficina única, Campo Alegre, Chacao, estado Miranda. Punto de referencia: Bajando por la embajada de Portugal, diagonal al C.C. Lido.</p>
            </div>
          </div>

          <button
            onClick={handleClickPage}
            className="bg-green-500 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Enviar referencia
          </button>
        </div>
        <button
          onClick={closeModal}
          className="absolute top-0 right-0 m-3 text-gray-500 hover:text-gray-700"
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
    </div>
  );
};

export default ModalComponent;
