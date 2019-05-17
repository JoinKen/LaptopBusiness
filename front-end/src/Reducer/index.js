import { combineReducers } from "redux";
import FeatureProducts from '../Reducer/featureproducts';

const appReducers = combineReducers({
    FeatureProducts,
});
export default appReducers;