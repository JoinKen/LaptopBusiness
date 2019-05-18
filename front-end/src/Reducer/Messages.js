
import * as Types from '../Constant/ActionType';
import * as Message from '../Constant/Message';


var initialState = Message.MSG_WELCOME;
const messages = (state = initialState, action) => {
    switch (action.type) {
        case Types.MESSAGE_CHANGE:
            return state;
        default:
            return state;
    }
}
export default messages;