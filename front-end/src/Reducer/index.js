import { combineReducers } from "redux";
import DealProducts from './DealProducts';
import Products from './Products';
import Carts from './Cart';
import messages from './Messages';

const appReducers = combineReducers({
    DealProducts,
    Products,
    Carts,
    messages,
});
export default appReducers;