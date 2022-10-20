import "./Styles/App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Signup } from "./components/Index.js";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DeviceData from "./components/DeviceData";
function App() {
    const user = useSelector((state) => state);
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        const token = window.localStorage.getItem("token");
        if (user.authorised && token) {
            setIsAuth(true);
            console.log(user);
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common["Authorization"];
        }
    }, [user]);

    return (
        <div className="App">
            <header className="App-header">
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route
                            path="/home"
                            element={isAuth? <Home /> : <Login />}
                    />
                    <Route
                            path="/gps/:id"
                            element={isAuth? <DeviceData/> : <Login />}
                        />
                        <Route path="*" element={<div>404</div>} />
                    </Routes>
            </header>
        </div>
    );
}

export default App;
