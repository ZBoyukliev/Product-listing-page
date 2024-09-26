import { FunctionComponent } from 'react';
import styles from './CatalogTyle.module.scss';
import Product from '../../../../types/Product';
import { toast } from 'react-toastify';
import RatingStars from '../ratingStars/RatingStars';

type Props = {
    product: Product;
};

const CatalogTyleComponent: FunctionComponent<Props> = ({ product }) => {
    return (
        <>
            <div key={product._id} className={`${styles['card-container']} col-12 col-md-6 col-xl-4 mb-4 mb-xl-0`}>
                <div className={`${styles['card-content']} card-main card m-0 m-xl-4`}>
                    <div className={`${styles['card-img']}`}>
                        <img src={product.imageUrl} alt={product.title} className={` img-fluid card-img-top`} />
                    </div>
                    <div className="card-body d-flex flex-column justify-content-start">
                        <h5 className="card-title mb-1 mb-xl-3">{product.title}</h5>
                        <p className="card-text mb-1 mb-xl-3">{product.description}</p>
                        <p className="card-text mb-1 mb-xl-3">Price: {product.discountPrice ? <del>${product.price.toFixed(2)}</del> : `$${product.price.toFixed(2)}`}</p>
                        {product.discountPrice && <p className="card-text">Discount Price: {`$ ${product.discountPrice?.toFixed(2)}`}</p>}
                        <div className={`${styles['raiting-wrapper']} card-text d-flex align-items-center gap-2`}>Rating: <RatingStars rating={product.rating}/></div>
                        <button className={`${styles['btn']}`} onClick={() => toast.info('Product addet to cart')}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CatalogTyleComponent;
