import axios, { AxiosRequestConfig } from "axios";

const headers = { "X-Api-Key": "qsbHRvQX0b4a30pY0Kyu2g==3xukcUsCQqmqBB2W" };

export const getQuotes = async () => {
  const config: AxiosRequestConfig = {
    headers: headers,
  };

  const response = await axios.get(
    "https://api.api-ninjas.com/v1/quotes?category=money",
    config
  );

  if (response.status !== 200) {
    return "error";
  }

  const data = response.data;
  return data;
};
