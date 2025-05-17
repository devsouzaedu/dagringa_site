"use client";

import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Vídeo de fundo */}
      <video
        className="absolute w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/images/video_hero.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay escuro para melhorar legibilidade */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-3xl" data-aos="fade-right" data-aos-delay="200">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            BARBEARIA <span className="text-[#456041]">DA GRINGA</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Corte na régua, estilo gringo e aquele atendimento que faz você voltar sempre!
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a 
              href="https://wa.me/5511985406170" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors"
            >
              Agendar Agora
            </a>
            <Link 
              href="#servicos" 
              className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-6 py-3 rounded-full font-semibold transition-all"
            >
              Ver Serviços
            </Link>
          </div>
        </div>
      </div>
      {/* Seta para baixo */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <Link href="#quem-somos">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
