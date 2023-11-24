import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
    getGames,
    getGame,
    createGames,
    updateGames,
    deleteGames,
    getcategory,
    incrementView
} from "../controllers/games.controller.js";


const router = Router();

router.get('/games', getGames);
router.get('/games/:id', getGame);
router.post('/games', createGames);
router.delete('/games/:id', deleteGames);
router.put('/games/:id', updateGames);
router.get('/games/category', getcategory)
router.get('/games/view/:id', incrementView);
export default router