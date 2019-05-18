
import React, { Component } from 'react';
import Deal from './DealFeature/listDeals';
import ProductsContainer from '../Containers/ProductsContainer';

class Deals_feature extends Component {

    render() {
        return (
            <div className="deals_featured">
                <div className="container">
                    <div className="row">
                        <div className="col d-flex flex-lg-row flex-column align-items-center justify-content-start">
                            <Deal />
                            <ProductsContainer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Deals_feature;