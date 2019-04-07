
import React from 'react';
import '../assets/styles/main_styles.css';
import '../assets/plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import '../assets/plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import '../assets/plugins/OwlCarousel2-2.2.1/animate.css';
import '../assets/plugins/slick-1.8.0/slick.css';
import '../assets/styles/responsive.css';
import '../assets/plugins/fontawesome-free-5.0.1/css/fontawesome-all.css';
import '../assets/styles/bootstrap4/bootstrap.min.css';


const newLetter = () => {
    return (
        <div className="newsletter">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="newsletter_container d-flex flex-lg-row flex-column align-items-lg-center align-items-center justify-content-lg-start justify-content-center">
                            <div className="newsletter_title_container">
                                <div className="newsletter_icon">
                                    <img alt='true' src={require('../assets/images/send.png')} />
                                </div>
                                <div className="newsletter_title">
                                    Sign up for Newsletter
            </div>
                                <div className="newsletter_text">
                                    <p>...and receive %20 coupon for first shopping.</p>
                                </div>
                            </div>
                            <div className="newsletter_content clearfix">
                                <form className="newsletter_form" action="#">
                                    <input
                                        className="newsletter_input"
                                        required="required"
                                        type="email"
                                        placeholder="Enter your email address"
                                    />
                                    <button className="newsletter_button">Subscribe</button>
                                </form>
                                <div className="newsletter_unsubscribe_link">
                                    <a href="#">unsubscribe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default newLetter;