import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductCart from '../Components/Cart/ProductCart';
import * as actions from '../Actions/feature_product_action';
import * as Message from '../Constant/Message';
import ProductCartItem from '../Components/Cart/ProductCartItem';
class CartContainer extends Component {


    render() {
        var { Carts } = this.props;//Lưu ý nó phải giống ik chan phần dưới kia
        console.log(Carts);
        return (
            <ProductCart>
                {this.showCart(Carts)}
            </ProductCart>
        );
    }

    showCartItem = (Carts) => {
        var { onDeleteProductInCart, actAChangeMessage, onUpdateProductInCart } = this.props
        var result = Carts.map((item, index) => {
            return <ProductCartItem
                key={index}
                info={item}
                index={index}
                onDeleteProductInCart={onDeleteProductInCart}
                actAChangeMessage={actAChangeMessage}
                onUpdateProductInCart={onUpdateProductInCart}
            />
        });
        return result;
    }
    showCartResult(Carts) {
        var result = 0;
        console.log(Carts.length);
        if (Carts.length > 0) {
            for (var i = 0; i < Carts.length; i++) {
                result += Carts[i].quantity * Carts[i].product.salePrice;
            }
            return (
                <div className="order_total_content text-md-right">
                    <div className="order_total_title">Order Total:</div>
                    <div className="order_total_amount">$ {result}</div>
                </div>);
        } else {
            return <div> <h5>Giá ở đâu mất tiêu rồi</h5> </div>
        }
    }

    showCart = (Carts) => {
        if (Carts.length > 0) {
            var result = (
                <div className="cart_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="cart_container">
                                    <div className="cart_title">Shopping Cart</div>
                                    <div className="cart_items">
                                        <ul className="cart_list">
                                            {this.showCartItem(Carts)}
                                        </ul>
                                    </div>
                                    {/* Order Total */}
                                    <div className="order_total">
                                        {this.showCartResult(Carts)}
                                    </div>
                                    <div className="cart_buttons">
                                        <button type="button" className="btn btn-success" data-toggle="modal" data-target="#myModal"> PAY NOW!</button>
                                    </div>
                                </div>
                                <div className="addPost">
                                    <div className="modal" id="myModal">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div>
                                                    <br></br></div>
                                                <h5 className="modal-title"> SẮP XONG RỒI CHỈ CÒN MỘT BƯỚC NỮA THÔI </h5>
                                                <div className="modal-body">
                                                    <form action="#">
                                                        <div class="text-left">
                                                            <label for="email" className="font-weight-bold">Địa chỉ giao hàng</label>
                                                            <input type="email" class="form-control" id="email" required />
                                                        </div>
                                                        <div class="text-left">
                                                            <label for="pwd" className="font-weight-bold" required>Số điện thoại</label>
                                                            <input type="text" class="form-control" id="pwd" />
                                                        </div>
                                                        <div>
                                                            <br></br></div>
                                                        <button type="submit" class="btn btn-success">ĐẶT HÀNG XONG!</button>
                                                    </form>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-danger pull-left" data-dismiss="modal">
                                                        Close
                                        </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>

                                </div>
                                <div className="single_post_quote text-center">
                                    <div className="quote_image"><img src="./assets/images/quote.png" alt /></div>
                                    <div className="quote_text"><h2>Chúc quý khác có đầu tuần nhiều điều may mắn và một ngày tốt lành</h2></div>
                                    <div className="quote_name">IT1006</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            result = (
                <div>
                    <div>
                        <br></br></div>  <div>
                        <br></br></div>
                    <h2>{Message.MSG_CART_EMPTY}</h2>

                    <div>
                        <a className="btn btn-danger " href="http://localhost:3000">Đến trang chủ!!!</a>
                    </div>
                </div>
            );
        }
        return result;
    }
}

// Xác định lấy state nào nào store lưu trữ
const mapStateToProps = (state) => {
    return {
        Carts: state.Carts,
        Messages: state.Messages
        //state.Products, //Ở trong reducer index là gì thì nó là vậy
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actions.actDeleteProductInCart(product));
        },
        actAChangeMessage: (message) => {
            dispatch(actions.actAChangeMessage(message));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actions.actUpdateProducInCart(product, quantity));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
