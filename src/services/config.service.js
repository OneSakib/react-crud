import axios from "axios";

const BaseUrl = 'https://sakibapi.onrender.com'
export const loginService = (data) => {
    return axios.post(BaseUrl + '/api/auth/login', data)
}
export const registerService = (data) => {
    return axios.post(BaseUrl + '/api/auth/register', data)
}
export const setToken = (token) => {
    console.log("CALLED", token)
}