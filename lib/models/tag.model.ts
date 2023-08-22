import mongoose from "mongoose";

const tagsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  display_name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const Tag = mongoose.models.Tag || mongoose.model("Tag", tagsSchema);

export default Tag;
