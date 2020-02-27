import {changeChannel} from './actions';
import {CHANGE_CHANNEL} from './types';

const ChannelsReducer = (state,action) => {
    switch (action.type) {
        case CHANGE_CHANNEL:
            return changeChannel(state,action.payload);
        default:
            return state;
    }
}
export default ChannelsReducer;