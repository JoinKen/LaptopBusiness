import React, { Component } from 'react';
import FeaturedItemSlider from './feature_item_slider';
import { connect } from 'react-redux';
import * as actions from '../../Actions/feature_product_action';
class Product extends Component {
    /* nơi đầu tiên dc khởi chạy component
    khởi tạo các giá trị của state và đọc những giá trị props dc truyền vào
    */
    constructor(props) {
        super(props);
        this.state = {
            Products: {},
            OnSaleProducts: {},
            BestRatedProducts: {},
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
                OnSaleProducts: nextProps.Products.data[1],
                BestRatedProducts: nextProps.Products.data[2],
                haveData: true
            });
        }
    }

    showFeaturedItemSlider = () => {
        let result;
        var { onAddToCart, onChangeMessage } = this.props;
        if (this.state.haveData === true) {
            result = this.state.Products.map((item, index) => {
                return (<FeaturedItemSlider
                    key={index} info={item}
                    onAddToCart={onAddToCart}
                    onChangeMessage={onChangeMessage}
                />)
            });
        }
        else {
            result = <div>Không có dữ liệu</div>
        }
        return result;
    }
    showOnSaleItemSlider = () => {
        let result;
        var { onAddToCart, onChangeMessage } = this.props;
        if (this.state.haveData === true) {
            result = this.state.OnSaleProducts.map((item, index) => {
                return (<FeaturedItemSlider key={index} info={item}
                    onAddToCart={onAddToCart}
                    onChangeMessage={onChangeMessage} />)
            });
        }
        else {
            result = <div>Không có dữ liệu</div>
        }
        return result;
    }
    showBestRatedItemSlider = () => {
        let result;
        var { onAddToCart, onChangeMessage } = this.props;
        if (this.state.haveData === true) {
            result = this.state.BestRatedProducts.map((item, index) => {
                return (<FeaturedItemSlider key={index} info={item}
                    onAddToCart={onAddToCart}
                    onChangeMessage={onChangeMessage} />)
            });
        }
        else {
            result = <div>Không có dữ liệu</div>
        }
        return result;
    }

    render() {
        return (
            <div className="featured">
                <div className="tabbed_container">
                    <div className="tabs">
                        <ul className="clearfix">
                            <li className="active">Featured</li>
                            <li>On Sale</li>
                            <li>Best Rated</li>
                        </ul>
                        <div className="tabs_line"><span /></div>
                    </div>
                    {/* Product Panel */}
                    <div className="product_panel panel active">
                        <div className="featured_slider slider">
                            {/* Slider Item */}
                            {this.showFeaturedItemSlider()}
                        </div>
                        <div className="featured_slider_dots_cover" />
                    </div>
                    {/* Product Panel */}
                    <div className="product_panel panel">
                        <div className="featured_slider slider">
                            {/* Slider Item */}
                            {this.showOnSaleItemSlider()}
                        </div>
                        <div className="featured_slider_dots_cover" />
                    </div>
                    {/* Product Panel */}
                    <div className="product_panel panel">
                        <div className="featured_slider slider">
                            {/* Slider Item */}
                            {this.showBestRatedItemSlider()}
                        </div>
                        <div className="featured_slider_dots_cover" />
                    </div>
                </div>
            </div>
        );
    }
}
// //Validate dữ liệu
// Product.propTypes = {
//     Products: PropTypes.arrayOf(
//         PropTypes.shape(
//             PropTypes.arrayOf(
//                 PropTypes.shape({
//                     idProduct: PropTypes.number.isRequired,
//                 })
//             ).isRequired
//         )
//     ).isRequired
// }

// Xác định lấy state nào nào store lưu trữ
const mapStateToProps = state => {
    return {
        Products: state.Products,
        Carts: state.Carts,
        Messages: state.Messages
        //state.Products, //Ở trong reducer index là gì thì nó là vậy
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    getAllProductAct: () => {
        dispatch(actions.getAllProductAct());
    },
    onChangeMessage: (Messages) => {
        dispatch(actions.actAChangeMessage(Messages))
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Product);
