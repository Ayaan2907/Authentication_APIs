import axios from "axios";
import LoginServices from "./LoginServices";
const API_URL = "http://localhost:4114";

export default async function SignupServices(body) {
    axios
        .post(`${API_URL}/api/signup`, body)
        .then((res) => {
            console.log(res);
            res.data.success && LoginServices(body);
        })
        .catch((err) => {
            window.alert(err.response.data.message);
        });
}
