import React, { Component } from 'react';

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
                                        <li className="active">Featured</li>
                                        <li>Audio &amp; Video</li>
                                        <li>Laptops &amp; Computers</li>
                                    </ul>
                                    <div className="tabs_line"><span /></div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-9" style={{ zIndex: 1 }}>
                                        {/* Product Panel */}
                                        <div className="product_panel panel active">
                                            <div className="arrivals_slider slider">
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_1.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Astro M2 Black</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount">-25%</li>
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_2.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Transcend T.Sonic</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button active">Add to
                            Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_3.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Xiaomi Band 2...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_4.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Rapoo T8 White</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_5.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Philips BT6900A</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_6.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Nokia 3310(2017)...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_7.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Rapoo 7100p Gray</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount">-25%</li>
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_8.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Canon EF</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_1.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Gembird SPK-103</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_2.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Canon IXUS 175...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_3.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_4.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_5.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_6.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_7.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_8.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="arrivals_slider_dots_cover" />
                                        </div>
                                        {/* Product Panel */}
                                        <div className="product_panel panel">
                                            <div className="arrivals_slider slider">
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_1.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount">-25%</li>
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_2.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button active">Add to
                            Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_3.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_4.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_5.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_6.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_7.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount">-25%</li>
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_8.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_1.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_2.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_3.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_4.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_5.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_6.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_7.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_8.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="arrivals_slider_dots_cover" />
                                        </div>
                                        {/* Product Panel */}
                                        <div className="product_panel panel">
                                            <div className="arrivals_slider slider">
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_1.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount">-25%</li>
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_2.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button active">Add to
                            Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_3.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_4.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_5.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_6.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_7.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount">-25%</li>
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_8.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_1.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_2.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_3.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_4.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_5.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_6.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_7.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$379</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Slider Item */}
                                                <div className="arrivals_slider_item">
                                                    <div className="border_active" />
                                                    <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                                                            <img src="./assets/images/new_8.jpg" alt /></div>
                                                        <div className="product_content">
                                                            <div className="product_price">$225</div>
                                                            <div className="product_name">
                                                                <div><a href="product.html">Huawei MediaPad...</a></div>
                                                            </div>
                                                            <div className="product_extras">
                                                                <div className="product_color">
                                                                    <input type="radio" defaultChecked name="product_color" style={{ background: '#b19c83' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#000000' }} />
                                                                    <input type="radio" name="product_color" style={{ background: '#999999' }} />
                                                                </div>
                                                                <button className="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div className="product_fav"><i className="fas fa-heart" /></div>
                                                        <ul className="product_marks">
                                                            <li className="product_mark product_discount" />
                                                            <li className="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="arrivals_slider_dots_cover" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="arrivals_single clearfix">
                                            <div className="d-flex flex-column align-items-center justify-content-center">
                                                <div className="arrivals_single_image"><img src="./assets/images/new_single.png" alt />
                                                </div>
                                                <div className="arrivals_single_content">
                                                    <div className="arrivals_single_category"><a href="#">Smartphones</a></div>
                                                    <div className="arrivals_single_name_container clearfix">
                                                        <div className="arrivals_single_name"><a href="#">LUNA Smartphone</a>
                                                        </div>
                                                        <div className="arrivals_single_price text-right">$379</div>
                                                    </div>
                                                    <div className="rating_r rating_r_4 arrivals_single_rating">
                                                        <i /><i /><i /><i /><i /></div>
                                                    <form action="#"><button className="arrivals_single_button">Add to
                        Cart</button></form>
                                                </div>
                                                <div className="arrivals_single_fav product_fav active"><i className="fas fa-heart" /></div>
                                                <ul className="arrivals_single_marks product_marks">
                                                    <li className="arrivals_single_mark product_mark product_new">new</li>
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