import React, { Component } from 'react';
import '../../assets/styles/main_styles.css';
import '../../assets/plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import '../../assets/plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import '../../assets/plugins/OwlCarousel2-2.2.1/animate.css';
import '../../assets/plugins/slick-1.8.0/slick.css';
import '../../assets/styles/responsive.css';
import '../../assets/plugins/fontawesome-free-5.0.1/css/fontawesome-all.css';
import '../../assets/styles/bootstrap4/bootstrap.min.css';
// import Background from '../../assets/images/banner_2_background.jpg';
import * as actions from '../../Actions/product_action';
import {connect} from 'react-redux';
import LapTop from '../Laptop/lapTopItem';

class listLapTop extends Component {
  /* nơi đầu tiên dc khởi chạy component
  khởi tạo các giá trị của state và đọc những giá trị props dc truyền vào
  */
    constructor(props){
        super(props);
        this.state = {
          products:{},
          haveData: false,
          idProduct:'',
          nameProduct:'',
          priceEntered:null,
          salePrice:null,
          describe:null,
          amount: null,
        }
      }
      // Hàm này gọi khi component dc khởi tạo thông qua constructor
      componentWillMount(){
        this.props.getAllProduct();
      }
      /* Hàm này dc gọi khi component nhận dc một props mới*/
      componentWillReceiveProps(nextProps){
        if(nextProps.products.code === 'ok'){
          this.setState({
            products: nextProps.products.data,
            haveData: true
          })
        }
      }
    showProduct = () =>{
        let resuilt;
        console.log(this.state);
        console.log(this.state.products);
        if(this.state.haveData === true){
          resuilt = this.state.products.map((item, index) => {
              return(
                <LapTop key={index} info={item} />
              )
            })
        }
        else{
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

const mapStateToProps =(state) =>{
  return {
      products :state.products
  }
}

const mapDispatchToProps =(dispatch, props) =>{
  return {
    getAllProduct :() =>{
      dispatch(actions.getAllProducts());
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (listLapTop);