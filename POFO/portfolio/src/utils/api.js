import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

export const fetchProjects = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/projects`);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

export const fetchSkills = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/skills`);
    return response.data;
  } catch (error) {
    console.error('Error fetching skills:', error);
    throw error;
  }
};

export const fetchAbout = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/about`);
    return response.data;
  } catch (error) {
    console.error('Error fetching about data:', error);
    throw error;
  }
};

export const submitContactForm = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/contact`, formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};
