import ContactModal from "../Components/atoms/PopUpContact";
import CartModal from "../Components/atoms/PopUpBuy";
import "./productDetail.css";
import illustration from "../assets/pageIllustration.png"
import MobileNavbar from "./../Components/molecules/MobileNavbar"
import Navbar from "./../Components/atoms/Navbar"





export default function ProductDetail() {
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
            componente con autor, país y precio
          <div className="ButtonsProductsDetail">
            <ContactModal />
            <CartModal />
            </div>
            <h3>DETAILS</h3>
            
            
    
            COMPONENTE CON INFO ADICIONAL E INSTRUCCIONES
          </div>

          
        
        </div>
    </div>

  )
}
