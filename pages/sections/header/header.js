import { WrapperHeader } from "./header.styles";

const Header = () => {
  return (
    <WrapperHeader>
      <nav>
        <div className="navbar-header">
          <button type="button">menu</button>
          <a href="#TOP" className="navbar-brand">
            FULLSTACK DEVELOPER
          </a>
        </div>
        <div className="navbar-collapse">
          <ul>
            <li>
              <a href="#intro">SOBRE</a>
            </li>
            <li>
              <a href="#education">EDUCAÇÃO</a>
            </li>
            <li>
              <a href="#experience">EXPERIÊNCIA</a>
            </li>
            <li>
              <a href="#skills">HABILIDADES</a>
            </li>
            <li>
              <a href="#portfolio">PORTFÓLIO</a>
            </li>
            <li>
              <a href="#contacts">CONTATOS</a>
            </li>
          </ul>
        </div>
      </nav>
    </WrapperHeader>
  );
};

export default Header;
