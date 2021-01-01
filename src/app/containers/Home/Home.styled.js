import styled from "styled-components";
import { ButtonStyled } from "../../components/Buttons/MainButton.styled";
import { Header } from "../../components/Text/Text.styled";
import { Image } from "antd";

export const HomeMain = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

export const HeadingImage = styled(Image)`
  user-select: none;
`;

export const MainHeader = styled(Header)`
  position: absolute;
  left: 0;
  right: 0;

  font-weight: 70;
  font-size: 2.5rem;
  line-height: 2.93rem;
`;

export const MainButton = styled(ButtonStyled)`
  position: absolute;
  left: auto;
  right: auto;
  margin-top: 150px;
  background: rgba(255, 255, 255, 0);
  align-self: center;
  font-size: 24px;
`;
