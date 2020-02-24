import {addPost} from './actions';
import {ADD_POST} from './types';

const PostsReducer = (state,action) => {
    switch (action.type) {
        case ADD_POST:
            return addPost(state,action);
    
        default:
            break;
    }
}
export default PostsReducer;
