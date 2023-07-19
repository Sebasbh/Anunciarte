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

// Display filtered products
export const getFilteredProducts = async (req, res) => {
   try {
     const query = {};
 
     if (req.query.title) {
       query.title = new RegExp(req.query.title, 'i');  // Case-insensitive partial match
     }
     if (req.query.minPrice) {
       query.price = { $gte: req.query.minPrice };  // Greater than or equal to minPrice
     }
     if (req.query.maxPrice) {
       // If price already has a $gte property, add $lte to it; otherwise, create a new object
       query.price = query.price ? { ...query.price, $lte: req.query.maxPrice } : { $lte: req.query.maxPrice };  
     }
     if (req.query.year) {
       query.year = req.query.year;
     }
     if (req.query.category) {
       query.categories = req.query.category;
     }
     if (req.query.size) {
       query.size = req.query.size;
     }
     if (req.query.readyToHang) {
       query.readyToHang = req.query.readyToHang === 'true';
     }
     if (req.query.frame) {
       query.frame = req.query.frame === 'true';
     }
     if (req.query.signed) {
       query.signed = req.query.signed === 'true';
     }
     if (req.query.materials) {
       query.materials = new RegExp(req.query.materials, 'i');
     }
     if (req.query.shipping) {
       query.shipping = req.query.shipping === 'true';
     }
     
     const products = await Product.find(query);
     res.status(200).json(products);
   } catch (error) {
     res.json({ message: error.message });
   }
 };
 

