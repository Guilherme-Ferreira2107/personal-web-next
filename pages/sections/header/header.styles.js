import styled from "styled-components";

export const WrapperHeader = styled.section`
  width: 100%;
  height: 80px;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background-color: rgba(50, 50, 50, 0);

  &.scroll-active {
    position: fixed;
    z-index: 5;
    background-color: rgba(50, 50, 50, 0.95);
    box-shadow: 0 0 35px rgb(0 0 0 / 10%);
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    animation-name: showHeader;
    animation-duration: 1s;

    @keyframes showHeader {
      from {
        top: -150px;
        opacity: 0;
      }
      to {
        top: 0px;
        opacity: 1;
      }
    }
  }
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 30px;
`;

export const NavbarHeader = styled.div`
  display: none;

  &.scroll-active {
    display: initial;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const NavbarCollapse = styled.div`
  display: flex;
  justify-content: flex-end;

  &.scroll-active {
    a {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  ul {
    list-style: none;
    display: flex;
  }

  li {
    margin: 4px 16px;

    a {
      color: rgba(50, 50, 50, 0.95);
    }
  }
`;
