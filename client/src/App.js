import "./Styles/App.css";
import { Routes, Route } from "react-router-dom";
import { Home, About, Login, Signup } from "./components/Index.js";
import axios from "axios";
import { useEffect } from "react";
function App() {
    useEffect(() => {
        const user = window.localStorage.getItem("user");
        const token = window.localStorage.getItem("token");
        // JSON.parse(user)
        if (user && token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }else{
            delete axios.defaults.headers.common["Authorization"];
        }
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<div>404</div>} />
                </Routes>
            </header>
        </div>
    );
}

export default App;
