import React, { useState } from "react";
import { getCookie } from "../auth/helpers";
import { createTopic } from "../action/topic";
import Resizer from "react-image-file-resizer";
import styled from "styled-components";
import Layout from "../core/Layout";

export const ErrorAlert = styled.article`
  width: 80%;
  font-size: 2rem;
  color: black;
  margin: auto;
  margin-bottom: 1rem;
  padding: 1rem;
  background: #f8d7da;
  h1 {
    text-align: center;
    color: #721c24;
  }
`;

export const SuccessAlert = styled.article`
  width: 80%;
  font-size: 2rem;
  color: black;
  margin: auto;
  margin-bottom: 1rem;
  padding: 1rem;
  background: #cce5ff;
  h1 {
    text-align: center;
    color: #5f8dbe;
  }
`;

const CreateCategoryContainer = styled.section`
  width: 100%;
  background: white;
  padding-top: 10vh;
`;

const CategoryCreateTitle = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  text-align: center;
  margin-top: 4rem;
`;

const CategoryForm = styled.form`
  width: 100%;
  margin: auto;
  input {
    display: block;
    margin: auto;
    margin-top: 2rem;
    font-size: 1.5rem;
    text-align: center;
  }
  img {
    display: block;
    margin: 2rem auto;
    width: 180px;
    height: 180px;
  }
`;

const CategoryImageInput = styled.input``;

const CategoryTitleInput = styled.input`
  width: 30%;
  font-size: 1rem;
  padding: 1.3rem;
`;

const CreateCategorySubmitBtn = styled.button`
  display: block;
  margin: auto;
  margin-top: 2rem;
  font-size: 2rem;
  padding: 1rem;
  width: 200px;
  background: #12b886;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  opacity: 0.7;
  :hover {
    opacity: 0.9;
  }
  :active {
    opacity: 1;
  }
`;

const CreateTopic = () => {
  const [state, setState] = useState({
    name: "",
    image: "",
    error: "",
    success: "",
  });

  const token = getCookie("token");
  const { name, image, error, success } = state;

  const handleChange = (name) => (e) => {
    setState({
      ...state,
      [name]: e.target.value,
      success: "",
      error: "",
    });
  };

  const handleImage = (e) => {
    let fileInput = false;
    if (e.target.files[0]) {
      fileInput = true;
    }

    if (fileInput) {
      Resizer.imageFileResizer(
        e.target.files[0],
        1000,
        1000,
        "PNG",
        100,
        0,
        (uri) => {
          // console.log(uri);
          setState({ ...state, image: uri, success: "", error: "" });
        },
        "base64"
      );
    }
  };

  const handleSubmit = async (e) => {
    console.log("image", image);

    e.preventDefault();
    try {
      let data = { name, image };
      const response = await createTopic(data, token);
      if (response.error) setState({ ...state, error: response.error });
      else {
        setState({
          name: "",
          image: "",
          success: "Succssfully Created New Topic",
        });

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      console.log("Category Create Error", error);
    }
  };

  return (
    <Layout>
      <CreateCategoryContainer>
        <CategoryCreateTitle>Create Topic</CategoryCreateTitle>
        <CategoryForm onSubmit={handleSubmit}>
          <img
            alt="Create Topic"
            src="https://static.dribbble.com/users/1986212/screenshots/5156775/camera.gif"
          />
          <CategoryImageInput
            type="file"
            name="image"
            onChange={handleImage}
            accept="image/*"
            required
          />
          <CategoryTitleInput
            type="text"
            name="name"
            onChange={handleChange("name")}
            placeholder="Topic name"
          />
          {error && <ErrorAlert style={{ width: "50%" }}>{error}</ErrorAlert>}
          {success && (
            <SuccessAlert style={{ width: "50%" }}>{success}</SuccessAlert>
          )}
          <CreateCategorySubmitBtn type="submit">
            Create Topic
          </CreateCategorySubmitBtn>
        </CategoryForm>
      </CreateCategoryContainer>
    </Layout>
  );
};

export default CreateTopic;
