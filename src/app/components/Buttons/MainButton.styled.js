import styled from "styled-components";
import { Button } from "antd";

export const ButtonStyled = styled(Button)`
  background: rgba(255, 255, 255, 0.5);
  width: 18.75rem;
  height: 4rem;
  border: 3px solid #ffffff;
  box-sizing: border-box;
  border-radius: 2.8rem;
  color: #ffffff;
  :focus,
  :hover {
    background: #fff;
    color: #316c7a;
    border: none;
  }
`;
