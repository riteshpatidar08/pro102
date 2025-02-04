import express from 'express';
import {
  createProduct,
  getProduct,
} from '../controllers/productControllers.js';
import upload from '../middleware/upload.js';
const ProductRoutes = express.Router();

ProductRoutes.post('/products', upload.single('image'), createProduct);
ProductRoutes.get('/products', getProduct);


export default ProductRoutes;
