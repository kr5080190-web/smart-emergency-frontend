import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export const emergencyService = {
  sendAlert: async (payload) => {
    const res = await api.post('/emergencies', payload);
    return res.data;
  },
};