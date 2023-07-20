import { useEffect, useState } from 'react';


function ProductList(show) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);

  // useEffect(() => {
  //   fetch('../../../data.json')
  //     .then(response => response.json())
  //     .then(data => setProducts(data))
  //     .catch(error => console.log(error));
  // }, []);

  // useEffect (()=>{
  //   setProducts(productsData.products);
  // }, [])

  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          {show.title && <h2>{product.title}</h2>}
          {show.price && <p>Price: ${product.price}</p>}
          <img src={show.image} alt={product.title} />
          {show.description && <p>{product.description}</p>}
          {show.email && <p>Email: {product.email}</p>}
          <p>Categories: {product.category}</p>
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

