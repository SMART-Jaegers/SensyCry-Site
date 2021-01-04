import React from "react";
import { Article, ArticleImage, HeadingParagraph } from "./HomeArticle.styled";

const HomeArticle = ({ image, text, reverse }) => {
  return (
    <Article reverse={reverse}>
      <ArticleImage src={image} preview={false}></ArticleImage>
      <HeadingParagraph>{text}</HeadingParagraph>
    </Article>
  );
};

export default HomeArticle;
