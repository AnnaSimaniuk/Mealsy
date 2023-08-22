import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  id_: {
    type: String,
    required: true,
  },
  keywords: {
    type: String,
    required: true,
  },
  is_shoppable: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  video_url: {
    type: String,
    required: true,
  },
  is_licensed_video: {
    type: String,
    required: true,
  },
  is_community: {
    type: String,
    required: true,
  },
  thumbnail_url: {
    type: String,
    required: true,
  },
  inspired_by: {
    type: String,
    required: true,
  },
  linked_recipes: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  cook_time: {
    type: Number,
    required: true,
  },
  prep_time: {
    type: Number,
    required: true,
  },
  total_time: {
    type: Number,
    required: true,
  },
  ratings_negative: {
    type: Number,
    required: true,
  },
  ratings_positive: {
    type: Number,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  protein: {
    type: Number,
    required: true,
  },
  fat: {
    type: Number,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  sugar: {
    type: Number,
    required: true,
  },
  carbohydrates: {
    type: Number,
    required: true,
  },
  fiber: {
    type: Number,
    required: true,
  },
});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);
export default Recipe;
