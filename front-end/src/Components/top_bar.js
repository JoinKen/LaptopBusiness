import React from 'react';
import '../assets/styles/main_styles.css';
import '../assets/plugins/fontawesome-free-5.0.1/css/fontawesome-all.css';

const Top_bar =() =>{
    return (
     <div>
      {/* Main Navigation */}
      <nav className="main_nav">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="main_nav_content d-flex flex-row">
                {/* Categories Menu */}
                <div className="cat_menu_container">
                  <div className="cat_menu_title d-flex flex-row align-items-center justify-content-start">
                    <div className="cat_burger">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="cat_menu_text">categories</div>
                  </div>
                  <ul className="cat_menu">
                    <li>
                      <a href="#">
                        Computers &amp; Laptops{" "}
                        <i className="fas fa-chevron-right ml-auto" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Cameras &amp; Photos<i className="fas fa-chevron-right" />
                      </a>
                    </li>
                    <li className="hassubs">
                      <a href="#">
                        Hardware<i className="fas fa-chevron-right" />
                      </a>
                      <ul>
                        <li className="hassubs">
                          <a href="#">
                            Menu Item<i className="fas fa-chevron-right" />
                          </a>
                          <ul>
                            <li>
                              <a href="#">
                                Menu Item<i className="fas fa-chevron-right" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Menu Item<i className="fas fa-chevron-right" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Menu Item<i className="fas fa-chevron-right" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Menu Item<i className="fas fa-chevron-right" />
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Menu Item<i className="fas fa-chevron-right" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Menu Item<i className="fas fa-chevron-right" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Menu Item<i className="fas fa-chevron-right" />
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        Smartphones &amp; Tablets<i className="fas fa-chevron-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        TV &amp; Audio<i className="fas fa-chevron-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Gadgets<i className="fas fa-chevron-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Car Electronics<i className="fas fa-chevron-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Video Games &amp; Consoles<i className="fas fa-chevron-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Accessories<i className="fas fa-chevron-right" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Main Nav Menu */}
                <div className="main_nav_menu ml-auto">
                  <ul className="standard_dropdown main_nav_dropdown">
                    <li>
                      <a href="#">
                        Home<i className="fas fa-chevron-down" />
                      </a>
                    </li>
                    <li className="hassubs">
                      <a href="#">
                        Super Deals<i className="fas fa-chevron-down" />
                      </a>
                      <ul>
                        <li>
                          <a href="#">
                            Menu Item<i className="fas fa-chevron-down" />
                          </a>
                          <ul>
                            <li>
                              <a href="#">
                                Menu Item<i className="fas fa-chevron-down" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Menu Item<i className="fas fa-chevron-down" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Menu Item<i className="fas fa-chevron-down" />
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Menu Item<i className="fas fa-chevron-down" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Menu Item<i className="fas fa-chevron-down" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Menu Item<i className="fas fa-chevron-down" />
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="hassubs">
                      <a href="#">
                        Featured Brands<i className="fas fa-chevron-down" />
                      </a>
                      <ul>
                        <li>
                          <a href="#">
                            Menu Item<i className="fas fa-chevron-down" />
                          </a>
                          <ul>
                            <li>
                              <a href="#">
                                Menu Item<i className="fas fa-chevron-down" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Menu Item<i className="fas fa-chevron-down" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Menu Item<i className="fas fa-chevron-down" />
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Menu Item<i className="fas fa-chevron-down" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Menu Item<i className="fas fa-chevron-down" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Menu Item<i className="fas fa-chevron-down" />
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="hassubs">
                      <a href="#">
                        Pages<i className="fas fa-chevron-down" />
                      </a>
                      <ul>
                        <li>
                          <a href="shop.html">
                            Shop<i className="fas fa-chevron-down" />
                          </a>
                        </li>
                        <li>
                          <a href="product.html">
                            Product<i className="fas fa-chevron-down" />
                          </a>
                        </li>
                        <li>
                          <a href="blog.html">
                            Blog<i className="fas fa-chevron-down" />
                          </a>
                        </li>
                        <li>
                          <a href="blog_single.html">
                            Blog Post<i className="fas fa-chevron-down" />
                          </a>
                        </li>
                        <li>
                          <a href="regular.html">
                            Regular Post<i className="fas fa-chevron-down" />
                          </a>
                        </li>
                        <li>
                          <a href="cart.html">
                            Cart<i className="fas fa-chevron-down" />
                          </a>
                        </li>
                        <li>
                          <a href="contact.html">
                            Contact<i className="fas fa-chevron-down" />
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog.html">
                        Blog<i className="fas fa-chevron-down" />
                      </a>
                    </li>
                    <li>
                      <a href="contact.html">
                        Contact<i className="fas fa-chevron-down" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Menu Trigger */}
                <div className="menu_trigger_container ml-auto">
                  <div className="menu_trigger d-flex flex-row align-items-center justify-content-end">
                    <div className="menu_burger">
                      <div className="menu_trigger_text">menu</div>
                      <div className="cat_burger menu_burger_inner">
                        <span />
                        <span />
                        <span />
                      </div>
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
                    <input
                      className="page_menu_search_input"
                      required="required"
                      type="search"
                      placeholder="Search for products..."
                    />
                  </form>
                </div>
                <ul className="page_menu_nav">
                  <li className="page_menu_item has-children">
                    <a href="#">
                      Language<i className="fa fa-angle-down" />
                    </a>
                    <ul className="page_menu_selection">
                      <li>
                        <a href="#">
                          English<i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Italian<i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Spanish<i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Japanese<i className="fa fa-angle-down" />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="page_menu_item has-children">
                    <a href="#">
                      Currency<i className="fa fa-angle-down" />
                    </a>
                    <ul className="page_menu_selection">
                      <li>
                        <a href="#">
                          US Dollar<i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          EUR Euro<i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          GBP British Pound<i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          JPY Japanese Yen<i className="fa fa-angle-down" />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="page_menu_item">
                    <a href="#">
                      Home<i className="fa fa-angle-down" />
                    </a>
                  </li>
                  <li className="page_menu_item has-children">
                    <a href="#">
                      Super Deals<i className="fa fa-angle-down" />
                    </a>
                    <ul className="page_menu_selection">
                      <li>
                        <a href="#">
                          Super Deals<i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li className="page_menu_item has-children">
                        <a href="#">
                          Menu Item<i className="fa fa-angle-down" />
                        </a>
                        <ul className="page_menu_selection">
                          <li>
                            <a href="#">
                              Menu Item<i className="fa fa-angle-down" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Menu Item<i className="fa fa-angle-down" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Menu Item<i className="fa fa-angle-down" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Menu Item<i className="fa fa-angle-down" />
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          Menu Item<i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Menu Item<i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Menu Item<i className="fa fa-angle-down" />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="page_menu_item has-children">
                    <a href="#">
                      Featured Brands<i className="fa fa-angle-down" />
                    </a>
                    <ul className="page_menu_selection">
                      <li>
                        <a href="#">
                          Featured Brands<i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Menu Item<i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Menu Item<i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Menu Item<i className="fa fa-angle-down" />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="page_menu_item has-children">
                    <a href="#">
                      Trending Styles<i className="fa fa-angle-down" />
                    </a>
                    <ul className="page_menu_selection">
                      <li>
                        <a href="#">
                          Trending Styles<i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Menu Item<i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Menu Item<i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Menu Item<i className="fa fa-angle-down" />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="page_menu_item">
                    <a href="blog.html">
                      blog<i className="fa fa-angle-down" />
                    </a>
                  </li>
                  <li className="page_menu_item">
                    <a href="contact.html">
                      contact<i className="fa fa-angle-down" />
                    </a>
                  </li>
                </ul>
                <div className="menu_contact">
                  <div className="menu_contact_item">
                    <div className="menu_contact_icon">
                      <img alt='true' src={require('../assets/images/phone_white.png')} />
                    </div>
                    +38 068 005 3570
                  </div>
                  <div className="menu_contact_item">
                    <div className="menu_contact_icon">
                      <img alt='true' src={require('../assets/images/mail_white.png')} />
                    </div>
                    <a href="mailto:fastsales@gmail.com">
                      fastsales@gmail.com
                    </a>
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
export default Top_bar ;

