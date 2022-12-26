import { Router } from "express";
import toolsRouter from "./toolsRoutes.js";


const router = Router();

router.use(toolsRouter);




export default router;