import { Router } from "express";
import { dashboard, login, loginPage, registerPage } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get('/',dashboard);
userRouter.get('/login',loginPage);
userRouter.post('/login',login);
userRouter.get('/register',registerPage);

export default userRouter;