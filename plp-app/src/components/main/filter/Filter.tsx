
import React, { FunctionComponent, useContext } from 'react';
import styles from './Filter.module.scss';
import { ProductContext } from '../../../context/products';
import { ProductContextType } from '../../../context/models/ContextModel';

const FilterComponent: FunctionComponent = () => {
  const productContext = useContext<ProductContextType | null>(ProductContext);
  if (!productContext) {
    return <div>Loading...</div>;
  }

  const { handleSelectedColorsChange, handleMaximumPriceSelect } = productContext;

  return (
    <div className={`${styles['filter-main']} filter-container col-3 m-4`}>
      <h3>FILTER BY:</h3>
      <div className={`${styles['filter-contain']} mb-3`}>
        <label htmlFor="colorFilter" className="form-label">Color:</label>
        <div className={`${styles['filter-colors']} mb-3`}>

          <div className="form-check">
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSelectedColorsChange(e)} type="checkbox" value='black' className="form-check-input" id="black" />
            <label className={`${styles['color-black']} form-check-label`} htmlFor="black">Black</label>
          </div>
          <div className="form-check">
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSelectedColorsChange(e)} value='white' type="checkbox" className="form-check-input" id="blue" />
            <label className={`${styles['color-white']} form-check-label`} htmlFor="blue">White</label>
          </div>
          <div className="form-check">
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSelectedColorsChange(e)} value='blue' type="checkbox" className="form-check-input" id="blue" />
            <label className={`${styles['color-blue']} form-check-label`} htmlFor="blue">Blue</label>
          </div>
          <div className="form-check">
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSelectedColorsChange(e)}
              type="checkbox"
              value='red'
              className="form-check-input"
              id="red"
            />
            <label className={`${styles['color-red']} form-check-label`} htmlFor="red">Red</label>
          </div>
    
          <div className="form-check">
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSelectedColorsChange(e)} value='brown' type="checkbox" className="form-check-input" id="blue" />
            <label className={`${styles['color-brown']} form-check-label`} htmlFor="blue">Brown</label>
          </div>
          <div className="form-check">
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSelectedColorsChange(e)} value='pink' type="checkbox" className="form-check-input" id="blue" />
            <label className={`${styles['color-pink']} form-check-label`} htmlFor="blue">Pink</label>
          </div>
          <div className="form-check">
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSelectedColorsChange(e)} value='gray' type="checkbox" className="form-check-input" id="blue" />
            <label className={`${styles['color-gray']} form-check-label`} htmlFor="blue">Gray</label>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="priceFilter" className="form-label">Price:</label>
        <div className={`${styles['filter-prices']}`}>
          <div className="form-check">
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleMaximumPriceSelect(e)} type="checkbox" className="form-check-input" value={100} id="priceLow" />
            <label className="form-check-label" htmlFor="priceLow">Low</label>
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