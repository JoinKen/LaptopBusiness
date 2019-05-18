
import * as Types from '../Constant/ActionType';
import * as Message from '../Constant/Message';


var initialState = Message.MSG_WELCOME;
const Messages = (state = initialState, action) => {
    switch (action.type) {
        case Types.MESSAGE_CHANGE:
            return action.msg;
        default:
            return state;
    }
}
export default Messages;