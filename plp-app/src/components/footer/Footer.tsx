import { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from  './Footer.module.scss';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';


const Footer: FunctionComponent = () => {

  return (
    <footer className={`${styles['foot-main']} text-center text-lg-start`}>
      <div className="container footer p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Footer Content</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod mauris id egestas tincidunt.
            </p>
          </div>

          <div className={`${styles['div-icons']} col-lg-3 col-md-6 mb-4 mb-md-0`}>
            <h5 className="text-uppercase">FOLLOW US</h5>
            <ul className="list-unstyled">
              <li>
              <a href="https://www.facebook.com/">
                    <FontAwesomeIcon icon={faFacebook as IconDefinition} />
                  </a>
              </li>
              <li>
              <a href="https://twitter.com/">
                    <FontAwesomeIcon icon={faTwitter as IconDefinition} />
                  </a>
              </li>
              <li>
              <a href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram as IconDefinition} />
            </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <ul className="list-unstyled">
              <li>
                plp.gmail.com
              </li>
              <li>
               +359 898 000 999
              </li>
              <li>
                bul. Ivan Vazov 188 Sofia
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3 bg-dark text-white">
        © {new Date().getFullYear()} Product Listing Page App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
