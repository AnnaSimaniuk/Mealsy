import mongoose from "mongoose";

const uniqueIngredientsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const UniqueIngredients =
  mongoose.models.UniqueIngredients ||
  mongoose.model("UniqueIngredients", uniqueIngredientsSchema);

export default UniqueIngredients;
