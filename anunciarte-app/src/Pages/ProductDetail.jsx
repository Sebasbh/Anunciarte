import ContactModal from "../Components/atoms/PopUpContact";
import CartModal from "../Components/atoms/PopUpBuy";
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
            
          </div>
          <div className="infoContainer">
          <ProductList show={{ title: true, price: true, description:true }} id={productId} style={"product-container-white"} />

       
            <div className="ButtonsProductsDetail">
              <ContactModal />
            <CartModal author={"Nombre Apellido"} title={"Nombre de la pintura"} category="Modernismo" price={"900"} />
            </div>
            <h3>DETAILS</h3>
            
            
    
            COMPONENTE CON INFO ADICIONAL E INSTRUCCIONES
          </div>

          
        
        </div>
    </div>

  )
}
