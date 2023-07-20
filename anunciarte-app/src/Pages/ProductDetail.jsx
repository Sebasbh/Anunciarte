<<<<<<< HEAD
import ContactModal from "../Components/atoms/PopUpContact";
=======

>>>>>>> a94668dfdc6f64b5d48bec0a118971df22d9aaea
import CartModal from "../Components/atoms/PopUpBuy";
import "./productDetail.css";
import illustration from "../assets/pageIllustration.png"
import MobileNavbar from "./../Components/molecules/MobileNavbar"
import Navbar from "./../Components/atoms/Navbar"
import ProductList from "../Components/atoms/ProductList";
import SpecialInfoCard from "../Components/atoms/SpecialInfoCard";
import ContactModal from "../Components/atoms/PopUpContact"




 




export default function ProductDetail() {
  const productId = 2;
  const properties = {
    title: true,
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

       
            <div className="buttonsContainerProduct">
            <ContactModal />
            <CartModal author={"Nombre Apellido"} title={"Nombre de la pintura"} category="Modernismo" price={"900"} />
            </div>
           
            <h3>DETAILS</h3>
            <ProductList show={properties} id={productId} style={"product-container"} />
            <SpecialInfoCard artwork="Original artwork" 
            stock="Only 1 available. Get it before it's gone" 
            returns="Free & easy 14 days returns" 
            pay="Pay in instalments as low as £168,00/month" 
            shipping="Worldwide safe shipping" 
            arrival="Ships from United Kingdom by Wednesday, 26 July 2023" />

            
          
          
          </div>

          
        
        </div>
    </div>

  )
}

  