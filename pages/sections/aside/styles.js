import styled from "styled-components";

export const WrapperAside = styled.aside`
  position: relative;
  width: 100px;
  height: 100vh;
  background-color: #2b2b2b;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const ContentNamePanel = styled.div`
  & div {
    margin-top: 120px;
    margin-left: -80px;
    width: 250px;
    transform: rotate(-90deg);

    p {
      color: rgba(255, 255, 255, 0.5);
      font-size: 1.4rem;
      letter-spacing: 0.15rem;
    }

    strong {
      font-size: 2rem;
    }

    span {
      font-size: 0.8rem;
    }
  }
`;

export const ContentSocialMedia = styled.div`
  text-align: center;
`;

export const VerticalDivisor = styled.div`
  height: 50px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    height: 30px;
    width: 1px;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export const SocialList = styled.ul`
  width: 100%;
  list-style: none;

  li {
    margin: 10px 0;

    a {
      transition: all 0.3s linear;
      filter: grayscale(1);

      &:hover {
        filter: grayscale(0);
      }
    }
  }
`;
