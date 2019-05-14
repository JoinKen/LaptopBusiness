
import React, { Component } from 'react';
import Deal from './DealFeature/deal';
import Feature from './DealFeature/feaure';

class Deals_feature extends Component {

    render() {
        return (
            <div className="deals_featured">
                <div className="container">
                    <div className="row">
                        <div className="col d-flex flex-lg-row flex-column align-items-center justify-content-start">
                            {/* Deals */}
                            <Deal />
                            {/* Featured */}
                            <Feature />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Deals_feature;