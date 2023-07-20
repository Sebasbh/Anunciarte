import "./error.css";
import errorImage from "./../assets/alert.png";

export default function Error() {
  return (
   
    <div className="errorContainer">
        <div>Logo</div>
        <hi>Oooops¡, Houston¡, tenemos un problema¡¡</hi>
        <img src={errorImage} alt="Alerta de error" />
    </div>

  )
}