
import React from 'react';



const newLetter = () => {
    return (

        <div className="newsletter">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="newsletter_container d-flex flex-lg-row flex-column align-items-lg-center align-items-center justify-content-lg-start justify-content-center">
                            <div className="newsletter_title_container">
                                <div className="newsletter_icon"><img src="./assets/images/send.png" alt /></div>
                                <div className="newsletter_title">Sign up for Newsletter</div>
                                <div className="newsletter_text">
                                    <p>...and receive %20 coupon for first shopping.</p>
                                </div>
                            </div>
                            <div className="newsletter_content clearfix">
                                <form action="#" className="newsletter_form">
                                    <input type="email" className="newsletter_input" required="required" placeholder="Enter your email address" />
                                    <button className="newsletter_button">Subscribe</button>
                                </form>
                                <div className="newsletter_unsubscribe_link"><a href="#">unsubscribe</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default newLetter;