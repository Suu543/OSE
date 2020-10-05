import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getTopics } from "../action/topic";

const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media all and (max-width: 800px) {
    margin-bottom: 50vh;
  }
`;

const CardSliderContainer = styled.section`
  position: relative;
  &:before,
  &:after {
    content: "";
    display: block;
    width: 50%;
    height: 120%;
    background: linear-gradient(
      to right,
      white 15%,
      rgba(255, 255, 255, 0) 100%
    );
    position: absolute;
    top: 0;
    left: 0;
  }
`;

/*
const CardSliderContainer = styled.section`
  position: relative;
`;
*/

const CardLeftButton = styled.button`
  display: inline-block;
  width: auto;
  background: #5c9175;
  position: absolute;
  width: 40px;
  height: 40px;
  z-index: 10;
  top: 40%;
  left: -10%;
  opacity: 0.5;
  border: none;
  cursor: pointer;

  :active {
    outline: none;
    border: none;
    opacity: 1;
  }

  :focus {
    outline: none;
  }

  :hover {
    opacity: 1;
  }

  &:before {
    content: "<";
    color: white;
    opacity: 1;
    font-size: 3rem;
    position: absolute;
    top: -10%;
    left: 15%;
  }
`;

const CardRightButton = styled.button`
  display: block;
  width: auto;
  background: #5c9175;
  position: absolute;
  width: 40px;
  height: 40px;
  z-index: 10;
  top: 40%;
  left: 95%;
  opacity: 0.5;
  border: none;
  cursor: pointer;

  :active {
    outline: none;
    border: none;
    opacity: 1;
  }

  :focus {
    outline: none;
  }

  :hover {
    opacity: 1;
  }

  &:before {
    content: ">";
    color: white;
    font-size: 3rem;
    position: absolute;
    top: -10%;
    left: 40%;
  }
`;

const CardSlider = styled.section`
  position: relative;
  max-width: 264px;
  margin: 0 auto;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 280px;
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
  }
`;

const CardSliderWrapper = styled.section`
  display: flex;
  width: 100%;
  z-index: 9;
  position: relative;
  transition: transform 400ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  transform: translateX(
    ${(props) => `-${props.idx * (props.dividedBy / props.length)}%`}
  );

  a {
    text-decoration: none;
    color: black;
  }
`;

const Card = styled.section`
  flex: 1;
  min-width: 264px;
  opacity: ${(props) => (props.idx === props.topicIdx ? "1" : "0.5")};
  transform: scale(${(props) => (props.idx === props.topicIdx ? "1" : "0.6")});
  transition: all 500ms linear;
`;

const CardImage = styled.section`
  width: 100%;
  margin: 0 auto;
  display: block;

  img {
    display: block;
    width: 100%;
    height: 250px;
  }
`;

const CardName = styled.section`
  h1 {
    font-size: 3rem;
    text-align: center;
  }
`;

const TopicSlider = () => {
  const [topics, setTopics] = useState([]);
  const [topic, setTopic] = useState("");

  useEffect(() => {
    loadTopics();
  }, []);

  const loadTopics = async () => {
    try {
      let response = await getTopics();
      let indexedResponse = response.map((topic, idx) => {
        return { ...topic, index: idx };
      });
      setTopics([...topics, ...indexedResponse]);
      setTopic(indexedResponse[1] ? indexedResponse[1] : indexedResponse[0]);
    } catch (error) {
      console.log("error", error);
    }
  };

  const prevProperty = () => {
    let newIndex = topic.index - 1;
    if (newIndex < 0) {
      newIndex = topics.length - 1;
      setTopic(topics[newIndex]);
    } else {
      setTopic(topics[newIndex]);
    }
  };

  const nextProperty = () => {
    let newIndex = topic.index + 1;
    if (newIndex > topics.length - 1) {
      newIndex = 0;
      setTopic(topics[newIndex]);
    } else {
      setTopic(topics[newIndex]);
    }
  };

  return (
    <Container>
      <CardSliderContainer>
        <CardSlider>
          <CardLeftButton onClick={() => prevProperty()}></CardLeftButton>
          <CardRightButton onClick={() => nextProperty()}></CardRightButton>
          <CardSliderWrapper
            idx={topics.length > 0 && topic.index}
            dividedBy={topics.length * 100}
            length={topics.length}
          >
            {topics &&
              topics.map((t, i) => (
                <Link to={`/topics/${t.slug}`}>
                  <Card topicIdx={topic.index} idx={t.index} index={i}>
                    <CardImage>
                      <img src={`${t.image.url}`} />
                    </CardImage>
                    <CardName>
                      <h1>{t.name}</h1>
                    </CardName>
                  </Card>
                </Link>
              ))}
          </CardSliderWrapper>
        </CardSlider>
      </CardSliderContainer>
    </Container>
  );
};

export default TopicSlider;
