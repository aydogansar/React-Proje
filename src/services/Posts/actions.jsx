export const addPost = (state,action) => {
    const newPost = (
        {
        id : 5,
        username:'Birisi',
        post:action,
        }
    )
    return {
        ...state,
        posts:[newPost,...state.posts]
    }
}