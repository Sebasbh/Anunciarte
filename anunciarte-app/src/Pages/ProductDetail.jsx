import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from '../Components/atoms/Footer'
import Navbar from "../Components/atoms/Navbar.jsx";
//import Navbar from "../Components/molecules/MobileNavbar";
import illustration from "../assets/pageIllustration.png";
import "./ProductDetail.css";

export default function ProductDetail() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/product/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="ProductDetail">
      <Navbar />
      <div className="illustrationContainer">
        <img src={illustration} alt="Illustration" />
      </div>
      <div className="mainContainerProduct">
        <div className="galleryContainer">
          {product && (
            <img
              src={`/Images/${product.image}`}
              alt={product.title}
              className="productImage"
            />
          )}
        </div>
        <div className="infoContainer">
          {product && (
            <div className="productInfo">
              <h2>{product.title}</h2>
              <p className="price">Price: ${product.price}</p>
              {/*<div className="buttonsContainer">
                 Add to Cart and Buy Now buttons 
                <Button label="Add to Cart" />
                <Button label="Buy Now" />
              </div>*/}
            </div>
          )}
          <h3>DETAILS</h3>
          {product && (
            <>
              <p className="description">{product.description}</p>
              <p className="email">Email: {product.email}</p>
              {product.categories && product.categories.length > 0 && (
                <p className="categories">Categories: {product.categories.join(", ")}</p>
              )}
              <div className="productDetails">
                <p>Year: {product.year}</p>
                <p>Size: {product.size}</p>
                <p>Ready to Hang: {product.readyToHang ? "Yes" : "No"}</p>
                <p>Frame: {product.frame ? "Yes" : "No"}</p>
                <p>Signed: {product.signed ? "Yes" : "No"}</p>
                <p>Materials: {product.materials}</p>
                <p>Shipping: {product.shipping ? "Available" : "Not available"}</p>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

