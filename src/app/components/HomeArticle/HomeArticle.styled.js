import styled from "styled-components";
import { Paragraph } from "../../components/Text/Text.styled";
import { Image } from "antd";

export const Article = styled.div`
  background: #f0f9f6;
  display: flex;
  flex-direction: ${(props) =>
    props.reverse === true ? "row-reverse" : "row"};
  justify-content: space-evenly;
  align-items: center;
  height: 280px;
  margin-top: 5vh;
`;

export const HeadingParagraph = styled(Paragraph)`
  width: 30vw;
  align-self: center;
  font-size: 1.25rem;
`;

export const ArticleImage = styled(Image)`
  user-select: none;
`;
