import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getMous = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/mous.php`);
        return response.data;
    } catch (error) {
        console.error("Error fetching MoUs:", error);
        throw error;
    }
};

export const addMou = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/add_mou.php`, data);
        return response.data;
    } catch (error) {
        console.error("Error adding MoU:", error);
        throw error;
    }
};

export const getCollaborators = async (country = 'All') => {
    try {
        const url = country !== 'All' 
            ? `${API_BASE_URL}/collaborators.php?country=${country}`
            : `${API_BASE_URL}/collaborators.php`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Error fetching Collaborators:", error);
        throw error;
    }
};

export const addCollaborator = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/add_collaborator.php`, data);
        return response.data;
    } catch (error) {
        console.error("Error adding Collaborator:", error);
        throw error;
    }
};

export const getTeam = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/team.php`);
        return response.data;
    } catch (error) {
        console.error("Error fetching Team Members:", error);
        throw error;
    }
};

export const getContactInfo = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/contact.php`);
        return response.data;
    } catch (error) {
        console.error("Error fetching Contact Info:", error);
        throw error;
    }
};

export const submitRegistration = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register.php`, data);
        return response.data;
    } catch (error) {
        console.error("Error submitting registration:", error);
        throw error;
    }
};

export const submitContactMessage = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/contact.php`, data);
        return response.data;
    } catch (error) {
        console.error("Error submitting contact message:", error);
        throw error;
    }
};
