export const addComment = (state,action) => {
    let id = 4;
    const newComment = {
        id:id,
        postId:action.postId,
        username:'Birisi',
        comment:action.comment
    }
    id++;
    return {
        ...state,
        comments:[...state.comments,newComment]
    }
}