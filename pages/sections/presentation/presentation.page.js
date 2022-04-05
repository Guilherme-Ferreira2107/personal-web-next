import { Aside } from "..";
import { WrapperPresentation, ContentPresentation } from "./styles";

export default function Presentation() {
  return (
    <WrapperPresentation>
      <Aside />
      <ContentPresentation>
        <div>
          <p>GUILHERME SANTOS</p>
          <span>CARINHO POR CADA LINHA DE CÓDIGO</span>
        </div>
      </ContentPresentation>
    </WrapperPresentation>
  );
}
