import axios from "axios";

const api = axios.create({
  baseURL: "http://10.91.136.153:3000"
})

export default api;