import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    image : {
        type : String
    },
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    }
},{
    timestamps : true
})

const RecipeModel = mongoose.model('recipeModel',recipeSchema);

export default RecipeModel;