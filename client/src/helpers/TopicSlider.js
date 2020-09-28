import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getTopics } from "../action/topic";

const Container = styled.section`
  width: 100%;
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
    z-index: 6;
  }
  &:after {
    left: auto;
    right: 0;
    background: linear-gradient(
      to left,
      white 15%,
      rgba(255, 255, 255, 0) 100%
    );
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
    outline: 5px solid #61dafb;
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
  }
`;

const CardSliderWrapper = styled.section`
  display: flex;
  width: 100%;
  position: relative;
  transition: transform 400ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  transform: translateX(
    ${(props) => `-${props.idx * (props.dividedBy / props.length)}%`}
  );
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
      setTopic(indexedResponse[0]);
    } catch (error) {
      console.log("error", error);
    }
  };

  const prevProperty = () => {
    console.log("topic.index", topic.index);
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
      <button onClick={() => nextProperty()}>Next</button>
      <button onClick={() => prevProperty()}>Prev</button>\
      <CardSliderContainer>
        <CardSlider>
          <CardSliderWrapper
            idx={topic.index}
            dividedBy={topics.length * 100}
            length={topics.length}
          >
            {topics &&
              topics.map((t, i) => (
                <Card topicIdx={topic.index} idx={t.index} index={i}>
                  <CardImage>
                    <img src={`${t.image.url}`} />
                  </CardImage>
                  <CardName>
                    <h1>{t.slug}</h1>
                  </CardName>
                </Card>
              ))}
          </CardSliderWrapper>
        </CardSlider>
      </CardSliderContainer>
    </Container>
  );
};

export default TopicSlider;
