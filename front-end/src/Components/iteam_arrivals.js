
import React, { Component } from 'react';
import '../assets/styles/main_styles.css';
import '../assets/plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import '../assets/plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import '../assets/plugins/OwlCarousel2-2.2.1/animate.css';
import '../assets/plugins/slick-1.8.0/slick.css';
import '../assets/styles/responsive.css';
import '../assets/plugins/fontawesome-free-5.0.1/css/fontawesome-all.css';
import '../assets/styles/bootstrap4/bootstrap.min.css';
import {connect} from 'react-redux';

class iteam_arrivals extends Component {
    render() {
        return (
                <div
                    className="owl-item cloned"
                    style={{ width: 165, marginRight: 30 }}
                >
                    <div className="owl-item">
                        <div className="viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                            <div className="viewed_image">
                                <img alt="true" src={this.props.info.img}/>
                            </div>
                            <div className="viewed_content text-center">
                                <div className="viewed_price">
                            </div>
                                    <span>${this.props.info.priceEntered}</span>
                                </div>
                                <div className="viewed_name">
                                    <a href="#">{this.props.info.nameProduct}</a>
                                </div>
                            </div>
                            <ul className="item_marks">
                                <li className="item_mark item_discount">
                                   {this.props.info.salePrice}
</li>
                                <li className="item_mark item_new">new</li>
                            </ul>
                        </div>
                    </div>
    
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        products:state.products
    }
}
export default connect(mapStateToProps,null) (iteam_arrivals);
