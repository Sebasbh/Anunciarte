import "./product.css";
import Footer from '../Components/atoms/Footer'
import Navbar from "../Components/atoms/Navbar.jsx";  
import ProductList from "../Components/atoms/ProductList.jsx"


export default function Product() {
  return (
   <div className="mainConteinerProduct">
    <Navbar/>
    <ProductList/>
    <Footer/>

   </div>



)

  }
