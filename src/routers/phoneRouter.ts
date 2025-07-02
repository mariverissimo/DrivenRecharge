import { Router } from "express";
import * as phoneController from "../controllers/phoneControllers";
import { validateSchema } from "../middlewares/validation";
import { phoneSchema } from "../schemas/phoneSchema";

const router = Router();

router.post("/", validateSchema(phoneSchema), phoneController.createPhone);
router.get("/:document", phoneController.listPhones);

export default router;
