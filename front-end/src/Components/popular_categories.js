
import React, { Component } from 'react';
import '../assets/styles/main_styles.css';
import '../assets/plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import '../assets/plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import '../assets/plugins/OwlCarousel2-2.2.1/animate.css';
import '../assets/plugins/slick-1.8.0/slick.css';
import '../assets/styles/responsive.css';
import '../assets/plugins/fontawesome-free-5.0.1/css/fontawesome-all.css';
import '../assets/plugins/jquery-ui-1.12.1.custom/jquery-ui.css';

class Categories extends Component {
    render() {
        return (
            <div className="popular_categories">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="popular_categories_content">
                                <div className="popular_categories_title">
                                    Popular Categories
          </div>
                                <div className="popular_categories_slider_nav">
                                    <div className="popular_categories_prev popular_categories_nav">
                                        <i className="fas fa-angle-left ml-auto" />
                                    </div>
                                    <div className="popular_categories_next popular_categories_nav">
                                        <i className="fas fa-angle-right ml-auto" />
                                    </div>
                                </div>
                                <div className="popular_categories_link">
                                    <a href="#">full catalog</a>
                                </div>
                            </div>
                        </div>
                        {/* Popular Categories Slider */}
                        <div className="col-lg-9">
                            <div className="popular_categories_slider_container">
                                <div className="owl-carousel owl-theme popular_categories_slider owl-loaded owl-drag">
                                    {/* Popular Categories Item */}
                                    {/* Popular Categories Item */}
                                    {/* Popular Categories Item */}
                                    {/* Popular Categories Item */}
                                    {/* Popular Categories Item */}
                                    <div className="owl-stage-outer">
                                        <div
                                            className="owl-stage"
                                            style={{
                                                transition: "all",
                                                width: 2543,
                                                transform: "translate3d(-847px, 0px, 0px)"
                                            }}
                                        >
                                            <div
                                                className="owl-item cloned"
                                                style={{ width: "169.5px" }}
                                            >
                                                <div className="owl-item">
                                                    <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                                        <div className="popular_category_image">
                                                            <img alt='true' src={require('../assets/images/popular_1.png')} />
                                                        </div>
                                                        <div className="popular_category_text">
                                                            Smartphones &amp; Tablets
                      </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item cloned"
                                                style={{ width: "169.5px" }}
                                            >
                                                <div className="owl-item">
                                                    <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                                        <div className="popular_category_image">
                                                            <img alt='true' src={require('../assets/images/popular_2.png')} />
                                                        </div>
                                                        <div className="popular_category_text">
                                                            Computers &amp; Laptops
                      </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item cloned"
                                                style={{ width: "169.5px" }}
                                            >
                                                <div className="owl-item">
                                                    <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                                        <div className="popular_category_image">
                                                            <img alt='true' src={require('../assets/images/popular_3.png')} />
                                                        </div>
                                                        <div className="popular_category_text">
                                                            Gadgets
                      </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item cloned"
                                                style={{ width: "169.5px" }}
                                            >
                                                <div className="owl-item">
                                                    <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                                        <div className="popular_category_image">
                                                            <img alt='true' src={require('../assets/images/popular_4.png')} />
                                                        </div>
                                                        <div className="popular_category_text">
                                                            Video Games &amp; Consoles
                      </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item cloned"
                                                style={{ width: "169.5px" }}
                                            >
                                                <div className="owl-item">
                                                    <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                                        <div className="popular_category_image">
                                                            <img alt='true' src={require('../assets/images/popular_5.png')} />
                                                        </div>
                                                        <div className="popular_category_text">
                                                            Accessories
                      </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item active"
                                                style={{ width: "169.5px" }}
                                            >
                                                <div className="owl-item">
                                                    <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                                        <div className="popular_category_image">
                                                            <img alt='true' src={require('../assets/images/popular_1.png')} />
                                                        </div>
                                                        <div className="popular_category_text">
                                                            Smartphones &amp; Tablets
                      </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item active"
                                                style={{ width: "169.5px" }}
                                            >
                                                <div className="owl-item">
                                                    <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                                        <div className="popular_category_image">
                                                            <img alt='true' src={require('../assets/images/popular_2.png')} />
                                                        </div>
                                                        <div className="popular_category_text">
                                                            Computers &amp; Laptops
                      </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item active"
                                                style={{ width: "169.5px" }}
                                            >
                                                <div className="owl-item">
                                                    <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                                        <div className="popular_category_image">
                                                            <img alt='true' src={require('../assets/images/popular_3.png')} />
                                                        </div>
                                                        <div className="popular_category_text">
                                                            Gadgets
                      </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item active"
                                                style={{ width: "169.5px" }}
                                            >
                                                <div className="owl-item">
                                                    <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                                        <div className="popular_category_image">
                                                            <img alt='true' src={require('../assets/images/popular_4.png')} />
                                                        </div>
                                                        <div className="popular_category_text">
                                                            Video Games &amp; Consoles
                      </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item active"
                                                style={{ width: "169.5px" }}
                                            >
                                                <div className="owl-item">
                                                    <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                                        <div className="popular_category_image">
                                                            <img alt='true' src={require('../assets/images/popular_5.png')} />
                                                        </div>
                                                        <div className="popular_category_text">
                                                            Accessories
                      </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item cloned"
                                                style={{ width: "169.5px" }}
                                            >
                                                <div className="owl-item">
                                                    <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                                        <div className="popular_category_image">
                                                            <img alt='true' src={require('../assets/images/popular_1.png')} />
                                                        </div>
                                                        <div className="popular_category_text">
                                                            Smartphones &amp; Tablets
                      </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item cloned"
                                                style={{ width: "169.5px" }}
                                            >
                                                <div className="owl-item">
                                                    <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                                        <div className="popular_category_image">
                                                            <img alt='true' src={require('../assets/images/popular_2.png')} />
                                                        </div>
                                                        <div className="popular_category_text">
                                                            Computers &amp; Laptops
                      </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item cloned"
                                                style={{ width: "169.5px" }}
                                            >
                                                <div className="owl-item">
                                                    <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                                        <div className="popular_category_image">
                                                            <img alt='true' src={require('../assets/images/popular_3.png')} />
                                                        </div>
                                                        <div className="popular_category_text">
                                                            Gadgets
                      </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item cloned"
                                                style={{ width: "169.5px" }}
                                            >
                                                <div className="owl-item">
                                                    <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                                        <div className="popular_category_image">
                                                            <img alt='true' src={require('../assets/images/popular_4.png')} />
                                                        </div>
                                                        <div className="popular_category_text">
                                                            Video Games &amp; Consoles
                      </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item cloned"
                                                style={{ width: "169.5px" }}
                                            >
                                                <div className="owl-item">
                                                    <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                                        <div className="popular_category_image">
                                                            <img alt='true' src={require('../assets/images/popular_5.png')} />
                                                        </div>
                                                        <div className="popular_category_text">
                                                            Accessories
                      </div>
                                                    </div>
                                                </div>
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
export default Categories;