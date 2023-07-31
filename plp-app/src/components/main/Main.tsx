import { FunctionComponent } from 'react';
import FilterComponent from './filter/Filter';
import CategoryComponent from './category/Category';
import SorterComponent from './sort/Sorter';
import CatalogComponent from './catalog/Catalog';
import styles from './Main.module.scss';
// import Product from '../../types/Product';

const MainComponent: FunctionComponent = () => {

    // const [products, setProducts] = useState<Product[]>([]);
    // let categoryType: string = 'bags';

    // useEffect(() => {
    //     fetch('http://localhost:3030/data/items')
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             setProducts(data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, []);

    return (
        <div className={`${styles['main-page']} row`}>
            <FilterComponent />
            <div className="col-9">
                <div className='right-side row'>
                    <CategoryComponent />
                    <SorterComponent />
                </div>
                <CatalogComponent />
            </div>
        </div>
    );
};

export default MainComponent;