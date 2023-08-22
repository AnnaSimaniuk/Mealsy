import mongoose from "mongoose";

const ingredientsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredient_sections: {
    type: [
      {
        name: String,
        ingredients: [
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
          },
        ],
      },
    ],
    required: true,
  },
  instructions: {
    type: [
      {
        display_text: String,
      },
    ],
    required: true,
  },
});

const Ingredient =
  mongoose.models.Ingredient || mongoose.model("Ingredient", ingredientsSchema);

export default Ingredient;
