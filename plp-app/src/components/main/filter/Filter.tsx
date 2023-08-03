
import React, { FunctionComponent, useContext } from 'react';
import './Filter.scss';
import { ProductContext } from '../../../context/products';
import { ProductContextType } from '../../../context/models/ContextModel';

const FilterComponent: FunctionComponent = () => {
  const productContext = useContext<ProductContextType | null>(ProductContext);
  

  if (!productContext) {
    return <div>Loading...</div>;
  }

  const {handleSelectedColorsChange, handleMaximumPriceSelect} = productContext;

  return (
    <div className='filter-container col-3 m-4'>
      <h5>Filter By:</h5>
      <div className="mb-3">
        <label htmlFor="colorFilter" className="form-label">Color:</label>
        <div>
          <div className="form-check">
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSelectedColorsChange(e)}
             type="checkbox"
              value='red' 
              className="form-check-input" 
              id="red" 
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
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="priceFilter" className="form-label">Price:</label>
        <div>
          <div className="form-check">
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleMaximumPriceSelect(e)} type="checkbox" className="form-check-input" value={50} id="priceLow" />
            <label className="form-check-label"  htmlFor="priceLow">Low</label>
          </div>
          <div className="form-check">
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleMaximumPriceSelect(e)} type="checkbox" className="form-check-input" value={200} id="priceMedium" />
            <label className="form-check-label" htmlFor="priceMedium">Medium</label>
          </div>
          <div className="form-check">
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleMaximumPriceSelect(e)} type="checkbox" className="form-check-input" value={500} id="priceHigh" />
            <label className="form-check-label" htmlFor="priceHigh">High</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;