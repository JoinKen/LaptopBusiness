import { combineReducers } from "redux";
import DealProducts from './DealProducts';
import Products from './Products';
import Carts from './Cart';
import Messages from './Messages';
import ProductDetails from './ProductDetail'

const appReducers = combineReducers({
    DealProducts,
    Products,
    Carts,
    Messages,
    ProductDetails,

});
export default appReducers;