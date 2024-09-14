import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: Number,
  title: String,
  category: String,
  price: Number,
  description: String,
  image: String,
});

export default mongoose.model("Product", productSchema);
