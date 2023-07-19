import express from 'express'
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from '../controllers/ProductController.js'

const ProductRouter = express.Router()

ProductRouter.get('/', getAllProducts)
ProductRouter.get('/:id', getProduct)
ProductRouter.post('/', createProduct)
ProductRouter.put('/:id', updateProduct)
ProductRouter.delete('/:id', deleteProduct)

export default ProductRouter;