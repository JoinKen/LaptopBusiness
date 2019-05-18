
import React, { Component } from 'react';
import ProductCartItem from './ProductCartItem';

class ProductCart extends Component {
    render() {
        return (
            <div className="cart_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="cart_container">
                                <div className="cart_title">Shopping Cart</div>
                                <div className="cart_items">
                                    <ul className="cart_list">
                                        <ProductCartItem />
                                        <ProductCartItem />
                                    </ul>
                                </div>
                                {/* Order Total */}
                                <div className="order_total">
                                    <div className="order_total_content text-md-right">
                                        <div className="order_total_title">Order Total:</div>
                                        <div className="order_total_amount">$4000</div>
                                    </div>
                                </div>
                                <div className="cart_buttons">
                                    <button type="button" className="btn btn-default">Clear</button>
                                    <button type="button" className="btn btn-success">Add to Cart</button>
                                </div>
                            </div>
                            <div></div>
                            <div className="single_post_quote text-center">
                                <div className="quote_image"><img src="./assets/images/quote.png" alt /></div>
                                <div className="quote_text">Quisque sagittis non ex eget vestibulum. Sed nec ultrices dui. Cras
                                  et sagittis erat.
              Maecenas pulvinar, turpis in dictum tincidunt, dolor nibh lacinia lacus.</div>
                                <div className="quote_name">Liam Neeson</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ProductCart;
