import Image from "next/image";

import {
  WrapperAside,
  ContentNamePanel,
  ContentSocialMedia,
  SocialList,
  VerticalDivisor,
} from "./styles";
import iconLinkedin from "../../../assets/images/linkedin.svg";
import iconWhatsapp from "../../../assets/images/whatsapp.png";
import iconGithub from "../../../assets/images/github.svg";

export default function Aside() {
  return (
    <WrapperAside>
      <ContentNamePanel>
        <div>
          <p>
            <span>Por</span>
            <strong>Guilherme</strong>Santos
          </p>
        </div>
      </ContentNamePanel>
      <ContentSocialMedia>
        <SocialList>
          <li>
            <VerticalDivisor />
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/guifsantos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="icon-social-media"
                src={iconLinkedin}
                alt="Linkedin"
                width="30"
                height="30"
              />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=5511986701058"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="icon-social-media"
                src={iconWhatsapp}
                alt="Whatsapp"
                width="30"
                height="30"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Guilherme-Ferreira2107"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="icon-social-media"
                src={iconGithub}
                alt="Github"
                width="30"
                height="30"
              />
            </a>
          </li>
        </SocialList>
      </ContentSocialMedia>
    </WrapperAside>
  );
}
