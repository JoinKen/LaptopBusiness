import React, { Component } from 'react';
import '../assets/styles/main_styles.css';
import '../assets/plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import '../assets/plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import '../assets/plugins/OwlCarousel2-2.2.1/animate.css';
import '../assets/plugins/slick-1.8.0/slick.css';
import '../assets/styles/responsive.css';
import '../assets/plugins/fontawesome-free-5.0.1/css/fontawesome-all.css';
import '../assets/styles/bootstrap4/bootstrap.min.css';
import Background from '../assets/images/banner_2_background.jpg';

class Arrival extends Component {
    render() {
        return (
            <div className="new_arrivals">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="tabbed_container">
                                <div className="tabs clearfix tabs-right">
                                    <div className="new_arrivals_title">Hot New Arrivals</div>
                                    <ul className="clearfix">
                                        <li>Featured</li>
                                        <li className="active">Audio &amp; Video</li>
                                        <li>Laptops &amp; Computers</li>
                                    </ul>
                                    <div className="tabs_line">
                                        <span style={{ left: "778.47px", width: "119.79px" }} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-9" style={{ zIndex: 1 }}>
                                        {/* Product Panel */}
                                        <div className="product_panel panel">
                                            <div className="arrivals_slider slider slick-initialized slick-slider slick-dotted">
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
                                                            id="slick-slide90"
                                                            role="tabpanel"
                                                            aria-hidden="false"
                                                            aria-describedby="slick-slide-control90"
                                                            style={{ width: 0 }}
                                                            data-slick-index={0}
                                                        >
                                                            <div>
                                                                <div
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_1.jpg')} />
                                                                        </div>
                                                                        <div className="product_content">
                                                                            <div className="product_price">
                                                                                $225
                                </div>
                                                                            <div className="product_name">
                                                                                <div>
                                                                                    <a
                                                                                        tabIndex={0}
                                                                                        href="product.html"
                                                                                    >
                                                                                        Astro M2 Black
                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="product_extras">
                                                                                <div className="product_color">
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_2.jpg')}  />
                                                                        </div>
                                                                        <div className="product_content">
                                                                            <div className="product_price">
                                                                                $379
                                </div>
                                                                            <div className="product_name">
                                                                                <div>
                                                                                    <a
                                                                                        tabIndex={0}
                                                                                        href="product.html"
                                                                                    >
                                                                                        Transcend T.Sonic
                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="product_extras">
                                                                                <div className="product_color">
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                            id="slick-slide91"
                                                            role="tabpanel"
                                                            aria-hidden="false"
                                                            style={{ width: 0 }}
                                                            data-slick-index={1}
                                                        >
                                                            <div>
                                                                <div
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_3.jpg')}  />
                                                                        </div>
                                                                        <div className="product_content">
                                                                            <div className="product_price">
                                                                                $379
                                </div>
                                                                            <div className="product_name">
                                                                                <div>
                                                                                    <a
                                                                                        tabIndex={0}
                                                                                        href="product.html"
                                                                                    >
                                                                                        Xiaomi Band 2...
                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="product_extras">
                                                                                <div className="product_color">
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_4.jpg')}  />
                                                                        </div>
                                                                        <div className="product_content">
                                                                            <div className="product_price">
                                                                                $225
                                </div>
                                                                            <div className="product_name">
                                                                                <div>
                                                                                    <a
                                                                                        tabIndex={0}
                                                                                        href="product.html"
                                                                                    >
                                                                                        Rapoo T8 White
                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="product_extras">
                                                                                <div className="product_color">
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                            id="slick-slide92"
                                                            role="tabpanel"
                                                            aria-hidden="false"
                                                            style={{ width: 0 }}
                                                            data-slick-index={2}
                                                        >
                                                            <div>
                                                                <div
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_5.jpg')}  />
                                                                        </div>
                                                                        <div className="product_content">
                                                                            <div className="product_price">
                                                                                $225
                                </div>
                                                                            <div className="product_name">
                                                                                <div>
                                                                                    <a
                                                                                        tabIndex={0}
                                                                                        href="product.html"
                                                                                    >
                                                                                        Philips BT6900A
                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="product_extras">
                                                                                <div className="product_color">
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_6.jpg')}  />
                                                                        </div>
                                                                        <div className="product_content">
                                                                            <div className="product_price">
                                                                                $379
                                </div>
                                                                            <div className="product_name">
                                                                                <div>
                                                                                    <a
                                                                                        tabIndex={0}
                                                                                        href="product.html"
                                                                                    >
                                                                                        Nokia 3310(2017)...
                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="product_extras">
                                                                                <div className="product_color">
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                            id="slick-slide93"
                                                            role="tabpanel"
                                                            aria-hidden="false"
                                                            style={{ width: 0 }}
                                                            data-slick-index={3}
                                                        >
                                                            <div>
                                                                <div
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_7.jpg')} />
                                                                        </div>
                                                                        <div className="product_content">
                                                                            <div className="product_price">
                                                                                $379
                                </div>
                                                                            <div className="product_name">
                                                                                <div>
                                                                                    <a
                                                                                        tabIndex={0}
                                                                                        href="product.html"
                                                                                    >
                                                                                        Rapoo 7100p Gray
                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="product_extras">
                                                                                <div className="product_color">
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_8.jpg')}  />
                                                                        </div>
                                                                        <div className="product_content">
                                                                            <div className="product_price">
                                                                                $225
                                </div>
                                                                            <div className="product_name">
                                                                                <div>
                                                                                    <a
                                                                                        tabIndex={0}
                                                                                        href="product.html"
                                                                                    >
                                                                                        Canon EF
                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="product_extras">
                                                                                <div className="product_color">
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                            id="slick-slide94"
                                                            role="tabpanel"
                                                            aria-hidden="false"
                                                            style={{ width: 0 }}
                                                            data-slick-index={4}
                                                        >
                                                            <div>
                                                                <div
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_1.jpg')}  />
                                                                        </div>
                                                                        <div className="product_content">
                                                                            <div className="product_price">
                                                                                $225
                                </div>
                                                                            <div className="product_name">
                                                                                <div>
                                                                                    <a
                                                                                        tabIndex={0}
                                                                                        href="product.html"
                                                                                    >
                                                                                        Gembird SPK-103
                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="product_extras">
                                                                                <div className="product_color">
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_2.jpg')}  />
                                                                        </div>
                                                                        <div className="product_content">
                                                                            <div className="product_price">
                                                                                $379
                                </div>
                                                                            <div className="product_name">
                                                                                <div>
                                                                                    <a
                                                                                        tabIndex={0}
                                                                                        href="product.html"
                                                                                    >
                                                                                        Canon IXUS 175...
                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="product_extras">
                                                                                <div className="product_color">
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                            id="slick-slide95"
                                                            role="tabpanel"
                                                            aria-hidden="true"
                                                            aria-describedby="slick-slide-control91"
                                                            style={{ width: 0 }}
                                                            data-slick-index={5}
                                                        >
                                                            <div>
                                                                <div
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_3.jpg')}  />
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
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_4.jpg')}  />
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
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                            id="slick-slide96"
                                                            role="tabpanel"
                                                            aria-hidden="true"
                                                            style={{ width: 0 }}
                                                            data-slick-index={6}
                                                        >
                                                            <div>
                                                                <div
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_5.jpg')}  />
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
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_6.jpg')}  />
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
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                            id="slick-slide97"
                                                            role="tabpanel"
                                                            aria-hidden="true"
                                                            style={{ width: 0 }}
                                                            data-slick-index={7}
                                                        >
                                                            <div>
                                                                <div
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_7.jpg')}  />
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
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_8.jpg')}  />
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
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                <ul
                                                    className="slick-dots"
                                                    role="tablist"
                                                    style={{ display: "block" }}
                                                >
                                                    <li className="slick-active" role="presentation">
                                                        <button
                                                            tabIndex={0}
                                                            id="slick-slide-control90"
                                                            role="tab"
                                                            aria-selected="true"
                                                            aria-controls="slick-slide90"
                                                            aria-label="1 of 2"
                                                            type="button"
                                                        >
                                                            1
                      </button>
                                                    </li>
                                                    <li role="presentation">
                                                        <button
                                                            tabIndex={-1}
                                                            id="slick-slide-control91"
                                                            role="tab"
                                                            aria-controls="slick-slide95"
                                                            aria-label="2 of 2"
                                                            type="button"
                                                        >
                                                            2
                      </button>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="arrivals_slider_dots_cover" />
                                        </div>
                                        {/* Product Panel */}
                                        <div className="product_panel panel active">
                                            <div className="arrivals_slider slider slick-initialized slick-slider slick-dotted">
                                                <div className="slick-list draggable">
                                                    <div
                                                        className="slick-track"
                                                        style={{
                                                            width: 1488,
                                                            opacity: 1,
                                                            transform: "translate3d(0px, 0px, 0px)"
                                                        }}
                                                    >
                                                        <div
                                                            tabIndex={0}
                                                            className="slick-slide slick-current slick-active"
                                                            id="slick-slide100"
                                                            role="tabpanel"
                                                            aria-hidden="false"
                                                            aria-describedby="slick-slide-control100"
                                                            style={{ width: 186 }}
                                                            data-slick-index={0}
                                                        >
                                                            <div>
                                                                <div
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_1.jpg')}  />
                                                                        </div>
                                                                        <div className="product_content">
                                                                            <div className="product_price">
                                                                                $225
                                </div>
                                                                            <div className="product_name">
                                                                                <div>
                                                                                    <a
                                                                                        tabIndex={0}
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
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_2.jpg')}  />
                                                                        </div>
                                                                        <div className="product_content">
                                                                            <div className="product_price">
                                                                                $379
                                </div>
                                                                            <div className="product_name">
                                                                                <div>
                                                                                    <a
                                                                                        tabIndex={0}
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
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                            id="slick-slide101"
                                                            role="tabpanel"
                                                            aria-hidden="false"
                                                            style={{ width: 186 }}
                                                            data-slick-index={1}
                                                        >
                                                            <div>
                                                                <div
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_3.jpg')}  />
                                                                        </div>
                                                                        <div className="product_content">
                                                                            <div className="product_price">
                                                                                $379
                                </div>
                                                                            <div className="product_name">
                                                                                <div>
                                                                                    <a
                                                                                        tabIndex={0}
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
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_4.jpg')}  />
                                                                        </div>
                                                                        <div className="product_content">
                                                                            <div className="product_price">
                                                                                $225
                                </div>
                                                                            <div className="product_name">
                                                                                <div>
                                                                                    <a
                                                                                        tabIndex={0}
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
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                            id="slick-slide102"
                                                            role="tabpanel"
                                                            aria-hidden="false"
                                                            style={{ width: 186 }}
                                                            data-slick-index={2}
                                                        >
                                                            <div>
                                                                <div
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_5.jpg')}  />
                                                                        </div>
                                                                        <div className="product_content">
                                                                            <div className="product_price">
                                                                                $225
                                </div>
                                                                            <div className="product_name">
                                                                                <div>
                                                                                    <a
                                                                                        tabIndex={0}
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
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_6.jpg')}  />
                                                                        </div>
                                                                        <div className="product_content">
                                                                            <div className="product_price">
                                                                                $379
                                </div>
                                                                            <div className="product_name">
                                                                                <div>
                                                                                    <a
                                                                                        tabIndex={0}
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
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                            id="slick-slide103"
                                                            role="tabpanel"
                                                            aria-hidden="false"
                                                            style={{ width: 186 }}
                                                            data-slick-index={3}
                                                        >
                                                            <div>
                                                                <div
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_7.jpg')}  />
                                                                        </div>
                                                                        <div className="product_content">
                                                                            <div className="product_price">
                                                                                $379
                                </div>
                                                                            <div className="product_name">
                                                                                <div>
                                                                                    <a
                                                                                        tabIndex={0}
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
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_8.jpg')}  />
                                                                        </div>
                                                                        <div className="product_content">
                                                                            <div className="product_price">
                                                                                $225
                                </div>
                                                                            <div className="product_name">
                                                                                <div>
                                                                                    <a
                                                                                        tabIndex={0}
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
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                            id="slick-slide104"
                                                            role="tabpanel"
                                                            aria-hidden="false"
                                                            style={{ width: 186 }}
                                                            data-slick-index={4}
                                                        >
                                                            <div>
                                                                <div
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_1.jpg')}  />
                                                                        </div>
                                                                        <div className="product_content">
                                                                            <div className="product_price">
                                                                                $225
                                </div>
                                                                            <div className="product_name">
                                                                                <div>
                                                                                    <a
                                                                                        tabIndex={0}
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
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_2.jpg')}  />
                                                                        </div>
                                                                        <div className="product_content">
                                                                            <div className="product_price">
                                                                                $379
                                </div>
                                                                            <div className="product_name">
                                                                                <div>
                                                                                    <a
                                                                                        tabIndex={0}
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
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                            id="slick-slide105"
                                                            role="tabpanel"
                                                            aria-hidden="true"
                                                            aria-describedby="slick-slide-control101"
                                                            style={{ width: 186 }}
                                                            data-slick-index={5}
                                                        >
                                                            <div>
                                                                <div
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_3.jpg')}  />
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
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_4.jpg')}  />
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
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                            id="slick-slide106"
                                                            role="tabpanel"
                                                            aria-hidden="true"
                                                            style={{ width: 186 }}
                                                            data-slick-index={6}
                                                        >
                                                            <div>
                                                                <div
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_5.jpg')}  />
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
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_6.jpg')}  />
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
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                            id="slick-slide107"
                                                            role="tabpanel"
                                                            aria-hidden="true"
                                                            style={{ width: 186 }}
                                                            data-slick-index={7}
                                                        >
                                                            <div>
                                                                <div
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_7.jpg')}  />
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
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_8.jpg')}  />
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
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                <ul
                                                    className="slick-dots"
                                                    role="tablist"
                                                    style={{ display: "block" }}
                                                >
                                                    <li className="slick-active" role="presentation">
                                                        <button
                                                            tabIndex={0}
                                                            id="slick-slide-control100"
                                                            role="tab"
                                                            aria-selected="true"
                                                            aria-controls="slick-slide100"
                                                            aria-label="1 of 2"
                                                            type="button"
                                                        >
                                                            1
                      </button>
                                                    </li>
                                                    <li role="presentation">
                                                        <button
                                                            tabIndex={-1}
                                                            id="slick-slide-control101"
                                                            role="tab"
                                                            aria-controls="slick-slide105"
                                                            aria-label="2 of 2"
                                                            type="button"
                                                        >
                                                            2
                      </button>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="arrivals_slider_dots_cover" />
                                        </div>
                                        {/* Product Panel */}
                                        <div className="product_panel panel">
                                            <div className="arrivals_slider slider slick-initialized slick-slider slick-dotted">
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
                                                            id="slick-slide110"
                                                            role="tabpanel"
                                                            aria-hidden="false"
                                                            aria-describedby="slick-slide-control110"
                                                            style={{ width: 0 }}
                                                            data-slick-index={0}
                                                        >
                                                            <div>
                                                                <div
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_1.jpg')}  />
                                                                        </div>
                                                                        <div className="product_content">
                                                                            <div className="product_price">
                                                                                $225
                                </div>
                                                                            <div className="product_name">
                                                                                <div>
                                                                                    <a
                                                                                        tabIndex={0}
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
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_2.jpg')}  />
                                                                        </div>
                                                                        <div className="product_content">
                                                                            <div className="product_price">
                                                                                $379
                                </div>
                                                                            <div className="product_name">
                                                                                <div>
                                                                                    <a
                                                                                        tabIndex={0}
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
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                            id="slick-slide111"
                                                            role="tabpanel"
                                                            aria-hidden="false"
                                                            style={{ width: 0 }}
                                                            data-slick-index={1}
                                                        >
                                                            <div>
                                                                <div
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_3.jpg')}  />
                                                                        </div>
                                                                        <div className="product_content">
                                                                            <div className="product_price">
                                                                                $379
                                </div>
                                                                            <div className="product_name">
                                                                                <div>
                                                                                    <a
                                                                                        tabIndex={0}
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
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_4.jpg')}  />
                                                                        </div>
                                                                        <div className="product_content">
                                                                            <div className="product_price">
                                                                                $225
                                </div>
                                                                            <div className="product_name">
                                                                                <div>
                                                                                    <a
                                                                                        tabIndex={0}
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
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                            id="slick-slide112"
                                                            role="tabpanel"
                                                            aria-hidden="false"
                                                            style={{ width: 0 }}
                                                            data-slick-index={2}
                                                        >
                                                            <div>
                                                                <div
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_5.jpg')}  />
                                                                        </div>
                                                                        <div className="product_content">
                                                                            <div className="product_price">
                                                                                $225
                                </div>
                                                                            <div className="product_name">
                                                                                <div>
                                                                                    <a
                                                                                        tabIndex={0}
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
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_6.jpg')}  />
                                                                        </div>
                                                                        <div className="product_content">
                                                                            <div className="product_price">
                                                                                $379
                                </div>
                                                                            <div className="product_name">
                                                                                <div>
                                                                                    <a
                                                                                        tabIndex={0}
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
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                            id="slick-slide113"
                                                            role="tabpanel"
                                                            aria-hidden="false"
                                                            style={{ width: 0 }}
                                                            data-slick-index={3}
                                                        >
                                                            <div>
                                                                <div
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_7.jpg')}  />
                                                                        </div>
                                                                        <div className="product_content">
                                                                            <div className="product_price">
                                                                                $379
                                </div>
                                                                            <div className="product_name">
                                                                                <div>
                                                                                    <a
                                                                                        tabIndex={0}
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
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_8.jpg')}  />
                                                                        </div>
                                                                        <div className="product_content">
                                                                            <div className="product_price">
                                                                                $225
                                </div>
                                                                            <div className="product_name">
                                                                                <div>
                                                                                    <a
                                                                                        tabIndex={0}
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
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                            id="slick-slide114"
                                                            role="tabpanel"
                                                            aria-hidden="false"
                                                            style={{ width: 0 }}
                                                            data-slick-index={4}
                                                        >
                                                            <div>
                                                                <div
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_1.jpg')}  />
                                                                        </div>
                                                                        <div className="product_content">
                                                                            <div className="product_price">
                                                                                $225
                                </div>
                                                                            <div className="product_name">
                                                                                <div>
                                                                                    <a
                                                                                        tabIndex={0}
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
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_2.jpg')}  />
                                                                        </div>
                                                                        <div className="product_content">
                                                                            <div className="product_price">
                                                                                $379
                                </div>
                                                                            <div className="product_name">
                                                                                <div>
                                                                                    <a
                                                                                        tabIndex={0}
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
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={0}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                            id="slick-slide115"
                                                            role="tabpanel"
                                                            aria-hidden="true"
                                                            aria-describedby="slick-slide-control111"
                                                            style={{ width: 0 }}
                                                            data-slick-index={5}
                                                        >
                                                            <div>
                                                                <div
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_3.jpg')}  />
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
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_4.jpg')}  />
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
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                            id="slick-slide116"
                                                            role="tabpanel"
                                                            aria-hidden="true"
                                                            style={{ width: 0 }}
                                                            data-slick-index={6}
                                                        >
                                                            <div>
                                                                <div
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_5.jpg')}  />
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
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_6.jpg')}  />
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
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                            id="slick-slide117"
                                                            role="tabpanel"
                                                            aria-hidden="true"
                                                            style={{ width: 0 }}
                                                            data-slick-index={7}
                                                        >
                                                            <div>
                                                                <div
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_7.jpg')}  />
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
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                                    className="arrivals_slider_item"
                                                                    style={{
                                                                        width: "100%",
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div className="border_active" />
                                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                                            <img alt='true' src={require('../assets/images/new_8.jpg')}  />
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
                                                                                        style={{
                                                                                            background: "#b19c83"
                                                                                        }}
                                                                                        type="radio"
                                                                                        defaultChecked
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#000000"
                                                                                        }}
                                                                                        type="radio"
                                                                                    />{" "}
                                                                                    <input
                                                                                        name="product_color"
                                                                                        tabIndex={-1}
                                                                                        style={{
                                                                                            background: "#999999"
                                                                                        }}
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
                                                <ul
                                                    className="slick-dots"
                                                    role="tablist"
                                                    style={{ display: "block" }}
                                                >
                                                    <li className="slick-active" role="presentation">
                                                        <button
                                                            tabIndex={0}
                                                            id="slick-slide-control110"
                                                            role="tab"
                                                            aria-selected="true"
                                                            aria-controls="slick-slide110"
                                                            aria-label="1 of 2"
                                                            type="button"
                                                        >
                                                            1
                      </button>
                                                    </li>
                                                    <li role="presentation">
                                                        <button
                                                            tabIndex={-1}
                                                            id="slick-slide-control111"
                                                            role="tab"
                                                            aria-controls="slick-slide115"
                                                            aria-label="2 of 2"
                                                            type="button"
                                                        >
                                                            2
                      </button>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="arrivals_slider_dots_cover" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="arrivals_single clearfix">
                                            <div className="d-flex flex-column align-items-center justify-content-center">
                                                <div className="arrivals_single_image">
                                                    <img  alt='true' src={require('../assets/images/new_single.png')} />
                                                </div>
                                                <div className="arrivals_single_content">
                                                    <div className="arrivals_single_category">
                                                        <a href="#">Smartphones</a>
                                                    </div>
                                                    <div className="arrivals_single_name_container clearfix">
                                                        <div className="arrivals_single_name">
                                                            <a href="#">LUNA Smartphone</a>
                                                        </div>
                                                        <div className="arrivals_single_price text-right">
                                                            $379
                      </div>
                                                    </div>
                                                    <div className="rating_r rating_r_4 arrivals_single_rating">
                                                        <i />
                                                        <i />
                                                        <i />
                                                        <i />
                                                        <i />
                                                    </div>
                                                    <form action="#">
                                                        <button className="arrivals_single_button">
                                                            Add to Cart
                      </button>
                                                    </form>
                                                </div>
                                                <div className="arrivals_single_fav product_fav active">
                                                    <i className="fas fa-heart" />
                                                </div>
                                                <ul className="arrivals_single_marks product_marks">
                                                    <li className="arrivals_single_mark product_mark product_new">
                                                        new
                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Arrival;