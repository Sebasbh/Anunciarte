import ContactModal from "../Components/atoms/PopUpContact";
import CartModal from "../Components/atoms/PopUpBuy";
import Navbar from "../Components/molecules/MobileNavbar";
import "./productDetail.css";
import illustration from "../assets/pageIllustration.png"



export default function ProductDetail() {
  return (
   
    <div className="ProductDetail">
        <Navbar />
        <div className="illustrationContainer">
          <img src={illustration} alt="" />
        </div>
        <div>
          <div className="galleryContainer">

          </div>
          <div className="infoContainer">
            componente con autor, país y precio
            <div className="ButtonsProductsDetail">
              <ContactModal />
              <CartModal />
            </div>
            <h3>DETAILS</h3>
            COMPONENTE CON TODA LA INFO DEL CUADRO
            COMPONENTE CON INFO ADICIONAL E INSTRUCCIONES
          </div>
        
        </div>
    </div>

  )
}
