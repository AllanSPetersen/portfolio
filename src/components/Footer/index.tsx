import { Container } from './styles';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';

function Footer() {
 function handleRedirect(url: string) {
  window.open(url);
 }

 function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior:'smooth',
  })
 }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <section>
          
         <AiOutlineGithub 
            onClick={()=> handleRedirect("https://github.com/AllanSPetersen")}
         />
         <AiFillLinkedin 
            onClick={()=> handleRedirect("https://www.linkedin.com/in/allan-petersen-448552238/")}
         />

         </section>
        </div>
      </Container>
  );
}

export default Footer;