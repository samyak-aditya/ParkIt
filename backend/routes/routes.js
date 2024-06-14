import { userLogin, userRegister } from "../controller/user.Controller.js";
import { valetLogin, valetRegister } from "../controller/valet.Controller.js";
import express from "express";

const router = express.Router();

router.post("/user/register", userRegister);
router.post("/user/login", userLogin);
router.post("/valet/register", valetRegister);
router.post("/valet/login", valetLogin);
router.post("/")


export default router;