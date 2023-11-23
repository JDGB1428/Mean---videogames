import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
    getGames,
    getGame,
    createGames,
    updateGames,
    deleteGames,
    getcategory
} from "../controllers/games.controller.js";


const router = Router();

router.get('/games', authRequired, getGames);
router.get('/games/:id', authRequired, getGame);
router.post('/games', authRequired, createGames);
router.delete('/games/:id', authRequired, deleteGames);
router.put('/games/:id', authRequired, updateGames);
router.get('/games/category', authRequired, getcategory)
export default router