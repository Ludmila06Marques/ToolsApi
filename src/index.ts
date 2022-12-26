import express, {json} from "express";
import cors from "cors";
import 'express-async-errors'

 import router from "./routes/router.js";
import handleErrorsMiddleware from "./middlewares/error.js";

const app = express();

app.use(json());
app.use(cors());

app.use(router);
app.use(handleErrorsMiddleware)

export default app