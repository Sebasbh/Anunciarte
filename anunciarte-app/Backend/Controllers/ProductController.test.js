import { getAllProducts } from "./ProductControllers.js";
import Product from "../Models/ProductModel.js";

jest.mock('../Models/ProductModel.js');

describe("Product Controller", () => {
    test("getAllProducts returns all products", async () => {
        // Arrange
        const mockProducts = [
            { name: "Product 1", price: 100 },
            { name: "Product 2", price: 200 },
        ];
        Product.find = jest.fn().mockResolvedValue(mockProducts);

        const mockReq = {};
        const mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        // Act
        await getAllProducts(mockReq, mockRes);

        // Assert
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith(mockProducts);
    });

    test("getAllProducts handles error", async () => {
        // Arrange
        const mockError = new Error("An error occurred");
        Product.find = jest.fn().mockRejectedValue(mockError);

        const mockReq = {};
        const mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        // Act
        await getAllProducts(mockReq, mockRes);

        // Assert
        expect(mockRes.json).toHaveBeenCalledWith({ message: mockError.message });
    });
});
