import { Header } from "../../components/Header";
import ItemProjetos from "../../components/ItemProjetos";

import { ProjetosContainer } from "../../styles/ProjetosStyles";

import Head from 'next/head';



export default function Projetos() {
    return (
        <ProjetosContainer>
            <Head>
                <title>Meus Projetos</title>
            </Head>
            <Header />
            <main className="container"> 
                <ItemProjetos 
                    title="Projeto 01"
                    type="WebSite"
                    slug="teste"
                    imgUrl="https://punkt.de/_Resources/Persistent/c/1/d/9/c1d9a298cf4a8e2864a72826509de6e3e8724144/React_Native_Logo-1140x599.png"
                />
            </main>
            </ProjetosContainer>
    )
}