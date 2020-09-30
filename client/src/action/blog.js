import axios from "axios";

export const readBlogsByTopic = async (topic) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/blogs/${topic}`
    );
    return response.data;
  } catch (error) {
    console.log("error");
    return error;
  }
};

export const createBlog = async (formData, token) => {
  try {
    let response = await axios.post(
      `${process.env.REACT_APP_API}/blog`,
      formData,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log("error");
    return error;
  }
};

export const imageUpload = (formData) => {
  const response = axios.post(
    `${process.env.REACT_APP_API}/blog/upload`,
    formData
  );
  return response;
};
