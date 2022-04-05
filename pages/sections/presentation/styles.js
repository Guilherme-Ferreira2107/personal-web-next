import styled from "styled-components";

export const WrapperPresentation = styled.section`
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  justify-content: space-between;
`;

export const ContentPresentation = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: right;
  background-color: #0093e9;
  background-image: linear-gradient(
    160deg,
    #0093e9 0%,
    #1560bd 50%,
    #041e42 100%
  );

  & div {
    max-width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p {
    position: relative;
    z-index: 1;
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 500;
    font-size: 3rem;
    color: #07398050;
    letter-spacing: 0.4rem;
    line-height: 2.5rem;

    @media (min-width: 465px) {
      font-size: 10rem;
      letter-spacing: 0.2rem;
      line-height: 7.05rem;
    }
  }

  span {
    font-family: "Barlow Condensed", sans-serif;
    z-index: 2;
    color: white;
    font-weight: 300;
    margin-right: 10px;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      margin-left: 66%;
      margin-bottom: 6px;
      width: 30px;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
`;
