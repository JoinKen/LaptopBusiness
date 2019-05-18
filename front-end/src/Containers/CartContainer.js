import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../Actions/feature_product_action';
import ProductCart from '../Components/Cart/ProductCart';
import FeaturedItemSlider from '../Components/DealFeature/feature_item_slider';
class ProductContainer extends Component {
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
        console.log(nextProps);
    }


    render() {
        return (
            <ProductCart>
            </ProductCart>
        );
    }

    showFeaturedItemSlider = () => {
        let result;
        if (this.state.haveData === true) {
            result = this.state.Products.map((item, index) => {
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

}

// Xác định lấy state nào nào store lưu trữ
const mapStateToProps = (state) => {
    return {
        Products: state.Products,
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
