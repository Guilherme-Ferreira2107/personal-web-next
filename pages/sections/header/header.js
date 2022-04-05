import { useState, useEffect } from "react";
import {
  WrapperHeader,
  Navbar,
  NavbarHeader,
  NavbarCollapse,
} from "./header.styles";

const Header = () => {
  const [offset, setOffset] = useState(0);
  const [classScroll, setClassScroll] = useState("");

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setClassScroll(offset > 0 ? "scroll-active" : "");
  }, [offset]);

  return (
    <WrapperHeader className={classScroll}>
      <Navbar>
        <NavbarHeader className={classScroll}>
          <a href="#TOP">FULLSTACK DEVELOPER</a>
        </NavbarHeader>
        <NavbarCollapse className={classScroll}>
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
        </NavbarCollapse>
      </Navbar>
    </WrapperHeader>
  );
};

export default Header;
