
import React, { Component } from 'react';
import ProductCartItem from './ProductCartItem';

class ProductCart extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
export default ProductCart;
