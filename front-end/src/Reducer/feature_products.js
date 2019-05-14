
import * as Types from '../Constant/ActionType';
var initialState = [];

const featureProducts = (state = initialState, action) => {
    let json;
    switch (action.type) {
        case Types.SELECT_FEATURE_PRODUCT:
            json = {
                code: 'ok',
                data: action.data
            }
            state = json;
            console.log(state.code);
            return state;

        case Types.SELECT_FEATURE_PRODUCT_ERR:
            json = {
                code: 'err',
                data: action.message
            }
            state = json;
            return state;
        default:
            return state;
    }

}
export default featureProducts;