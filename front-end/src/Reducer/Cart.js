
import * as Types from '../Constant/ActionType';

var data = JSON.parse(localStorage.getItem('CART'));
// var initialState = data ? data : [
var initialState = data ? data : [];
const Cart = (state = initialState, action) => {
    let json;
    var { product, quantity } = action;
    var index = -1;
    switch (action.type) {
        case Types.ADD_TOCART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity += quantity;
            }
            else {
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case Types.ADD_TOCART_ERR:
            json = {
                code: 'err',
                data: action.data
            }
            state = json;
            return state;
        case Types.DELETE_PRODUCT_INCART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case Types.UPDATE_PRODUCT_INCART:
            index = findProductInCart(state, product);
            if (index !== -1 && quantity > 0) {
                state[index].quantity = quantity;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
}

var findProductInCart = (state, product) => {
    var index = -1;
    if (state.length > 0) {
        for (var i = 0; i < state.length; i++) {
            if (state[i].product.idProduct === product.idProduct) {
                index = i;
                break;
            }
        }
    }
    return index;
}

export default Cart;