import React from 'react';
import '../assets/styles/main_styles.css'

const characteristics = () => {
    return (
        <div className="characteristics">
            <div className="container">
                <div className="row">
                    {/* Char. Item */}
                    <div className="col-lg-3 col-md-6 char_col">
                        <div className="char_item d-flex flex-row align-items-center justify-content-start">
                            <div className="char_icon">
                                <img  alt='true' src={require('../assets/images/char_1.png')} />
                            </div>
                            <div className="char_content">
                                <div className="char_title">Free Delivery</div>
                                <div className="char_subtitle">from $50</div>
                            </div>
                        </div>
                    </div>
                    {/* Char. Item */}
                    <div className="col-lg-3 col-md-6 char_col">
                        <div className="char_item d-flex flex-row align-items-center justify-content-start">
                            <div className="char_icon">
                                <img  alt='true' src={require('../assets/images/char_2.png')} />
                            </div>
                            <div className="char_content">
                                <div className="char_title">Free Delivery</div>
                                <div className="char_subtitle">from $50</div>
                            </div>
                        </div>
                    </div>
                    {/* Char. Item */}
                    <div className="col-lg-3 col-md-6 char_col">
                        <div className="char_item d-flex flex-row align-items-center justify-content-start">
                            <div className="char_icon">
                                <img  alt='true' src={require('../assets/images/char_3.png')} />
                            </div>
                            <div className="char_content">
                                <div className="char_title">Free Delivery</div>
                                <div className="char_subtitle">from $50</div>
                            </div>
                        </div>
                    </div>
                    {/* Char. Item */}
                    <div className="col-lg-3 col-md-6 char_col">
                        <div className="char_item d-flex flex-row align-items-center justify-content-start">
                            <div className="char_icon">
                                <img  alt='true' src={require('../assets/images/char_4.png')} />
                            </div>
                            <div className="char_content">
                                <div className="char_title">Free Delivery</div>
                                <div className="char_subtitle">from $50</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default characteristics;