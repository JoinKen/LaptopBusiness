import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navigation1 from '../Components/navigation2';
import ProductDetailContainer from '../Containers/ProductDetailContainer';

class ProductDetail extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <Navigation1 />
                <ProductDetailContainer />
            </div>
        );
    }
}

ProductDetail.propTypes = {

};

export default ProductDetail;