import axios from "axios";

const api_url = "http://localhost:3002/users";

export const addUser = async (data) => {
    try{
     return await axios.post(api_url, data)
    } catch (error) {
        console.error("Erroe while calling api", error.message);
    }
}

export const getUsers = async () => {
    try {
        return await axios.get(api_url)
    } catch (error) {
        console.log("Error while calling getusers api", error.message)
    }
} 

export const getUser = async (data) => {
    try {
        return await axios.get(`${api_url}/${data}`)
    } catch (error) {
        console.log("Error while calling getuser api", error.message)
    }
} 

export const editUser = async (data, id) =>{
    try {
        return await axios.put(`${api_url}/${id}`,data)
    } catch (error) {
        console.log("Error while calling edituser api", error.message)
    }
}

export const deleteUser = async (id) =>{
    try {
        return await axios.delete(`${api_url}/${id}`)
    } catch (error) {
        console.log("Error while calling deleteuser api", error.message)
    }
}