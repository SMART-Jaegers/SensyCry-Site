import React, { useState, useRef } from "react";
import { HomeMain, MainButton, MainHeader, HeadingImage } from "./Home.styled";
import Heading1 from "../../images/description_1.png";
import Heading2 from "../../images/description_2.png";
import Heading3 from "../../images/description_3.png";
import MainBackground from "../../images/main_background_main_page.png";
import SecondaryBackground from "../../images/secondary_background_main_page.png";
import HomeArticle from "../../components/HomeArticle/HomeArticle";
import Footer from "../Footer/Footer";
import HomeHeader from "../Headers/HomeHeaders/HomeHeader";
import { AnimateOnChange } from "react-animation";

const Home = () => {
  const myRef = useRef(null);
  const [background, setBackground] = useState(MainBackground);
  const showArticles = () => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
    console.log(myRef);
  };

  return (
    <React.Fragment>
      <HomeHeader />
      <HomeMain>
        <AnimateOnChange>
          <HeadingImage preview={false} src={background} width="100%" />
        </AnimateOnChange>
        <MainHeader>Зупини насилля</MainHeader>
        <MainButton
          onClick={showArticles}
          onMouseEnter={() => {
            setBackground(SecondaryBackground);
          }}
          onMouseLeave={() => {
            setBackground(MainBackground);
          }}
        >
          Більше про нас
        </MainButton>
      </HomeMain>
      <div ref={myRef}>
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
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
