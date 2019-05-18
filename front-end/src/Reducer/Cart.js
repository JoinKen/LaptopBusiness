
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
            console.log("index", index);
            console.log("state[0].length", state.length);
            if (index !== -1) {
                state.Carts[index].quantity += quantity;
            }
            else {
                state.push({
                    product,
                    quantity
                });
            }
            return [...state];
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

var findProductInCart = (state, product) => {
    var index = -1;
    console.log("Cart.length", state.length);
    console.log(product);
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