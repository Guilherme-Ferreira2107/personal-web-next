import Head from "next/head";
import { About, Aside, Footer, Header, Presentation } from "./sections";
import { Wrapper, WrapperContent } from "./_app.styles";

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Guilherme Santos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WrapperContent>
        <Aside />
        <div>
          <Header />
          <About />
          <Presentation />
          <Footer />
        </div>
      </WrapperContent>
    </Wrapper>
  );
}
