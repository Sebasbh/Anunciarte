import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Product from './Pages/Product';
import ProductDetail from './Pages/ProductDetail';
import './App.css'

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path="/product" element={<Product/>}></Route>
                <Route path="/productDetail" element={<ProductDetail/>}></Route>
        
            </Routes>
        </BrowserRouter>
    )
}

export default App
