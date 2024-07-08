import { FunctionComponent } from 'react';

const Loading: FunctionComponent = () => {
    return (
        <div>
            <h2>Loading...</h2>
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default Loading;
