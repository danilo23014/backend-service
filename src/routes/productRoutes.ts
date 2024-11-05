import { Router } from "express";
import {
    getAllProduct, 
    getProductByID, 
    createProduct, 
    updateProduct, 
    deleteProduct
} from "../controllers/productcontroller"

const productRoutes = Router();

/** 
 * @swagger
 * /api/products:
 * get:
 * summary: obtener todos los productos
 * responses:
 * 200:
 * description: lista de productos
*/

productRoutes.get("products/", getAllProduct);
productRoutes.get("products/:id", getProductByID);
productRoutes.post("products/", createProduct);
productRoutes.put("product/:id", updateProduct);
productRoutes.delete("products/:id", deleteProduct);

export default productRoutes;
