import mongoose from "mongoose";

const shoppingListSchema = new mongoose.Schema({
  recipe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recipe",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  neededIngredients: [
    {
      extra_comment: String,
      name: String,
      primary_unit: {
        quantity: String,
        display: String,
      },
      metric_unit: {
        quantity: String,
        display: String,
      },
      checked: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

const ShoppingList =
  mongoose.models.ShoppingList ||
  mongoose.model("ShoppingList", shoppingListSchema);

export default ShoppingList;
