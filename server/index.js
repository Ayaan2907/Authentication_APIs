const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 4114;
const routers= require("./api/router");
const app = express()
const cors = require("cors");

var corsOptions = {
    origin: ["*"],
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", routers);

app.get('/', (req, res) => {
    res.send(`Hello World! on ${PORT}`);
})

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});


// const ROUTES = {
//     HOME: "/",
//     DASHBOARD: "/dashboard",
//     // API
//     API: "/api",
//     SIGNUP: "/api/signup",
//     LOGIN: "/api/login",
//     LOGOUT: "/api/logout",
// };

// app.get(ROUTES.HOME, (req, res) => {
//     console.log("Home page");
//     // if(err) throw err;
//     res.send("Home Page");
// });

// app.get(ROUTES.API, (req, res) => {
//     connection.query("SELECT * FROM sample", (err, rows, fields) => {
//         if (err) {
//             console.log(err);
//             res.sendStatus(500);
//             return;
//         }
//         res.json(rows);
//         console.log("sample table");
//     });
// });

// app.post(ROUTES.SIGNUP, (req, res) => {
//     res.send("Signup Page");
// });

// app.post(ROUTES.LOGIN, (req, res) => {
//     res.send("Login Page");
// });

// app.post(ROUTES.LOGOUT, (req, res) => {
//     res.send("Logout Page");
// });

// app.get(ROUTES.DASHBOARD, (req, res) => {
//     res.send("Dashboard Page");
// });
