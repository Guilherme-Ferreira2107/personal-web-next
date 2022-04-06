import styled from "styled-components";

export const WrapperAbout = styled.section`
  width: 100%;
  background-color: rgba(10, 10, 10, 0.9);
  padding: 80px 20px;

  @media (min-width: 768px) {
    padding: 80px 100px;
  }

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
  margin: auto;
  max-width: 900px;

  & div {
    width: 100%;
  }

  p,
  span {
    font-family: "Barlow Condensed", sans-serif;
    font-size: 1rem;
    font-weight: 300;
    position: relative;
    z-index: 2;

    @media (min-width: 465px) {
      font-size: 1.2rem;
    }

    @media (min-width: 768) {
      font-size: 1.5rem;
    }
  }

  span {
    color: #0093e9;
  }

  &:before {
    content: "SOBRE";
    position: absolute;
    left: 0;
    top: 0;
    margin: -5% 0 0 -20%;
    z-index: 1;
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 500;
    font-size: 10rem;
    color: rgba(55, 55, 55, 0.4);

    @media (min-width: 768px) {
      font-size: 18rem;
      margin: -5% 0 0 -5%;
    }

    @media (min-width: 976px) {
      font-size: 20rem;
    }
  }
`;

export const ContentImage = styled.div`
  text-align: center;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }

  img {
    min-width: 140px !important;
    min-height: 140px !important;
    object-fit: cover;
    overflow: hidden;
    border-radius: 50%;

    @media (min-width: 768px) {
      min-width: 300px !important;
      min-height: 300px !important;
    }
  }
`;

export const ContentImageMobile = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 40px;

  span {
    width: 140px !important;
    height: 140px !important;

    @media (min-width: 465px) {
      min-width: 200px !important;
      min-height: 200px !important;
    }
  }

  img {
    min-width: 140px !important;
    min-height: 140px !important;
    object-fit: cover;
    overflow: hidden;
    border-radius: 50%;

    @media (min-width: 465px) {
      min-width: 200px !important;
      min-height: 200px !important;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
