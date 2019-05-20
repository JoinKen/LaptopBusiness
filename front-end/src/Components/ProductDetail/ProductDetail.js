import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Actions/feature_product_action';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ProductDetails: {},
            haveData: false,
        }
    }
    // Hàm này gọi khi component dc khởi tạo thông qua constructor
    componentWillMount() {
        this.props.getProductDetail('1');
    }

    /* Hàm này dc gọi khi component nhận dc một props mới*/
    componentWillReceiveProps(nextProps) {
        if (nextProps.ProductDetails.code === "ok") {
            this.setState({
                ProductDetails: nextProps.ProductDetails.data,
                haveData: true
            });
        }
        console.log();
    }

    showImage = () => {
        let result;
        if (this.state.haveData === true) {
            result = this.state.ProductDetails[1].map((item, index) => {
                return (
                    <li key={index} data-image={item.link}><img src={item.link} alt={index} /></li>)
            });
        }
        else {
            result = <div>Không có dữ liệu</div>
        }
        return result;
    }

    showImageMain = () => {
        let result;
        if (this.state.haveData === true) {
            result = this.state.ProductDetails[1].map((item, index) => {
                console.log(item.link);
                if (index < 1)
                    return (
                        <div key={index} className="image_selected"><img src={item.link} alt={index} /></div>
                    );
            });
        }
        else {
            result = <div>Không có dữ liệu</div>
        }
        return result;
    }

    showAll = () => {
        let result;
        if (this.state.haveData === true) {
            result = this.state.ProductDetails[0].map((item, index) => {
                console.log(item.nameProduct);
                if (index < 1)
                    return (
                        <div className="single_product">
                            <div className="container">
                                <div className="row">
                                    {/* Images */}
                                    <div className="col-lg-2 order-lg-1 order-2">
                                        <ul className="image_list">
                                            {this.showImage()}
                                        </ul>
                                    </div>
                                    {/* Selected Image */}
                                    <div className="col-lg-5 order-lg-2 order-1">
                                        {this.showImageMain()}
                                    </div>
                                    {/* Description */}
                                    <div className="col-lg-5 order-3">
                                        <div className="product_description">
                                            <div className="product_category">Laptops</div>
                                            <div className="product_name">{item.nameProduct}</div>
                                            {this.setRating(item)}
                                            {/* <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i
								class="fa fa-star"></i> */}
                                            <div className="product_text">
                                                <p>{item.describe}</p>
                                            </div>
                                            <div className="order_info d-flex flex-row">
                                                <form action="#">
                                                    <div className="clearfix" style={{ zIndex: 1000 }}>
                                                        {/* Product Quantity */}
                                                        <div className="product_quantity clearfix">
                                                            <span>Quantity: </span>
                                                            <input id="quantity_input" type="text" pattern="[0-9]*" defaultValue={1} />
                                                            <div className="quantity_buttons">
                                                                <div id="quantity_inc_button" className="quantity_inc quantity_control"><i className="fas fa-chevron-up" /></div>
                                                                <div id="quantity_dec_button" className="quantity_dec quantity_control"><i className="fas fa-chevron-down" /></div>
                                                            </div>
                                                        </div>
                                                        {/* Product Color */}
                                                        <ul className="product_color">
                                                            <li>
                                                                <span>Color: </span>
                                                                <div className="color_mark_container">
                                                                    <div id="selected_color" className="color_mark" />
                                                                </div>
                                                                <div className="color_dropdown_button"><i className="fas fa-chevron-down" />
                                                                </div>
                                                                <ul className="color_list">
                                                                    <li>
                                                                        <div className="color_mark" style={{ background: '#999999' }} />
                                                                    </li>
                                                                    <li>
                                                                        <div className="color_mark" style={{ background: '#b19c83' }} />
                                                                    </li>
                                                                    <li>
                                                                        <div className="color_mark" style={{ background: '#000000' }} />
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product_price">${item.salePrice}</div>
                                                    <div className="button_container">
                                                        <button type="button" className="button cart_button">Add to Cart</button>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single_post_quote text-center col-12">
                                    <div className="quote_name">Cấu hình chi tiết sản phẩm</div>
                                    <div className="row">
                                        <div className="col-md-4 config_boder text-left">
                                            <div className="row content_config text-left">
                                                <div className="col-md-4">MODEL</div>
                                                <div className="col-md-8">{item.model}</div>
                                            </div>
                                            <div className="row content_config text-left">
                                                <div className="col-md-4">Bộ xử lý</div>
                                                <div className="col-md-8">{item.chip}</div>
                                            </div>
                                            <div className="row content_config text-left">
                                                <div className="col-md-4">Bộ nhớ RAM</div>
                                                <div className="col-md-8">{item.ram}</div>
                                            </div>
                                            <div className="row content_config text-left">
                                                <div className="col-md-4">Màn hình</div>
                                                <div className="col-md-8">{item.display}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 config_boder">
                                            <div className="row content_config text-left">
                                                <div className="col-md-8">Thông tin về kích cỡ</div>
                                                <div className="col-md-8">{item.weight}</div>
                                            </div>
                                            <div className="row content_config text-left">
                                                <div className="col-md-4">Hệ điều hành</div>
                                                <div className="col-md-8">{item.operation}</div>
                                            </div>
                                            <div className="row content_config text-left">
                                                <div className="col-md-4">Kết nối</div>
                                                <div className="col-md-8">{item.connection}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 config_boder">
                                            <div className="row content_config text-left">
                                                <div className="col-md-4">PIN</div>
                                                <div className="col-md-8">{item.pin}</div>
                                            </div>
                                            <div className="row content_config text-left">
                                                <div className="col-md-4">Wireless Connectivity</div>
                                                <div className="col-md-8">{item.wirelessConnectivity}</div>
                                            </div>
                                            <div className="row content_config text-left">
                                                <div className="col-md-4">Khác</div>
                                                <div className="col-md-8">{item.outstandingFunction}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
            });
        }
        else {
            result = <div>Không có dữ liệu</div>
        }
        return result;
    }


    setRating = (product) => {
        if (product.soRate === 1)
            return <div class="rating_r rating_r_1 arrivals_single_rating"><i></i><i></i><i></i><i></i><i></i></div>
        if (product.soRate === 2)
            return <div class="rating_r rating_r_2 arrivals_single_rating"><i></i><i></i><i></i><i></i><i></i></div>
        if (product.soRate === 3)
            return <div class="rating_r rating_r_3 arrivals_single_rating"><i></i><i></i><i></i><i></i><i></i></div>
        if (product.soRate === 4)
            return <div class="rating_r rating_r_4 arrivals_single_rating"><i></i><i></i><i></i><i></i><i></i></div>
        if (product.soRate === 5)
            return <div class="rating_r rating_r_5 arrivals_single_rating"><i></i><i></i><i></i><i></i><i></i></div>
    }

    render() {
        return (
            <div>
                {this.showAll()}
            </div>
        );
    }
}
// Xác định lấy state nào nào store lưu trữ
const mapStateToProps = (state) => {
    return {
        ProductDetails: state.ProductDetails,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getProductDetail: (idProduct) => {
            dispatch(actions.getProductDetailAct(idProduct));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);