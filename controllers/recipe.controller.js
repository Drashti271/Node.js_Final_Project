import RecipeModel from "../models/recipe.model.js";

export const addRecipePage = (req, res) => {
    return res.render('./pages/addRecipe.ejs');
}

export const addRecipe = async (req, res) => {
    try {
        req.body.image = req.file.path; 
        let recipe = await RecipeModel.create(req.body);
        console.log("Recipe Added.", recipe);
        return res.redirect(req.get("Referrer") || "/");
    } catch (error) {
        console.log(error.message);
    }
}

export const viewRecipe = async (req, res) => {
    try {
        let recipes = await RecipeModel.find({});
        console.log("Recipes found:", recipes);
        return res.render('./pages/viewRecipe.ejs', { 
            recipes 
        });
    } catch (error) {
        console.log("Error fetching recipes:", error.message);
        return res.render('./pages/viewRecipe.ejs', { 
            recipes: [] 
        });
    }
}

export const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        let recipe = await RecipeModel.findByIdAndDelete(id);
        console.log("Recipe Deleted", recipe);
        return res.redirect(req.get("Referrer") || "/"); 
    } catch (error) {
        console.log(error.message);
    }
}

export const editRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        if (req.file) {
            updatedData.image = req.file.path;
        }

        let recipe = await RecipeModel.findByIdAndUpdate(id, updatedData, { new: true });
        console.log("Recipe Updated.", recipe);
        return res.redirect(`/viewRecipe/${id}`); 
    } catch (error) {
        console.log("Error updating recipe:", error.message);
        return res.status(500).send("Error updating recipe.");
    }
}
