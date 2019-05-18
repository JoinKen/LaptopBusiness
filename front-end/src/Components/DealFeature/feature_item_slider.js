import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeatureItemSlider extends Component {

    salePriceAction = (product) => {
        if (product.value != null) {
            return '$' + (product.salePrice - product.salePrice * product.value);
        }
        else
            return null;
    }

    setValueKhuyenMai = (product) => {
        if (product.idPromotion != null) {
            return <li key={product.idProduct} className="product_mark product_discount">{product.title}</li>
        } else {
            return <li key={product.idProduct} className="product_mark product_new">new</li>
        }
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
        console.log(this.props.info.idProduct);
        return (
            <div className="featured_slider_item">
                <div className="border_active" />
                <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="product_image d-flex flex-column align-items-center justify-content-center">
                        <img src={this.props.info.link} alt="asa" width="140px;" /></div>
                    <div className="product_content">
                        <div className="product_price discount">{this.salePriceAction(this.props.info)}<span>${this.props.info.salePrice}</span></div>
                        <div className="product_name">
                            <div className="fixNamePeoduct"><a href="product.html">{this.props.info.nameProduct}</a></div>
                        </div>
                        {this.setRating(this.props.info)}
                        <div className="product_extras">
                            <button className="product_cart_button">Add to Cart</button>
                        </div>
                    </div>
                    <div className="product_fav"><i className="fas fa-heart" id={this.props.info.idProduct} /></div>
                    <ul className="product_marks">
                        {this.setValueKhuyenMai(this.props.info)}
                        <li className="product_mark product_new">new</li>
                    </ul>
                </div>
            </div>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        Products: state.Products
    }
}
export default connect(mapStateToProps, null)(FeatureItemSlider);