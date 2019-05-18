import React, { Component } from 'react';
import { connect } from 'react-redux';

class DealItem extends Component {

    salePriceAction = (product) => {
        if (product.value) {
            return product.salePrice - product.salePrice * product.value;
        }
    }
    render() {
        return (
            <div className="owl-item deals_item" key={this.props.key}>
                <div className="deals_image"><img src={this.props.info.link} alt /></div>
                <div className="deals_content">
                    <div className="deals_info_line d-flex flex-row justify-content-start">
                        <div className="deals_item_category"><a href="#">{this.props.info.nameProduct}</a></div>
                        <div className="deals_item_price_a ml-auto">${this.props.info.salePrice}</div>
                    </div>
                    <div className="deals_info_line d-flex flex-row justify-content-start">
                        <div className="deals_item_name">{this.props.info.nameProduct}</div>
                        <div className="deals_item_price ml-auto">${this.salePriceAction(this.props.info)}</div>
                    </div>
                    <div className="available">
                        <div className="available_line d-flex flex-row justify-content-start">
                            <div className="available_title">Available: <span>{this.props.info.amount - 5}</span></div>
                            <div className="sold_title ml-auto">Already sold: <span>{this.props.info.amount}</span></div>
                        </div>
                        <div className="available_bar"><span style={{ width: '17%' }} /></div>
                    </div>
                    <div className="deals_timer d-flex flex-row align-items-center justify-content-start">
                        <div className="deals_timer_title_container">
                            <div className="deals_timer_title">Hurry Up</div>
                            <div className="deals_timer_subtitle">Offer ends in:</div>
                        </div>
                        <div className="deals_timer_content ml-auto">
                            <div className="deals_timer_box clearfix" data-target-time>
                                <div className="deals_timer_unit">
                                    <div id="deals_timer2_hr" className="deals_timer_hr" />
                                    <span>hours</span>
                                </div>
                                <div className="deals_timer_unit">
                                    <div id="deals_timer2_min" className="deals_timer_min" />
                                    <span>mins</span>
                                </div>
                                <div className="deals_timer_unit">
                                    <div id="deals_timer2_sec" className="deals_timer_sec" />
                                    <span>secs</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        DealProducts: state.DealProducts
    }
}
export default connect(mapStateToProps, null)(DealItem);
