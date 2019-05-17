
import * as Types from '../Constant/ActionType';

var ArrayFeatureProduct = [];
const FeatureProducts = (state = ArrayFeatureProduct, action) => {
    let json;
    switch (action.type) {
        case Types.FEATUREPRODUCT:
            json = {
                code: 'ok',
                data: action.data
            }
            state = json;
            return state;
        case Types.FEATUREPRODUCT_ERR:
            json = {
                code: 'err',
                data: action.data
            }
            state = json;
            return state;
        default:
            return state;
    }
}
export default FeatureProducts;