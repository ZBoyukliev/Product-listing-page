import { FunctionComponent, useEffect, useState } from 'react';
import FilterComponent from './filter/Filter';
import CategoryComponent from './category/Category';
import SorterComponent from './sort/Sorter';
import CatalogComponent from './catalog/Catalog';
import styles from './Main.module.scss';
import Product from '../../types/Product';

const MainComponent: FunctionComponent = () => {

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
        <div className={`${styles['main-page']} row`}>
            <FilterComponent />
            <div className={`${styles['heading']} col-9`}>
                <div className='right-side row'>
                    <CategoryComponent products={products} />
                    <SorterComponent products={products} />
                </div>
                <CatalogComponent products={products} />
            </div>
        </div>
    );
};

export default MainComponent;