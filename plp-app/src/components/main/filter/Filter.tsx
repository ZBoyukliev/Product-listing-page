

import React, { FunctionComponent, useContext } from 'react';
import './Filter.scss';
import { ProductContext, ProductContextType } from '../../../context/products';

const FilterComponent: FunctionComponent = () => {
  const productContext = useContext<ProductContextType | null>(ProductContext);
  

  if (!productContext) {
    return <div>Loading...</div>;
  }

  const {handleSelectedColorsChange} = productContext;

  return (
    <div className='filter-container col-3'>
      <h5>Filter By:</h5>
      {/* <form> */}
      <div className="mb-3">
        <label htmlFor="colorFilter" className="form-label">Color:</label>
        <div>
          <div className="form-check">
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSelectedColorsChange(e)}
             type="checkbox"
              value='red' 
              className="form-check-input" 
              id="red" 
              // checked={colors.includes(color)}
              />
            <label className="form-check-label" htmlFor="red">Red</label>
          </div>
          <div className="form-check">
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSelectedColorsChange(e)} type="checkbox" value='black' className="form-check-input" id="black" />
            <label className="form-check-label" htmlFor="black">Black</label>
          </div>
          <div className="form-check">
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSelectedColorsChange(e)} value='blue' type="checkbox" className="form-check-input" id="blue" />
            <label className="form-check-label" htmlFor="blue">Blue</label>
          </div>
          {/* Add more color options as needed */}
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="priceFilter" className="form-label">Price:</label>
        <div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="priceLow" />
            <label className="form-check-label" htmlFor="priceLow">Low</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="priceMedium" />
            <label className="form-check-label" htmlFor="priceMedium">Medium</label>
          </div>
          {/* Add more price options as needed */}
        </div>
      </div>

      {/* Add more filtering options as needed */}
      {/* </form> */}
    </div>
  );
};

export default FilterComponent;