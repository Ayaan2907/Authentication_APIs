import express from "express";
import controller from "../controller/user.controller.js";
import decodeAuthToken from "../middleware/decodeAuthToken.js";
const authRoutes = express.Router();

// Public routes
authRoutes.post("/signup", controller.createUser);
authRoutes.get("/signin", controller.loginUser);
authRoutes.get("/user/:id", controller.getUser);

// Protected routes
authRoutes.get("/all-users /", decodeAuthToken, controller.getAllUsers);
authRoutes.patch("/user/:id", decodeAuthToken, controller.updateUser);
authRoutes.delete("/user/:id", decodeAuthToken, controller.deleteUser);

export default authRoutes;
