import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import TestSlider from "../helpers/TestSlider";
import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
`;

export const HomeIntroContainer = styled.section`
  width: 100%;
  height: 60vh;
  position: relative;
`;

export const HomeIntroBackground = styled.article`
  width: 100%;
  height: 60vh;
  background: #47715d;
  position: absolute;

  div {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: url("https://ose.s3.ap-northeast-2.amazonaws.com/static/wave.png");
    background-size: 550px 100px;
  }

  div:nth-child(1) {
    animation: animate 30s linear infinite;
    z-index: 2;
    opacity: 0.5;
    animation-delay: 0s;
  }

  div:nth-child(2) {
    animation: animate 15s linear infinite;
    z-index: 3;
    opacity: 0.5;
    animation-delay: -5s;
    bottom: 10px;
  }

  div:nth-child(3) {
    animation: animate 30s linear infinite;
    opacity: 0.2;
    z-index: 1;
    animation-delay: -5s;
    bottom: 0;
  }

  div:nth-child(4) {
    animation: animate 30s linear infinite;
    z-index: 2;
    opacity: 0.7;
    animation-delay: -2s;
    bottom: 20px;
  }

  @keyframes animate {
    0% {
      background-position-x: 0;
    }

    100% {
      background-position-x: 1000px;
    }
  }
`;

export const HomeIntroContent = styled.article`
  width: 100%;
  position: relative;
  top: 17vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 4rem;
    color: white;
    letter-spacing: 3px;
    margin-bottom: 2rem;
    font-weight: 700;

    span {
      font-size: 6rem;
    }
  }

  p {
    width: 100%;
    text-align: center;
    font-size: 2.7rem;
    font-weight: 600;
    color: white;
    margin: auto;
  }

  button {
    display: block;
    width: 80%;
    height: 5vh;
    border: none;
    font-size: 2.3rem;
    border-radius: 1.5rem;
    margin-top: 3rem;
    color: #47715d;
    font-weight: 500;
    margin-left: 1rem;
  }
`;

export const HomeIntroBoxContainer = styled.article`
  width: 100%;
  display: flex;
  align-items: flex-end;
  margin: auto;
  margin-top: 50vh;
  position: flex;
  justify-content: space-between;
  position: relative;
  z-index: 5;

  section {
    flex: 0 0 auto;
    min-height: 120px;
    opacity: 0.9;
    width: 30%;
    background: #99c7ad;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all ease 1s;

    span {
      font-size: 1.3rem;
    }

    :hover {
      opacity: 1;
      transform: scale(1.3);
    }
  }

  @media all and (min-width: 477px) and (max-width: 768px) {
    width: 80%;
    margin-top: 50vh;

    section {
      height: 120px;

      span {
        font-size: 1.5rem;
      }
    }
  }

  @media all and (min-width: 769px) and (max-width: 910px) {
    margin-top: 49vh;
    width: 80%;

    section {
      height: 160px;

      span {
        font-size: 2.3rem;
      }
    }
  }

  @media all and (min-width: 911px) and (max-width: 1200px) {
    margin-top: 46vh;
    width: 70%;

    section {
      height: 170px;
      width: 32%;

      span {
        font-size: 2.4rem;
      }
    }
  }

  @media all and (min-width: 1200px) and (max-width: 1439px) {
    margin-top: 43vh;
    width: 60%;

    section {
      height: 180px;

      span {
        font-size: 2.4rem;
      }
    }
  }

  @media all and (min-width: 1440px) and (max-width: 1660px) {
    width: 50%;
    margin-top: 45vh;

    section {
      height: 180px;

      span {
        font-size: 3rem;
      }
    }
  }

  @media all and (min-width: 1660px) and (max-width: 1881px) {
    width: 45%;
    margin-top: 45vh;

    section {
      height: 180px;

      span {
        font-size: 3rem;
      }
    }
  }

  @media all and (min-width: 1881px) {
    width: 40%;
    margin-top: 43vh;

    section {
      height: 200px;

      span {
        font-size: 3rem;
      }
    }
  }
`;

export const HomeTopicContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: 5.5rem 0;

  h1 {
    font-size: 4rem;
    font-weight: 700;
    color: #47715d;

    span {
      font-size: 5rem;
    }
  }
`;

export const HomeCommunityContainer = styled.section`
  width: 100%;
  background-color: #ededed;
  padding: 5rem 0;
`;

export const HomeCommunityHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  h1 {
    font-size: 4rem;
    font-weight: 700;
    color: #47715d;

    span {
      font-size: 5rem;
    }
  }
`;

export const HomeCommunityContent = styled.article`
  width: 100%;

  section:nth-child(1) {
    border-left: 10px solid #95c5aa;
    padding-left: 4rem;
  }

  section:nth-child(2) {
    border-right: 10px solid #5d9175;
    padding-right: 4rem;
  }

  section:nth-child(3) {
    border-left: 10px solid #3d6450;
    padding-left: 4rem;
  }

  section {
    width: 85%;
    margin: 4rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      text-transform: uppercase;
      font-size: calc(3rem + 1vw);
    }

    p {
      width: 100%;
      font-size: calc(1.5rem);
    }
  }
`;

export const HomeDonationContainer = styled.section`
  width: 100%;
`;

export const HomeDonationHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: 5rem 0;

  h1 {
    font-size: 4rem;
    font-weight: 700;
    color: #47715d;

    span {
      font-size: 5rem;
    }
  }
`;

export const HomeDonationContent = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;

    img:nth-child(1) {
      display: block;
      width: 50%;
      margin: auto;
      position: relative;
      z-index: -1;
      animation-duration: 3s;
      animation-name: moveToBox;
      animation-iteration-count: infinite;
    }

    img {
      display: block;
      width: 100%;
      margin: auto;
    }

    h1 {
      font-size: 5rem;
      margin-bottom: 10rem;
    }

    p {
      font-size: 2rem;
      color: #e4e4e4;
    }
  }

  @keyframes moveToBox {
    from {
      bottom: 0;
    }

    to {
      bottom: -150px;
    }
  }

  @media all and (min-width: 700px) and (max-width: 910px) {
    width: 70%;
    height: 70%;
    margin: auto;
  }

  @media all and (min-width: 911px) and (max-width: 1200px) {
    width: 50%;
    height: 50%;
    margin: auto;
  }

  @media all and (min-width: 1200px) and (max-width: 1439px) {
    width: 35%;
    height: 35%;
    margin: auto;
  }

  @media all and (min-width: 1440px) {
    width: 30%;
    height: 30%;
    margin: auto;
  }
`;

const Test = () => {
  useEffect(() => {}, []);

  return (
    <Layout>
      <HomeContainer>
        <HomeIntroContainer>
          <HomeIntroBackground>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <HomeIntroBoxContainer>
              <section>
                <span>What We Offer</span>
              </section>
              <section>
                <span>What We Focus</span>
              </section>
              <section>
                <span>Opportunities</span>
              </section>
            </HomeIntroBoxContainer>
          </HomeIntroBackground>
          <HomeIntroContent>
            <h1>
              <span>O</span>UR <span>S</span>OLE <span>E</span>ARTH
            </h1>
            <p>
              There is only one Earth in the universe and we mankind have only
              one homeland.
            </p>
            <button>Get Started</button>
          </HomeIntroContent>
        </HomeIntroContainer>
        <HomeTopicContainer>
          <h1>
            <span>T</span>OPIC
          </h1>
          {TestSlider()}
        </HomeTopicContainer>
        <HomeCommunityContainer>
          <HomeCommunityHeader>
            <h1>
              <span>C</span>OMMUNITY
            </h1>
          </HomeCommunityHeader>
          <HomeCommunityContent>
            <section>
              <h1>Title</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
              </p>
            </section>
            <section>
              <h1>Title</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
              </p>
            </section>
            <section>
              <h1>Title</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
              </p>
            </section>
          </HomeCommunityContent>
        </HomeCommunityContainer>
        <HomeDonationContainer>
          <HomeDonationHeader>
            <h1>
              <span>D</span>ONATION
            </h1>
          </HomeDonationHeader>
          <HomeDonationContent>
            <section>
              <img src="https://ose.s3.ap-northeast-2.amazonaws.com/static/icon_donation_coin.png" />
              <img src="https://ose.s3.ap-northeast-2.amazonaws.com/static/icon_donation_box.png" />
            </section>
          </HomeDonationContent>
        </HomeDonationContainer>
      </HomeContainer>
    </Layout>
  );
};

export default Test;
