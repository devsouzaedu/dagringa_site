"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-[#456041] shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="z-50">
          <Image 
            src="/images/logo_barbearia_da_gringa.jpg" 
            alt="Logo Barbearia Da Gringa" 
            width={80} 
            height={80}
            className="rounded-md"
          />
        </Link>

        {/* Menu para desktop */}
        <nav className="hidden md:flex gap-6 items-center text-white">
          <Link href="/" className="font-medium hover:text-gray-200 transition-colors">
            Início
          </Link>
          <Link href="#quem-somos" className="font-medium hover:text-gray-200 transition-colors">
            Nossa História
          </Link>
          <Link href="#servicos" className="font-medium hover:text-gray-200 transition-colors">
            Serviços
          </Link>
          <Link href="#espaco" className="font-medium hover:text-gray-200 transition-colors">
            Nosso Espaço
          </Link>
          <Link href="#time" className="font-medium hover:text-gray-200 transition-colors">
            Equipe
          </Link>
          <Link href="#contato" className="font-medium hover:text-gray-200 transition-colors">
            Contato
          </Link>
          <a 
            href="https://wa.me/5511985406170" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary ml-2"
          >
            Agendar
          </a>
        </nav>

        {/* Botão menu hamburger para mobile */}
        <button 
          className="md:hidden z-50" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          <div className={`w-8 h-1 bg-white mb-1 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-8 h-1 bg-white mb-1 transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`w-8 h-1 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>

        {/* Menu para mobile */}
        <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <div className="h-full flex flex-col items-center justify-center gap-8 text-xl">
            <Link href="/" className="font-medium" onClick={() => setIsOpen(false)}>
              Início
            </Link>
            <Link href="#quem-somos" className="font-medium" onClick={() => setIsOpen(false)}>
              Nossa História
            </Link>
            <Link href="#servicos" className="font-medium" onClick={() => setIsOpen(false)}>
              Serviços
            </Link>
            <Link href="#espaco" className="font-medium" onClick={() => setIsOpen(false)}>
              Nosso Espaço
            </Link>
            <Link href="#time" className="font-medium" onClick={() => setIsOpen(false)}>
              Equipe
            </Link>
            <Link href="#contato" className="font-medium" onClick={() => setIsOpen(false)}>
              Contato
            </Link>
            <a 
              href="https://wa.me/5511985406170" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary mt-4" 
              onClick={() => setIsOpen(false)}
            >
              Agendar
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
