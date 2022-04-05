import { Aside } from "../../sections";
import { WrapperAbout, ContentAbout } from "./about.styles";

const About = () => {
  return (
    <WrapperAbout>
      <Aside />
      <ContentAbout>
        <p>About</p>
      </ContentAbout>
    </WrapperAbout>
  );
};

export default About;
