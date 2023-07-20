import { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct, getFilteredProducts } from "../Controllers/ProductControllers.js";
import Product from "../models/ProductModel.js";

jest.mock('../Models/ProductModel.js');

describe("Product Controller", () => {
    let mockReq, mockRes, mockProduct;

    beforeEach(() => {
        mockProduct = { _id: "1", name: "Product 1", price: 100 };

        mockReq = {
            params: { id: mockProduct._id },
            body: mockProduct,
            query: {}
        };
        
        mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
    });

    test("getAllProducts returns all products", async () => {
        // Arrange
        const mockProducts = [mockProduct];
        Product.find = jest.fn().mockResolvedValue(mockProducts);

        // Act
        await getAllProducts(mockReq, mockRes);

        // Assert
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith(mockProducts);
    });

    // Similar tests for the other controller functions
    test("getProduct returns the correct product", async () => {
        Product.findById = jest.fn().mockResolvedValue(mockProduct);
        await getProduct(mockReq, mockRes);
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith(mockProduct);
    });

    test("createProduct creates a product", async () => {
        Product.create = jest.fn().mockResolvedValue(mockProduct);
        await createProduct(mockReq, mockRes);
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith({ message: "Order created correctly!" });
    });

    test("updateProduct updates a product", async () => {
        Product.updateOne = jest.fn().mockResolvedValue({ nModified: 1 });
        await updateProduct(mockReq, mockRes);
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith({ message: "Product updated correctly!" });
    });

    test("deleteProduct deletes a product", async () => {
        Product.deleteOne = jest.fn().mockResolvedValue({ deletedCount: 1 });
        await deleteProduct(mockReq, mockRes);
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith({ message: "Product deleted correctly!" });
    });

    test("getFilteredProducts returns filtered products", async () => {
        const mockProducts = [mockProduct];
        Product.find = jest.fn().mockResolvedValue(mockProducts);
        await getFilteredProducts(mockReq, mockRes);
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith(mockProducts);
    });
});
