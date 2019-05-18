
import React, { Component } from 'react';
import Navigation1 from '../Components/navigation1';
import ProductCart from '../Components/Cart/ProductCart';
class Cart extends Component {
   render() {
      return (
         <div className="super_container">
            <Navigation1 />
            <ProductCart />
         </div>
      );
   }
}
export default Cart;
