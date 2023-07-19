import { Products } from "../models/AllModels.js";

// Methods for the CRUD of Products

// Display all products
export const getAllproducts  = async (req, res) => {
   try {
      const Products = await Products.find();
      res.status(200).json(Products);
   } catch (error) {
      res.json({ message: error.message });
   }
};

// Display a product
export const getproducts = async (req, res) => {
   try {
      const id = req.params.id;
      const Products = await Products.findById(id);
      res.status(200).json(Products);
   } catch (error) {
      res.json({ message: error.message });
   }
};

// Create a product
export const createProducts = async (req, res) => {
   try {
      await Products.create(req.body);
      res.status(200).json({
         message: "Order created correctly!"
      });
   } catch (error) {
      res.json({ message: error.message });
   }
};

// Update a product
export const updateProducts = async (req, res) => {
   try {
      const id = req.params.id;
      await Products.updateOne({ _id: id }, req.body);
      res.status(200).json({
         message: "Product updated correctly!"
      });
   } catch (error) {
      res.json({ message: error.message });
   }
};

// Delete a product
export const deleteProducts = async (req, res) => {
   try {
      const id = req.params.id;
      await Products.deleteOne({ _id: id });
      res.status(200).json({
         message: "Product deleted correctly!"
      });
   } catch (error) {
      res.json({ message: error.message });
   }
};
