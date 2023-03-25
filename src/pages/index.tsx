import Link from 'next/link';
import { InicioContainer } from '../styles/HomeStyles'
import { HomeHero } from "../components/HomeHero";
import { Header } from "../components/Header";
import { Projetos } from '../components/Projetos';
import Conhecimentos from '../components/Conhecimentos';
import Footer from '../components/Footer';

export default function Home() {
  return (  
  <InicioContainer>
    <Header /> 

    <main className="container">
      <HomeHero />
      <Conhecimentos />
      <Projetos  />
      
    </main>

  <Footer />
  </InicioContainer>
  
  );
}
