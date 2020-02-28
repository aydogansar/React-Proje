import {ADD_COMMENT} from './types';
import {addComment} from './actions';

const CommentsReducer = (state,action) => {
    switch(action.type){
        case ADD_COMMENT:
            return addComment(state,action.payload);
        default:
            return state;
    }
}
export default CommentsReducer;