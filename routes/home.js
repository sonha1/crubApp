import express from "express";
import { index } from "../controllers/homeController.js";

const route = express.Router();

route.get("/", index);

export default route;