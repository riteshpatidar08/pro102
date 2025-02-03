import Product from '../models/ProductModel.js';

export const createProduct = async (req, res) => {
  try {
    console.log(req.body);
    const {
      name,
      category,
      stock,
      discountPercantage,
      price,
      proudctDescription,
    } = req.body;

    const productData = {
      name,
      category,
      stock,
      discountPercantage,
      price,
      proudctDescription,
      image: req.file.path,
    };
    const newProduct = await Product.create(productData);

    res.status(201).json({
      data: newProduct,
      message: 'New product created',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products) {
      return res.status(404).json({
        message: ' Product Not found',
      });
    }

    res.status(200).json({
      data: products,
      length: products.length,
    });
  } catch (error) {}
};



