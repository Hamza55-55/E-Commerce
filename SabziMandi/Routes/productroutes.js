import { getProduct, saveProduct, addProduct } from "../controllers/productscontroller.js";
import express from 'express';
const router=express.Router();

router.post('/saveProduct.htm',saveProduct);
router.get('/listProducts.htm',getProduct);
router.get('/addProduct.htm',addProduct);

export default router;