
import React, { Component } from 'react';
import '../assets/styles/main_styles.css';
import '../assets/plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import '../assets/plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import '../assets/plugins/OwlCarousel2-2.2.1/animate.css';
import '../assets/plugins/slick-1.8.0/slick.css';
import '../assets/styles/responsive.css';
import '../assets/plugins/fontawesome-free-5.0.1/css/fontawesome-all.css';
import '../assets/styles/bootstrap4/bootstrap.min.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 footer_col">
                            <div className="footer_column footer_contact">
                                <div className="logo_container">
                                    <div className="logo">
                                        <a href="#">OneTech</a>
                                    </div>
                                </div>
                                <div className="footer_title">
                                    Got Question? Call Us 24/7
                </div>
                                <div className="footer_phone">+38 068 005 3570</div>
                                <div className="footer_contact_text">
                                    <p>17 Princess Road, London</p>
                                    <p>Grester London NW18JR, UK</p>
                                </div>
                                <div className="footer_social">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-youtube" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-google" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-vimeo-v" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 offset-lg-2">
                            <div className="footer_column">
                                <div className="footer_title">Find it Fast</div>
                                <ul className="footer_list">
                                    <li>
                                        <a href="#">Computers &amp; Laptops</a>
                                    </li>
                                    <li>
                                        <a href="#">Cameras &amp; Photos</a>
                                    </li>
                                    <li>
                                        <a href="#">Hardware</a>
                                    </li>
                                    <li>
                                        <a href="#">Smartphones &amp; Tablets</a>
                                    </li>
                                    <li>
                                        <a href="#">TV &amp; Audio</a>
                                    </li>
                                </ul>
                                <div className="footer_subtitle">Gadgets</div>
                                <ul className="footer_list">
                                    <li>
                                        <a href="#">Car Electronics</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footer_column">
                                <ul className="footer_list footer_list_2">
                                    <li>
                                        <a href="#">Video Games &amp; Consoles</a>
                                    </li>
                                    <li>
                                        <a href="#">Accessories</a>
                                    </li>
                                    <li>
                                        <a href="#">Cameras &amp; Photos</a>
                                    </li>
                                    <li>
                                        <a href="#">Hardware</a>
                                    </li>
                                    <li>
                                        <a href="#">Computers &amp; Laptops</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footer_column">
                                <div className="footer_title">Customer Care</div>
                                <ul className="footer_list">
                                    <li>
                                        <a href="#">My Account</a>
                                    </li>
                                    <li>
                                        <a href="#">Order Tracking</a>
                                    </li>
                                    <li>
                                        <a href="#">Wish List</a>
                                    </li>
                                    <li>
                                        <a href="#">Customer Services</a>
                                    </li>
                                    <li>
                                        <a href="#">Returns / Exchange</a>
                                    </li>
                                    <li>
                                        <a href="#">FAQs</a>
                                    </li>
                                    <li>
                                        <a href="#">Product Support</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        )
    }
}
export default Footer 