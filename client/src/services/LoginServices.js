import axios from "axios";
const API_URL = "http://localhost:4114";

export default async function LoginServices(body) {
    try {
        const response = await axios.post(`${API_URL}/api/login`, body);
        window.localStorage.setItem("token", response.data.token);
        window.localStorage.setItem("user", JSON.stringify(response.data.user));
        console.log(response);
        return response.data.user;
    } catch (error) {
        window.alert(error.response.data.message);
    }
}
