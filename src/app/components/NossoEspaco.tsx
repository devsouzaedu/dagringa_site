"use client";

import Image from 'next/image';

const NossoEspaco = () => {
  const espacoImages = [
    {
      src: '/images/espaço_da_gringa_interno_1.jpg',
      alt: 'Espaço interno da Barbearia Da Gringa'
    },
    {
      src: '/images/espaço_da_gringa_interno_2.jpg',
      alt: 'Ambiente da Barbearia Da Gringa'
    }
  ];

  return (
    <section id="espaco" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Nosso Espaço</h2>
          <div className="h-1 w-20 bg-[#456041] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Um ambiente moderno e aconchegante para você se sentir em casa enquanto recebe o melhor atendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {espacoImages.map((img, index) => (
            <div key={index} className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02] duration-300" data-aos="fade-right">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-[#456041] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Ambiente Climatizado</h3>
              <p className="text-gray-600">Conforto térmico durante toda sua permanência.</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-[#456041] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Higiene Garantida</h3>
              <p className="text-gray-600">Materiais esterilizados e descartáveis.</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-[#456041] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Entretenimento</h3>
              <p className="text-gray-600">TV, música e wi-fi gratuito para sua diversão.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-semibold mb-6 text-black">Venha conhecer nosso espaço!</p>
          <a 
            href="https://wa.me/5511985406170" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
          >
            Agende sua visita
          </a>
        </div>
      </div>
    </section>
  );
};

export default NossoEspaco;
