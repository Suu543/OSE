import React from "react";
import Layout from "./Layout";
import Swiper from "react-id-swiper";
import "swiper/swiper.scss";

import {
  HomeContainer,
  HomeBackground,
  HomeComponentsContainer,
  HomeTopHeader,
  HomeTopBody,
  HomeTopBodyLeft,
  HomeTopBodyLeftElem,
  HomeTopBodyLeftElemLeft,
  HomeTopBodyRightElemRight,
  HomeTopBodyRight,
  HomeTopBodyRightElem,
  HomeTopicSection,
  HomeTopicHeader,
  HomeTopicWrapper,
  HomeTopicSlide,
} from "../styles/Home";

const Home = () => {
  const CoverflowEffect = () => {
    const params = {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    };

    return (
      <Swiper {...params}>
        <HomeTopicSlide
          style={{
            backgroundImage:
              "url(https://thumbs.dreamstime.com/b/ocean-pollution-square-vector-image-lettering-save-plastic-one-off-straws-environment-protection-design-poster-163075322.jpg",
          }}
        />
        <HomeTopicSlide
          style={{
            backgroundImage:
              "url(https://thumbs.dreamstime.com/b/ocean-pollution-square-vector-image-lettering-save-plastic-bottles-environment-protection-design-poster-flyer-163076495.jpg)",
          }}
        />
        <HomeTopicSlide
          style={{
            backgroundImage:
              "url(https://thumbs.dreamstime.com/b/ocean-pollution-square-vector-image-lettering-save-plastic-bottles-environment-protection-design-poster-flyer-163076540.jpg)",
          }}
        />
        <HomeTopicSlide
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/736x/5b/38/c9/5b38c9de75f55f1efe6d30649fa20721.jpg)",
          }}
        />
        <HomeTopicSlide
          style={{
            backgroundImage:
              "url(https://images-na.ssl-images-amazon.com/images/I/61xUp-xNnkL._SL1000_.jpg)",
          }}
        />
      </Swiper>
    );
  };

  return (
    <Layout>
      <HomeContainer>
        <HomeBackground>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </HomeBackground>
        <HomeComponentsContainer>
          <HomeTopHeader>
            <span>O</span>UR <span>S</span>OLE <span>E</span>ARTH
          </HomeTopHeader>
          <HomeTopBody>
            <HomeTopBodyLeft>
              <HomeTopBodyLeftElem>
                <HomeTopBodyLeftElemLeft></HomeTopBodyLeftElemLeft>
                <HomeTopBodyRightElemRight>
                  <h1>
                    <span>What</span> is OSE?
                  </h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                  </p>
                </HomeTopBodyRightElemRight>
              </HomeTopBodyLeftElem>
              <HomeTopBodyLeftElem>
                <HomeTopBodyLeftElemLeft></HomeTopBodyLeftElemLeft>
                <HomeTopBodyRightElemRight>
                  <h1>
                    <span>What</span> is OSE?
                  </h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                  </p>
                </HomeTopBodyRightElemRight>
              </HomeTopBodyLeftElem>
              <HomeTopBodyLeftElem>
                <HomeTopBodyLeftElemLeft></HomeTopBodyLeftElemLeft>
                <HomeTopBodyRightElemRight>
                  <h1>
                    <span>What</span> is OSE?
                  </h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                  </p>
                </HomeTopBodyRightElemRight>
              </HomeTopBodyLeftElem>
            </HomeTopBodyLeft>
            <HomeTopBodyRight>
              <HomeTopBodyRightElem>
                <iframe src="https://www.youtube.com/embed/JaSe85Mcwp0"></iframe>
              </HomeTopBodyRightElem>
            </HomeTopBodyRight>
          </HomeTopBody>
          <HomeTopicSection>
            <HomeTopicHeader>
              <span>T</span>OPICS
            </HomeTopicHeader>
            <HomeTopicWrapper>{CoverflowEffect()}</HomeTopicWrapper>
          </HomeTopicSection>
        </HomeComponentsContainer>
      </HomeContainer>
    </Layout>
  );
};

export default Home;
