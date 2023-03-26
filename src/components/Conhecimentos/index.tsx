import { FaReact } from "react-icons/Fa";
import { IoLogoJavascript,IoLogoNodejs } from "react-icons/Io";
import { SiTypescript } from "react-icons/Si";
import SectionTitle from "../SectionTitle";
import ConhecimentoItem from "./ConhecimentoItem";
import { Container } from "./styles";


function Conhecimentos () {
    return (
        <Container data-aos="fadeup">
  
          <SectionTitle title="Conhecimentos" />
          <section>
            <ConhecimentoItem linguagen="JavaScript" icon={<IoLogoJavascript />} />
            <ConhecimentoItem linguagen="TypeScript" icon={<SiTypescript />} />
            <ConhecimentoItem linguagen="React.JS" icon={<FaReact />} />
            <ConhecimentoItem linguagen="Node.JS" icon={<IoLogoNodejs />} />
          </section>
        </Container>
    );
};

export default Conhecimentos;