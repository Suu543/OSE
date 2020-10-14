import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment";
import { useParams } from "react-router";
import { readBlog } from "../action/blog";
import LayoutTest from "../core/LayoutTest";

const BlogContainer = styled.section`
  padding-top: 10vh;
  width: 100%;
`;

const BlogWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BlogImage = styled.section`
  img {
    display: block;
    width: 85%;
    height: 70vh;
    margin: auto;
  }
`;

const Blog = styled.section`
  width: 100%;
  position: absolute;
  top: 60%;
`;

const BlogHeader = styled.section`
  width: 70%;
  margin: auto;
  background: white;

  hr {
    width: 90%;
    margin: auto;
    padding: 4rem;
  }
`;

const BlogTopicAndTagWrapper = styled.section`
  display: grid;
  grid-template-columns: 6fr 6fr;
`;

const BlogTopicSection = styled.section`
  display: flex;
  padding: 2rem;

  span {
    color: #555a6e;
    font-weight: 600;
    font-size: 1.5rem;
  }
`;
const BlogTagSection = styled.section`
  display: flex;
  padding: 2rem;
  justify-content: flex-end;

  span {
    color: #555a6e;
    font-weight: 600;
    font-size: 1.5rem;
  }
`;

const BlogTitleSection = styled.section`
  padding: 2rem;
  width: 90%;
  margin: auto;

  h1 {
    font-size: 4rem;
    color: #555a6e;
  }
`;

const BlogExcerptSection = styled.section`
  padding: 2rem;
  width: 90%;
  margin: auto;

  h2 {
    font-size: 2rem;
    color: #557eb9;
  }
`;

const BlogCreateDateSNSSection = styled.section`
  display: grid;
  width: 90%;
  margin: auto;
  padding: 2rem;
  grid-template-columns: 6fr 6fr;
`;

const BlogDateSection = styled.section`
  display: flex;
  gap: 2rem;

  span:first-child {
    font-size: 1.7rem;
    color: #555a6e;
    font-weight: 700;
  }

  span:nth-child(2) {
    font-size: 1.7rem;
    color: #555a6e;
  }
`;

const BlogBodyWrapper = styled.section`
  width: 80%;
  margin: auto;
  /* height: 110vh;
  background: red; */
  display: flex;
  flex-direction: column;
`;

const BlogBody = styled.section`
  width: 100%;
  margin: auto;
  height: 100vh;

  p {
    width: 60%;
    margin: auto;
    color: #555a6e;
    font-size: 2rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    width: 60%;
    margin: auto;
    font-size: 4rem;
  }

  img {
    width: 100%;
  }
`;

const ReadBlog = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState({
    topics: [],
    image: {},
    title: "",
    excerpt: "",
    body: "",
    createdAt: "",
    tags: [],
  });

  const { topics, image, title, excerpt, body, tags, createdAt } = blog;

  useEffect(() => {
    loadBlog();
  }, []);

  const loadBlog = async () => {
    let response = await readBlog(slug);
    console.log("reso", response);
    setBlog({
      topics: response.topics,
      image: response.image,
      title: response.title,
      excerpt: response.excerpt,
      body: response.body,
      tags: response.tags,
      createdAt: response.createdAt,
    });
  };

  return (
    <LayoutTest>
      <BlogContainer>
        <BlogWrapper>
          <BlogImage>
            <img src={`${blog.image.url}`} />
          </BlogImage>
          <Blog>
            <BlogHeader>
              <BlogTopicAndTagWrapper>
                <BlogTopicSection>
                  {topics.map((t, i) => (
                    <span key={i}>{t.name}</span>
                  ))}
                </BlogTopicSection>
                <BlogTagSection>
                  {tags.map((t, i) => (
                    <span key={i}>{t.name}</span>
                  ))}
                </BlogTagSection>
              </BlogTopicAndTagWrapper>
              <BlogTitleSection>
                <h1>{title}</h1>
              </BlogTitleSection>
              <BlogExcerptSection>
                <h2>{excerpt}</h2>
              </BlogExcerptSection>
              <BlogCreateDateSNSSection>
                <BlogDateSection>
                  <span>OSE</span>
                  <span>{moment(createdAt).format("lll")}</span>
                </BlogDateSection>
              </BlogCreateDateSNSSection>
              <hr />
            </BlogHeader>
            <BlogBodyWrapper>
              <BlogBody dangerouslySetInnerHTML={{ __html: body }}></BlogBody>
            </BlogBodyWrapper>
          </Blog>
        </BlogWrapper>
      </BlogContainer>
    </LayoutTest>
  );
};

export default ReadBlog;
