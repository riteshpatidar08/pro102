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
    let cart = await Cart.findOne({ userId });
    console.log(cart);

    if (!cart) {
      cart = new Cart({ userId, items: [], totalPrice: 0 });
    }

    console.log('....cart', cart.items);

    const existingItem = cart.items.find((item) => {
      console.log(item.productId);
      return item.productId.toString() === productId;
    });
    console.log('...', existingItem);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    cart.totalPrice = cart.items.reduce((acc, item) => {
      console.log(item.quantity);
      return acc + item.quantity * product.price;
    }, 0);

    await cart.save();
    console.log(cart);
    res.status(200).json({ message: 'items added to cart' });
  } catch (error) {}
};

export const getCart = async (req, res) => {
  const { userId } = req.params;
  const cart = await Cart.findOne({ userId }).populate('items.productId');
  res.status(200).json({ message: 'Cart item fetched Successfull', cart });
};



export const removeItemFromCart = async (req, res) => {
  const { userId, productId } = req.params;
  const cart = await Cart.findOne({ userId });
  console.log(cart);
  const product = await Product.findById(productId);
  if (!cart) {
    res.status(404).json({ messsage: 'Cart not found' });
  }

  cart.items = cart?.items?.filter(
    (item) => item.productId.toString() !== productId
  );
  cart.totalPrice = cart?.items?.reduce((sum, item) => {
    return sum + item.quantity * product.price;
  }, 0);
  console.log(cart);
  await cart.save();
  res.status(200).json({ message: 'removed from the cart' });
};

export const clearCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const cart = await Cart.findOneAndDelete({ userId });
    res.status(200).json({ messsage: 'Cart cleared' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
