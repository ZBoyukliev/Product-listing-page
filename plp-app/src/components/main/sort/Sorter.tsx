// SorterComponent.tsx

import  { FunctionComponent, useContext } from 'react';
import { ProductContext, ProductContextType } from '../../../context/products';

const SorterComponent: FunctionComponent = () => {
  const productContext = useContext<ProductContextType | null>(ProductContext);

  if (!productContext) {
    return <div>Loading...</div>;
  }

  const { sortProducts } = productContext;


  return (
    <div className="sorter-container col-3">
      <h5>Sort By:</h5>

      <div className="mb-3">
        {/* <label htmlFor="sortingOption" className="form-label">
          Sort Option:
        </label> */}
        <select
          className="form-select"
          id="sortingOption"
          onChange={(e) => sortProducts(e.target.value)}
        >
          <option value="">Select an option</option>
          <option value="name_asc">A-Z</option>
          <option value="name_desc">Z-A</option>
          <option value="price_asc">Price Low-High</option>
          <option value="price_desc">Price High-Low</option>
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