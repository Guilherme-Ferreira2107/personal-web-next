import { Aside } from "../../sections";
import {
  WrapperPresentation,
  ContentPresentation,
} from "./presentation.styles";

const Presentation = () => {
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
};

export default Presentation;
