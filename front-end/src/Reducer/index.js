import { combineReducers } from "redux";
import DealProducts from './DealProducts';
import Products from './Products';
import Carts from './Cart';

const appReducers = combineReducers({
    DealProducts,
    Products,
    Carts,
});
export default appReducers;