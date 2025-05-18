"use client";

import Image from 'next/image';

const Servicos = () => {
  const servicos = [
    { nome: 'Corte', preco: 'R$ 45,00' },
    { nome: 'Barba', preco: 'R$ 35,00' },
    { nome: 'Sobrancelha', preco: 'R$ 15,00' },
    { nome: 'Corte e barba', preco: 'R$ 80,00' },
    { nome: 'Progressiva', preco: 'R$ 100,00' },
    { nome: 'Botox', preco: 'R$ 100,00' },
    { nome: 'Relaxamento', preco: 'R$ 50,00' }
  ];

  return (
    <section id="servicos" className="py-16 bg-[#456041] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <div className="h-1 w-20 bg-white mx-auto"></div>
          <p className="mt-4 text-white max-w-2xl mx-auto">
            Conheça nossos serviços e preços. Oferecemos o melhor em cuidados masculinos para você ficar com o visual impecável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center gap-x-8 gap-y-12 mx-auto">
          <div className="relative h-[500px] w-full max-w-md rounded-2xl overflow-hidden shadow-xl" data-aos="fade-right">
            <Image
              src="/images/foto_corte_cabelo_homem.jpg"
              alt="Serviços Barbearia Da Gringa"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <div className="w-full max-w-lg" data-aos="fade-left" data-aos-delay="100">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-[#456041] py-4 px-6 text-center">
                <h3 className="text-2xl font-semibold text-white">Tabela de Preços</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {servicos.map((servico, index) => (
                  <div key={index} className="flex justify-between py-5 px-6 hover:bg-gray-50 transition-colors">
                    <div>
                      <span className="font-medium text-lg text-black">{servico.nome}</span>
                    </div>
                    <p className="font-semibold text-lg text-[#456041]">{servico.preco}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="https://wa.me/5511985406170" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors"
              >
                Agendar agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
