import Image from "next/image";
import moment from "moment";

import Package from "../../../package.json";
import { WrapperFooter } from "./footer.styles";
import iconLinkedin from "../../../assets/images/linkedin.svg";
import iconWhatsapp from "../../../assets/images/whatsapp.png";
import iconGithub from "../../../assets/images/github.svg";

const Footer = () => {
  const currentYear = moment().format("YYYY");

  return (
    <WrapperFooter>
      <a
        href="https://www.linkedin.com/in/guifsantos/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="icon-social-media"
          src={iconLinkedin}
          alt="Linkedin"
          width="40"
          height="40"
        />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5511986701058"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="icon-social-media"
          src={iconWhatsapp}
          alt="Whatsapp"
          width="40"
          height="40"
        />
      </a>
      <a
        href="https://github.com/Guilherme-Ferreira2107"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="icon-social-media"
          src={iconGithub}
          alt="Github"
          width="40"
          height="40"
        />
      </a>
      <p>
        Copyright ©{currentYear} Todos os direitos reservados | Desenvolvedor
        Fullstack Javascript{" "}
        <a
          href="https://www.linkedin.com/in/guifsantos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GUILHERME SANTOS
        </a>
      </p>
      <small>V.{Package.version}</small>
    </WrapperFooter>
  );
};

export default Footer;
