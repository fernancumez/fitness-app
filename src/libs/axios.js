import axios from "axios";
import config from "../config";

const clienteAxios = axios.create({
  baseURL: config.REACT_APP_SERVER_URL,
});

export default clienteAxios;
