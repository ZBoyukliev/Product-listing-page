import { FunctionComponent, useContext } from 'react';
import { ProductContext } from '../../context/products';
import { ProductContextType } from '../../context/models/ContextModel';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';


const Header: FunctionComponent = () => {

    const contextValue = useContext<ProductContextType | null>(ProductContext);

    if (!contextValue) {
        return <div>Loading...</div>;
    }

    const { changeCategoryType } = contextValue;


    return (
        <>
            <nav className={`${styles['nav-main']} navbar navbar-expand-lg fixed-top`}>
                <div className={`${styles['nav-container']} container nav-bar `}>
                    <a className="navbar-brand" href="#"><img src='/images/logoB1.png' /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`${styles['nav-div-ul']}`} id="navbarSupportedContent">
                        <ul className={`${styles['nav-ul']} navbar-nav me-auto mb-2 mb-lg-0 justify-content-around`}>
                            <li className={`${styles['nav-ul-li']} nav-item`}>
                                <Link onClick={() => changeCategoryType('bags')} to="/" className="nav-link" aria-current="page" >BAGS</Link>
                            </li>
                            <li className={`${styles['nav-ul-li']} nav-item`}>
                                <Link onClick={() => changeCategoryType('shoes')} to="/" className="nav-link" aria-current="page" >SHOES</Link>
                            </li>
                            <li className={`${styles['nav-ul-li']} nav-item`}>
                                <Link onClick={() => changeCategoryType('watches')} to="/" className="nav-link" aria-current="page" >WATCHES</Link>
                            </li>
                            <li className={`${styles['nav-ul-li']} nav-item`}>
                                <Link onClick={() => changeCategoryType('sunglasses')} to="/" className="nav-link" aria-current="page" >SUNGLASSES</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;