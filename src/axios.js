import axios from "axios";

const main_url = process.env.REACT_APP_DEFAULT_URL_API;

const instance = axios.create({
  baseURL: main_url,
  timeout: 16000,
});

export default instance;
