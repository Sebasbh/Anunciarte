import Button from "../Components/atoms/Button";
import "./home.css";
import HomeImage from "./../assets/home_img.png";
import Logo from './../assets/anunciarteLogo02.png';


export default function Home() {
  return (
    <div className="home">
      <div>{Logo}</div>
      <div className="homeMainContainer">
        <div>
          <img src={HomeImage} alt="AnunciArte" />
        </div>
        <div className="sloganContainer">
          <div>
            <h1>
              the place of <span className="highlight">ART</span>
            </h1>
          </div>
          <div className="homeButtons">
            <Button style="whiteButton" text="Buy" arrow={true} />
            <Button style="whiteButton" text="Sell" arrow={true} />
          </div>
          
        </div>
      </div>
    </div>
  );
}
