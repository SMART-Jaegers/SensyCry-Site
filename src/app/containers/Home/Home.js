import React from "react";
import { HomeMain, MainButton, MainHeader, HeadingImage } from "./Home.styled";
import Heading1 from "../../images/description_1.png";
import Heading2 from "../../images/description_2.png";
import Heading3 from "../../images/description_3.png";
import MainBackground from "../../images/main_background_main_page.png";
import HomeArticle from "../../components/HomeArticle/HomeArticle";

const Home = () => {
  return (
    <React.Fragment>
      <HomeMain>
        <HeadingImage preview={false} src={MainBackground} />
        <MainHeader>Зупини насилля</MainHeader>
        <MainButton>Більше про нас</MainButton>
      </HomeMain>
      <HomeArticle
        image={Heading1}
        text="Але щоб ви зрозуміли, звідки виникає це хибне уявлення людей, цуратись насолоди і вихваляти страждання, я розкрию перед вами всю картину і роз’ясню, що саме говорив цей чоловік."
      />
      <HomeArticle
        image={Heading2}
        text="Але щоб ви зрозуміли, звідки виникає це хибне уявлення людей, цуратись насолоди і вихваляти страждання, я розкрию перед вами всю картину і роз’ясню, що саме говорив цей чоловік."
        reverse
      />
      <HomeArticle
        image={Heading3}
        text="Але щоб ви зрозуміли, звідки виникає це хибне уявлення людей, цуратись насолоди і вихваляти страждання, я розкрию перед вами всю картину і роз’ясню, що саме говорив цей чоловік."
      />
    </React.Fragment>
  );
};

export default Home;
