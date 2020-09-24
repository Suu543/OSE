import axios from "axios";

export const createTopic = async (data, token) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API}/topic`,
      data,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    return response.data;
  } catch (error) {
    return error;
  }
};

export const getTopics = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}/topics`);
    return response.data;
  } catch (error) {
    return error;
  }
};
