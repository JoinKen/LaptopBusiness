
import * as Types from '../Constant/ActionType';

var data = JSON.parse(localStorage.getItem('CART'));
// var initialState = data ? data : [
var initialState = [
    {
        product: {
            "idProduct": 1,
            "nameProduct": "Dell InSpiron",
            "priceEntered": 1231,
            "salePrice": 20000,
            "amount": 123,
            "dateAdded": "2255-08-07T17:00:00.000Z",
            "describe": "Mặt trời",
            "idPromotion": 1,
            "type": 1,
            "title": 1,
            "value": 1,
            "idImage": 7,
            "link": "upload/best_5.png",
            "fileImage": 1, "soRate": 1,
            "status": "Đang xác nhận",

        },
        quantity: 5
    },
    {
        product: {
            "idProduct": 1,
            "nameProduct": "HP PEO InSpiron",
            "priceEntered": 1231,
            "salePrice": 10000,
            "amount": 12,
            "dateAdded": "2255-08-07T17:00:00.000Z",
            "describe": "Mặt trời",
            "idPromotion": 1,
            "type": 1,
            "title": 1,
            "value": 1,
            "idImage": 7,
            "link": "upload/best_4.png",
            "fileImage": 1, "soRate": 4,
            "status": "Đang xác nhận",

        },
        quantity: 2
    }
];
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