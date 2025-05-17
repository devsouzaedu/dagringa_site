import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import QuemSomos from "./components/QuemSomos";
import Servicos from "./components/Servicos";
import NossoEspaco from "./components/NossoEspaco";
import NossoTime from "./components/NossoTime";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuemSomos />
        <Servicos />
        <NossoEspaco />
        <NossoTime />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
