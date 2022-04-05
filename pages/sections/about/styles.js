import styled from "styled-components";

export const WrapperAbout = styled.section`
  width: 100%;
  background-color: rgba(10, 10, 10, 0.9);
  padding: 80px 100px;

  h1 {
    font-family: "Barlow Condensed", sans-serif;
    text-align: center;
    letter-spacing: 0.2rem;
    font-weight: 500;
    font-size: 2rem;
    color: white;
    margin-bottom: 40px;

    span {
      font-family: "Barlow Condensed", sans-serif;
      color: #0093e9;
    }
  }
`;

export const ContentAbout = styled.div`
  position: relative;
  display: flex;
  color: white;

  p,
  span {
    font-family: "Barlow Condensed", sans-serif;
    font-size: 1.5rem;
    font-weight: 300;
    position: relative;
    z-index: 2;
  }

  span {
    color: #0093e9;
  }

  .perfil {
    min-width: 300px !important;
    min-height: 300px !important;
    object-fit: cover;
    overflow: hidden;
    border-radius: 50%;
  }

  &:before {
    content: "SOBRE";
    position: absolute;
    left: 0;
    top: 0;
    margin: -5% 0 0 -5%;
    z-index: 1;
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 500;
    font-size: 20rem;
    color: rgba(55, 55, 55, 0.4);
  }
`;

export const ContentImage = styled.div`
  text-align: center;
`;
