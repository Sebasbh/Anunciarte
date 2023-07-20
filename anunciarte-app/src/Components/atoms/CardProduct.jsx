import "./cardProduct.css"

export default function CardProduct({ image, title, description, price }) {
    const [hover, setHover] = useState(false);
  
    const handleHover = () => {
      setHover(!hover);
    };
  
    return (
      <div className={`card ${hover ? "hovered" : ""}`} onClick={handleHover}>
        <img src={image} alt={title} className="card-img" />
        {hover && (
          <div className="card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{price}</p>
          </div>
        )}
        <div className="card-fav">
          <i className="fas fa-heart"></i>
        </div>
      </div>
    );
  }
  