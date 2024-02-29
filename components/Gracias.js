import Image from 'next/image';
import check from '@/images/check.png'

const Gracias = ({ openG, closeG }) => {

  return (
    <div
      className={`fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 ${
        openG ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white py-8 w-[630px] px-12 rounded-md">
            <div className='flex justify-center'>
                <Image className='mb-4' width={'32'} height={'32'} layout='fixed' objectFit='contain' src={check}/>
            </div>
          <div className='text-center'>
            <p className="text-lg mb-6">Gracias por su compra. Pronto le enviaremos a su correo los datos para ingresar al curso.</p>
          </div>
         <div className='text-center'>
         <button
            onClick={closeG}
            className="bg-green-500 text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Cerrar
          </button>
         </div>
       
        </div>
        <button
          onClick={closeG}
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

export default Gracias;
