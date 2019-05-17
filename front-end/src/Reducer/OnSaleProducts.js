
import * as Types from '../Constant/ActionType';

var ArrayFeatureProduct = [];
const OnSaleProducts = (state = ArrayFeatureProduct, action) => {
    let json;
    switch (action.type) {
        case Types.ONSALEPRODUCT:
            json = {
                code: 'ok',
                data: action.data
            }
            state = json;
            return state;
        case Types.ONSALEPRODUCT_ERR:
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
export default OnSaleProducts;