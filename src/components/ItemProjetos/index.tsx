import { Container } from './styles';
import Link from 'next/link';

interface ProjetoItemProps {
    title: string;
    type: string;
    imgUrl: string;
    slug: string;
}

function ItemProjetos({title, type, imgUrl, slug}: ProjetoItemProps) {
    return (
      <Container imgUrl={imgUrl}>
        <Link href={`/projetos/${slug}`} legacyBehavior>
            <a>
                <div className="overlay"/>
                <section>
                    <h1>{title}</h1>
                    <h2>{type}</h2>
                </section>

            </a>
        </Link>
      </Container>
    );
};

export default ItemProjetos;