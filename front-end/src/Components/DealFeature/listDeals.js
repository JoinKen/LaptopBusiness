import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Actions/product_action';
import DealItem from '../DealFeature/dealItem';

class listDeals extends Component {
  /* nơi đầu tiên dc khởi chạy component
  khởi tạo các giá trị của state và đọc những giá trị props dc truyền vào
  */
  constructor(props) {
    super(props);
    this.state = {
      products: {},
      haveData: false,
    }
    console.log("constructor");
  }
  // Hàm này gọi khi component dc khởi tạo thông qua constructor
  componentWillMount() {
    this.props.getAllFeatureProductsAct();
    console.log("componentWillMount");
  }

  /* Hàm này dc gọi khi component nhận dc một props mới*/
  componentWillReceiveProps(nextProps) {
    if (nextProps.products.code === "ok") {
      this.setState({
        products: nextProps.products.data,
        haveData: true
      });
    }
    console.log("componentWillReceiveProps");
  }


  showDeal = () => {
    let result;
    console.log("showDeal");
    console.log(this.state.haveData);
    if (this.state.haveData === true) {
      result = this.state.products.map((item, index) => {
        return (
          <DealItem key={index} info={item} />
        )
      })
    }
    else {
      result = <div>Không có dữ liệu</div>
    }
    return result;
  }
  render() {
    return (

      <div className="deals">
        <div className="deals_title">Deals of the Week</div>
        <div className="deals_slider_container">
          <div className="owl-carousel owl-theme deals_slider">
            {
              this.showDeal()
            }
          </div>
        </div>
        <div className="deals_slider_nav_container">
          <div className="deals_slider_prev deals_slider_nav"><i className="fas fa-chevron-left ml-auto" /></div>
          <div className="deals_slider_next deals_slider_nav"><i className="fas fa-chevron-right ml-auto" /></div>
        </div>
      </div>
    );
  }
}
// Xác định lấy state nào nào store lưu trữ
const mapStateToProps = (state) => {
  console.log("mapStateToProps");
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, props) => {
  console.log("mapDispatchToProps");
  return {
    getAllFeatureProductsAct: () => {
      dispatch(actions.getAllFeatureProductsAct());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(listDeals);