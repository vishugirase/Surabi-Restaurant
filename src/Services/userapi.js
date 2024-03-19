import axios from 'axios';

const url = "http://localhost:3000/user";

// fetch all teh users from the JSOn File
export const getallUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

// Add a new user into the JSON File
export const addUser = async (user) => {
    return await axios.post(url,user);
}

// Edit or Update a new User 
export const editUser = async (id, user) => {
    return await axios.put(`${url}/${id}`,user);
}

// Delete an existing user from the JSON File
export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}