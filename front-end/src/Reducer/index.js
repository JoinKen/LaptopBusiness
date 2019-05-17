import { combineReducers } from "redux";
import FeatureProducts from './FeatureProducts';
import DealProducts from './DealProducts';
import OnSaleProducts from './OnSaleProducts';
import BestRatedProducts from './BestRatedProducts';

const appReducers = combineReducers({
    FeatureProducts,
    DealProducts,
    OnSaleProducts,
    BestRatedProducts
});
export default appReducers;