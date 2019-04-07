
import React, { Component } from 'react'
import '../assets/styles/main_styles.css';
import '../assets/plugins/fontawesome-free-5.0.1/css/fontawesome-all.css';


 class Header extends Component {
  render() {
    return (
      <div>
          {/* <header className="header"> */}
        {/* Top Bar */}
        <div className="top_bar">
          <div className="container">
            <div className="row">
              <div className="col d-flex flex-row">
                <div className="top_bar_contact_item">
                  <div className="top_bar_icon">
                    <img alt='true' src={require('../assets/images/phone.png')} />
                  </div>
                  +38 068 005 3570
                </div>
                <div className="top_bar_contact_item">
                  <div className="top_bar_icon">
                    <img alt='true' src={require('../assets/images/mail.png')} />
                  </div>
                  <a href="mailto:fastsales@gmail.com">
                    fastsales@gmail.com
                  </a>
                </div>
                <div className="top_bar_content ml-auto">
                  <div className="top_bar_menu">
                    <ul className="standard_dropdown top_bar_dropdown">
                      <li>
                        <a href="#">
                          English<i className="fas fa-chevron-down" />
                        </a>
                        <ul>
                          <li>
                            <a href="#">Italian</a>
                          </li>
                          <li>
                            <a href="#">Spanish</a>
                          </li>
                          <li>
                            <a href="#">Japanese</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          $ US dollar<i className="fas fa-chevron-down" />
                        </a>
                        <ul>
                          <li>
                            <a href="#">EUR Euro</a>
                          </li>
                          <li>
                            <a href="#">GBP British Pound</a>
                          </li>
                          <li>
                            <a href="#">JPY Japanese Yen</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="top_bar_user">
                    <div className="user_icon">
                      <img alt='true' src={require('../assets/images/user.svg')}  />
                    </div>
                    <div>
                      <a href="#">Register</a>
                    </div>
                    <div>
                      <a href="#">Sign in</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header Main */}
        <div className="header_main">
          <div className="container">
            <div className="row">
              {/* Logo */}
              <div className="col-lg-2 col-sm-3 col-3 order-1">
                <div className="logo_container">
                  <div className="logo">
                    <a href="#">OneTech</a>
                  </div>
                </div>
              </div>
              {/* Search */}
              <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                <div className="header_search">
                  <div className="header_search_content">
                    <div className="header_search_form_container">
                      <form
                        className="header_search_form clearfix"
                        action="#"
                      >
                        <input
                          className="header_search_input"
                          required="required"
                          type="search"
                          placeholder="Search for products..."
                        />
                        <div className="custom_dropdown">
                          <div className="custom_dropdown_list">
                            <span className="custom_dropdown_placeholder clc">
                              All Categories
                            </span>{" "}
                            <i className="fas fa-chevron-down" />
                            <ul className="custom_list clc">
                              <li>
                                <a className="clc" href="#">
                                  All Categories
                                </a>
                              </li>
                              <li>
                                <a className="clc" href="#">
                                  Computers
                                </a>
                              </li>
                              <li>
                                <a className="clc" href="#">
                                  Laptops
                                </a>
                              </li>
                              <li>
                                <a className="clc" href="#">
                                  Cameras
                                </a>
                              </li>
                              <li>
                                <a className="clc" href="#">
                                  Hardware
                                </a>
                              </li>
                              <li>
                                <a className="clc" href="#">
                                  Smartphones
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <button
                          className="header_search_button trans_300"
                          type="submit"
                          value="Submit"
                        >
                          <img alt='true' src={require('../assets/images/search.png')} />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* Wishlist */}
              <div className="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
                <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                  <div className="wishlist d-flex flex-row align-items-center justify-content-end">
                    <div className="wishlist_icon">
                      <img src={require('../assets/images/heart.png')} alt="true" />
                    </div>
                    <div className="wishlist_content">
                      <div className="wishlist_text">
                        <a href="#">Wishlist</a>
                      </div>
                      <div className="wishlist_count">115</div>
                    </div>
                  </div>
                  {/* Cart */}
                  <div className="cart">
                    <div className="cart_container d-flex flex-row align-items-center justify-content-end">
                      <div className="cart_icon">
                        <img alt='true' src={require('../assets/images/cart.png')} />
                        <div className="cart_count">
                          <span>10</span>
                        </div>
                      </div>
                      <div className="cart_content">
                        <div className="cart_text">
                          <a href="#">Cart</a>
                        </div>
                        <div className="cart_price">$85</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <header/> */}
      </div>
    )
  }
}
export default Header;

