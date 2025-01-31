import express from 'express';
import { addToCart } from '../controllers/cartControllers.js';


const cartRoutes = express.Router()


cartRoutes.post('/cart' , addToCart)


export default cartRoutes