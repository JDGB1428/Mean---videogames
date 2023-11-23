import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import authRoutes from "./routes/auth.routes.js";
import gamesRoutes from "./routes/games.route.js";
import commentRoutes from "./routes/comment.route.js";

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api",authRoutes);
app.use("/api",gamesRoutes);
app.use("/api",commentRoutes);

export default app;