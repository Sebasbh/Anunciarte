import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../../src/Pages/Home';
import Product from '../../src/Pages/Product';
import ProductDetail from '../../src/Pages/ProductDetail';
import Error from '../../src/Pages/Error';

const RouterItem = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path="/product" element={<Product/>}></Route>
                <Route path="/productDetail" element={<ProductDetail/>}></Route>
                <Route path="/Error" element={<Error/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterItem;