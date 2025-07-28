import { getAllusers, create, update, deleteUser} from "../controller/userController.js";
import express from "express";

const route = express.Router();


route.post("/create", create);
route.get("/getAllusers", getAllusers);
route.put("/update/:id", update);
route.delete("/userdelete/:id", deleteUser);

export default route;
