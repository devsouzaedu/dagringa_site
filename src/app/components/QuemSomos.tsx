"use client";

import Image from 'next/image';

const QuemSomos = () => {
  return (
    <section id="quem-somos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Nossa História</h2>
          <div className="h-1 w-20 bg-[#456041] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/barbearia_da_gringa_dono_inicio_na_frente_da_barbearia_antiga.jpg"
              alt="História da Barbearia Da Gringa"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#456041]">Quem Somos</h3>
            <p className="text-gray-700">
              Nascida da paixão pelos cortes perfeitos e atendimento personalizado, a Barbearia Da Gringa surgiu 
              com a missão de transformar a experiência masculina de cuidados pessoais em momentos de estilo e satisfação.
            </p>
            <p className="text-gray-700">
              Na Barbearia Da Gringa, cada detalhe importa. Do fade perfeito ao atendimento diferenciado, aqui você 
              sai pronto para impressionar. Nossa equipe de profissionais altamente qualificados está sempre atualizada 
              com as últimas tendências e técnicas para garantir o melhor resultado.
            </p>
            <p className="text-gray-700">
              Mais que uma barbearia, somos um espaço onde tradição e modernidade se encontram para criar o melhor 
              ambiente para nossos clientes. Venha conhecer o segredo por trás dos cortes mais alinhados da cidade!
            </p>
            <a 
              href="https://wa.me/5511985406170" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#456041] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#364830] transition-colors inline-block mt-4"
            >
              Agende seu horário
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
