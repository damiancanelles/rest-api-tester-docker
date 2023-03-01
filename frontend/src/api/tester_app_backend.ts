import axios from "axios"
import config from "../config.json"

const url : string = config.BACKEND_URL

const api = axios.create({
    baseURL: url
})

export default api