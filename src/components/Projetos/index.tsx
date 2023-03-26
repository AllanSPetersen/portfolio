
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';
import Link from 'next/link';


export function Projetos() {
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos"/>
      <section data-aos="fadeup">
        <ProjetoItem 
          img="https://punkt.de/_Resources/Persistent/c/1/d/9/c1d9a298cf4a8e2864a72826509de6e3e8724144/React_Native_Logo-1140x599.png"
          title="Projeto 01"
          type="WebSite"
          slug="teste"
        />
        <ProjetoItem 
                  img="https://punkt.de/_Resources/Persistent/c/1/d/9/c1d9a298cf4a8e2864a72826509de6e3e8724144/React_Native_Logo-1140x599.png"
                  title="Projeto 01"
                  type="WebSite"
                  slug="teste"/>
        <ProjetoItem 
                  img="https://punkt.de/_Resources/Persistent/c/1/d/9/c1d9a298cf4a8e2864a72826509de6e3e8724144/React_Native_Logo-1140x599.png"
                  title="Projeto 01"
                  type="WebSite"
                  slug="teste"/>
      </section>
      <button type="button">
        <Link legacyBehavior href="/projetos">
          <a>Ver todas as paradas!</a>
        </Link>
      </button>
    </Container>
  );
}
