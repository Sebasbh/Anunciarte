import { getAllProducts } from '../Controllers/ProductControllers.js';
import Product from '../Models/ProductModel.js';

describe('Product Controllers', () => {
  it('getAllProducts returns an array of products', async () => {
    // Mock Product.find
    Product.find = jest.fn().mockResolvedValue([{ title: 'Test Product', price: 10 }]);

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getAllProducts(req, res);

    expect(res.json).toHaveBeenCalledWith([{ title: 'Test Product', price: 10 }]);
  });
});
