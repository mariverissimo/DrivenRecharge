import express from "express";
import dotenv from "dotenv";
dotenv.config();

import router from "./routers";
import errorHandler from "./middlewares/errorHandler";

const app = express();
app.use(express.json());
app.use(router);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
