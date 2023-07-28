import { FunctionComponent } from 'react';
import './Category.scss';

const CategoryComponent: FunctionComponent = () => {

    return (
        <div className="container category col-8">
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

export default CategoryComponent;