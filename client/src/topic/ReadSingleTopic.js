import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { readTopic } from "../action/topic";
import useReactRouter from "use-react-router";
import styled from "styled-components";
import Layout from "../core/Layout";

const SingleTopicContainer = styled.section`
  width: 100%;
  padding-top: 8.5vh;
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
  width: 90%;
  min-height: 100vh;
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
    font-size: 2rem;
    color: rgb(85, 90, 110);
  }
`;

const SingleTopicLatestFirstCardImage = styled.section`
  width: 100%;

  img {
    display: block;
    width: 95%;
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
    font-size: 3.5rem;
    margin: 0;
    color: rgb(85, 90, 110);
  }

  p {
    font-size: 2rem;
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
    font-size: 3.5rem;
    width: 95%;
    margin: 0;
    margin-left: auto;
    color: rgb(85, 90, 110);
  }

  p {
    font-size: 2rem;
    color: rgb(85, 90, 110);
    width: 95%;
    margin-left: auto;
  }
`;

const ReadSingleTopic = () => {
  const { slug } = useParams();
  const [topic, setTopic] = useState({
    image: {},
    name: "",
    description: "",
  });

  useEffect(() => {
    loadCurrentTopic();
  }, []);

  const loadCurrentTopic = async () => {
    let response = await readTopic(slug);
    console.log("response", response.image.url);
    let { image, name, description } = response;
    setTopic({ image, name, description });
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
            <SingleTopicLatestFirstCard>
              <SingleTopicLatestFirstCardContent>
                <h6>Case Study</h6>
                <h1>
                  goUrban are making their mark on mobility with the help of
                  Veriff
                </h1>
                <p>
                  We check in with goUrban, after two years as partners of
                  Veriff, to see how they’ve been progressing since 2018 and get
                  their view on Veriff so far.
                </p>
              </SingleTopicLatestFirstCardContent>
              <SingleTopicLatestFirstCardImage>
                <img src="https://images.prismic.io/veriff/ca0cee40-e516-4eb6-9333-924f88f590c5_20-40_GoUrban_Blog.png?auto=compress,format&rect=0,0,1920,1080&w=1920&h=1080" />
              </SingleTopicLatestFirstCardImage>
            </SingleTopicLatestFirstCard>
            <SingleTopicLatestSecondCard>
              <img src="https://images.prismic.io/veriff/7d4274bc-c6fc-4636-8c48-2f019bc70ae5_20-38_IDV-success-crypto_Blog.png?auto=compress,format&rect=0,0,1920,1080&w=1920&h=1080" />
              <h1>Why Crypto is Ready for Identity Verification</h1>
              <p>
                Bitcoin, Litecoin, Etherium - just three of an estimated 6,088
                cryptocurrencies according to CoinMarketCap in August 2020, with
                a $337.28 billion market cap. Crypto is big business and
                companies trading over the internet want in. But, as crypto
                grows, so does the need for regulation and protection against
                fraud.
              </p>
            </SingleTopicLatestSecondCard>
            <SingleTopicLatestThirdCard>
              <img src="https://images.prismic.io/veriff/43d61037-3f5d-4c90-87ab-3e8734732abf_20-39_FATF_Blog+copy+2.png?auto=compress,format&rect=0,0,1920,1080&w=1920&h=1080" />
              <h1>
                12 Month Review of Revised FATF Standards - Virtual Assets and
                VASPs
              </h1>
              <p>
                After the FATF completed it's year long review of how it's
                revised standards have been implemented, we look at what the
                outcome was, and how Veriff may be able to assist VASPs with
                meeting those standards.
              </p>
            </SingleTopicLatestThirdCard>
          </SingleTopicLatestWrapper>
        </SingleTopicLatestContainer>
      </SingleTopicContainer>
    </Layout>
  );
};

export default ReadSingleTopic;
