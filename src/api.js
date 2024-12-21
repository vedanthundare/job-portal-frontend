import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export const fetchJobs = async () => {
    return await axios.get(`${BASE_URL}/candidate/jobs`);
};


export const applyJob = async (formData) => {
    return await axios.post(`${BASE_URL}/candidate/apply`, formData);
};

export const getChatResponse = async (query) => {
    return await axios.post(`${BASE_URL}/chat`, { query });
};
