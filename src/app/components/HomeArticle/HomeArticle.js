import React from "react";
import { Article, ArticleImage, HeadingParagraph } from "./HomeArticle.styled";
import Heading1 from "../../images/description_1.png";

const HomeArticle = ({ image, text, reverse }) => {
  return (
    <Article reverse={reverse}>
      <ArticleImage src={image} preview={false}></ArticleImage>
      <HeadingParagraph>{text}</HeadingParagraph>
    </Article>
  );
};

export default HomeArticle;
