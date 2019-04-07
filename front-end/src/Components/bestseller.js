import React, { Component } from 'react';
import '../assets/styles/main_styles.css';
import '../assets/plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import '../assets/plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import '../assets/plugins/OwlCarousel2-2.2.1/animate.css';
import '../assets/plugins/slick-1.8.0/slick.css';
import '../assets/styles/responsive.css';
import '../assets/plugins/fontawesome-free-5.0.1/css/fontawesome-all.css';
import '../assets/styles/bootstrap4/bootstrap.min.css';


class BestSeller extends Component {
    render() {
        return (
            <div className="best_sellers">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="tabbed_container">
                                <div className="tabs clearfix tabs-right">
                                    <div className="new_arrivals_title">Hot Best Sellers</div>
                                    <ul className="clearfix">
                                        <li className="active">Top 20</li>
                                        <li>Audio &amp; Video</li>
                                        <li>Laptops &amp; Computers</li>
                                    </ul>
                                    <div className="tabs_line">
                                        <span style={{ left: "667.38px", width: "58.09px" }} />
                                    </div>
                                </div>
                                <div className="bestsellers_panel panel active">
                                    {/* Best Sellers Slider */}
                                    <div className="bestsellers_slider slider slick-initialized slick-slider slick-dotted">
                                        <div className="slick-list draggable">
                                            <div
                                                className="slick-track"
                                                style={{
                                                    width: 5850,
                                                    opacity: 1,
                                                    transform: "translate3d(-1170px, 0px, 0px)"
                                                }}
                                            >
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 360 }}
                                                    data-slick-index={-3}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_1.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_2.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 360 }}
                                                    data-slick-index={-2}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_3.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_4.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 360 }}
                                                    data-slick-index={-1}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_5.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_6.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={0}
                                                    className="slick-slide slick-current slick-active"
                                                    id="slick-slide60"
                                                    role="tabpanel"
                                                    aria-hidden="false"
                                                    aria-describedby="slick-slide-control60"
                                                    style={{ width: 360 }}
                                                    data-slick-index={0}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_1.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={0} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={0} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_2.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={0} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={0} href="product.html">
                                                                            Samsung J730F...
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={0}
                                                    className="slick-slide slick-active"
                                                    id="slick-slide61"
                                                    role="tabpanel"
                                                    aria-hidden="false"
                                                    style={{ width: 360 }}
                                                    data-slick-index={1}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_3.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={0} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={0} href="product.html">
                                                                            Nomi Black White
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_4.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={0} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={0} href="product.html">
                                                                            Samsung Charm Gold
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={0}
                                                    className="slick-slide slick-active"
                                                    id="slick-slide62"
                                                    role="tabpanel"
                                                    aria-hidden="false"
                                                    style={{ width: 360 }}
                                                    data-slick-index={2}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_5.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={0} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={0} href="product.html">
                                                                            Beoplay H7
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_6.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={0} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={0} href="product.html">
                                                                            Huawei MediaPad T3
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide"
                                                    id="slick-slide63"
                                                    role="tabpanel"
                                                    aria-hidden="true"
                                                    aria-describedby="slick-slide-control61"
                                                    style={{ width: 360 }}
                                                    data-slick-index={3}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_1.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_2.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide"
                                                    id="slick-slide64"
                                                    role="tabpanel"
                                                    aria-hidden="true"
                                                    style={{ width: 360 }}
                                                    data-slick-index={4}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_3.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_4.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide"
                                                    id="slick-slide65"
                                                    role="tabpanel"
                                                    aria-hidden="true"
                                                    style={{ width: 360 }}
                                                    data-slick-index={5}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_5.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_6.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 360 }}
                                                    data-slick-index={6}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_1.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_2.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Samsung J730F...
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 360 }}
                                                    data-slick-index={7}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_3.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Nomi Black White
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_4.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Samsung Charm Gold
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 360 }}
                                                    data-slick-index={8}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_5.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Beoplay H7
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_6.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Huawei MediaPad T3
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 360 }}
                                                    data-slick-index={9}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_1.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_2.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 360 }}
                                                    data-slick-index={10}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_3.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_4.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 360 }}
                                                    data-slick-index={11}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_5.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_6.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="slick-dots" role="tablist">
                                            <li className="slick-active" role="presentation">
                                                <button
                                                    tabIndex={0}
                                                    id="slick-slide-control60"
                                                    role="tab"
                                                    aria-selected="true"
                                                    aria-controls="slick-slide60"
                                                    aria-label="1 of 2"
                                                    type="button"
                                                >
                                                    1
                  </button>
                                            </li>
                                            <li role="presentation">
                                                <button
                                                    tabIndex={-1}
                                                    id="slick-slide-control61"
                                                    role="tab"
                                                    aria-controls="slick-slide63"
                                                    aria-label="2 of 2"
                                                    type="button"
                                                >
                                                    2
                  </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="bestsellers_panel panel">
                                    {/* Best Sellers Slider */}
                                    <div className="bestsellers_slider slider slick-initialized slick-slider slick-dotted">
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
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 0 }}
                                                    data-slick-index={-3}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_1.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_2.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 0 }}
                                                    data-slick-index={-2}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_3.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_4.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 0 }}
                                                    data-slick-index={-1}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_5.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_6.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={0}
                                                    className="slick-slide slick-current slick-active"
                                                    id="slick-slide70"
                                                    role="tabpanel"
                                                    aria-hidden="false"
                                                    aria-describedby="slick-slide-control70"
                                                    style={{ width: 0 }}
                                                    data-slick-index={0}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_1.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={0} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={0} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_2.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={0} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={0} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={0}
                                                    className="slick-slide slick-active"
                                                    id="slick-slide71"
                                                    role="tabpanel"
                                                    aria-hidden="false"
                                                    style={{ width: 0 }}
                                                    data-slick-index={1}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_3.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={0} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={0} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_4.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={0} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={0} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={0}
                                                    className="slick-slide slick-active"
                                                    id="slick-slide72"
                                                    role="tabpanel"
                                                    aria-hidden="false"
                                                    style={{ width: 0 }}
                                                    data-slick-index={2}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_5.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={0} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={0} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_6.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={0} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={0} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide"
                                                    id="slick-slide73"
                                                    role="tabpanel"
                                                    aria-hidden="true"
                                                    aria-describedby="slick-slide-control71"
                                                    style={{ width: 0 }}
                                                    data-slick-index={3}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_1.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_2.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide"
                                                    id="slick-slide74"
                                                    role="tabpanel"
                                                    aria-hidden="true"
                                                    style={{ width: 0 }}
                                                    data-slick-index={4}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_3.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_4.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide"
                                                    id="slick-slide75"
                                                    role="tabpanel"
                                                    aria-hidden="true"
                                                    style={{ width: 0 }}
                                                    data-slick-index={5}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_5.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_6.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 0 }}
                                                    data-slick-index={6}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_1.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_2.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 0 }}
                                                    data-slick-index={7}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_3.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_4.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 0 }}
                                                    data-slick-index={8}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_5.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_6.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 0 }}
                                                    data-slick-index={9}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_1.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_2.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 0 }}
                                                    data-slick-index={10}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_3.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_4.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 0 }}
                                                    data-slick-index={11}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_5.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_6.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="slick-dots" role="tablist">
                                            <li className="slick-active" role="presentation">
                                                <button
                                                    tabIndex={0}
                                                    id="slick-slide-control70"
                                                    role="tab"
                                                    aria-selected="true"
                                                    aria-controls="slick-slide70"
                                                    aria-label="1 of 2"
                                                    type="button"
                                                >
                                                    1
                  </button>
                                            </li>
                                            <li role="presentation">
                                                <button
                                                    tabIndex={-1}
                                                    id="slick-slide-control71"
                                                    role="tab"
                                                    aria-controls="slick-slide73"
                                                    aria-label="2 of 2"
                                                    type="button"
                                                >
                                                    2
                  </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="bestsellers_panel panel">
                                    {/* Best Sellers Slider */}
                                    <div className="bestsellers_slider slider slick-initialized slick-slider slick-dotted">
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
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 0 }}
                                                    data-slick-index={-3}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_1.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_2.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 0 }}
                                                    data-slick-index={-2}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_3.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_4.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 0 }}
                                                    data-slick-index={-1}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_5.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_6.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={0}
                                                    className="slick-slide slick-current slick-active"
                                                    id="slick-slide80"
                                                    role="tabpanel"
                                                    aria-hidden="false"
                                                    aria-describedby="slick-slide-control80"
                                                    style={{ width: 0 }}
                                                    data-slick-index={0}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_1.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={0} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={0} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_2.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={0} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={0} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={0}
                                                    className="slick-slide slick-active"
                                                    id="slick-slide81"
                                                    role="tabpanel"
                                                    aria-hidden="false"
                                                    style={{ width: 0 }}
                                                    data-slick-index={1}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_3.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={0} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={0} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_4.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={0} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={0} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={0}
                                                    className="slick-slide slick-active"
                                                    id="slick-slide82"
                                                    role="tabpanel"
                                                    aria-hidden="false"
                                                    style={{ width: 0 }}
                                                    data-slick-index={2}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_5.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={0} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={0} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_6.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={0} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={0} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide"
                                                    id="slick-slide83"
                                                    role="tabpanel"
                                                    aria-hidden="true"
                                                    aria-describedby="slick-slide-control81"
                                                    style={{ width: 0 }}
                                                    data-slick-index={3}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_1.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_2.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide"
                                                    id="slick-slide84"
                                                    role="tabpanel"
                                                    aria-hidden="true"
                                                    style={{ width: 0 }}
                                                    data-slick-index={4}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_3.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_4.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide"
                                                    id="slick-slide85"
                                                    role="tabpanel"
                                                    aria-hidden="true"
                                                    style={{ width: 0 }}
                                                    data-slick-index={5}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_5.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_6.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 0 }}
                                                    data-slick-index={6}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_1.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_2.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 0 }}
                                                    data-slick-index={7}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_3.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_4.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 0 }}
                                                    data-slick-index={8}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_5.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_6.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 0 }}
                                                    data-slick-index={9}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_1.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_2.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 0 }}
                                                    data-slick-index={10}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_3.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_4.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 0 }}
                                                    data-slick-index={11}
                                                >
                                                    <div>
                                                        <div
                                                            className="bestsellers_item discount"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_5.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="bestsellers_item"
                                                            style={{
                                                                width: "100%",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                <div className="bestsellers_image">
                                                                    <img alt='true' src={require('../assets/images/best_6.png')} />
                                                                </div>
                                                                <div className="bestsellers_content">
                                                                    <div className="bestsellers_category">
                                                                        <a tabIndex={-1} href="#">
                                                                            Headphones
                              </a>
                                                                    </div>
                                                                    <div className="bestsellers_name">
                                                                        <a tabIndex={-1} href="product.html">
                                                                            Xiaomi Redmi Note 4
                              </a>
                                                                    </div>
                                                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                        <i />
                                                                    </div>
                                                                    <div className="bestsellers_price discount">
                                                                        $225<span>$300</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bestsellers_fav active">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                            <ul className="bestsellers_marks">
                                                                <li className="bestsellers_mark bestsellers_discount">
                                                                    -25%
                          </li>
                                                                <li className="bestsellers_mark bestsellers_new">
                                                                    new
                          </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="slick-dots" role="tablist">
                                            <li className="slick-active" role="presentation">
                                                <button
                                                    tabIndex={0}
                                                    id="slick-slide-control80"
                                                    role="tab"
                                                    aria-selected="true"
                                                    aria-controls="slick-slide80"
                                                    aria-label="1 of 2"
                                                    type="button"
                                                >
                                                    1
                  </button>
                                            </li>
                                            <li role="presentation">
                                                <button
                                                    tabIndex={-1}
                                                    id="slick-slide-control81"
                                                    role="tab"
                                                    aria-controls="slick-slide83"
                                                    aria-label="2 of 2"
                                                    type="button"
                                                >
                                                    2
                  </button>
                                            </li>
                                        </ul>
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
export default BestSeller;
