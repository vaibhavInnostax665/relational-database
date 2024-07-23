import express from "express";
import { addController, buyController, getAllController } from "../../controllers/product.controller.js";

const router = express.Router();

router.get('/',getAllController);
router.post('/add',addController);
router.post('/buy',buyController);

export default router;