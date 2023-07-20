import mongoose from 'mongoose';
import Product from './ProductModel.js';

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/anunciartedb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('Product Model', () => {
  beforeEach(async () => {
    await Product.deleteMany({});
  });

  it('guarda un producto válido correctamente', async () => {
    const productData = {
      title: 'Título del producto',
      price: 10.99,
      image: 'imagen.jpg',
      description: 'Descripción del producto',
      email: 'ejemplo@example.com',
      categories: ['PAINTING'],
      year: 2023,
    };

    const product = new Product(productData);
    const savedProduct = await product.save();

    expect(savedProduct._id).toBeDefined();
    expect(savedProduct.title).toBe(productData.title);
    expect(savedProduct.price).toBe(productData.price);
    expect(savedProduct.image).toBe(productData.image);
    expect(savedProduct.description).toBe(productData.description);
    expect(savedProduct.email).toBe(productData.email);
    expect(savedProduct.categories).toEqual(productData.categories);
    expect(savedProduct.year).toBe(productData.year);
  });

  it('no guarda un producto sin título', async () => {
    const productData = {
      price: 10.99,
      image: 'imagen.jpg',
      description: 'Descripción del producto',
      email: 'ejemplo@example.com',
      categories: ['PAINTING'],
      year: 2023,
    };

    const product = new Product(productData);
    let error = null;

    try {
      await product.save();
    } catch (err) {
      error = err;
    }

    expect(error).toBeDefined();
    expect(error.errors.title.message).toBe('The "title" field is required.');
  });

  it('no guarda un producto sin precio', async () => {
    const productData = {
      title: 'Título del producto',
      image: 'imagen.jpg',
      description: 'Descripción del producto',
      email: 'ejemplo@example.com',
      categories: ['PAINTING'],
      year: 2023,
    };

    const product = new Product(productData);
    let error = null;

    try {
      await product.save();
    } catch (err) {
      error = err;
    }

    expect(error).toBeDefined();
    expect(error.errors.price.message).toBe('The "price" field is required.');
  });

  it('no guarda un producto sin imagen', async () => {
    const productData = {
      title: 'Título del producto',
      price: 10.99,
      description: 'Descripción del producto',
      email: 'ejemplo@example.com',
      categories: ['PAINTING'],
      year: 2023,
    };

    const product = new Product(productData);
    let error = null;

    try {
      await product.save();
    } catch (err) {
      error = err;
    }

    expect(error).toBeDefined();
    expect(error.errors.image.message).toBe('The "image" field is required.');
  });

  it('no guarda un producto sin descripción', async () => {
    const productData = {
      title: 'Título del producto',
      price: 10.99,
      image: 'imagen.jpg',
      email: 'ejemplo@example.com',
      categories: ['PAINTING'],
      year: 2023,
    };

    const product = new Product(productData);
    let error = null;

    try {
      await product.save();
    } catch (err) {
      error = err;
    }

    expect(error).toBeDefined();
    expect(error.errors.description.message).toBe('The "description" field is required.');
  });

  it('no guarda un producto sin dirección de correo electrónico', async () => {
    const productData = {
      title: 'Título del producto',
      price: 10.99,
      image: 'imagen.jpg',
      description: 'Descripción del producto',
      categories: ['PAINTING'],
      year: 2023,
    };

    const product = new Product(productData);
    let error = null;

    try {
      await product.save();
    } catch (err) {
      error = err;
    }

    expect(error).toBeDefined();
    expect(error.errors.email.message).toBe('The "email" field is required.');
  });

  // Agrega más pruebas para validar otros escenarios

});
