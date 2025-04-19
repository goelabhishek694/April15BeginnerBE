const ProductModel = require("../models/product");

exports.createProduct = async (req, res) => {
    let data = req.body;
    const product = await ProductModel.create({
      name: data.name,
      price: data.price,
      isInStock: data.isInStock,
      category: data.category,
    });
    console.log(product);
    return res.status(200).json({
      message: "Product created successfully",
      success: true,
      data: product,
    });
};

exports.getAllProducts = async (req, res) => {
    const allProducts = await ProductModel.find({});
    // const allProducts = await ProductModel.find({"isInStock": true});
    console.log(allProducts);
    return res.status(200).json({
      message: "Products retrieved successfully",
      success: true,
      data: allProducts,
    });
  }
exports.getProduct =  async (req, res) => {
    const { id } = req.params;
    const product = await ProductModel.findById(id);
    console.log(product);
    return res.status(200).json({
      message: "Product retrieved successfully",
      success: true,
      data: product,
    });
  }
exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const update = req.body;
    const product = await ProductModel.findByIdAndUpdate(id, update, {
      returnDocument: "after",
    });
    console.log(product);
    return res.status(200).json({
      message: "Product updated successfully",
      success: true,
      data: product,
    });
  }
exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    const product = await ProductModel.findByIdAndDelete(id);
    console.log(product);
    return res.status(200).json({
      message: "Product deleted successfully",
      success: true,
      data: product,
    });
  }