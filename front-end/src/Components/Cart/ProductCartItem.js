
import React, { Component } from 'react';
import * as msg from '../../Constant/Message';
class ProductCartItem extends Component {


    //Tronog  trường hợp có form thì mới cần state còn lại cứ lấy ở store
    constructor(props) {
        super(props)
        this.state = {
            quantity: 1
        }
    }
    render() {
        var { quantity } = this.props.info.quantity > 0 ? this.props.info : this.state;
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
                            <input id="quantity_input" type="text" pattern="[0-9]*" defaultValue={1} value={quantity} />
                            <div className="quantity_buttons">
                                <div id="quantity_inc_button" className="quantity_inc quantity_control"
                                    onClick={() => this.onUpdateQuantity(this.props.info.product, this.props.info.quantity + 1)}>
                                    <i className="fas fa-chevron-up" /></div>
                                <div id="quantity_dec_button" className="quantity_dec quantity_control"
                                    onClick={() => this.onUpdateQuantity(this.props.info.product, this.props.info.quantity - 1)}>
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
                    <button className="btn badge-danger"
                        onClick={() => this.onDeleteProductInCart(this.props.info.product)}> X
                    </button>
                </div>
            </li>
        );
    }

    onDeleteProductInCart(product) {
        var { onDeleteProductInCart } = this.props;
        onDeleteProductInCart(product);
        this.props.actAChangeMessage(msg.MSG_DELETE_PRODUCT_INCART_SUCESS);
    }

    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            this.setState({
                quantity: quantity
            });
        }
        this.props.onUpdateProductInCart(product, quantity);
    }

    showSubTotal = (price, quantity) => {
        return price * quantity;
    }
}
export default ProductCartItem;
