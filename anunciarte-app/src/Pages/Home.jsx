import Button from "../Components/atoms/Button";
import "./home.css";
import HomeImage from "./../assets/home_img.png";
import CardProduct from "../Components/atoms/CardProduct";

export default function Home() {
  return (
    <div className="home">
      <div>LOGO</div>
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
          <CardProduct />
        </div>
      </div>
    </div>
  );
}
