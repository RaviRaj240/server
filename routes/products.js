import express from "express";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  addMultipleProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", createProduct);
router.post("/insertMany", addMultipleProducts);
router.patch("/:id", updateProduct);

export default router;
