import { FunctionComponent } from 'react';
import { useEffect, useState } from 'react';
import Product from '../../../types/Product';
import styles from './Catalog.module.scss';


const CatalogComponent: FunctionComponent = () => {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:3030/data/items')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        console.log(data);

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (

    <div className="container catalog col-9">
      <div className="row mb-4">
        {products.map(product => (
          <div key={product._id} className={`${styles['card-container']} col-md-4`}>
            <div className={`${styles['card-main']} card mb-4`}>
              <img src={product.imageUrl} alt={product.title} className={`${styles['card-img']} card-img-top`} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: {product.discountedPrice ? <del>${product.price}</del> : `$${product.price}`}</p>
                <p className="card-text">Rating: {product.rating} stars</p>
                <button className="btn btn-success">Add to Cart</button>
              </div>
            </div>
          </div>
          // <div key={product._id} className={`${styles['card-container']} col-md-4`}>
          //   <div className="card" >
          //     <img src={product.imageUrl} className="card-img-top" alt={product.title} />
          //     <div className="card-body">
          //       <h5 className="card-title">{product.title}</h5>
          //       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          //       <a href="#" className="btn btn-primary">Go somewhere</a>
          //     </div>
          //   </div>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogComponent;