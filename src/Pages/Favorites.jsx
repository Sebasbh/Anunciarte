import illustration from "../assets/pageIllustration.png"
import Navbar from "../Components/molecules/MobileNavbar";
import Footer from "../Components/atoms/Footer";


export default function Favourites() {
  return (
   
  <div className="Favourites">
        <Navbar />
        <div className="illustrationContainer">
          <img src={illustration} alt="" />
        </div>
        <div>
          <div className="GaleryFavorites"></div>
        </div>
        <Footer />
  </div>
           
           
  )
}