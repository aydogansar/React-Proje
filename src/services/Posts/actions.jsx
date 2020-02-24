export const addPost = (state,action) => {
    const newPost = (
        {
        id : 5,
        username:'Birisi',
        ...action.post,
        }
    )
    return {
        ...state,
        posts:[newPost,...state.posts]
    }
}