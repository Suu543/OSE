import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import TopicSlider from "../helpers/TopicSlider";
// import Swiper from "react-id-swiper";
// import "swiper/swiper.scss";

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
  HomeTopicContainer,
  HomeTopicHeader,
  HomeTopicWrapper,
  HomeTopicLeft,
  HomeCommunityContainer,
  HomeCommunity,
  HomeCommunityHeader,
  HomeCommunityBody,
  HomeDonationContainer,
  HomeDonationWrapper,
} from "../styles/Home";

const Home = () => {
  useEffect(() => {}, []);

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
          <HomeTopicContainer>
            <HomeTopicWrapper>
              <HomeTopicLeft>
                <img src="https://ose.s3.ap-northeast-2.amazonaws.com/static/icon_topic.png" />
                <HomeTopicHeader>
                  <span>T</span>OPICS
                </HomeTopicHeader>
              </HomeTopicLeft>
              {TopicSlider()}
            </HomeTopicWrapper>
          </HomeTopicContainer>
          <HomeCommunityContainer>
            <HomeCommunity>
              <HomeCommunityHeader>
                <img src="https://ose.s3.ap-northeast-2.amazonaws.com/static/icon_community.png" />
                <h1>
                  <span>C</span>ommunity
                </h1>
              </HomeCommunityHeader>
              <HomeCommunityBody>
                <section>
                  <h1>Title</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </section>
                <section>
                  <h1>Title</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </section>
                <section>
                  <h1>Title</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </section>
              </HomeCommunityBody>
            </HomeCommunity>
          </HomeCommunityContainer>
          <HomeDonationContainer>
            <HomeDonationWrapper>
              <section>
                <img src="https://ose.s3.ap-northeast-2.amazonaws.com/static/icon_donation_coin.png" />
                <img src="https://ose.s3.ap-northeast-2.amazonaws.com/static/icon_donation_box.png" />
              </section>
              <section>
                <h1>Title</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                </p>
              </section>
            </HomeDonationWrapper>
          </HomeDonationContainer>
        </HomeComponentsContainer>
      </HomeContainer>
    </Layout>
  );
};

export default Home;
