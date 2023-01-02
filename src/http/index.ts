import axios from "axios";


const http = axios.create({
    baseURL: 'http://localhost:8000/api/av2/'
})

export default http;