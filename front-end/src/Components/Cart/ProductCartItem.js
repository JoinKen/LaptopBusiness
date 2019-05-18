
import React, { Component } from 'react';
class ProductCartItem extends Component {
    render() {
        return (
            <li className="cart_item clearfix">
                <div className="cart_item_image"><img src={this.props.info.product.link} alt="noimg" /></div>
                <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                    <div className="cart_item_name cart_info_col">
                        <div className="cart_item_title">Name</div>
                        <div className="cart_item_text">{this.props.info.product.nameProduct}</div>
                    </div>

                    {/* Product Quantity */}
                    <div className="cart_item_quantity cart_info_col">
                        <div className="cart_item_title">Quantity</div>
                        <br />
                        <div className="product_quantity clearfix">
                            <input id="quantity_input" type="text" pattern="[0-9]*" defaultValue={1} value={this.props.info.quantity} />
                            <div className="quantity_buttons">
                                <div id="quantity_inc_button" className="quantity_inc quantity_control">
                                    <i className="fas fa-chevron-up" /></div>
                                <div id="quantity_dec_button" className="quantity_dec quantity_control">
                                    <i className="fas fa-chevron-down" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="cart_item_quantity cart_info_col">
                        <div className="cart_item_title">Status</div>
                        <div className="cart_item_text">{this.props.info.product.status}</div>
                    </div>
                    <div className="cart_item_price cart_info_col">
                        <div className="cart_item_title">Price</div>
                        <div className="cart_item_text">${this.showSubTotal(this.props.info.product.salePrice, this.props.info.quantity)}</div>
                    </div>
                    <button className="btn badge-danger"> X </button>
                </div>
            </li>
        );
    }
    showSubTotal = (price, quantity) => {
        return price * quantity;
    }
}
export default ProductCartItem;
