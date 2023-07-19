import Product  from "../Models/ProductModel.js";

// Methods for the CRUD of Products

// Display all products
export const getAllProducts = async (req, res) => {
   try {
     const products = await Product.find();
     res.status(200).json(products);
   } catch (error) {
     res.json({ message: error.message });
   }
 }

// Display a product
export const getProduct = async (req, res) => {
   try {
     const id = req.params.id;
     const product = await Product.findById(id);
     res.status(200).json(product);
   } catch (error) {
     res.json({ message: error.message });
   }
 };

// Create a product
export const createProduct = async (req, res) => {
   try {
      await Product.create(req.body);
      res.status(200).json({
         message: "Order created correctly!"
      });
   } catch (error) {
      res.json({ message: error.message });
   }
};

// Update a product
export const updateProduct = async (req, res) => {
   try {
      const id = req.params.id;
      await Product.updateOne({ _id: id }, req.body);
      res.status(200).json({
         message: "Product updated correctly!"
      });
   } catch (error) {
      res.json({ message: error.message });
   }
};

// Delete a product
export const deleteProduct = async (req, res) => {
   try {
      const id = req.params.id;
      await Product.deleteOne({ _id: id });
      res.status(200).json({
         message: "Product deleted correctly!"
      });
   } catch (error) {
      res.json({ message: error.message });
   }
};



