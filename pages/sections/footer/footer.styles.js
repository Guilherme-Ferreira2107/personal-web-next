import styled from "styled-components";

export const WrapperFooter = styled.footer`
  padding: 20px;
  text-align: center;

  a {
    margin: 0 10px;
    transition: all 0.2s linear;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }

  p {
    margin: 20px 0;
  }
`;
