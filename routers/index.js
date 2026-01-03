import { Router } from "express";
import userRouter from "../routers/user.route.js"
import recipeRouter from "./recipe.route.js";
const router = Router();

router.use('/',userRouter);
router.use('/',recipeRouter);

export default router;