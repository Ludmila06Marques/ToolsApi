import { Router } from "express";
import * as toolsContoller from "../controllers/toolsController.js"
import * as validateSchema from "../middlewares/validateSchema.js"


const toolsRouter = Router();

toolsRouter.get("/tools" ,toolsContoller.getTools );

toolsRouter.post("/tools" , validateSchema.validateTools , toolsContoller.createTools );

toolsRouter.delete("/tools/:id" , toolsContoller.deleteTool );


export default toolsRouter;