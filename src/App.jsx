import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Product from './Pages/Product';
import ProductDetail from './Pages/ProductDetail';
import Error from './Pages/Error'
import Favourites from './Pages/Favourites';
import './App.css'

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path="/products" element={<Product/>}></Route>
                <Route path="/productDetail" element={<ProductDetail/>}></Route>
                <Route path="/error" element={<Error/>}></Route>
                <Route path="/Favourites" element={<Favourites/>}></Route>
        
            </Routes>
        </BrowserRouter>
    )
}

export default App
