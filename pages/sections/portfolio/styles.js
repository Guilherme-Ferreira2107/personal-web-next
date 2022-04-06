import styled from "styled-components";

export const WrapperPortfolio = styled.section`
  width: 100%;
  background-color: rgba(10, 10, 10, 0.9);
  padding: 80px 20px;

  @media (min-width: 768px) {
    padding: 80px 100px;
  }

  h1 {
    text-align: center;
    letter-spacing: 0.2rem;
    font-weight: 500;
    font-size: 2rem;
    color: white;
    margin-bottom: 40px;

    span {
      color: #0093e9;
    }
  }
`;

export const ContentPortfolio = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
  max-width: 1100px;

  & > div {
    margin: 20px auto;

    @media (min-width: 465px) {
      width: calc(100% / 2);
      min-width: 300px;
      max-width: 310px;
    }

    @media (min-width: 774px) {
      width: calc(100% / 3);
      min-width: 300px;
      max-width: 310px;
      /* margin: 20px 8px; */
    }

    h4 {
      font-size: 1rem;
      font-weight: 300;
      color: rgba(255, 255, 255, 0.5);
      margin: 10px 0;
    }

    p {
      font-size: 1.25rem;
      font-weight: 300;
      color: rgba(255, 255, 255, 1);
      margin: 10px 0;
    }

    a {
      color: #0093e9;
      text-decoration: underline;
      opacity: 0.5;
      transition: all 0.15s linear;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const ContentImage = styled.div`
  filter: grayscale(1);
  transition: all 0.25s linear;
  margin: 0 8px;
  min-height: 200px;

  &:hover {
    filter: grayscale(0);
  }

  img {
    transform: scale(1);
    transition: all 0.25s linear;

    &:hover {
      transform: scale(1.1);
    }

    @media (min-width: 768px) {
      max-height: initial;
    }
  }
`;
