import React, { useState, useEffect } from "react";
// import Layout from "./Layout";
import LayoutTest from "./LayoutTest"
import TestSlider from "../helpers/TestSlider";
import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
`;

export const HomeIntroContainer = styled.section`
  width: 100%;
  height: 60vh;
  background: url("https://ose.s3.ap-northeast-2.amazonaws.com/static/background.svg");
  position: relative;
`;

export const HomeIntroBackground = styled.article`
  width: 100%;
  height: 60vh;
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

export const HomeIntroContent = styled.section`
  display: grid;
  grid-template-columns: 8fr 4fr;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 23vh;
  width: 65%;
  margin: auto;

  @media all and (max-width: 1250px) and (min-width: 1001px) {
    width: 90%;
    top: 17vh;
    left: 2vw;
  }

  @media all and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    top: 12vh;
  }
`

export const HomeIntroContentContent = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  
  h1 {
     font-size: 5rem;
     color: #083741;
     letter-spacing: 3px;
     font-weight: 700;

     span {
       font-size: 6rem;
     }
  }

  p {
     font-size: 3rem;
     font-weight: 600;
     color: #083741;
  }

  button {
     display: block;
     width: 30%;
     padding: 1rem;
     border: none;
     font-size: 2.3rem;
     border-radius: 30px;
     margin-top: 2rem;
     color: #083741;
     background-color: white;
     font-weight: 500;
  }

  @media all and (max-width: 1250px) and (min-width: 1001px) {

    h1 {
     font-size: 3rem;

    span {
       font-size: 4rem;
      }
    }

    p {
     font-size: 2.5rem;
    }
  }

  @media all and (max-width: 1000px) {
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 3rem;

      span {
        font-size: 4rem;
      }
    }

    p {
      font-size: 2rem;
      text-align: center;
      margin-top: 1rem;
    }

    button {
      width: 70%;
      font-size: 1.8rem;
      padding: 1.3rem;
    }
  }
`

export const HomeIntroContentImage = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 2rem;

  img {
    display: block;
    width: 60%;
    height: 60%;
  }

  @media all and (max-width: 1000px) {
    justify-content: flex-end;
    
    img {
      width: 50%;
      height: 50%;
    }
  }
`

// export const HomeIntroContent = styled.article`
//   width: 100%;
//   position: relative;
//   top: 15vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   h1 {
//     font-size: 5rem;
//     color: #083741;
//     letter-spacing: 3px;
//     margin-bottom: 2rem;
//     font-weight: 700;

//     span {
//       font-size: 6rem;
//     }
//   }

//   p {
//     width: 100%;
//     text-align: center;
//     font-size: 2rem;
//     font-weight: 600;
//     color: #083741;
//     margin: auto;
//   }

//   button {
//     display: block;
//     width: 80%;
//     height: 5vh;
//     border: none;
//     font-size: 2.3rem;
//     border-radius: 1.5rem;
//     margin-top: 3rem;
//     color: #47715d;
//     font-weight: 500;
//     margin-left: 1rem;
//   }

//   @media all and (min-width: 800px) {
//     h1 {
//       font-size: 5rem;

//       span {
//         font-size: 7rem;
//       }
//     }

//     p {
//       font-size: 3rem;
//     }
//   }

//   @media all and (min-width: 1881px) {
//     button {
//       width: 30%;
//     }
//   }
// `;


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

const Home = () => {
  useEffect(() => {}, []);

  return (
    <LayoutTest>
      <HomeContainer>
        <HomeIntroContainer>
          <HomeIntroContent>
            <HomeIntroContentContent>
            <h1>
              <span>O</span>UR <span>S</span>OLE <span>E</span>ARTH
            </h1>
            <p>
              There is only one Earth in the universe and we mankind have only
              one homeland.
            </p>
            <button>Get Started</button>
            </HomeIntroContentContent>
            <HomeIntroContentImage>
                <img src="https://ose.s3.ap-northeast-2.amazonaws.com/static/divingEarthlyPhone.png" />
            </HomeIntroContentImage>
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
    </LayoutTest>
  );
};

export default Home;

{/* <HomeIntroBackground>
<div></div>
<div></div>
<div></div>
<div></div>
</HomeIntroBackground> */}
