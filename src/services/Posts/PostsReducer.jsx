import {addPost,changeDetailedPost, closeDetailCard} from './actions';
import {ADD_POST,DETAILED_POST_ID,CLOSE_DETAILCARD} from './types';

const PostsReducer = (state,action) => {
    switch (action.type) {
        case ADD_POST:
            return addPost(state,action.payload);
        
        case DETAILED_POST_ID:
            return changeDetailedPost(state,action.payload);

        case CLOSE_DETAILCARD:
            return closeDetailCard(state);
        default:
            break;
    }
}
export default PostsReducer;
