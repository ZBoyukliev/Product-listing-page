import { FunctionComponent } from 'react';
import styles from './CatalogTyle.module.scss';
import Product from '../../../../types/Product';

type Props = {
    product: Product;
};

const CatalogTyleComponent: FunctionComponent<Props> = ({ product }) => {

    // const [showAlert, setShowAlert] = useState(false);

    // const handleAddToCart = () => {
    //     setShowAlert(true);
    //     setTimeout(() => {
    //         setShowAlert(false);
    //     }, 3000); // Hide the alert after 3 seconds (adjust as needed)
    // };

    return (
        <>
            {/* <div key={product._id} className={`${styles['card-container']} card`} >
                <img src={product.imageUrl} alt={product.title} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <a href="/" className="btn btn-primary">Add to Cart</a>
                    </div>
            </div> */}
            <div key={product._id} className={`${styles['card-container']} col-md-4`}>
                <div className={`${styles['card-content']} card-main card m-4`}>
                    <div className={`${styles['card-img']}`}>

                        <img src={product.imageUrl} alt={product.title} className={` img-fluid card-img-top`} />
                    </div>
                    <div className="card-body d-flex flex-column justify-content-start">
                        <h5 className="card-title mb-3">{product.title}</h5>
                        <p className="card-text mb-3">{product.description}</p>
                        <p className="card-text mb-3">Price: {product.discountPrice ? <del>${product.price.toFixed(2)}</del> : `$${product.price.toFixed(2)}`}</p>
                        {product.discountPrice && <p className="card-text">Discount Price: {`$ ${product.discountPrice?.toFixed(2)}`}</p>}
                        <p className="card-text">Rating: {product.rating} stars</p>
                        <button className={`${styles['btn']}`}>Add to Cart</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default CatalogTyleComponent;