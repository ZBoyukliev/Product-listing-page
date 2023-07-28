import { FunctionComponent } from 'react';


const CatalogComponent :FunctionComponent = () => {
  return (

  <div className="container catalog col-9">
    <div className="row mb-4">
      {/* <!-- Product Item 1 --> */}
      <div className="col-md-4">
        <div className="card">
          <img src="product1.jpg" alt="Product 1" className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">Product 1</h5>
            <p className="card-text">Short description of Product 1</p>
            <p className="card-text">Price: $19.99</p>
            <p className="card-text">Rating: 4.5 stars</p>
            <button className="btn btn-success">Add to Cart</button>
          </div>
        </div>
      </div>

      {/* <!-- Product Item 2 --> */}
      <div className="col-md-4">
        <div className="card">
          <img src="product2.jpg" alt="Product 2" className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">Product 2</h5>
            <p className="card-text">Short description of Product 2</p>
            <p className="card-text">Price: $14.99 <del>$19.99</del></p>
            <p className="card-text">Rating: 4.8 stars</p>
            <button className="btn btn-success">Add to Cart</button>
          </div>
        </div>
      </div>

      {/* <!-- Product Item 3 --> */}
      <div className="col-md-4">
        <div className="card">
          <img src="product3.jpg" alt="Product 3" className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">Product 3</h5>
            <p className="card-text">Short description of Product 3</p>
            <p className="card-text">Price: $9.99</p>
            <p className="card-text">Rating: 4.2 stars</p>
            <button className="btn btn-success">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>

  </div>



  );
};

export default CatalogComponent;