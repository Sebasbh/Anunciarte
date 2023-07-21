import "./error.css";
import errorImage from "../assets/alert.png";

export default function Error() {
  return (
   
    <div className="Error">
        <div className="Alert">
        <div><img src={errorImage} alt="Alerta de error" /></div>
        <h1>Oooops¡, Houston¡, tenemos un problema¡¡</h1>
        </div>
    </div>

  )
}