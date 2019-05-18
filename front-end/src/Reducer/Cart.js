
import * as Types from '../Constant/ActionType';

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];
const Cart = (state = initialState, action) => {
    let json;
    switch (action.type) {
        case Types.ADD_TOCART:
            json = {
                code: 'ok',
                data: action.data
            }
            state = json;
            return state;
        case Types.ADD_TOCART_ERR:
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

export default Cart;