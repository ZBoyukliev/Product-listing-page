import { FunctionComponent } from 'react';
import './Sorter.scss';

const SorterComponent: FunctionComponent = () => {

    return (
        <div className="container sorter">
            <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-3">
                    category: name
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                    category: desc
                </div>
            </div>
        </div>
    );
};

export default SorterComponent;