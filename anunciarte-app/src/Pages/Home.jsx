import Button from "../Components/atoms/Button";
import "./home.css";
import HomeImage from "./../assets/home_img.png";
import Logo from './../assets/anunciarteLogo02.png';
import Footer from '../Components/atoms/Footer'
import PopUpBuy from '../Components/atoms/PopUpBuy'
import PopUpContact from '../Components/atoms/PopUpContact'


export default function Home() {
  return (
    <div className="home">
      <div className="logoContainer">
        <img src={Logo} alt="anunciArte" />
      </div>
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
          <PopUpContact />
        </div>
      </div>
    </div>
  );
}
