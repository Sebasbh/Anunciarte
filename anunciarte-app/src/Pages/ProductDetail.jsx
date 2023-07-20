
import CartModal from "../Components/atoms/PopUpBuy";
import "./productDetail.css";
import illustration from "../assets/pageIllustration.png"
import MobileNavbar from "./../Components/molecules/MobileNavbar"
import Navbar from "./../Components/atoms/Navbar"
import ProductList from "../Components/atoms/ProductList";


 




export default function ProductDetail() {
  const productId = 2;
  const properties = {
    title: true,
    author: true,
    price: true,
    description: true,
    category: true,
    year: true,
    size: true,
    readyToHang: true,
    frame: true,
    signed: true,
    materials: true,
    shipping: true,
  };
  
  return (
   
    <div className="ProductDetail">
      <Navbar />
      <div className="mobileOnly">
        <MobileNavbar />
      </div>
      
      
    
    
        
        <div className="illustrationContainer">
          <img src={illustration} alt="" />
        </div>
        <div className="mainContainerProduct">
          <div className="galleryContainer">
            
          </div>
          <div className="infoContainer">
          <ProductList show={{ title: true, price: true, description:true }} id={productId} style={"product-container-white"} />

       
            <div className="ButtonsProductsDetail">
              
              <CartModal/>
            </div>
            <h3>DETAILS</h3>
            <ProductList show={properties} id={productId} style={"product-container"} />
          
          </div>

          
        
        </div>
    </div>

  )
}
