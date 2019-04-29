
import React from 'react';

const banner = () => {
    return (

        <div className="adverts">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 advert_col">
                        {/* Advert Item */}
                        <div className="advert d-flex flex-row align-items-center justify-content-start">
                            <div className="advert_content">
                                <div className="advert_title"><a href="#">Trends 2018</a></div>
                                <div className="advert_text">Lorem ipsum dolor sit amet, consectetur adipiscing Donec et.
            </div>
                            </div>
                            <div className="ml-auto">
                                <div className="advert_image"><img src="./assets/images/adv_1.png" alt /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 advert_col">
                        {/* Advert Item */}
                        <div className="advert d-flex flex-row align-items-center justify-content-start">
                            <div className="advert_content">
                                <div className="advert_subtitle">Trends 2018</div>
                                <div className="advert_title_2"><a href="#">Sale -45%</a></div>
                                <div className="advert_text">Lorem ipsum dolor sit amet, consectetur.</div>
                            </div>
                            <div className="ml-auto">
                                <div className="advert_image"><img src="./assets/images/adv_2.png" alt /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 advert_col">
                        {/* Advert Item */}
                        <div className="advert d-flex flex-row align-items-center justify-content-start">
                            <div className="advert_content">
                                <div className="advert_title"><a href="#">Trends 2018</a></div>
                                <div className="advert_text">Lorem ipsum dolor sit amet, consectetur.</div>
                            </div>
                            <div className="ml-auto">
                                <div className="advert_image"><img src="./assets/images/adv_3.png" alt /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default banner;