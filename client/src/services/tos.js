import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:8080';
const TOKEN = '305b9d34-e959-4d5c-98a9-1cdefb0fa8d0'

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`
  }
});

const getServiceExperiences = async (service) => {
  try {
    const resp = await api(`/services/${service}/experiences`);
    return resp.data;
  } catch (e) {
    console.log(e.message);
  }
}
const searchService = async svcName => {
  try {
    const svcResp = await api(`/search/?service=${svcName}`);
    return svcResp.data;
  } catch (error) {
    console.log(error.message);
  }
}

const deleteExperience = async (id) => {
  try {
    const resp = await api.delete(`/experiences/${id}`);
    return resp.data;
  } catch (e) {
    console.log(e.message);
  }
}
const createComment = async (comment, experienceId) => {
  try {
    const resp = await api.post(`/experiences/${experienceId}/comments`, { comment });
    return resp.data;
  } catch (e) {
    console.log(e.message);
  }
}

const getExperience = async (id) => {
  try {
    const resp = await api(`/experiences/${id}`);
    return resp.data;
  } catch (e) {
    console.log(e.message);
  }
}
const apiTest = async () => {
  try {
    const resp = await api('/')
    return resp.data;
  } catch (e) {
    console.log(e);
  }
};

const createExperience = async (experience) => {
  try {
    const resp = await api.post('/experiences', experience);
    return resp.data;
  } catch (e) {
    console.log(e);
  }
}

const getUserExperiences = async () => {
  try {
    const resp = await api.get('/user/experiences');
    return resp.data;
  } catch (e) {
    console.log(e.message);
  }
}
export {
  apiTest,
  getExperience,
  createExperience,
  getUserExperiences,
  createComment,
  deleteExperience,
  searchService,
  getServiceExperiences,
}
