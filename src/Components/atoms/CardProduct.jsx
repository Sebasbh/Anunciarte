import "./productList.css"
import { useEffect, useState } from 'react';
import data from './../../../data.json'


function ProductList({show, id, style}) {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3001/products')
  //     .then(response => response.json())
  //     .then(data => setProducts(data))
  //     .catch(error => console.log(error));
  // }, []);

  // useEffect(() => {
  //   fetch('../../../data.json')
  //     .then(response => response.json())
  //     .then(data => setProducts(data))
  //     .catch(error => console.log(error));
  // }, []);

  useEffect (()=>{
    const idProduct = data.products.find(product => product._id === id);
    setProducts(idProduct ? [idProduct] : []);
  }, [id]);


  return (
    <div>
      {products.map((product, index) => (
        <div key={index} className={style}>
          {show.title && <h2>{product.title}</h2>}
          {show.price && <p>Price: ${product.price}</p>}
          {show.image && <img src={show.image} alt={product.title} />}
          {show.description && <p>{product.description}</p>}
          {show.email && <p>Email: {product.email}</p>}
          {show.category && <p>Categories: {product.category}</p>}
          {show.year && <p>Year: {product.year}</p>}
          {show.size && <p>Size: {product.size}</p>}
          {show.readyToHang && <p>Ready to Hang: {product.readyToHang ? 'Yes' : 'No'}</p>}
          {show.frame && <p>Frame: {product.frame ? 'Yes' : 'No'}</p>}
          {show.signed && <p>Signed: {product.signed ? 'Yes' : 'No'}</p>}
          {show.materials && <p>Materials: {product.materials}</p>}
          {show.shipping && <p>Shipping: {product.shipping ? 'Yes' : 'No'}</p>}
        </div>
      ))}
    </div>
  );
}

export default ProductList;

