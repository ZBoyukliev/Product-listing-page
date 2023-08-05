import { FunctionComponent, useContext } from 'react';
import { ProductContext } from '../../../context/products';
import { SortingOrder } from '../../../context/models/SortingOrder';
import { ProductContextType } from '../../../context/models/ContextModel';

const SorterComponent: FunctionComponent = () => {
  const productContext = useContext<ProductContextType | null>(ProductContext);

  if (!productContext) {
    return <div>Loading...</div>;
  }

  const { sortProducts } = productContext;

  return (
    <div className="sorter-container col-12 col-md-5 pt-4">
      <h5>Sort By:</h5>
      <div className="mb-3">
        <select
          className="form-select"
          id="sortingOption"
          onChange={(e) =>sortProducts(e.target.value)}
        >
          <option value={""}>Select an option</option>
          <option value={SortingOrder.NAME_ASC}>A-Z</option>
          <option value={SortingOrder.NAME_DESC}>Z-A</option>
          <option value={SortingOrder.PRICE_ASC}>Price Low-High</option>
          <option value={SortingOrder.PRICE_DESC}>Price High-Low</option>
        </select>
      </div>
    </div>
  );
};

export default SorterComponent;






// import { FunctionComponent } from 'react';
// import './Sorter.scss';
// import Product from '../../../types/Product';

// const SorterComponent: FunctionComponent = () => {

//     return (
//         <div className="container sorter col-4">
//             {products.map(product => (
//                 <div key={product._id} className="row">
//                     <div className="col-sm-6 col-md-4 col-lg-3">
                       
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default SorterComponent;