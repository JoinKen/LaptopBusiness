import React, { Component } from 'react';
import DealItem from './deal_item';

class deal extends Component {
    render() {
        return (
            <div className="deals">
                <div className="deals_title">Deals of the Week</div>
                <div className="deals_slider_container">
                    {/* Deals Slider */}
                    <div className="owl-carousel owl-theme deals_slider">
                        {/* Deals Item */}
                        <DealItem />
                        <DealItem />
                        {/* Deals Item */}
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

export default deal;