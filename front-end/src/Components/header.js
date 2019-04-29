
import React, { Component } from 'react'



class Header extends Component {
  render() {
    return (

      <header className="header">
        {/* Top Bar */}
        <div className="top_bar">
          <div className="container">
            <div className="row">
              <div className="col d-flex flex-row">
                <div className="top_bar_contact_item">
                  <div className="top_bar_icon"><img src="./assets/images/phone.png" alt /></div>+84 983 982 933
          </div>
                <div className="top_bar_contact_item">
                  <div className="top_bar_icon"><img src="./assets/images/mail.png" alt /></div><a href="mailto:fastsales@gmail.com">itftpis@gmail.com</a>
                </div>
                <div className="top_bar_content ml-auto">
                  <div className="top_bar_menu">
                    <ul className="standard_dropdown top_bar_dropdown">
                      <li>
                        <a href="#">English<i className="fas fa-chevron-down" /></a>
                        <ul>
                          <li><a href="#">Italian</a></li>
                          <li><a href="#">Spanish</a></li>
                          <li><a href="#">Japanese</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">$ US dollar<i className="fas fa-chevron-down" /></a>
                        <ul>
                          <li><a href="#">EUR Euro</a></li>
                          <li><a href="#">Vietnam đồng</a></li>
                          <li><a href="#">JPY Japanese Yen</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="top_bar_user">
                    <div className="user_icon"><img src="./assets/images/user.svg" alt /></div>
                    <div><a href="#">Register</a></div>
                    <div><a href="#">Sign in</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header Main */}
        <div className="header_main nopadding">
          <div className="container">
            <div className="row">
              {/* Logo */}
              <div className="col-lg-2 col-sm-3 col-3 order-1">
                <div className="logo_container">
                  <div className="logo"><a href="#">OneTech</a></div>
                </div>
              </div>
              {/* Search */}
              <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                <div className="header_search">
                  <div className="header_search_content">
                    <div className="header_search_form_container">
                      <form action="#" className="header_search_form clearfix">
                        <input type="search" required="required" className="header_search_input" placeholder="Search for products..." />
                        <div className="custom_dropdown">
                          <div className="custom_dropdown_list">
                            <span className="custom_dropdown_placeholder clc">All Categories</span>
                            <i className="fas fa-chevron-down" />
                            <ul className="custom_list clc">
                              <li><a className="clc" href="#">All Categories</a></li>
                              <li><a className="clc" href="#">Computers</a></li>
                              <li><a className="clc" href="#">Laptops</a></li>
                              <li><a className="clc" href="#">Cameras</a></li>
                              <li><a className="clc" href="#">Hardware</a></li>
                              <li><a className="clc" href="#">Smartphones</a></li>
                            </ul>
                          </div>
                        </div>
                        <button type="submit" className="header_search_button trans_300" value="Submit"><img src="./assets/images/search.png" alt /></button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* Wishlist */}
              <div className="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
                <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                  <div className="wishlist d-flex flex-row align-items-center justify-content-end">
                    <div className="wishlist_icon"><img src="./assets/images/heart.png" alt /></div>
                    <div className="wishlist_content">
                      <div className="wishlist_text"><a href="#">Wishlist</a></div>
                      <div className="wishlist_count">115</div>
                    </div>
                  </div>
                  {/* Cart */}
                  <div className="cart">
                    <div className="cart_container d-flex flex-row align-items-center justify-content-end">
                      <div className="cart_icon">
                        <img src="./assets/images/cart.png" alt />
                        <div className="cart_count"><span>10</span></div>
                      </div>
                      <div className="cart_content">
                        <div className="cart_text"><a href="#">Cart</a></div>
                        <div className="cart_price">$85</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main Navigation */}
        <nav className="main_nav">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="main_nav_content d-flex flex-row">
                  {/* Categories Menu */}
                  <div className="cat_menu_container">
                    <div className="cat_menu_title d-flex flex-row align-items-center justify-content-start">
                      <div className="cat_burger"><span /><span /><span /></div>
                      <div className="cat_menu_text">categories</div>
                    </div>
                    <ul className="cat_menu">
                      <li><a href="#">Laptop desk <i className="fas fa-chevron-right ml-auto" /></a>
                      </li>
                      <li><a href="#">Gaming<i className="fas fa-chevron-right" /></a></li>
                      <li className="hassubs">
                        <a href="#">gaming 1<i className="fas fa-chevron-right" /></a>
                        <ul>
                          <li className="hassubs">
                            <a href="#">Menu Item<i className="fas fa-chevron-right" /></a>
                            <ul>
                              <li><a href="#">Menu Item<i className="fas fa-chevron-right" /></a></li>
                              <li><a href="#">Menu Item<i className="fas fa-chevron-right" /></a></li>
                              <li><a href="#">Menu Item<i className="fas fa-chevron-right" /></a></li>
                              <li><a href="#">Menu Item<i className="fas fa-chevron-right" /></a></li>
                            </ul>
                          </li>
                          <li><a href="#">Menu Item<i className="fas fa-chevron-right" /></a></li>
                          <li><a href="#">Menu Item<i className="fas fa-chevron-right" /></a></li>
                          <li><a href="#">Menu Item<i className="fas fa-chevron-right" /></a></li>
                        </ul>
                      </li>
                      <li><a href="#">Laptop best<i className="fas fa-chevron-right" /></a>
                      </li>
                      <li><a href="#">popular<i className="fas fa-chevron-right" /></a></li>
                      <li><a href="#">Gift<i className="fas fa-chevron-right" /></a></li>
                      <li><a href="#">Video Games &amp; Consoles<i className="fas fa-chevron-right" /></a>
                      </li>
                      <li><a href="#">Items<i className="fas fa-chevron-right" /></a></li>
                    </ul>
                  </div>
                  {/* Main Nav Menu */}
                  <div className="main_nav_menu ml-auto">
                    <ul className="standard_dropdown main_nav_dropdown">
                      <li><a href="#">Home<i className="fas fa-chevron-down" /></a></li>
                      <li className="hassubs">
                        <a href="#">Super Deals<i className="fas fa-chevron-down" /></a>
                        <ul>
                          <li>
                            <a href="#">Menu Item<i className="fas fa-chevron-down" /></a>
                            <ul>
                              <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a>
                              </li>
                              <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a>
                              </li>
                              <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a>
                              </li>
                            </ul>
                          </li>
                          <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a></li>
                          <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a></li>
                          <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a></li>
                        </ul>
                      </li>
                      <li className="hassubs">
                        <a href="#">Featured Brands<i className="fas fa-chevron-down" /></a>
                        <ul>
                          <li>
                            <a href="#">Menu Item<i className="fas fa-chevron-down" /></a>
                            <ul>
                              <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a>
                              </li>
                              <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a>
                              </li>
                              <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a>
                              </li>
                            </ul>
                          </li>
                          <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a></li>
                          <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a></li>
                          <li><a href="#">Menu Item<i className="fas fa-chevron-down" /></a></li>
                        </ul>
                      </li>
                      <li className="hassubs">
                        <a href="#">Pages<i className="fas fa-chevron-down" /></a>
                        <ul>
                          <li><a href="shop.html">Shop<i className="fas fa-chevron-down" /></a></li>
                          <li><a href="product.html">Product<i className="fas fa-chevron-down" /></a></li>
                          <li><a href="blog.html">Blog<i className="fas fa-chevron-down" /></a></li>
                          <li><a href="blog_single.html">Blog Post<i className="fas fa-chevron-down" /></a></li>
                          <li><a href="regular.html">Regular Post<i className="fas fa-chevron-down" /></a></li>
                          <li><a href="cart.html">Cart<i className="fas fa-chevron-down" /></a></li>
                          <li><a href="contact.html">Contact<i className="fas fa-chevron-down" /></a></li>
                        </ul>
                      </li>
                      <li><a href="blog.html">Blog<i className="fas fa-chevron-down" /></a></li>
                      <li><a href="contact.html">Contact<i className="fas fa-chevron-down" /></a></li>
                    </ul>
                  </div>
                  {/* Menu Trigger */}
                  <div className="menu_trigger_container ml-auto">
                    <div className="menu_trigger d-flex flex-row align-items-center justify-content-end">
                      <div className="menu_burger">
                        <div className="menu_trigger_text">menu</div>
                        <div className="cat_burger menu_burger_inner">
                          <span /><span /><span /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Menu */}
        <div className="page_menu">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page_menu_content">
                  <div className="page_menu_search">
                    <form action="#">
                      <input type="search" required="required" className="page_menu_search_input" placeholder="Search for products..." />
                    </form>
                  </div>
                  <ul className="page_menu_nav">
                    <li className="page_menu_item has-children">
                      <a href="#">Language<i className="fa fa-angle-down" /></a>
                      <ul className="page_menu_selection">
                        <li><a href="#">English<i className="fa fa-angle-down" /></a></li>
                        <li><a href="#">Italian<i className="fa fa-angle-down" /></a></li>
                        <li><a href="#">Spanish<i className="fa fa-angle-down" /></a></li>
                        <li><a href="#">Japanese<i className="fa fa-angle-down" /></a></li>
                      </ul>
                    </li>
                    <li className="page_menu_item has-children">
                      <a href="#">Currency<i className="fa fa-angle-down" /></a>
                      <ul className="page_menu_selection">
                        <li><a href="#">US Dollar<i className="fa fa-angle-down" /></a></li>
                        <li><a href="#">EUR Euro<i className="fa fa-angle-down" /></a></li>
                        <li><a href="#">GBP British Pound<i className="fa fa-angle-down" /></a></li>
                        <li><a href="#">JPY Japanese Yen<i className="fa fa-angle-down" /></a></li>
                      </ul>
                    </li>
                    <li className="page_menu_item">
                      <a href="#">Home<i className="fa fa-angle-down" /></a>
                    </li>
                    <li className="page_menu_item has-children">
                      <a href="#">Super Deals<i className="fa fa-angle-down" /></a>
                      <ul className="page_menu_selection">
                        <li><a href="#">Super Deals<i className="fa fa-angle-down" /></a></li>
                        <li className="page_menu_item has-children">
                          <a href="#">Menu Item<i className="fa fa-angle-down" /></a>
                          <ul className="page_menu_selection">
                            <li><a href="#">Menu Item<i className="fa fa-angle-down" /></a></li>
                            <li><a href="#">Menu Item<i className="fa fa-angle-down" /></a></li>
                            <li><a href="#">Menu Item<i className="fa fa-angle-down" /></a></li>
                            <li><a href="#">Menu Item<i className="fa fa-angle-down" /></a></li>
                          </ul>
                        </li>
                        <li><a href="#">Menu Item<i className="fa fa-angle-down" /></a></li>
                        <li><a href="#">Menu Item<i className="fa fa-angle-down" /></a></li>
                        <li><a href="#">Menu Item<i className="fa fa-angle-down" /></a></li>
                      </ul>
                    </li>
                    <li className="page_menu_item has-children">
                      <a href="#">Featured Brands<i className="fa fa-angle-down" /></a>
                      <ul className="page_menu_selection">
                        <li><a href="#">Featured Brands<i className="fa fa-angle-down" /></a></li>
                        <li><a href="#">Menu Item<i className="fa fa-angle-down" /></a></li>
                        <li><a href="#">Menu Item<i className="fa fa-angle-down" /></a></li>
                        <li><a href="#">Menu Item<i className="fa fa-angle-down" /></a></li>
                      </ul>
                    </li>
                    <li className="page_menu_item has-children">
                      <a href="#">Trending Styles<i className="fa fa-angle-down" /></a>
                      <ul className="page_menu_selection">
                        <li><a href="#">Trending Styles<i className="fa fa-angle-down" /></a></li>
                        <li><a href="#">Menu Item<i className="fa fa-angle-down" /></a></li>
                        <li><a href="#">Menu Item<i className="fa fa-angle-down" /></a></li>
                        <li><a href="#">Menu Item<i className="fa fa-angle-down" /></a></li>
                      </ul>
                    </li>
                    <li className="page_menu_item"><a href="blog.html">blog<i className="fa fa-angle-down" /></a></li>
                    <li className="page_menu_item"><a href="contact.html">contact<i className="fa fa-angle-down" /></a></li>
                  </ul>
                  <div className="menu_contact">
                    <div className="menu_contact_item">
                      <div className="menu_contact_icon"><img src="./assets/images/phone_white.png" alt /></div>
                      +38 068 005 3570
              </div>
                    <div className="menu_contact_item">
                      <div className="menu_contact_icon"><img src="./assets/images/mail_white.png" alt /></div><a href="mailto:fastsales@gmail.com">fastsales@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

    )
  }
}
export default Header;

