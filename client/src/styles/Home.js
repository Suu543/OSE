import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const HomeBackground = styled.section`
  width: 100%;
  height: 65vh;
  background: #47715d;
  position: absolute;

  div {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: url("https://ose.s3.ap-northeast-2.amazonaws.com/static/wave.png");
    background-size: 1000px 100px;
  }

  div:nth-child(1) {
    animation: animate 30s linear infinite;
    z-index: 3;
    opacity: 0.5;
    animation-delay: 0s;
  }

  div:nth-child(2) {
    animation: animate 15s linear infinite;
    z-index: 4;
    opacity: 0.5;
    animation-delay: -5s;
    bottom: 10px;
  }

  div:nth-child(3) {
    animation: animate 30s linear infinite;
    opacity: 0.2;
    z-index: 2;
    animation-delay: -5s;
    bottom: 0;
  }

  div:nth-child(4) {
    animation: animate 30s linear infinite;
    z-index: 3;
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

export const HomeComponentsContainer = styled.article`
  position: relative;
  z-index: 5;
  top: 13vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: auto;
`;

export const HomeTopHeader = styled.h1`
  font-size: 4rem;
  color: white;
  letter-spacing: 3px;
  margin-bottom: 2rem;

  span {
    font-size: 6rem;
  }

  @media all and (max-width: 650px) {
    font-size: 3rem;

    span {
      font-size: 5rem;
    }
  }
`;

export const HomeTopBody = styled.section`
  display: grid;
  width: 100%;
  justify-content: center;

  @media all and (max-width: 910px) {
    grid-template-columns: 12fr;
  }
`;

export const HomeTopBodyLeft = styled.section`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  align-items: center;
`;

export const HomeTopBodyLeftElem = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid white;
  background: white;
`;

export const HomeTopBodyLeftElemLeft = styled.section`
  width: 100%;
  height: 100%;
  background: #47715d;
`;

export const HomeTopBodyRightElemRight = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  grid-gap: 1rem;

  h1 {
    font-size: 2.5rem;
    color: #47715d;

    span {
      font-size: 2.5rem;
      border-bottom: 4px solid #47715d;
    }
  }

  p {
    font-size: 1rem;
  }
`;

export const HomeTopicContainer = styled.section`
  width: 90%;
  margin-top: 10vh;
  margin-bottom: 10vh;

  @media all and (max-width: 1200px) {
    width: 95vw;
  }
`;

export const HomeTopicHeader = styled.h1`
  width: 100%;
  font-size: 4rem;
  color: #47715d;
  letter-spacing: 3px;
  margin-bottom: 3rem;

  span {
    font-size: 6rem;
  }
`;

export const HomeTopicWrapper = styled.section`
  width: 100%;
  height: 60vh;
  display: grid;
  grid-template-columns: 6fr 6fr;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media all and (max-width: 1200px) {
    grid-template-columns: 5fr 7fr;
  }
`;

export const HomeTopicLeft = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  background-color: white;

  img {
    display: block;
    margin: auto;
    width: 100%;
    height: 100%;
  }

  @media all and (max-width: 800px) {
    img {
      width: 60%;
      height: 60%;
    }
  }
`;

export const HomeCommunityContainer = styled.section`
  width: 100vw;
  background-color: #ededed;
`;

export const HomeCommunity = styled.section`
  width: 80%;
  margin: auto;
`;

export const HomeCommunityHeader = styled.section`
  width: 70%;
  margin: auto;
  margin-top: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    display: block;
    width: 25%;
    height: 25%;
  }

  h1 {
    font-size: 5rem;
    color: #5d9175;
    text-transform: uppercase;
    span {
      font-size: 6rem;
    }
  }

  @media all and (max-width: 800px) {
    width: 100%;
  }
`;

export const HomeCommunityBody = styled.section`
  width: 100%;

  section:nth-child(1) {
    border-left: 10px solid #95c5aa;
    padding-left: 4rem;
  }

  section:nth-child(2) {
    border-right: 10px solid #5d9175;
    padding-right: 4rem;
    justify-content: flex-end;
    align-items: flex-end;
  }

  section:nth-child(3) {
    border-left: 10px solid #3d6450;
    padding-left: 4rem;
  }

  section {
    width: 75%;
    margin: 4rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      text-transform: uppercase;
      font-size: calc(3rem + 1vw);
    }

    p {
      width: 70%;
      font-size: calc(1.5rem);
    }
  }

  @media all and (max-width: 800px) {
    section {
      width: 100%;
    }

    section:nth-child(2) {
      justify-content: center;
      border-left: 10px solid #5d9175;
      border-right: none;
      padding-left: 4rem;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
`;

export const HomeDonationContainer = styled.section`
  width: 100%;
  margin-top: 10vh;
  margin-bottom: 30vh;
`;

export const HomeDonationWrapper = styled.section`
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
      width: 40%;
      margin: auto;
      position: relative;
      left: -20%;
      z-index: -1;
      animation-duration: 3s;
      animation-name: moveToBox;
      animation-iteration-count: infinite;
    }

    img {
      display: block;
      width: 60%;
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
`;
