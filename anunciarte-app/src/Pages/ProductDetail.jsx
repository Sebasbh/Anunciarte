import Button from "../Components/atoms/Button";
import "./productDetail.css";
import illustration from "../assets/pageIllustration.png"
import MobileNavbar from "./../Components/molecules/MobileNavbar"
import Navbar from "./../Components/atoms/Navbar"
import ProductList from "../Components/atoms/ProductList";


 




export default function ProductDetail() {
  const productId = 2;
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
            <ProductList show={{ title: true, price: true, description:true }} id={productId} style={"product-container-white"} />

          </div>
          <div className="infoContainer">
       
            <div className="ButtonsProductsDetail">
              <Button style="blueButton" text="Contact" arrow={false} />
              <Button style="yellowButton" text="Buy" arrow={false}/>
            </div>
            <h3>DETAILS</h3>
            
            
    
            COMPONENTE CON INFO ADICIONAL E INSTRUCCIONES
          </div>

          
        
        </div>
    </div>

  )
}
