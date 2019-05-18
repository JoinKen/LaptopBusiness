import { combineReducers } from "redux";
import DealProducts from './DealProducts';
import Products from './Products';

const appReducers = combineReducers({
    DealProducts,
    Products,
});
export default appReducers;