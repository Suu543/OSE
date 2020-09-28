import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getTopics } from "../action/topic";

const Container = styled.section`
  width: 100%;
`;

const CardContainer = styled.section`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const CardImage = styled.section`
  width: 100%;

  img {
    display: block;
    width: 100%;
  }
`;

const CardContent = styled.section`
  width: 100%;

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
      console.log({ ...indexedResponse[0] });
    } catch (error) {
      console.log("error", error);
    }
  };

  const prevProperty = () => {
    console.log("www", topic.index);
    let newIndex = topic.index - 1;
    console.log("newInde", newIndex);
    if (newIndex < 0) {
      newIndex = topics.length - 1;
      console.log("newInde", newIndex);
      setTopic(topics[newIndex]);
    } else {
      console.log("asa", newIndex);
      setTopic(topics[newIndex]);
    }
  };

  const nextProperty = () => {
    let newIndex = topic.index + 1;
    // console.log(topics.length);
    // console.log("newIndex", newIndex);
    if (newIndex >= topics.length - 1) {
      newIndex = 0;
      setTopic(topics[newIndex]);
    } else {
      setTopic(topics[newIndex]);
    }
  };

  return (
    <Container>
      <button onClick={() => nextProperty()}>Next</button>
      <button onClick={() => prevProperty()}>Prev</button>
      {topic && (
        <CardContainer>
          <CardImage>
            <img src={`${topic.image.url}`} />
          </CardImage>
          <CardContent>
            <h1>{topic.slug}</h1>
          </CardContent>
        </CardContainer>
      )}
    </Container>
  );
};

export default TopicSlider;
