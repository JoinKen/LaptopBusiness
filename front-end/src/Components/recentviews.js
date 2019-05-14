import React, { Component } from 'react';


import Iteam_arrivals from './iteam_arrivals';
import * as actions from '../Actions/product_action';
import { connect } from 'react-redux';
// import $ from 'jquery';

class RecentView extends Component {

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
            img: null
        }
    }
    componentWillMount() {
        this.props.getAllProduct();
        console.log(this.props);
    }
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
                    <Iteam_arrivals key={index} info={item} />
                )
            })
        }
        else {
            resuilt = <div>Không có dữ liệu</div>
        }
        return resuilt
    }
    render() {
        // $('.owl-carousel').owlCarousel({
        //     loop:true,
        //     margin:10,
        //     nav:true,
        //     responsive:{
        //         0:{
        //             items:1
        //         },s
        //         600:{
        //             items:3
        //         },
        //         1000:{
        //             items:5
        //         }
        //     }
        // })
        return (
            <div className="viewed">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="viewed_title_container">
                                <h3 className="viewed_title">List LapTop</h3>
                                <div className="viewed_nav_container">
                                    <div className="viewed_nav viewed_prev">
                                        <i className="fas fa-chevron-left" />
                                    </div>
                                    <div className="viewed_nav viewed_next">
                                        <i className="fas fa-chevron-right" />
                                    </div>
                                </div>
                            </div>
                            <div className="viewed_slider_container">
                                {/* Recently Viewed Slider */}
                                <div className="owl-carousel owl-theme viewed_slider owl-loaded owl-drag">
                                    {/* Recently Viewed Item */}
                                    {/* Recently Viewed Item */}
                                    {/* Recently Viewed Item */}
                                    {/* Recently Viewed Item */}
                                    {/* Recently Viewed Item */}
                                    {/* Recently Viewed Item */}
                                    <div className="owl-stage-outer">
                                        <div
                                            className="owl-stage"
                                            style={{
                                                transition: "0.25s",
                                                width: 3510,
                                                transform: "translate3d(-1560px, 0px, 0px)"
                                            }}
                                        >
                                            <div className="show">
                                                {
                                                    this.showProduct()
                                                }
                                            </div>

                                        </div>
                                    </div>
                                    <div className="owl-nav disabled">
                                        <div className="owl-prev">prev</div>
                                        <div className="owl-next">next</div>
                                    </div>
                                    <div className="owl-dots disabled" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
const mapDispatchToProp = (dispatch, props) => {
    return {
        getAllProduct: () => {
            dispatch(actions.getAllProducts());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(RecentView);