// components/Modal.js

import { useState } from 'react';

const ModalComponent = ({ isOpen, closeModal }) => {

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
          <h2 className="text-xl font-semibold mb-4">Pago movil:</h2>

          {/* pago mobile */}
          <div className='flex justify-around'>
            {/* venezuela */}
            <div>
              <div className="mb-4">
                <p className="mb-4">
                  <strong>Banco de Venezuela:</strong>
                </p>
                <p>
                  <strong>Cedula:</strong>
                </p>
                <span>18353465</span>
                <p>
                  <strong>Telefono:</strong>
                </p>
                <span>0412-3496789</span>
              </div>
            </div>
            {/* mercantil */}
            <div>
              <div className="mb-4">
                <p className="mb-4">
                  <strong>Banco Mercantil:</strong>
                </p>
                <p>
                  <strong>Cedula:</strong>
                </p>
                <span>18353465</span>
                <p>
                  <strong>Telefono:</strong>
                </p>
                <span>0412-3496789</span>
              </div>
            </div>
          </div>

          <button
            onClick={closeModal}
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
