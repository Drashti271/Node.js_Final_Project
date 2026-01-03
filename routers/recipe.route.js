import { Router } from "express";
import { addRecipePage, addRecipe, viewRecipe, deleteRecipe, editRecipe } from "../controllers/recipe.controller.js";
import imageUpload from "../middlewares/imageUpload.js"
const recipeRouter = Router();

recipeRouter.get('/addRecipe',addRecipePage);
recipeRouter.post('/addRecipe',imageUpload,addRecipe);

recipeRouter.get('/viewRecipe',viewRecipe);

recipeRouter.get('/deleteRecipe/:id',deleteRecipe);

recipeRouter.post('/editRecipe/:id',imageUpload,editRecipe);

export default recipeRouter;