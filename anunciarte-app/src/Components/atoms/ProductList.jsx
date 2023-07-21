import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/product')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container">
      <div className="card-container">
        {products.map((product) => (
          <Link key={product.id} to={`/detail/${product._id}`} className="card-link">
            <div className="card">
              <img src={`/Images/${product.image}`} className="card-image" alt={product.title} />
              <div className="card-content">
                <h2 className="card-title">{product.title}</h2>
                <p className="card-price">{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
