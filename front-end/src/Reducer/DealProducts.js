
import * as Types from '../Constant/ActionType';

var ArrayFeatureProduct = [];
const DealProducts = (state = ArrayFeatureProduct, action) => {
    let json;
    switch (action.type) {
        case Types.DEALPRODUCT:
            json = {
                code: 'ok',
                data: action.data
            }
            state = json;
            return state;
        case Types.DEALPRODUCT_ERR:
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
export default DealProducts;