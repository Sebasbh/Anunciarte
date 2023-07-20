import { useEffect, useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/product')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {products.map(product => (
        <div key={product.title}>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <p>Email: {product.email}</p>
          <p>Categories: {product.categories.join(', ')}</p>
          <p>Year: {product.year}</p>
          <p>Size: {product.size}</p>
          <p>Ready to Hang: {product.readyToHang ? 'Yes' : 'No'}</p>
          <p>Frame: {product.frame ? 'Yes' : 'No'}</p>
          <p>Signed: {product.signed ? 'Yes' : 'No'}</p>
          <p>Materials: {product.materials}</p>
          <p>Shipping: {product.shipping ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

