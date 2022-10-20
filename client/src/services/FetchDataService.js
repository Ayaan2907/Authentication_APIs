import axios from "axios";
const API_URL = "http://localhost:4114";

export default async function FetchDataService() {
    try {
        const response = await axios.get(`${API_URL}/api/gps`);
        const data = response.data.data;
        // console.log(data);
        return Promise.resolve(data);
    } catch (error) {
        // window.alert(error.response.data.message);
        console.log(error.response.data);
        return Promise.reject(error);
    }
}
