/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem  } from './styles';
import picture from '../../assets/pessoa.webp';


export function HomeHero() {
  return (
    
    <Container> 
        <img src="https://i.ibb.co/gFG0RW7/vectorpouch180500027-removebg-preview.png"/>
        <div>
          <TextContainer>
            <h1>Oi, Viajante</h1>
            <h2>Me chamo Állan</h2>
          </TextContainer>
          <InfosContainer>
            <CodeItem>
              <span className="comment">//Tripulantes</span>
              <span className="purple">Ticket</span>{'\u007B'}
              <div>
                Tripulante: <span className="blue">001</span>
              </div>
              <div>
                Espaçonave: <span className="blue">Portfólio</span>
              </div>
              {'\u007D'}
            </CodeItem>
            <CodeItem>
              <span className="purple">Astronauta</span>{'\u007B'}
              <div>
                Nome: <span className="blue">Állan</span>
              </div>
              <div>
                Sobrenome: <span className="blue">Petersen</span>
              </div>
              {'\u007D'}
            </CodeItem>
          </InfosContainer>
        </div>
    </Container>
  );
}
