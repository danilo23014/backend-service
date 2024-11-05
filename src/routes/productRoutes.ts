import { Router } from "express";
import {
    getAllProduct, 
    getProductByID, 
    createProduct, 
    updateProduct, 
    deleteProduct
} from "../controllers/productcontroller"

const productRoutes = Router();

productRoutes.get("products/", getAllProduct);
productRoutes.get("products/:id", getProductByID);
productRoutes.post("products/", createProduct);
productRoutes.put("product/:id", updateProduct);
productRoutes.delete("products/:id", deleteProduct);

export default productRoutes;
