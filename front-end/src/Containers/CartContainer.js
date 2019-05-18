import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductCart from '../Components/Cart/ProductCart';
import * as actions from '../Actions/feature_product_action';
import * as Message from '../Constant/Message';
import ProductCartItem from '../Components/Cart/ProductCartItem';
class CartContainer extends Component {
    /* nơi đầu tiên dc khởi chạy component
    khởi tạo các giá trị của state và đọc những giá trị props dc truyền vào
    */
    constructor(props) {
        super(props);
        this.state = {
            Products: {},
            haveData: false,
        }
    }
    // Hàm này gọi khi component dc khởi tạo thông qua constructor
    componentWillMount() {
        this.props.getAllProductAct();
    }

    /* Hàm này dc gọi khi component nhận dc một props mới*/
    componentWillReceiveProps(nextProps) {
        if (nextProps.Products.code === "ok") {
            this.setState({
                Products: nextProps.Products.data[0],
                haveData: true
            });
        }
        console.log(nextProps);
    }


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
        var result = Carts.map((item, index) => {
            return <ProductCartItem
                key={index}
                info={item}
                index={index}
            />
        });
        return result;
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
                                            Maecenas pulvinar, turpis in dictum tincidunt
                                             dolor nibh lacinia lacus.</div>
                                    <div className="quote_name">Liam Neeson</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            result = Message.MSG_CART_EMPTY;
        }
        return result;
    }
}

// Xác định lấy state nào nào store lưu trữ
const mapStateToProps = (state) => {
    return {
        Carts: state.Carts,
        //state.Products, //Ở trong reducer index là gì thì nó là vậy
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getAllProductAct: () => {
            dispatch(actions.getAllProductAct());
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
