import React, { Component } from 'react';
import * as actions from '../../Actions/product_action';
import { connect } from 'react-redux';
import LapTop from '../Laptop/lapTopItem';

class listLapTop extends Component {
  /* nơi đầu tiên dc khởi chạy component
  khởi tạo các giá trị của state và đọc những giá trị props dc truyền vào
  */
  constructor(props) {
    super(props);
    this.state = {
      products: {},
      haveData: false,
      idProduct: '',
      nameProduct: '',
      priceEntered: null,
      salePrice: null,
      describe: null,
      amount: null,
    }
  }
  // Hàm này gọi khi component dc khởi tạo thông qua constructor
  componentWillMount() {
    this.props.getAllProduct();
  }
  /* Hàm này dc gọi khi component nhận dc một props mới*/
  componentWillReceiveProps(nextProps) {
    if (nextProps.products.code === 'ok') {
      this.setState({
        products: nextProps.products.data,
        haveData: true
      })
    }
  }
  showProduct = () => {
    let resuilt;
    console.log(this.state);
    console.log(this.state.products);
    if (this.state.haveData === true) {
      resuilt = this.state.products.map((item, index) => {
        return (
          <LapTop key={index} info={item} />
        )
      })
    }
    else {
      resuilt = <div>Không có dữ liệu</div>
    }
    return resuilt
  }
  render() {
    return (
      <div className="list-milk-tea">
        <div className="row">
          {
            this.showProduct()
          }
        </div>
      </div>
    )
  }
}
// Xác định lấy state nào nào store lưu trữ

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    getAllProduct: () => {
      dispatch(actions.getAllProducts());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(listLapTop);