import { URL } from "../constants/apiConstants";
import enums from "../enums";

const headers = () => {
  const header = new Headers();
  header.append(enums.HEADER_TOKEN_KEY, enums.HEADER_TOKEN_VALUE);

  return header;
};

const request = (method, path, body) => {
  const url = `${URL}${path}`;
  const options = { method, headers: headers() };

  if (body) {
    options.body = JSON.stringify(body);
  }

  return fetch(new Request(url, options));
};

const Api = {
  get(path) {
    return request("GET", path);
  },
  post(path, data = {}) {
    return request("POST", path, data);
  },
};

export default Api;
