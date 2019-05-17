import React, { Component } from 'react';
import FeaturedItemSlider from './feature_item_slider';
class feature extends Component {



    render() {
        return (
            <div className="featured">
                <div className="tabbed_container">
                    <div className="tabs">
                        <ul className="clearfix">
                            <li className="active">Featured</li>
                            <li>On Sale</li>
                            <li>Best Rated</li>
                        </ul>
                        <div className="tabs_line"><span /></div>
                    </div>
                    {/* Product Panel */}
                    <div className="product_panel panel active">
                        <div className="featured_slider slider">
                            {/* Slider Item */}
                            <FeaturedItemSlider />
                        </div>
                        <div className="featured_slider_dots_cover" />
                    </div>
                    {/* Product Panel */}
                    <div className="product_panel panel">
                        <div className="featured_slider slider">
                            {/* Slider Item */}
                            <FeaturedItemSlider />
                            <FeaturedItemSlider />
                        </div>
                        <div className="featured_slider_dots_cover" />
                    </div>
                    {/* Product Panel */}
                    <div className="product_panel panel">
                        <div className="featured_slider slider">
                            {/* Slider Item */}
                            <FeaturedItemSlider />
                            <FeaturedItemSlider />
                            <FeaturedItemSlider />
                            <FeaturedItemSlider />
                        </div>
                        <div className="featured_slider_dots_cover" />
                    </div>
                </div>
            </div>

        );
    }
}

export default feature;