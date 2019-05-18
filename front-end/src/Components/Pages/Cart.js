
import React, { Component } from 'react';
import Navigation1 from '../Components/navigation1';
import CartContainer from '../../Containers/CartContainer';
class Cart extends Component {
   render() {
      return (
         <div className="super_container">
            <Navigation1 />
            <CartContainer />
         </div>
      );
   }
}
export default Cart;
