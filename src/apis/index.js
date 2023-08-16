import { API_URLS, LOCALSTORAGE_TOKEN_KEY } from "../utils";

const customFatch = async (url, { body, ...customConfig }) => {
  const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.Stringify(body);
  }

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (response.ok) {
      return {
        data: data,
        success: true,
      };
    }
  } catch (error) {
    console.log("error");
    // throw new Error(data.message);
    return {
      message: error.message,
      success: false,
    };
  }
};

export const getPosts = async (page, limit) => {
  return customFatch(API_URLS.posts((page = 1), (limit = 5)), {
    method: "GET",
  });
  // const data = await fetch(
  //   "https://jsonplaceholder.typicode.com/posts?_limit=10"
  // ).then((res) => res.json());
};
