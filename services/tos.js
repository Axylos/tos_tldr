const axios = require('axios');
const BASE_URL = 'https://tosdr.org/api/1/service';

const api = axios.create({
  baseURL: BASE_URL,
});

const fetchService = async(service) => {
  const resp = await api(`/${service}.json`);
  return resp.data;
}

module.exports = {
  fetchService,
};

