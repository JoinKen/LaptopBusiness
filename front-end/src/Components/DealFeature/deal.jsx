import React, { Component } from 'react';
import DealItem from './deal_item';
import { connect } from 'react-redux';
import * as actions from '../../Actions/product_action';

class deal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Deals: {},
        }
    }

    componentDidMount() {
        this.props.getFeatureProductAct();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.Deals.code === "ok") {
            this.setState({
                Deals: nextProps.Deals.data,
                isActive: true
            });
        }
    }


    renderDeal = () => {
        let result;
        if (this.state.isActive === true) {
            result = this.state.Deals.map((item, index) => {
                if (index < 3) {
                    return <DealItem key={index} info={item} />
                }
            })
        }
        else {
            result = <div>Không có dữ liệu</div>;
        }
        return result;
    }

    render() {
        return (
            <div className="deals">
                <div className="deals_title">Deals of the Week</div>
                <div className="deals_slider_container">
                    {/* Deals Slider */}
                    <div className="owl-carousel owl-theme deals_slider">
                        {/* Deals Item */}
                        {this.renderDeal()}
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
const mapStateToProps = state => {
    return {
        Deals: state.Deals
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getFeatureProductAct: () => {
            dispatch(actions.getFeatureProductAct())
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(deal);