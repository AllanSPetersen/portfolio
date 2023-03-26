import Link from 'next/link';
import { InicioContainer } from '../styles/HomeStyles'
import { HomeHero } from "../components/HomeHero";
import { Header } from "../components/Header";
import { Projetos } from '../components/Projetos';
import Conhecimentos from '../components/Conhecimentos';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';

export default function Home() {
useEffect(()=> {
  Aos.init({ duration:1500 });
}, [])

  return (  
  <InicioContainer>
    <Head>
      <title>Home</title>
    </Head>
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
