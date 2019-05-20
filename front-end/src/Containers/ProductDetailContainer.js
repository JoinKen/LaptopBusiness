import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../Actions/feature_product_action';
import ProductDetail from '../Components/ProductDetail/ProductDetail';

class ProductContainer extends Component {
    // /* nơi đầu tiên dc khởi chạy component
    // khởi tạo các giá trị của state và đọc những giá trị props dc truyền vào
    // */
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         ProductDetails: {},
    //         haveData: false,
    //     }
    // }
    // // Hàm này gọi khi component dc khởi tạo thông qua constructor
    // componentWillMount() {
    //     this.props.getProductDetail();
    // }

    // /* Hàm này dc gọi khi component nhận dc một props mới*/
    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.ProductDetails.code === "ok") {
    //         this.setState({
    //             ProductDetails: nextProps.ProductDetails.data,
    //             haveData: true
    //         });
    //     }
    // }


    render() {
        return (
            <ProductDetail />
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
        getProductDetail: () => {
            dispatch(actions.getProductDetailAct());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
