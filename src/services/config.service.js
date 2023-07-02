import axios from "axios";

const BaseUrl = 'https://sakibapi.onrender.com'


// Token
export const setToken = (token) => {
    localStorage.setItem('token', token)
}
export const getToken = () => {
    return localStorage.getItem('token')
}
// Set User data
export const setUser = (data) => {
    localStorage.setItem('user', JSON.stringify(data))
}
export const getUser = () => {
    return localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')) : null
}

// Axios default value
axios.defaults.baseURL = BaseUrl
axios.defaults.headers.common = { 'Authorization': getToken() }

// Auth
export const loginService = (data) => {
    return axios.post('/api/auth/login', data)
}
export const registerService = (data) => {
    return axios.post('/api/auth/register', data)
}
export const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
}
// CRUD
export const getEmployees = () => {
    return axios.get('/api/employee')
}
export const getEmployee = (id) => {
    return axios.get('/api/employee/' + id)
}
export const updateEmployee = (id, data) => {
    return axios.put('/api/employee/' + id, data)
}
export const createEmployee = (data) => {
    return axios.post('/api/employee', data)
}
export const deleteEmployee = (id) => {
    return axios.delete('/api/employee/' + id)
}

