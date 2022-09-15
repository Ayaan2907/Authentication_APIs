/*************
 * 
 * keeping this file, just for a record
 * 
 *************/


// import axios from "axios";
// import { useEffect } from "react";
// const API_URL = "http://localhost:4114";

// export default function AuthServices(body) {

//     useEffect(() => {
//         const user = window.localStorage.getItem("user");
//         const token = window.localStorage.getItem("token");
//         console.log(token)
//         // JSON.parse(user)
//         if (user && token) {
//             axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//         }else{
//             delete axios.defaults.headers.common["Authorization"];
//         }
//     }
//         , []);
    
//     const LoginService = (body) => {
//         axios
//             .post(`${API_URL}/api/login`, body)
//             .then((res) => {
//                 window.localStorage.setItem("token", res.data.token);
//                 window.localStorage.setItem(
//                     "user",
//                     JSON.stringify(res.data.user)
//                 );
//                 console.log(res);
//             })
//             .catch((err) => {
//                 window.alert(err.response.data.message);
//             });
//     }

//     const SignupService = (body) => {
//         axios
//             .post(`${API_URL}/api/signup`, body)
//             .then((res) => {
//                 console.log(res.data);
//                 setTimeout(() => {
//                     LoginService(body);
//                 }, 1000);
//             })
//             .catch((err) => {
//                 window.alert(err.response.data.message);
//             });
//     }

//     const LogoutService = () => {
//         window.localStorage.removeItem("token");
//         window.localStorage.removeItem("user");
//         delete axios.defaults.headers.common["Authorization"];
//     }



//     return {
//         LoginService,
//         SignupService
//     }
// }
