import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.get('/games', authRequired, (req, res)=> res.send('games'))

export default router