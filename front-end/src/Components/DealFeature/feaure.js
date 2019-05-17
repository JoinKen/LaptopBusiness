import React, { Component } from 'react';
import FeaturedItemSlider from './feature_item_slider';
import { connect } from 'react-redux';
import * as actions from '../../Actions/feature_product_action';
class Feature extends Component {
    /* nơi đầu tiên dc khởi chạy component
    khởi tạo các giá trị của state và đọc những giá trị props dc truyền vào
    */
    constructor(props) {
        super(props);
        this.state = {
            FeatureProducts: {},
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
        if (nextProps.FeatureProducts.code === "ok") {
            this.setState({
                FeatureProducts: nextProps.FeatureProducts.data[0],
                OnSaleProducts: nextProps.FeatureProducts.data[1],
                BestRatedProducts: nextProps.FeatureProducts.data[2],
                haveData: true
            });
        }
        console.log(nextProps);
    }

    showFeaturedItemSlider = () => {
        let result;
        if (this.state.haveData === true) {
            result = this.state.FeatureProducts.map((item, index) => {
                return (<FeaturedItemSlider key={index} info={item} />)
            });
        }
        else {
            result = <div>Không có dữ liệu</div>
        }
        return result;
    }
    showOnSaleItemSlider = () => {
        let result;
        if (this.state.haveData === true) {
            result = this.state.OnSaleProducts.map((item, index) => {
                return (<FeaturedItemSlider key={index} info={item} />)
            });
        }
        else {
            result = <div>Không có dữ liệu</div>
        }
        return result;
    }
    showBestRatedItemSlider = () => {
        let result;
        if (this.state.haveData === true) {
            result = this.state.BestRatedProducts.map((item, index) => {
                return (<FeaturedItemSlider key={index} info={item} />)
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

// Xác định lấy state nào nào store lưu trữ
const mapStateToProps = (state) => {
    return {
        FeatureProducts: state.FeatureProducts,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getAllProductAct: () => {
            dispatch(actions.getAllProductAct());
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Feature);
