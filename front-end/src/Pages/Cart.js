
import React, { Component } from 'react';
import Navigation1 from '../Components/navigation1';
import CartContainer from '../Containers/CartContainer';
import MessagesContainer from '../Containers/MessagesContainer';
class Cart extends Component {
   render() {
      return (
         <div className="super_container">
            <Navigation1 />

            <MessagesContainer />

            <CartContainer />
         </div>
      );
   }
}
export default Cart;
