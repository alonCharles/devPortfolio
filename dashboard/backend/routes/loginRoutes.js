import express from "express";
import { loginController } from "../controllers/loginController.js";
import { authenticate } from "../middleware/authenticate.js";

const router = express.Router()

router.post('/login', loginController);

export default router