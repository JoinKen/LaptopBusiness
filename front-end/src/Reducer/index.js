import { combineReducers } from "redux";
import DealProducts from './DealProducts';
import Products from './Products';
import Carts from './Cart';
import Messages from './Messages';

const appReducers = combineReducers({
    DealProducts,
    Products,
    Carts,
    Messages,
});
export default appReducers;