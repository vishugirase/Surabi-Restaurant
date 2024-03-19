import axios from 'axios';
const url = "http://localhost:3000/menu";

// Fetch the Menu Items from the JSON File
export const getallMenu = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

// Add the Menu Items
export const addMenu = async (menu) => {
    return await axios.post(url,menu);
}

// Edit or Update the Menu Item Details
export const editMenu = async (id, menu) => {
    return await axios.put(`${url}/${id}`,menu);
}

// Delete the Item from the JSON file
export const deleteMenu = async (id) => {
    return await axios.delete(`${url}/${id}`);
}
