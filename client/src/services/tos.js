import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL || '/';
const api = axios.create({
  baseURL: BASE_URL 
});

const apiTest = async () => {
  const resp = await api('/test')
  return resp.data;
};

export {
  apiTest
}
