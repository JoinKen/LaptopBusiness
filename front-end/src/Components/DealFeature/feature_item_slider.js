import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeatureItemSlider extends Component {

    salePriceAction = (product) => {
        if (product.value != null) {
            return '$'+(product.salePrice - product.salePrice * product.value);
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
                            <div><a href="product.html">{this.props.info.nameProduct}</a></div>
                        </div>
                        <div className="product_extras">
                            <div className="product_color">
                                <input type="radio" defaultChecked name="product_color"
                                    style={{ background: '#b19c83' }} />
                                <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                <input type="radio" name="product_color" style={{ background: '#999999' }} />
                            </div>
                            <button className="product_cart_button">Add to Cart</button>
                        </div>
                    </div>
                    <div className="product_fav"><i className="fas fa-heart" /></div>
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
        FeatureProducts: state.FeatureProducts
    }
}
export default connect(mapStateToProps, null)(FeatureItemSlider);