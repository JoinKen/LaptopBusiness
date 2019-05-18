
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navigation1 extends Component {
   render() {
      return (
         <header className="header">
            <nav className="main_nav">
               <div className="container">
                  <div className="row">
                     <div className="col">
                        <div className="main_nav_content d-flex flex-row">
                           <div className="cat_menu_container">
                              <div
                                 className="cat_menu_title d-flex flex-row align-items-center justify-content-start">
                                 <div className="cat_burger"><span></span><span></span><span></span></div>
                                 <div className="cat_menu_text">categories</div>
                              </div>
                              {/* <ul class="cat_menu">
                                 <li><a href="#">Computers & Laptops <i
                                    class="fas fa-chevron-right ml-auto"></i></a></li>
                                 <li><a href="#">Cameras & Photos<i class="fas fa-chevron-right"></i></a></li>
                                 <li class="hassubs">
                                    <a href="#">Hardware<i class="fas fa-chevron-right"></i></a>
                                    <ul>
                                       <li class="hassubs">
                                          <a href="#">Menu Item<i class="fas fa-chevron-right"></i></a>
                                          <ul>
                                             <li><a href="#">Menu Item<i
                                                class="fas fa-chevron-right"></i></a></li>
                                             <li><a href="#">Menu Item<i
                                                class="fas fa-chevron-right"></i></a></li>
                                             <li><a href="#">Menu Item<i
                                                class="fas fa-chevron-right"></i></a></li>
                                             <li><a href="#">Menu Item<i
                                                class="fas fa-chevron-right"></i></a></li>
                                          </ul>
                                       </li>
                                       <li><a href="#">Menu Item<i class="fas fa-chevron-right"></i></a></li>
                                       <li><a href="#">Menu Item<i class="fas fa-chevron-right"></i></a></li>
                                       <li><a href="#">Menu Item<i class="fas fa-chevron-right"></i></a></li>
                                    </ul>
                                 </li>
                                 <li><a href="#">Smartphones & Tablets<i class="fas fa-chevron-right"></i></a>
                                 </li>
                                 <li><a href="#">TV & Audio<i class="fas fa-chevron-right"></i></a></li>
                                 <li><a href="#">Gadgets<i class="fas fa-chevron-right"></i></a></li>
                                 <li><a href="#">Car Electronics<i class="fas fa-chevron-right"></i></a></li>
                                 <li><a href="#">Video Games & Consoles<i class="fas fa-chevron-right"></i></a>
                                 </li>
                                 <li><a href="#">Accessories<i class="fas fa-chevron-right"></i></a></li>
                              </ul> */}

                           </div>

                           <div className="main_nav_menu ml-auto">
                              <ul className="standard_dropdown main_nav_dropdown">
                                 <li><a href="index.html">Home<i className="fas fa-chevron-down"></i></a></li>
                                 <li className="hassubs">
                                    <a href="#">Super Deals<i className="fas fa-chevron-down"></i></a>
                                    <ul>
                                       <li>
                                          <a href="#">Menu Item<i className="fas fa-chevron-down"></i></a>
                                          <ul>
                                             <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a>
                                             </li>
                                             <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a>
                                             </li>
                                             <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a></li>
                                       <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a></li>
                                       <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a></li>
                                    </ul>
                                 </li>
                                 <li className="hassubs">
                                    <a href="#">Featured Brands<i className="fas fa-chevron-down"></i></a>
                                    <ul>
                                       <li>
                                          <a href="#">Menu Item<i className="fas fa-chevron-down"></i></a>
                                          <ul>
                                             <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a>
                                             </li>
                                             <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a>
                                             </li>
                                             <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a></li>
                                       <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a></li>
                                       <li><a href="#">Menu Item<i className="fas fa-chevron-down"></i></a></li>
                                    </ul>
                                 </li>
                                 <li className="hassubs">
                                    <a href="#">Pages<i className="fas fa-chevron-down"></i></a>
                                    <ul>
                                       <li><a href="shop.html">Shop<i className="fas fa-chevron-down"></i></a></li>
                                       <li><a href="product.html">Product<i
                                          className="fas fa-chevron-down"></i></a></li>
                                       <li><a href="blog.html">Blog<i className="fas fa-chevron-down"></i></a></li>
                                       <li><a href="blog_single.html">Blog Post<i
                                          className="fas fa-chevron-down"></i></a></li>
                                       <li><a href="regular.html">Regular Post<i
                                          className="fas fa-chevron-down"></i></a></li>
                                       <li><a href="cart.html">Cart<i className="fas fa-chevron-down"></i></a></li>
                                       <li><a href="contact.html">Contact<i
                                          className="fas fa-chevron-down"></i></a></li>
                                    </ul>
                                 </li>
                                 <li><a href="blog.html">Blog<i className="fas fa-chevron-down"></i></a></li>
                                 <li><a href="contact.html">Contact<i className="fas fa-chevron-down"></i></a></li>
                              </ul>
                           </div>

                           <div className="menu_trigger_container ml-auto">
                              <div className="menu_trigger d-flex flex-row align-items-center justify-content-end">
                                 <div className="menu_burger">
                                    <div className="menu_trigger_text">menu</div>
                                    <div className="cat_burger menu_burger_inner">
                                       <span></span><span></span><span></span></div>
                                 </div>
                              </div>
                           </div>

                        </div>
                     </div>
                  </div>
               </div>
            </nav>
         </header>
      )
   }
}
export default Navigation1;

