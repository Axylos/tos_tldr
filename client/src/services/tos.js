import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:8080';

const api = axios.create({
  baseURL: BASE_URL 
});

const apiTest = async () => {
  const resp = await api('/')
  return resp.data;
};

export {
  apiTest
}
