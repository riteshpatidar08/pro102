import express from 'express';
import { addToCart, clearCart, getCart, removeItemFromCart } from '../controllers/cartControllers.js';


const cartRoutes = express.Router()


cartRoutes.post('/cart' , addToCart)
cartRoutes.get('/cart/:userId' , getCart)
cartRoutes.delete('/cart/:userId/:productId',removeItemFromCart)
cartRoutes.delete('/cart/:userId', clearCart)
export default cartRoutes