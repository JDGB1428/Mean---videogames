import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
   getComment,
   createComment
} from "../controllers/comment.controller.js";


const router = Router();

router.get('/games/comments', getComment);
router.post('/games/comment', createComment);
export default router