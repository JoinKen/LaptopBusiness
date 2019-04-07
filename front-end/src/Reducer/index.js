import { combineReducers } from "redux";
import products from '../Reducer/products';

const appReducers = combineReducers({
    products
});
export default appReducers;