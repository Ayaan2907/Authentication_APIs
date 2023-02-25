import express from "express";
import controller from "../controller/user.controller.js";

const apiRouter = express.Router();
apiRouter.get("/gets:id", (req, res) => {
    res.send("Hello World");
});
apiRouter.get("/getall/", controller.getAllUsers);
apiRouter.get("/get/:id", controller.getUser); // fix for getting dynamic params as key value
apiRouter.post("/create", controller.createUser);
apiRouter.patch("/update/:id", controller.updateUser);
apiRouter.delete("/delete/:id", controller.deleteUser);

export default apiRouter;
