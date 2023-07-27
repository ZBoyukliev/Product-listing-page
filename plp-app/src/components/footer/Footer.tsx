import { FunctionComponent } from 'react';

const Footer: FunctionComponent = () => {


  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Footer Content</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod mauris id egestas tincidunt.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Email</a>
              </li>
              <li>
                <a href="#!">Phone</a>
              </li>
              <li>
                <a href="#!">Address</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3 bg-dark text-white">
        © {new Date().getFullYear()} Your App Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
