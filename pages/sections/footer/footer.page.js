import Image from "next/image";
import moment from "moment";

import Package from "../../../package.json";
import { WrapperFooter } from "./styles";
import iconLinkedin from "../../../assets/images/linkedin.svg";
import iconWhatsapp from "../../../assets/images/whatsapp.png";
import iconGithub from "../../../assets/images/github.svg";

export default function Footer() {
  const currentYear = moment().format("YYYY");

  return (
    <WrapperFooter>
      <p>
        Copyright ©{currentYear} Todos os direitos reservados | Desenvolvedor
        Fullstack Javascript
        <a
          href="https://www.linkedin.com/in/guifsantos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GUILHERME SANTOS
        </a>
      </p>
    </WrapperFooter>
  );
}
