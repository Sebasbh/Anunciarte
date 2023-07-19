import mongoose from 'mongoose';
import validator from 'validator';

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'The "title" field is required.'],
      trim: true,
      minlength: 1,
      maxlength: 100
    },
    price: {
      type: Number,
      required: [true, 'The "price" field is required.'],
      min: [0.01, 'The "price" field must be greater than or equal to 0.01.']
    },    
    image: {
      type: String,
      required: [true, 'The "image" field is required.']
    },
    description: {
      type: String,
      required: [true, 'The "description" field is required.'],
      minlength: 1,
      maxlength: 500 // Update the max length as needed
    },
    email: {
      type: String,
      required: [true, 'The "email" field is required.'],
      trim: true,
      lowercase: true,
      validate: {
        validator: function (value) {
          return validator.isEmail(value);
        },
        message: 'The "email" field must be a valid email address.'
      }
    },
    categories: {
      type: [
        {
          type: String,
          enum: ['PAINTING', 'PRINTS', 'PHOTO', 'DRAWING', 'SCULPTURE', 'NFT']
        }
      ],
      required: [true, 'The "categories" field is required.']
    },
   /*  style: {
      type: String,
      enum: [
        'Fine Art',
        'Abstract',
        'Figurative',
        'Art Deco',
        'Impressionistic',
        'Pop Art',
        'Realistic',
        'Street Art',
        'Geometric',
        'Surrealistic',
        'Minimalist',
        'Illustrative',
        'Expressionistic',
        'Conceptual'
      ],
      trim: true
    },
    subject: {
      type: String,
      enum: [
        'Landscapes',
        'Portraits',
        'Botanical',
        'Cityscapes',
        'Still Life',
        'Architecture',
        'Animal',
        'Map',
        'Typography',
        'Nude',
        'Seascapes'
      ],
      trim: true
    }, */
    year: {
      type: Number,
      min: 0,
      max: new Date().getFullYear(),
      validate: {
        validator: function (value) {
          return value >= 0 && value <= new Date().getFullYear();
        },
        message: 'The "year" field must be a valid year between 0 and the current year.'
      }
    },
    size: {
      type: String,
      trim: true
    },
    readyToHang: {
      type: Boolean,
      default: false
    },
    frame: {
      type: Boolean,
      default: false
    },
    signed: {
      type: Boolean,
      default: false
    },
    materials: {
      type: String,
      trim: true
    },
    shipping: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

productSchema.virtual('formattedPrice').get(function () {
  return `$${this.price.toFixed(2)}`;
});

const Product = mongoose.model('Product', productSchema);

export default Product;


