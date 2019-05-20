
import * as Types from '../Constant/ActionType';
var InitialProduct = [];
const ProductDetail = (state = InitialProduct, action) => {
    let json;
    switch (action.type) {
        case Types.PRODUCT_DETAIL:
            json = {
                code: 'ok',
                data: action.data
            }
            state = json;
            return state;
        case Types.PRODUCT_DETAIL_ERR:
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
export default ProductDetail;