import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'The "name" field is required.'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'The "price" field is required.'],
    min: [0, 'The "price" field must be greater than or equal to zero.'],
  },
  image: {
    type: String,
    required: [true, 'The "image" field is required.'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'The "description" field is required.'],
    trim: true,
  },
  category: {
    type: String,
    required: [true, 'The "type" field is required.'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'The "email" field is required.'],
    trim: true,
    lowercase: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'The "email" field does not have a valid email format.'],
  },
});

const Product = mongoose.model('Product', productSchema);

export default Product;
