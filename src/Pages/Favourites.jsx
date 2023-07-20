import illustration from "../assets/pageIllustration.png"
import Footer from "../Components/atoms/Footer";
import CardProduct from "../Components/atoms/CardProduct";
import "./favourites.css";


export default function Favourites() {
  return (
   
  <div className="Favourites">
        
        <div className="illustrationContainer">
          <img src={illustration} alt="" />
        </div>
        <div>
          <h2>FAVOURITES</h2>
        </div>
        <div>
        <div className="GaleryFavourites"></div>
        <CardProduct/>
        </div>
        <Footer />
  </div>
           
           
  )
}