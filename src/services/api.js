import axios from "axios";

const api = axios.create({
  baseURL: "http://143.198.116.116/api/",
});

export default api;
