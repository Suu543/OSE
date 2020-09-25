import React from "react";
import Layout from "./core/Layout";

import {
  HomeContainer,
  HomeBackground,
  HomeTopSection,
  HomeTopHeader,
  HomeTopBody,
  HomeTopBodyLeft,
  HomeTopBodyLeftElem,
  HomeTopBodyLeftElemLeft,
  HomeTopBodyRightElemRight,
  HomeTopBodyRight,
  HomeTopBodyRightElem,
} from "./styles/Home";

const Home = () => {
  return (
    <Layout>
      <HomeContainer>
        <HomeBackground>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </HomeBackground>
        <HomeTopSection>
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
        </HomeTopSection>
      </HomeContainer>
    </Layout>
  );
};

export default Home;
