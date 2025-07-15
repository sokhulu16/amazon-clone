import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/zaio---clone/us-central1/api", //the API URL will be set here (Cload functions URL)
});

export default instance;