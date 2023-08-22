import mongoose from "mongoose";

const subscribeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Subscribe =
  mongoose.models.Subscribe || mongoose.model("Subscribe", subscribeSchema);

export default Subscribe;
