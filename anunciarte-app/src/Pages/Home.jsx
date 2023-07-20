import Button from "../Components/atoms/Button";
import "./home.css";
import HomeImage from "./../assets/home_img.png";
<<<<<<< HEAD
import Logo from "./../assets/anunciarteLogo02.png"
=======
import Logo from "./../assets/anunciarteLogo02.png";
>>>>>>> a94668dfdc6f64b5d48bec0a118971df22d9aaea

export default function Home() {
  return (
    <div className="home">
<<<<<<< HEAD
      <div>{Logo}</div>
=======
      <div className="logoContainer">
        <img src={Logo} alt="anunciArte" />
      </div>
>>>>>>> a94668dfdc6f64b5d48bec0a118971df22d9aaea
      <div className="homeMainContainer">
        <div>
          <img src={HomeImage} alt="AnunciArte" />
        </div>
        <div className="sloganContainer">
          <div>
            <h1>
              the place of   <span className="highlight">ART</span>
            </h1>
          </div>
          <div className="homeButtons">
            <a href="/products">
              <Button style="whiteButton" text="Buy" arrow={true} />
            </a>
            <a href="/error">
              <Button style="whiteButton" text="Sell" arrow={true} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
