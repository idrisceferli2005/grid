import express from 'express';
import { addProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.post("/", addProduct);
productRouter.get("/", getProducts);
productRouter.get("/:id", getProductById);
productRouter.delete("/:id", deleteProduct);
productRouter.put("/:id", updateProduct);

export default productRouter;