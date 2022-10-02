import cors from "cors";
import express from "express";
import "express-async-errors";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware";
import router from "./routers/router";
//import e2eRouter from "./routers/e2eRouter.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
// if (process.env.NODE_ENV === "test") {
//     app.use("/e2e", e2eRouter);
// }

app.use(errorHandlerMiddleware);

export default app;
