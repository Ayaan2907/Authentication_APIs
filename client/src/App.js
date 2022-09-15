import "./Styles/App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Signup } from "./components/Index.js";
import axios from "axios";
import { useEffect, useState} from "react";
function App() {
    const [user, setUser] = useState(null || window.localStorage.getItem("user"));
    // const [gpsData, setGpsData] = useState([]);
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    // const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const token = window.localStorage.getItem("token");
        if (user && token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common["Authorization"];
        }
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <Routes>
                    <Route
                        path="/"
                        element={<Login user={user} setUser={setUser}  />}
                    />
                    <Route path="/signup" element={<Signup />} />
                    <Route
                        path="/home"
                        element={
                            // user ? (
                                // <Home gpsData={gpsData} setGpsData={setGpsData} setUser={setUser} />
                                <Home  setUser={setUser} />
                            // ) : (
                                // <Login user={user} setUser={setUser} />
                            // )
                        }
                    />
                    <Route path="*" element={<div>404</div>} />
                </Routes>
            </header>
        </div>
    );
}

export default App;
