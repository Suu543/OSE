import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { readTopic } from "../action/topic";
import { readBlogsByTopic } from "../action/blog";
import useReactRouter from "use-react-router";
import styled from "styled-components";
import Layout from "../core/Layout";

const SingleTopicContainer = styled.section`
  width: 100%;
  padding-top: 8vh;

  hr {
    width: 70%;
    margin: auto;
    padding: 0.5rem;
    margin-top: 10vh;
  }
`;

const SingleTopicHeaderContainer = styled.section`
  width: 100%;
  display: grid;
  background: #ffd3d5;
  min-height: 60vh;
  grid-template-columns: 6fr 6fr;
`;

const SingleTopicHeaderLeft = styled.section`
  display: flex;
  width: 70%;
  margin-left: auto;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4rem;

  h1 {
    font-size: 3.5rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    color: rgb(70, 45, 75);
  }

  p {
    font-size: 1.7rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    color: rgb(70, 45, 75);
  }

  section {
    width: 100%;
    display: flex;

    input {
      width: 40%;
      height: 5rem;
      margin-right: 5%;
      border: none;
      border-radius: 2%;
      padding: 0.5rem;
      font-size: 2rem;

      :focus {
        outline: none;
      }

      ::placeholder {
        color: grey;
        font-size: 2rem;
        text-align: center;
        padding-bottom: 0.3rem;
      }
    }

    button {
      width: 30%;
      height: 5rem;
      background: #004e5f;
      border: none;
      border-radius: 2%;
      color: white;
      font-size: 2rem;
      text-transform: uppercase;
    }
  }
`;

const SingleTopicHeaderRight = styled.section`
  display: flex;
  width: 70%;
  margin: auto;
  align-items: center;
  justify-content: flex-start;

  img {
    display: block;
    width: 50%;
    height: 50%;
  }
`;

const SingleTopicLatestContainer = styled.section`
  width: 70%;
  margin: auto;

  h1 {
    margin-top: 10vh;
    margin-bottom: 5vh;
    font-size: 4rem;
  }
`;

const SingleTopicLatestWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 6fr 6fr;
  grid-template-areas:
    "FirstCard FirstCard"
    "SecondCard ThirdCard";
  gap: 3rem;
`;

const SingleTopicLatestFirstCard = styled.section`
  grid-area: FirstCard;
  display: grid;
  grid-template-columns: 6fr 6fr;
  width: 100%;
  background-color: white;
  border-radius: 1px solid white;
`;

const SingleTopicLatestFirstCardContent = styled.section`
  width: 95%;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  font-family: PlainLight, Arial, sans-serif;
  gap: 3rem;

  h6 {
    color: rgb(85, 90, 110);
    font-size: 1.5rem;
  }

  h1 {
    font-size: 3rem;
    margin: 0;
    color: rgb(85, 90, 110);
  }

  p {
    font-size: 1.6rem;
    color: rgb(85, 90, 110);
  }
`;

const SingleTopicLatestFirstCardImage = styled.section`
  width: 100%;

  img {
    display: block;
    width: 93%;
    margin-left: auto;
  }
`;

const SingleTopicLatestSecondCard = styled.section`
  grid-area: SecondCard;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  img {
    display: block;
    width: 95%;
    margin-right: auto;
  }

  h1 {
    font-size: 2.8rem;
    margin: 0;
    color: rgb(85, 90, 110);
  }

  p {
    font-size: 1.5rem;
    color: rgb(85, 90, 110);
  }
`;

const SingleTopicLatestThirdCard = styled.section`
  grid-area: ThirdCard;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  img {
    display: block;
    width: 95%;
    margin-left: auto;
  }

  h1 {
    font-size: 2.8rem;
    width: 95%;
    margin: 0;
    margin-left: auto;
    color: rgb(85, 90, 110);
  }

  p {
    font-size: 1.5rem;
    color: rgb(85, 90, 110);
    width: 95%;
    margin-left: auto;
  }
`;

const SingleTopicBlogsContainer = styled.section`
  width: 70%;
  margin: auto;
  margin-top: 2vh;
  min-height: 10vh;
`;

const SingleTopicBlogsTitle = styled.h1`
  font-size: 3.5rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  color: black;
  margin-bottom: 8vh;
`;

const SingleTopicBlogWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 4fr 4fr;
  gap: 4rem;
  justify-content: space-around;
`;

const SingleTopicBlogCard = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  img {
    display: block;
    width: 100%;
  }

  h1 {
    font-size: 1.6rem;
  }

  p {
    font-size: 1.2rem;
  }
`;

const ReadSingleTopic = () => {
  const { slug } = useParams();
  const [topic, setTopic] = useState({
    image: {},
    name: "",
    description: "",
  });
  const [blogs, setBlogs] = useState([]);
  const [latests, setLatests] = useState([]);

  useEffect(() => {
    loadCurrentTopic();
    loadBlogsByTopic();
  }, []);

  const loadCurrentTopic = async () => {
    let response = await readTopic(slug);
    let { image, name, description } = response;
    setTopic({ image, name, description });
  };

  const loadBlogsByTopic = async () => {
    try {
      let blogs = await readBlogsByTopic(slug);
      let latestBlogs = [];

      if (blogs.length > 0) {
        setBlogs([...blogs]);
      }

      if (blogs.length > 0) {
        let length = blogs.length;
        if (blogs.length > 3) length = 3;

        for (let i = 0; i < length; i++) {
          latestBlogs.push(blogs[i]);
        }

        setLatests([...latestBlogs]);
      }
    } catch (error) {
      console.log("error");
      return error;
    }
  };

  return (
    <Layout>
      <SingleTopicContainer>
        <SingleTopicHeaderContainer>
          <SingleTopicHeaderLeft>
            <h1>{topic.name}</h1>
            <p>{topic.description}</p>
            <section>
              <input placeholder="Enter Your Email" />
              <button>Subscribe</button>
            </section>
          </SingleTopicHeaderLeft>
          <SingleTopicHeaderRight>
            <img src={topic.image.url} />
          </SingleTopicHeaderRight>
        </SingleTopicHeaderContainer>
        <SingleTopicLatestContainer>
          <h1>Latest Articles</h1>
          <SingleTopicLatestWrapper>
            {latests.length > 0 &&
              latests.map((b, i) => {
                if (i === 0) {
                  return (
                    <SingleTopicLatestFirstCard>
                      <SingleTopicLatestFirstCardContent>
                        <h6>{b.tags[0].name}</h6>
                        <h1>{b.title}</h1>
                        <p>{b.excerpt}</p>
                      </SingleTopicLatestFirstCardContent>
                      <SingleTopicLatestFirstCardImage>
                        <img src={`${b.image.url}`} />
                      </SingleTopicLatestFirstCardImage>
                    </SingleTopicLatestFirstCard>
                  );
                }

                if (i === 1) {
                  return (
                    <SingleTopicLatestSecondCard>
                      <img src={`${b.image.url}`} />
                      <h1>{b.title}</h1>
                      <p>{b.excerpt}</p>
                    </SingleTopicLatestSecondCard>
                  );
                }

                if (i === 2) {
                  return (
                    <SingleTopicLatestThirdCard>
                      <img src={`${b.image.url}`} />
                      <h1>{b.title}</h1>
                      <p>{b.excerpt}</p>
                    </SingleTopicLatestThirdCard>
                  );
                }
              })}
          </SingleTopicLatestWrapper>
        </SingleTopicLatestContainer>
        <hr />
        <SingleTopicBlogsContainer>
          <SingleTopicBlogsTitle>{topic.name}</SingleTopicBlogsTitle>
          <SingleTopicBlogWrapper>
            {blogs.length > 0 &&
              blogs.map((b, i) => (
                <SingleTopicBlogCard>
                  <img src={`${b.image.url}`} />
                  <h1>{b.title}</h1>
                  <p>{b.excerpt}</p>
                </SingleTopicBlogCard>
              ))}
          </SingleTopicBlogWrapper>
        </SingleTopicBlogsContainer>
      </SingleTopicContainer>
    </Layout>
  );
};

export default ReadSingleTopic;
