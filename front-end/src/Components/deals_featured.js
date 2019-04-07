
import React, { Component } from 'react';
import '../assets/styles/main_styles.css';
import '../assets/plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import '../assets/plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import '../assets/plugins/OwlCarousel2-2.2.1/animate.css';
import '../assets/plugins/slick-1.8.0/slick.css';
import '../assets/styles/responsive.css';
import '../assets/styles/bootstrap4/bootstrap.min.css';
import '../assets/plugins/jquery-ui-1.12.1.custom/jquery-ui.css';
import '../assets/plugins/fontawesome-free-5.0.1/css/fontawesome-all.css'


class Deals_feature extends Component {


    render() {

        return (

          
                <div class="super_container">

	                <header class="header">
                        <div className="deals_featured">
                            <div className="container">
                                <div className="row">
                                    <div className="col d-flex flex-lg-row flex-column align-items-center justify-content-start">
                                        {/* Deals */}
                                        <div className="deals">
                                            <div className="deals_title">Deals of the Week</div>
                                            <div className="deals_slider_container">
                                                <div className="owl-carousel owl-theme deals_slider owl-loaded owl-drag">
                                                    <div className="owl-stage-outer">
                                                        <div
                                                            className="owl-stage"
                                                            style={{
                                                                transition: "all",
                                                                width: 1022,
                                                                transform: "translate3d(0px, 0px, 0px)"
                                                            }}
                                                        >
                                                            <div
                                                                className="owl-item active"
                                                                style={{ width: "310.4px", marginRight: 30 }}
                                                            >
                                                                <div className="owl-item deals_item">
                                                                    <div className="deals_image">
                                                                        <img alt='true' src={require('../assets/images/deals.png')} />
                                                                    </div>
                                                                    <div className="deals_content">
                                                                        <div className="deals_info_line d-flex flex-row justify-content-start">
                                                                            <div className="deals_item_category">
                                                                                <a href="#">Headphones</a>
                                                                            </div>
                                                                            <div className="deals_item_price_a ml-auto">
                                                                                $300
                                </div>
                                                                        </div>
                                                                        <div className="deals_info_line d-flex flex-row justify-content-start">
                                                                            <div className="deals_item_name">
                                                                                Beoplay H7
                                </div>
                                                                            <div className="deals_item_price ml-auto">
                                                                                $225
                                </div>
                                                                        </div>
                                                                        <div className="available">
                                                                            <div className="available_line d-flex flex-row justify-content-start">
                                                                                <div className="available_title">
                                                                                    Available: <span>6</span>
                                                                                </div>
                                                                                <div className="sold_title ml-auto">
                                                                                    Already sold: <span>28</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="available_bar">
                                                                                <span style={{ width: "17%" }} />
                                                                            </div>
                                                                        </div>
                                                                        <div className="deals_timer d-flex flex-row align-items-center justify-content-start">
                                                                            <div className="deals_timer_title_container">
                                                                                <div className="deals_timer_title">
                                                                                    Hurry Up
                                  </div>
                                                                                <div className="deals_timer_subtitle">
                                                                                    Offer ends in:
                                  </div>
                                                                            </div>
                                                                            <div className="deals_timer_content ml-auto">
                                                                                <div
                                                                                    className="deals_timer_box clearfix"
                                                                                    data-target-time
                                                                                >
                                                                                    <div className="deals_timer_unit">
                                                                                        <div
                                                                                            className="deals_timer_hr"
                                                                                            id="deals_timer1_hr"
                                                                                        >
                                                                                            47
                                      </div>
                                                                                        <span>hours</span>
                                                                                    </div>
                                                                                    <div className="deals_timer_unit">
                                                                                        <div
                                                                                            className="deals_timer_min"
                                                                                            id="deals_timer1_min"
                                                                                        >
                                                                                            59
                                      </div>
                                                                                        <span>mins</span>
                                                                                    </div>
                                                                                    <div className="deals_timer_unit">
                                                                                        <div
                                                                                            className="deals_timer_sec"
                                                                                            id="deals_timer1_sec"
                                                                                        >
                                                                                            44
                                      </div>
                                                                                        <span>secs</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="owl-item"
                                                                style={{ width: "310.4px", marginRight: 30 }}
                                                            >
                                                                <div className="owl-item deals_item">
                                                                    <div className="deals_image">
                                                                        <img alt='true' src={require('../assets/images/deals.png')} />
                                                                    </div>
                                                                    <div className="deals_content">
                                                                        <div className="deals_info_line d-flex flex-row justify-content-start">
                                                                            <div className="deals_item_category">
                                                                                <a href="#">Headphones</a>
                                                                            </div>
                                                                            <div className="deals_item_price_a ml-auto">
                                                                                $300
                                </div>
                                                                        </div>
                                                                        <div className="deals_info_line d-flex flex-row justify-content-start">
                                                                            <div className="deals_item_name">
                                                                                Beoplay H7
                                </div>
                                                                            <div className="deals_item_price ml-auto">
                                                                                $225
                                </div>
                                                                        </div>
                                                                        <div className="available">
                                                                            <div className="available_line d-flex flex-row justify-content-start">
                                                                                <div className="available_title">
                                                                                    Available: <span>6</span>
                                                                                </div>
                                                                                <div className="sold_title ml-auto">
                                                                                    Already sold: <span>28</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="available_bar">
                                                                                <span style={{ width: "17%" }} />
                                                                            </div>
                                                                        </div>
                                                                        <div className="deals_timer d-flex flex-row align-items-center justify-content-start">
                                                                            <div className="deals_timer_title_container">
                                                                                <div className="deals_timer_title">
                                                                                    Hurry Up
                                  </div>
                                                                                <div className="deals_timer_subtitle">
                                                                                    Offer ends in:
                                  </div>
                                                                            </div>
                                                                            <div className="deals_timer_content ml-auto">
                                                                                <div
                                                                                    className="deals_timer_box clearfix"
                                                                                    data-target-time
                                                                                >
                                                                                    <div className="deals_timer_unit">
                                                                                        <div
                                                                                            className="deals_timer_hr"
                                                                                            id="deals_timer2_hr"
                                                                                        >
                                                                                            47
                                      </div>
                                                                                        <span>hours</span>
                                                                                    </div>
                                                                                    <div className="deals_timer_unit">
                                                                                        <div
                                                                                            className="deals_timer_min"
                                                                                            id="deals_timer2_min"
                                                                                        >
                                                                                            59
                                      </div>
                                                                                        <span>mins</span>
                                                                                    </div>
                                                                                    <div className="deals_timer_unit">
                                                                                        <div
                                                                                            className="deals_timer_sec"
                                                                                            id="deals_timer2_sec"
                                                                                        >
                                                                                            44
                                      </div>
                                                                                        <span>secs</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="owl-item"
                                                                style={{ width: "310.4px", marginRight: 30 }}
                                                            >
                                                                <div className="owl-item deals_item">
                                                                    <div className="deals_image">
                                                                        <img alt='true' src={require('../assets/images/deals.png')} />
                                                                    </div>
                                                                    <div className="deals_content">
                                                                        <div className="deals_info_line d-flex flex-row justify-content-start">
                                                                            <div className="deals_item_category">
                                                                                <a href="#">Headphones</a>
                                                                            </div>
                                                                            <div className="deals_item_price_a ml-auto">
                                                                                $300
                                </div>
                                                                        </div>
                                                                        <div className="deals_info_line d-flex flex-row justify-content-start">
                                                                            <div className="deals_item_name">
                                                                                Beoplay H7
                                </div>
                                                                            <div className="deals_item_price ml-auto">
                                                                                $225
                                </div>
                                                                        </div>
                                                                        <div className="available">
                                                                            <div className="available_line d-flex flex-row justify-content-start">
                                                                                <div className="available_title">
                                                                                    Available: <span>6</span>
                                                                                </div>
                                                                                <div className="sold_title ml-auto">
                                                                                    Already sold: <span>28</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="available_bar">
                                                                                <span style={{ width: "17%" }} />
                                                                            </div>
                                                                        </div>
                                                                        <div className="deals_timer d-flex flex-row align-items-center justify-content-start">
                                                                            <div className="deals_timer_title_container">
                                                                                <div className="deals_timer_title">
                                                                                    Hurry Up
                                  </div>
                                                                                <div className="deals_timer_subtitle">
                                                                                    Offer ends in:
                                  </div>
                                                                            </div>
                                                                            <div className="deals_timer_content ml-auto">
                                                                                <div
                                                                                    className="deals_timer_box clearfix"
                                                                                    data-target-time
                                                                                >
                                                                                    <div className="deals_timer_unit">
                                                                                        <div
                                                                                            className="deals_timer_hr"
                                                                                            id="deals_timer3_hr"
                                                                                        >
                                                                                            47
                                      </div>
                                                                                        <span>hours</span>
                                                                                    </div>
                                                                                    <div className="deals_timer_unit">
                                                                                        <div
                                                                                            className="deals_timer_min"
                                                                                            id="deals_timer3_min"
                                                                                        >
                                                                                            59
                                      </div>
                                                                                        <span>mins</span>
                                                                                    </div>
                                                                                    <div className="deals_timer_unit">
                                                                                        <div
                                                                                            className="deals_timer_sec"
                                                                                            id="deals_timer3_sec"
                                                                                        >
                                                                                            44
                                      </div>
                                                                                        <span>secs</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-nav disabled">
                                                        <div className="deals_slider_prev">prev</div>
                                                        <div className="deals_slider_next">next</div>
                                                    </div>
                                                    <div className="owl-dots disabled" />
                                                </div>
                                            </div>
                                            <div className="deals_slider_nav_container">
                                                <div className="deals_slider_prev deals_slider_nav">
                                                    <i className="fas fa-chevron-left ml-auto" />
                                                </div>
                                                <div className="deals_slider_next deals_slider_nav">
                                                    <i className="fas fa-chevron-right ml-auto" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Featured */}
                                        <div className="featured">
                                            <div className="tabbed_container">
                                                <div className="tabs">
                                                    <ul className="clearfix">
                                                        <li className="active">Featured</li>
                                                        <li>On Sale</li>
                                                        <li>Best Rated</li>
                                                    </ul>
                                                    <div className="tabs_line">
                                                        <span style={{ left: 0, width: "79.1px" }} />
                                                    </div>
                                                </div>
                                                {/* Product Panel */}
                                                <div className="product_panel panel active">
                                                    <div className="featured_slider slider slick-initialized slick-slider slick-dotted">
                                                        <div className="slick-list draggable">
                                                            <div
                                                                className="slick-track"
                                                                style={{
                                                                    width: 1464,
                                                                    opacity: 1,
                                                                    transform: "translate3d(0px, 0px, 0px)"
                                                                }}
                                                            >
                                                                <div
                                                                    tabIndex={0}
                                                                    className="slick-slide slick-current slick-active"
                                                                    id="slick-slide00"
                                                                    role="tabpanel"
                                                                    aria-hidden="false"
                                                                    aria-describedby="slick-slide-control00"
                                                                    style={{ width: 183 }}
                                                                    data-slick-index={0}
                                                                >
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active active" />
                                                                            <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_1.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price discount">
                                                                                        $225<span>$300</span>
                                                                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a tabIndex={0} href="product.html">
                                                                                                Huawei MediaPad...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={0}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount">
                                                                                        -25%
                                    </li>
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active active" />
                                                                            <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_2.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $379
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a tabIndex={0} href="product.html">
                                                                                                Apple iPod shuffle
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={0}
                                                                                            className="product_cart_button active"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    tabIndex={0}
                                                                    className="slick-slide slick-active"
                                                                    id="slick-slide01"
                                                                    role="tabpanel"
                                                                    aria-hidden="false"
                                                                    style={{ width: 183 }}
                                                                    data-slick-index={1}
                                                                >
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_3.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $379
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a tabIndex={0} href="product.html">
                                                                                                Sony MDRZX310W
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={0}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active active" />
                                                                            <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_4.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price discount">
                                                                                        $225<span>$300</span>
                                                                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a tabIndex={0} href="product.html">
                                                                                                LUNA Smartphone
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={0}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount">
                                                                                        -25%
                                    </li>
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    tabIndex={0}
                                                                    className="slick-slide slick-active"
                                                                    id="slick-slide02"
                                                                    role="tabpanel"
                                                                    aria-hidden="false"
                                                                    style={{ width: 183 }}
                                                                    data-slick-index={2}
                                                                >
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_5.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $225
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a tabIndex={0} href="product.html">
                                                                                                Canon STM Kit...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={0}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_6.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $379
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a tabIndex={0} href="product.html">
                                                                                                Samsung J330F...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={0}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    tabIndex={0}
                                                                    className="slick-slide slick-active"
                                                                    id="slick-slide03"
                                                                    role="tabpanel"
                                                                    aria-hidden="false"
                                                                    style={{ width: 183 }}
                                                                    data-slick-index={3}
                                                                >
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active" />
                                                                            <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_7.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $379
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a tabIndex={0} href="product.html">
                                                                                                Lenovo IdeaPad
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={0}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount">
                                                                                        -25%
                                    </li>
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_8.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $225
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a tabIndex={0} href="product.html">
                                                                                                Digitus EDNET...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={0}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    tabIndex={-1}
                                                                    className="slick-slide"
                                                                    id="slick-slide04"
                                                                    role="tabpanel"
                                                                    aria-hidden="true"
                                                                    aria-describedby="slick-slide-control01"
                                                                    style={{ width: 183 }}
                                                                    data-slick-index={4}
                                                                >
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_1.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $225
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a
                                                                                                tabIndex={-1}
                                                                                                href="product.html"
                                                                                            >
                                                                                                Huawei MediaPad...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={-1}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_2.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $379
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a
                                                                                                tabIndex={-1}
                                                                                                href="product.html"
                                                                                            >
                                                                                                Huawei MediaPad...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={-1}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    tabIndex={-1}
                                                                    className="slick-slide"
                                                                    id="slick-slide05"
                                                                    role="tabpanel"
                                                                    aria-hidden="true"
                                                                    style={{ width: 183 }}
                                                                    data-slick-index={5}
                                                                >
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_3.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $379
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a
                                                                                                tabIndex={-1}
                                                                                                href="product.html"
                                                                                            >
                                                                                                Huawei MediaPad...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={-1}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_4.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $225
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a
                                                                                                tabIndex={-1}
                                                                                                href="product.html"
                                                                                            >
                                                                                                Huawei MediaPad...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={-1}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    tabIndex={-1}
                                                                    className="slick-slide"
                                                                    id="slick-slide06"
                                                                    role="tabpanel"
                                                                    aria-hidden="true"
                                                                    style={{ width: 183 }}
                                                                    data-slick-index={6}
                                                                >
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_4.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $225
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a
                                                                                                tabIndex={-1}
                                                                                                href="product.html"
                                                                                            >
                                                                                                Huawei MediaPad...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={-1}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_6.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $379
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a
                                                                                                tabIndex={-1}
                                                                                                href="product.html"
                                                                                            >
                                                                                                Huawei MediaPad...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={-1}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    tabIndex={-1}
                                                                    className="slick-slide"
                                                                    id="slick-slide07"
                                                                    role="tabpanel"
                                                                    aria-hidden="true"
                                                                    style={{ width: 183 }}
                                                                    data-slick-index={7}
                                                                >
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_7.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $379
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a
                                                                                                tabIndex={-1}
                                                                                                href="product.html"
                                                                                            >
                                                                                                Huawei MediaPad...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={-1}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_8.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $225
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a
                                                                                                tabIndex={-1}
                                                                                                href="product.html"
                                                                                            >
                                                                                                Huawei MediaPad...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={-1}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <ul className="slick-dots" role="tablist">
                                                            <li className="slick-active" role="presentation">
                                                                <button
                                                                    tabIndex={0}
                                                                    id="slick-slide-control00"
                                                                    role="tab"
                                                                    aria-selected="true"
                                                                    aria-controls="slick-slide00"
                                                                    aria-label="1 of 2"
                                                                    type="button"
                                                                >
                                                                    1
                          </button>
                                                            </li>
                                                            <li role="presentation">
                                                                <button
                                                                    tabIndex={-1}
                                                                    id="slick-slide-control01"
                                                                    role="tab"
                                                                    aria-controls="slick-slide04"
                                                                    aria-label="2 of 2"
                                                                    type="button"
                                                                >
                                                                    2
                          </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="featured_slider_dots_cover" />
                                                </div>
                                                {/* Product Panel */}
                                                <div className="product_panel panel">
                                                    <div className="featured_slider slider slick-initialized slick-slider slick-dotted">
                                                        <div className="slick-list draggable">
                                                            <div
                                                                className="slick-track"
                                                                style={{
                                                                    width: 0,
                                                                    opacity: 1,
                                                                    transform: "translate3d(0px, 0px, 0px)"
                                                                }}
                                                            >
                                                                <div
                                                                    tabIndex={0}
                                                                    className="slick-slide slick-current slick-active"
                                                                    id="slick-slide10"
                                                                    role="tabpanel"
                                                                    aria-hidden="false"
                                                                    aria-describedby="slick-slide-control10"
                                                                    style={{ width: 0 }}
                                                                    data-slick-index={0}
                                                                >
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active active" />
                                                                            <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_1.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price discount">
                                                                                        $225<span>$300</span>
                                                                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a tabIndex={0} href="product.html">
                                                                                                Huawei MediaPad...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={0}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount">
                                                                                        -25%
                                    </li>
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active active" />
                                                                            <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_2.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $379
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a tabIndex={0} href="product.html">
                                                                                                Apple iPod shuffle
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={0}
                                                                                            className="product_cart_button active"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    tabIndex={0}
                                                                    className="slick-slide slick-active"
                                                                    id="slick-slide11"
                                                                    role="tabpanel"
                                                                    aria-hidden="false"
                                                                    style={{ width: 0 }}
                                                                    data-slick-index={1}
                                                                >
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_3.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $379
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a tabIndex={0} href="product.html">
                                                                                                Sony MDRZX310W
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={0}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active active" />
                                                                            <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_4.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price discount">
                                                                                        $225<span>$300</span>
                                                                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a tabIndex={0} href="product.html">
                                                                                                LUNA Smartphone
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={0}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount">
                                                                                        -25%
                                    </li>
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    tabIndex={0}
                                                                    className="slick-slide slick-active"
                                                                    id="slick-slide12"
                                                                    role="tabpanel"
                                                                    aria-hidden="false"
                                                                    style={{ width: 0 }}
                                                                    data-slick-index={2}
                                                                >
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_5.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $225
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a tabIndex={0} href="product.html">
                                                                                                Canon STM Kit...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={0}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_6.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $379
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a tabIndex={0} href="product.html">
                                                                                                Samsung J330F...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={0}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    tabIndex={0}
                                                                    className="slick-slide slick-active"
                                                                    id="slick-slide13"
                                                                    role="tabpanel"
                                                                    aria-hidden="false"
                                                                    style={{ width: 0 }}
                                                                    data-slick-index={3}
                                                                >
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active" />
                                                                            <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_7.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $379
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a tabIndex={0} href="product.html">
                                                                                                Lenovo IdeaPad
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={0}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount">
                                                                                        -25%
                                    </li>
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_8.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $225
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a tabIndex={0} href="product.html">
                                                                                                Digitus EDNET...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={0}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    tabIndex={-1}
                                                                    className="slick-slide"
                                                                    id="slick-slide14"
                                                                    role="tabpanel"
                                                                    aria-hidden="true"
                                                                    aria-describedby="slick-slide-control11"
                                                                    style={{ width: 0 }}
                                                                    data-slick-index={4}
                                                                >
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_1.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $225
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a
                                                                                                tabIndex={-1}
                                                                                                href="product.html"
                                                                                            >
                                                                                                Huawei MediaPad...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={-1}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_2.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $379
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a
                                                                                                tabIndex={-1}
                                                                                                href="product.html"
                                                                                            >
                                                                                                Huawei MediaPad...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={-1}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    tabIndex={-1}
                                                                    className="slick-slide"
                                                                    id="slick-slide15"
                                                                    role="tabpanel"
                                                                    aria-hidden="true"
                                                                    style={{ width: 0 }}
                                                                    data-slick-index={5}
                                                                >
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_3.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $379
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a
                                                                                                tabIndex={-1}
                                                                                                href="product.html"
                                                                                            >
                                                                                                Huawei MediaPad...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={-1}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_4.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $225
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a
                                                                                                tabIndex={-1}
                                                                                                href="product.html"
                                                                                            >
                                                                                                Huawei MediaPad...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={-1}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    tabIndex={-1}
                                                                    className="slick-slide"
                                                                    id="slick-slide16"
                                                                    role="tabpanel"
                                                                    aria-hidden="true"
                                                                    style={{ width: 0 }}
                                                                    data-slick-index={6}
                                                                >
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_5.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $225
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a
                                                                                                tabIndex={-1}
                                                                                                href="product.html"
                                                                                            >
                                                                                                Huawei MediaPad...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={-1}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_6.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $379
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a
                                                                                                tabIndex={-1}
                                                                                                href="product.html"
                                                                                            >
                                                                                                Huawei MediaPad...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={-1}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    tabIndex={-1}
                                                                    className="slick-slide"
                                                                    id="slick-slide17"
                                                                    role="tabpanel"
                                                                    aria-hidden="true"
                                                                    style={{ width: 0 }}
                                                                    data-slick-index={7}
                                                                >
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_7.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $379
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a
                                                                                                tabIndex={-1}
                                                                                                href="product.html"
                                                                                            >
                                                                                                Huawei MediaPad...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={-1}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_8.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $225
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a
                                                                                                tabIndex={-1}
                                                                                                href="product.html"
                                                                                            >
                                                                                                Huawei MediaPad...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={-1}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <ul className="slick-dots" role="tablist">
                                                            <li className="slick-active" role="presentation">
                                                                <button
                                                                    tabIndex={0}
                                                                    id="slick-slide-control10"
                                                                    role="tab"
                                                                    aria-selected="true"
                                                                    aria-controls="slick-slide10"
                                                                    aria-label="1 of 2"
                                                                    type="button"
                                                                >
                                                                    1
                          </button>
                                                            </li>
                                                            <li role="presentation">
                                                                <button
                                                                    tabIndex={-1}
                                                                    id="slick-slide-control11"
                                                                    role="tab"
                                                                    aria-controls="slick-slide14"
                                                                    aria-label="2 of 2"
                                                                    type="button"
                                                                >
                                                                    2
                          </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="featured_slider_dots_cover" />
                                                </div>
                                                {/* Product Panel */}
                                                <div className="product_panel panel">
                                                    <div className="featured_slider slider slick-initialized slick-slider slick-dotted">
                                                        <div className="slick-list draggable">
                                                            <div
                                                                className="slick-track"
                                                                style={{
                                                                    width: 0,
                                                                    opacity: 1,
                                                                    transform: "translate3d(0px, 0px, 0px)"
                                                                }}
                                                            >
                                                                <div
                                                                    tabIndex={0}
                                                                    className="slick-slide slick-current slick-active"
                                                                    id="slick-slide20"
                                                                    role="tabpanel"
                                                                    aria-hidden="false"
                                                                    aria-describedby="slick-slide-control20"
                                                                    style={{ width: 0 }}
                                                                    data-slick-index={0}
                                                                >
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active active" />
                                                                            <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_1.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price discount">
                                                                                        $225<span>$300</span>
                                                                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a tabIndex={0} href="product.html">
                                                                                                Huawei MediaPad...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={0}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount">
                                                                                        -25%
                                    </li>
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active active" />
                                                                            <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_2.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $379
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a tabIndex={0} href="product.html">
                                                                                                Apple iPod shuffle
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={0}
                                                                                            className="product_cart_button active"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    tabIndex={0}
                                                                    className="slick-slide slick-active"
                                                                    id="slick-slide21"
                                                                    role="tabpanel"
                                                                    aria-hidden="false"
                                                                    style={{ width: 0 }}
                                                                    data-slick-index={1}
                                                                >
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_3.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $379
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a tabIndex={0} href="product.html">
                                                                                                Sony MDRZX310W
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={0}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active active" />
                                                                            <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_4.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price discount">
                                                                                        $225<span>$300</span>
                                                                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a tabIndex={0} href="product.html">
                                                                                                LUNA Smartphone
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={0}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount">
                                                                                        -25%
                                    </li>
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    tabIndex={0}
                                                                    className="slick-slide slick-active"
                                                                    id="slick-slide22"
                                                                    role="tabpanel"
                                                                    aria-hidden="false"
                                                                    style={{ width: 0 }}
                                                                    data-slick-index={2}
                                                                >
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_5.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $225
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a tabIndex={0} href="product.html">
                                                                                                Canon STM Kit...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={0}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_6.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $379
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a tabIndex={0} href="product.html">
                                                                                                Samsung J330F...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={0}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    tabIndex={0}
                                                                    className="slick-slide slick-active"
                                                                    id="slick-slide23"
                                                                    role="tabpanel"
                                                                    aria-hidden="false"
                                                                    style={{ width: 0 }}
                                                                    data-slick-index={3}
                                                                >
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active" />
                                                                            <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_7.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $379
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a tabIndex={0} href="product.html">
                                                                                                Lenovo IdeaPad
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={0}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount">
                                                                                        -25%
                                    </li>
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_8.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $225
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a tabIndex={0} href="product.html">
                                                                                                Digitus EDNET...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={0}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={0}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    tabIndex={-1}
                                                                    className="slick-slide"
                                                                    id="slick-slide24"
                                                                    role="tabpanel"
                                                                    aria-hidden="true"
                                                                    aria-describedby="slick-slide-control21"
                                                                    style={{ width: 0 }}
                                                                    data-slick-index={4}
                                                                >
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_1.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $225
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a
                                                                                                tabIndex={-1}
                                                                                                href="product.html"
                                                                                            >
                                                                                                Huawei MediaPad...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={-1}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_2.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $379
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a
                                                                                                tabIndex={-1}
                                                                                                href="product.html"
                                                                                            >
                                                                                                Huawei MediaPad...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={-1}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    tabIndex={-1}
                                                                    className="slick-slide"
                                                                    id="slick-slide25"
                                                                    role="tabpanel"
                                                                    aria-hidden="true"
                                                                    style={{ width: 0 }}
                                                                    data-slick-index={5}
                                                                >
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_3.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $379
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a
                                                                                                tabIndex={-1}
                                                                                                href="product.html"
                                                                                            >
                                                                                                Huawei MediaPad...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={-1}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_4.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $225
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a
                                                                                                tabIndex={-1}
                                                                                                href="product.html"
                                                                                            >
                                                                                                Huawei MediaPad...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={-1}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    tabIndex={-1}
                                                                    className="slick-slide"
                                                                    id="slick-slide26"
                                                                    role="tabpanel"
                                                                    aria-hidden="true"
                                                                    style={{ width: 0 }}
                                                                    data-slick-index={6}
                                                                >
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_5.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $225
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a
                                                                                                tabIndex={-1}
                                                                                                href="product.html"
                                                                                            >
                                                                                                Huawei MediaPad...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={-1}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_6.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $379
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a
                                                                                                tabIndex={-1}
                                                                                                href="product.html"
                                                                                            >
                                                                                                Huawei MediaPad...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={-1}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    tabIndex={-1}
                                                                    className="slick-slide"
                                                                    id="slick-slide27"
                                                                    role="tabpanel"
                                                                    aria-hidden="true"
                                                                    style={{ width: 0 }}
                                                                    data-slick-index={7}
                                                                >
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_7.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $379
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a
                                                                                                tabIndex={-1}
                                                                                                href="product.html"
                                                                                            >
                                                                                                Huawei MediaPad...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={-1}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div
                                                                            className="featured_slider_item"
                                                                            style={{
                                                                                width: "100%",
                                                                                display: "inline-block"
                                                                            }}
                                                                        >
                                                                            <div className="border_active" />
                                                                            <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                                                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                                    <img alt='true' src={require('../assets/images/featured_8.png')} />
                                                                                </div>
                                                                                <div className="product_content">
                                                                                    <div className="product_price">
                                                                                        $225
                                    </div>
                                                                                    <div className="product_name">
                                                                                        <div>
                                                                                            <a
                                                                                                tabIndex={-1}
                                                                                                href="product.html"
                                                                                            >
                                                                                                Huawei MediaPad...
                                        </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product_extras">
                                                                                        <div className="product_color">
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#b19c83" }}
                                                                                                type="radio"
                                                                                                defaultChecked
                                                                                            />{" "}
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#000000" }}
                                                                                                type="radio"
                                                                                            />
                                                                                            <input
                                                                                                name="product_color"
                                                                                                tabIndex={-1}
                                                                                                style={{ background: "#999999" }}
                                                                                                type="radio"
                                                                                            />
                                                                                        </div>
                                                                                        <button
                                                                                            tabIndex={-1}
                                                                                            className="product_cart_button"
                                                                                        >
                                                                                            Add to Cart
                                      </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product_fav">
                                                                                    <i className="fas fa-heart" />
                                                                                </div>
                                                                                <ul className="product_marks">
                                                                                    <li className="product_mark product_discount" />
                                                                                    <li className="product_mark product_new">
                                                                                        new
                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <ul className="slick-dots" role="tablist">
                                                            <li className="slick-active" role="presentation">
                                                                <button
                                                                    tabIndex={0}
                                                                    id="slick-slide-control20"
                                                                    role="tab"
                                                                    aria-selected="true"
                                                                    aria-controls="slick-slide20"
                                                                    aria-label="1 of 2"
                                                                    type="button"
                                                                >
                                                                    1
                          </button>
                                                            </li>
                                                            <li role="presentation">
                                                                <button
                                                                    tabIndex={-1}
                                                                    id="slick-slide-control21"
                                                                    role="tab"
                                                                    aria-controls="slick-slide24"
                                                                    aria-label="2 of 2"
                                                                    type="button"
                                                                >
                                                                    2
                          </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="featured_slider_dots_cover" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <script src="../assets/js/jquery-3.3.1.min.js"></script>
                            <script src="../assets/styles/bootstrap4/popper.js"></script>
                            <script src="../assets/styles/bootstrap4/bootstrap.min.js"></script>
                            <script src="../assets/plugins/greensock/TweenMax.min.js"></script>
                            <script src="../assets/plugins/greensock/TimelineMax.min.js"></script>
                            <script src="../assets/plugins/scrollmagic/ScrollMagic.min.js"></script>
                            <script src="../assets/plugins/greensock/animation.gsap.min.js"></script>
                            <script src="../assets/plugins/greensock/ScrollToPlugin.min.js"></script>
                            <script src="../assets/plugins/OwlCarousel2-2.2.1/owl.carousel.js"></script>
                            <script src="../assets/plugins/slick-1.8.0/slick.js"></script>
                            <script src="../assets/plugins/easing/easing.js"></script>
                            <script src="../assets/js/custom.js"></script>
                           
                        </div>
                        </header>
                        </div>
                      
                      
                      
           
          
                    );
                }
            
            }
            
export default Deals_feature;