import Cart from './../models/CartModel.js';
import Product from './../models/ProductModel.js';

export const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    const product = await Product.findById(productId);
    console.log(product);
    if (!product) {
      return res.status(404).json({ message: 'product not found' });
    }

    //use useriD to find the individual cart
    let cart = await Cart.findById(userId);

    if (!cart) {
      cart = new Cart({ userId, items: [], totalPrice: 0 });
    }

    console.log(cart);
    const existingItem = cart.items.find(
      (item) => item.productId.toString() === productId
    );
    console.log(existingItem);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }
    console.log(cart);
  } catch (error) {}
};
