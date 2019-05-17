
import * as Types from '../Constant/ActionType';

var ArrayFeatureProduct = [];
const BestRatedProducts = (state = ArrayFeatureProduct, action) => {
    let json;
    switch (action.type) {
        case Types.BESTRATEDPRODUCT:
            json = {
                code: 'ok',
                data: action.data
            }
            state = json;
            return state;
        case Types.BESTRATEDPRODUCT_ERR:
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
export default BestRatedProducts;