import { Router } from "express";
import phoneRouter from "./phoneRouter";
import rechargeRouter from "./rechargeRouter";
import summaryRouter from "./summaryRouter";

const router = Router();

router.use("/phones", phoneRouter);
router.use("/recharges", rechargeRouter);
router.use("/summary", summaryRouter);

export default router;
