import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:8080';
const TOKEN = '305b9d34-e959-4d5c-98a9-1cdefb0fa8d0'

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`
  }
});

const apiTest = async () => {
  const resp = await api('/')
  return resp.data;
};

export {
  apiTest
}
