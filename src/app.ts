import express from "express";
import dotenv from "dotenv";
dotenv.config();

import phoneRouter from "./routers/phoneRouter";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();
app.use(express.json());

app.use("/phones", phoneRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
