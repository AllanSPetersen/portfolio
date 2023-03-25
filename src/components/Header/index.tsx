import NavLink from './NavLink';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
     <ul>
      <NavLink titulo="Inicio" path="/" />
      <NavLink titulo="Projetos" path="/Projetos" />
     </ul>
    </Container>
  );
}
