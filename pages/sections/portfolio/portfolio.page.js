import Image from "next/image";

import { WrapperPortfolio, ContentPortfolio, ContentImage } from "./styles";

import logoBatalhaDev from "../../../assets/images/bdev-example.png";
import logoHelppy from "../../../assets/images/hellpy-example.png";
import proTrader from "../../../assets/images/ptrader-example.png";
import virta from "../../../assets/images/virta-example.png";
import logoGdat from "../../../assets/images/gdat-all.png";
import logoDryve from "../../../assets/images/dryve-example.png";

export default function Portfolio() {
  const portfolios = [
    {
      logo: logoBatalhaDev,
      title: "BATALHA DEV",
      description:
        "Página institucional e Aplicação web, desenvolvido em Next.js e React.js. Disponível para diversos dispositivos. Batalha Dev é um jogo feito para amantes da lógica.",
      url: "https://www.batalhadev.com.br/",
      link: "VISITAR PÁGINA",
    },
    {
      logo: logoHelppy,
      title: "HELPPY",
      description:
        "Landing Page em Next.js, disponível para diversos dispositivos, Acessibilidade e SEO otimizado para pesquisas no google.",
      url: "https://www.helppy.com.br/",
      link: "VISITAR PÁGINA",
    },
    {
      logo: proTrader,
      title: "PRO TRADER INVESTING",
      description:
        "Desenvolvido em React.js. Aplicação web que gerencia e realiza rápidos cálculos para investidores do mercado financeiro da modalidade Opções Binárias.",
      url: "https://app-protrader.herokuapp.com/",
      link: "VISITAR PÁGINA",
    },
    {
      logo: virta,
      title: "MONITORAMENTO VIRTA",
      description:
        "Desenvolvido em React Native. Aplicativo mobile para monitoramento de notícias em tempo real. Notificação de notícia. Visualização de imagens, áudios e vídeos. Compartilhamento de notícia. Favoritar notícias. Busca por palavra, editoria e data. Criação de gráficos baseado no histórico de notícias.",
      url: "https://play.google.com/store/apps/details?id=br.com.grupovirta.monitoramento",
      link: "VISITAR PÁGINA",
    },
    {
      logo: logoGdat,
      title: "ASSISTÊNCIA WEB",
      description:
        "Desenvolvido em React.js. Aplicação simplificada para controle e gestão de estoque.",
      url: "https://gdat.surge.sh/",
      link: "VISITAR PÁGINA",
    },
    {
      logo: logoDryve,
      title: "DRYVE",
      description: "Desenvolvido em React.js. Desafio proposto pela Dryve.",
      url: "https://dryve-challenge.surge.sh/",
      link: "VISITAR PÁGINA",
    },
  ];

  return (
    <WrapperPortfolio id="portfolio">
      <h1>
        MEU <span>PORTFÓLIO</span>
      </h1>
      <ContentPortfolio>
        {portfolios.map((item, idx) => (
          <div key={idx}>
            <ContentImage>
              <a href={item.url} target="_blank">
                <Image
                  src={item.logo}
                  alt={item.title}
                  aria-labelledby={item.title}
                />
              </a>
            </ContentImage>
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <a href={item.url} target="_blank">
                {item.link}
              </a>
            </div>
          </div>
        ))}
      </ContentPortfolio>
    </WrapperPortfolio>
  );
}
