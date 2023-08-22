import mongoose from "mongoose";

const cookbookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  recipes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe",
    },
  ],
});

const Cookbook =
  mongoose.models.Cookbook || mongoose.model("Cookbook", cookbookSchema);

export default Cookbook;
