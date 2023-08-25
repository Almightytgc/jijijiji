import express from "express";
import { signup } from "./controladores/signup.mjs";
import { login } from "./controladores/login.mjs";

const router = express.Router();

router.post("/", signup);
router.post("/login", login);

export default router;