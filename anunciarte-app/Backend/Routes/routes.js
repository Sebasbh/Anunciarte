
import express from 'express'
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct, getFilteredProducts } from '../Controllers/ProductControllers.js'

const ProductRouter = express.Router()

ProductRouter.get('/', getAllProducts)
ProductRouter.get('/:id', getProduct)
ProductRouter.get('/getFilteredProducts', getFilteredProducts)
ProductRouter.post('/', createProduct)
ProductRouter.put('/:id', updateProduct)
ProductRouter.delete('/:id', deleteProduct)

export default ProductRouter;