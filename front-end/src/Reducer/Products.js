
import * as Types from '../Constant/ActionType';
var InitialProduct = [];
const Products = (state = InitialProduct, action) => {
    let json;
    switch (action.type) {
        case Types.PRODUCT:
            json = {
                code: 'ok',
                data: action.data
            }
            state = json;
            return state;
        case Types.PRODUCT_ERR:
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
export default Products;