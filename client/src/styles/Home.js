import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
  position: relative;
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
      transform: scale(1);
    }

    50% {
      background-position-x: 1500px;
      transform: scale(1.5);
    }
    100% {
      background-position-x: 3000px;
      transform: scale(2);
    }
  }
`;

export const HomeTopSection = styled.article`
  position: relative;
  z-index: 5;
  top: 13vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55%;
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
`;

export const HomeTopBody = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: 6fr 6fr;
  justify-content: center;
`;

export const HomeTopBodyLeft = styled.section`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  align-items: flex-end;
`;

export const HomeTopBodyLeftElem = styled.section`
  width: 90%;
  display: grid;
  grid-template-columns: 3fr 9fr;
  min-height: 12vh;
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

export const HomeTopBodyRight = styled.section`
  width: 100%;
  height: 100%;
`;

export const HomeTopBodyRightElem = styled.section`
  width: 90%;
  height: 100%;
  margin: auto;
  background: white;

  iframe {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`;
