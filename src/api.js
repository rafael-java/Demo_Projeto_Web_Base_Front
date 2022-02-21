import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8998",
});

function postFun(data) {
  console.log("aqui");
  return api.post("/v1/processar/", data, {});
}

export { postFun };

export default api;
