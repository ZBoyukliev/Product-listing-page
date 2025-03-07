import { FunctionComponent, useContext } from "react";
import styles from "./Filter.module.scss";
import { ProductContext } from "../../../context/products";
import { ProductContextType } from "../../../context/models/ContextModel";

type Props = {
  onCloseFilters: () => void;
}

const FilterComponent: FunctionComponent<Props> = ({ onCloseFilters }) => {
  
  const productContext = useContext<ProductContextType | null>(ProductContext);
  if (!productContext) {
    return <div>Loading...</div>;
  }

  const { filters, handleSelectedColorsChange, handleMaximumPriceSelect, handleResetFilters } = productContext;

  return (
    <aside className={`${styles["filter-main"]} pt-4 pe-2`}>
        <p className='text-end d-block d-md-none pt-2 pe-4' onClick={onCloseFilters}>X</p>
      <div className="d-flex align-items-end justify-content-between">
        <h2 className="px-3 py-1">FILTER </h2>
        <p className={`${styles['reset-x']} d-none d-md-block pe-2`} onClick={handleResetFilters}>Reset X</p>
      </div>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Color
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <ul>
              <li>
                <button
                  onClick={() => handleSelectedColorsChange("black")}
                  className={`${styles['filtered-button']} ${filters.colors.includes('black') && styles['selected']} d-flex justify-content-between align-items-center btn`}  >
                  Black
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M240 64c0-8.8-7.2-16-16-16s-16 7.2-16 16V240H32c-8.8 0-16 7.2-16 16s7.2 16 16 16H208V448c0 8.8 7.2 16 16 16s16-7.2 16-16V272H416c8.8 0 16-7.2 16-16s-7.2-16-16-16H240V64z" /></svg>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSelectedColorsChange("blue")}
                  className={`${styles['filtered-button']} ${filters.colors.includes('blue') && styles['selected']} d-flex justify-content-between align-items-center btn`} >
                  Blue
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M240 64c0-8.8-7.2-16-16-16s-16 7.2-16 16V240H32c-8.8 0-16 7.2-16 16s7.2 16 16 16H208V448c0 8.8 7.2 16 16 16s16-7.2 16-16V272H416c8.8 0 16-7.2 16-16s-7.2-16-16-16H240V64z" /></svg>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSelectedColorsChange("red")}
                  className={`${styles['filtered-button']} ${filters.colors.includes('red') && styles['selected']} d-flex justify-content-between align-items-center btn`} >
                  Red
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M240 64c0-8.8-7.2-16-16-16s-16 7.2-16 16V240H32c-8.8 0-16 7.2-16 16s7.2 16 16 16H208V448c0 8.8 7.2 16 16 16s16-7.2 16-16V272H416c8.8 0 16-7.2 16-16s-7.2-16-16-16H240V64z" /></svg>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSelectedColorsChange("orange")}
                  className={`${styles['filtered-button']} ${filters.colors.includes('orange') && styles['selected']} d-flex justify-content-between align-items-center btn`} >
                  Orange
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M240 64c0-8.8-7.2-16-16-16s-16 7.2-16 16V240H32c-8.8 0-16 7.2-16 16s7.2 16 16 16H208V448c0 8.8 7.2 16 16 16s16-7.2 16-16V272H416c8.8 0 16-7.2 16-16s-7.2-16-16-16H240V64z" /></svg>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSelectedColorsChange("yellow")}
                  className={`${styles['filtered-button']} ${filters.colors.includes('yellow') && styles['selected']} d-flex justify-content-between align-items-center btn`} >
                  Yellow
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M240 64c0-8.8-7.2-16-16-16s-16 7.2-16 16V240H32c-8.8 0-16 7.2-16 16s7.2 16 16 16H208V448c0 8.8 7.2 16 16 16s16-7.2 16-16V272H416c8.8 0 16-7.2 16-16s-7.2-16-16-16H240V64z" /></svg>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSelectedColorsChange("brown")}
                  className={`${styles['filtered-button']} ${filters.colors.includes('brown') && styles['selected']} d-flex justify-content-between align-items-center btn`} >
                  Brown
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M240 64c0-8.8-7.2-16-16-16s-16 7.2-16 16V240H32c-8.8 0-16 7.2-16 16s7.2 16 16 16H208V448c0 8.8 7.2 16 16 16s16-7.2 16-16V272H416c8.8 0 16-7.2 16-16s-7.2-16-16-16H240V64z" /></svg>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSelectedColorsChange("pink")}
                  className={`${styles['filtered-button']} ${filters.colors.includes('pink') && styles['selected']} d-flex justify-content-between align-items-center btn`} >
                  Pink
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M240 64c0-8.8-7.2-16-16-16s-16 7.2-16 16V240H32c-8.8 0-16 7.2-16 16s7.2 16 16 16H208V448c0 8.8 7.2 16 16 16s16-7.2 16-16V272H416c8.8 0 16-7.2 16-16s-7.2-16-16-16H240V64z" /></svg>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSelectedColorsChange("gray")}
                  className={`${styles['filtered-button']} ${filters.colors.includes('gray') && styles['selected']} d-flex justify-content-between align-items-center btn`} >
                  Gray
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M240 64c0-8.8-7.2-16-16-16s-16 7.2-16 16V240H32c-8.8 0-16 7.2-16 16s7.2 16 16 16H208V448c0 8.8 7.2 16 16 16s16-7.2 16-16V272H416c8.8 0 16-7.2 16-16s-7.2-16-16-16H240V64z" /></svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Price
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <ul>
              <li>
                <button
                  onClick={() => handleMaximumPriceSelect(99.99)}
                  className={`${styles['filtered-button']} ${filters.price === 99.99 && styles['selected']} d-flex justify-content-between align-items-center btn`}  >
                  Low $0-$99.99
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M240 64c0-8.8-7.2-16-16-16s-16 7.2-16 16V240H32c-8.8 0-16 7.2-16 16s7.2 16 16 16H208V448c0 8.8 7.2 16 16 16s16-7.2 16-16V272H416c8.8 0 16-7.2 16-16s-7.2-16-16-16H240V64z" /></svg>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleMaximumPriceSelect(299.99)}
                  className={`${styles['filtered-button']} ${filters.price === 299.99 && styles['selected']} d-flex justify-content-between align-items-center btn`} >
                  Medium $100-$299.99
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M240 64c0-8.8-7.2-16-16-16s-16 7.2-16 16V240H32c-8.8 0-16 7.2-16 16s7.2 16 16 16H208V448c0 8.8 7.2 16 16 16s16-7.2 16-16V272H416c8.8 0 16-7.2 16-16s-7.2-16-16-16H240V64z" /></svg>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleMaximumPriceSelect(300)}
                  className={`${styles['filtered-button']} ${filters.price === 300 && styles['selected']} d-flex justify-content-between align-items-center btn`} >
                  High $300+
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M240 64c0-8.8-7.2-16-16-16s-16 7.2-16 16V240H32c-8.8 0-16 7.2-16 16s7.2 16 16 16H208V448c0 8.8 7.2 16 16 16s16-7.2 16-16V272H416c8.8 0 16-7.2 16-16s-7.2-16-16-16H240V64z" /></svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button className="w-100 text-info btn btn-outline-dark mb-2 d-block d-md-none" onClick={onCloseFilters}>Show results</button>
      <p className={`${styles['reset-x']} d-block d-md-none text-center p-4`} onClick={handleResetFilters}>Reset</p>
    </aside>
  );
};

export default FilterComponent;
