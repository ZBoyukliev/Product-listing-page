import { FunctionComponent, useContext } from 'react';
import { ProductContext, ProductContextType } from '../../context/products';
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
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                            <li className={`${styles['nav-ul-li']} nav-item`}>
                                <Link onClick={() => changeCategoryType('watches')} to="/" className="nav-link" aria-current="page" >WATCHES</Link>
                            </li>
                            <li className={`${styles['nav-ul-li']} nav-item`}>
                                <Link onClick={() => changeCategoryType('sunglasses')} to="/" className="nav-link" aria-current="page" >SUNGLASSES</Link>
                            </li>
                        </ul>

                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;