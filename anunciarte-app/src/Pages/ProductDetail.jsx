import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../Components/atoms/Footer";
import Navbar from "../Components/atoms/Navbar.jsx";
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

  const handleAddToCart = () => {
    // Implement logic to add the current product to the cart
    console.log("Product added to cart:", product);
  };

  const handleAddToFavorites = () => {
    // Implement logic to add the current product to favorites
    console.log("Product added to favorites:", product);
  };

  return (
    <div className="ProductDetail">
      <Navbar />
      {product && (
        <div className="productDetailContainer">
          <div className="galleryContainer">
            <img
              src={`/Images/${product.image}`}
              alt={product.title}
              className="productImage"
            />
          </div>
          <div className="infoContainer">
            <div className="productInfo">
              <h2>{product.title}</h2>
              <p className="price">Price: ${product.price}</p>
              
            </div>
            <h3>DETAILS</h3>
            <p className="description">{product.description}</p>
            <p className="email">Email: {product.email}</p>
            {product.categories && product.categories.length > 0 && (
              <p className="categories">
                Categories: {product.categories.join(", ")}
              </p>
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
            <div className="buttonsContainer">
                <button onClick={handleAddToCart}>Add to Cart</button>
                <button onClick={handleAddToFavorites}>Add to Favorites</button>
              </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
