import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Actions/feature_product_action';
import DealItem from '../DealFeature/dealItem';

class listDeals extends Component {
  /* nơi đầu tiên dc khởi chạy component
  khởi tạo các giá trị của state và đọc những giá trị props dc truyền vào
  */
  constructor(props) {
    super(props);
    this.state = {
      DealProducts: {},
      haveData: false,
    }
  }
  // Hàm này gọi khi component dc khởi tạo thông qua constructor
  componentWillMount() {
    this.props.getAllDealProductAct('DEAL');
  }

  /* Hàm này dc gọi khi component nhận dc một props mới*/
  componentWillReceiveProps(nextProps) {
    if (nextProps.DealProducts.code === "ok") {
      this.setState({
        DealProducts: nextProps.DealProducts.data,
        haveData: true
      });
    }
  }


  showDeal = () => {
    let result;
    if (this.state.haveData === true) {
      result = this.state.DealProducts.map((item, index) => {
        return (
          <DealItem key={index} info={item} />)
      });
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
  return {
    DealProducts: state.DealProducts,
    Messages: state.Messages
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    getAllDealProductAct: (statementType) => {
      dispatch(actions.getAllDealProductAct(statementType));
    },

    actAChangeMessage: () => {
      dispatch(actions.actAChangeMessage());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(listDeals);