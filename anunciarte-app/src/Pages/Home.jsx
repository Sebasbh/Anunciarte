import Button from "../Components/atoms/Button";
import "./home.css";
import HomeImage from "../../assets/home_img.png"


export default function Home() {
  return (
    <div className="home">
        <div>LOGO</div>
        <div>
        <div className="homeMainContainer">
            <img src={HomeImage} alt="AnunciArte" />
        </div>
        <div>
        <div>
            <h1>the place of ART</h1>
        </div>
        <div className="homeButtons">
            <Button style="whiteButton" text="Buy" arrow={true} />
            <Button style="whiteButton" text="Sell" arrow={true}/>
        </div>

        </div>
        </div>
        
       
    

    </div>
   
  )
}
