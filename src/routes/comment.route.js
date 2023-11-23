import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
    createComments
} from "../controllers/comment.controller.js";


const router = Router();

router.post('/games/:id/comment/', authRequired, createComments);
export default router