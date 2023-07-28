import { FunctionComponent } from 'react';
import './Filter.scss';

const FilterComponent: FunctionComponent = () => {

    return (
        <div className='filter-container col-3'>
            <h5>Filter By:</h5>
            <form>
                <div className="mb-3">
                    <label htmlFor="colorFilter" className="form-label">Color:</label>
                    <div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="red" />
                            <label className="form-check-label" htmlFor="red">Red</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="blue" />
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
            </form>
        </div>
    );
};

export default FilterComponent;