import React from "react";
import {
  HomeMain,
  MainButton,
  MainHeader,
  Headings,
  Heading,
  HeadingImage,
  HeadingParagraph,
  ImageWrapper,
} from "./Home.styled";
import Heading1 from "../../images/description_1.png";
import Heading2 from "../../images/description_2.png";
import Heading3 from "../../images/description_3.png";

const Home = () => {
  return (
    <React.Fragment>
      <HomeMain>
        <MainHeader>Зупини насилля</MainHeader>
        <MainButton>Більше про нас</MainButton>
      </HomeMain>
      <Headings>
        <Heading>
          <HeadingImage
            style={{
              backgroundImage: `url(${Heading1})`,
            }}
          >
            <ImageWrapper>
              <div style={{ height: "28vh" }}></div>
            </ImageWrapper>
          </HeadingImage>

          <HeadingParagraph>
            Але щоб ви зрозуміли, звідки виникає це хибне уявлення людей,
            цуратись насолоди і вихваляти страждання, я розкрию перед вами всю
            картину і роз’ясню, що саме говорив цей чоловік.
          </HeadingParagraph>
        </Heading>
        <Heading>
          <HeadingParagraph>
            Але щоб ви зрозуміли, звідки виникає це хибне уявлення людей,
            цуратись насолоди і вихваляти страждання, я розкрию перед вами всю
            картину і роз’ясню, що саме говорив цей чоловік.
          </HeadingParagraph>
          <HeadingImage
            style={{
              backgroundImage: `url(${Heading1})`,
            }}
          >
            <ImageWrapper>
              <div style={{ height: "28vh" }}></div>
            </ImageWrapper>
          </HeadingImage>
        </Heading>
        <Heading>
          <HeadingImage
            style={{
              backgroundImage: `url(${Heading1})`,
            }}
          >
            <ImageWrapper>
              <div style={{ height: "28vh" }}></div>
            </ImageWrapper>
          </HeadingImage>

          <HeadingParagraph>
            Але щоб ви зрозуміли, звідки виникає це хибне уявлення людей,
            цуратись насолоди і вихваляти страждання, я розкрию перед вами всю
            картину і роз’ясню, що саме говорив цей чоловік.
          </HeadingParagraph>
        </Heading>
      </Headings>
    </React.Fragment>
  );
};

export default Home;
