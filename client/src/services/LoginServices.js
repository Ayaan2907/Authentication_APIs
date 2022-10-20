import axios from "axios";
const API_URL = "http://localhost:4114";

export default async function LoginServices(body) {
    try {
        const response = await axios.post(`${API_URL}/api/login`, body);
        window.localStorage.setItem("token", response.data.token);
        console.log(response);
        return Promise.resolve(response.data)
    } catch (error) {
        window.alert(error.response.data.message);
        return Promise.reject(error.response.data.message)
    }
}
