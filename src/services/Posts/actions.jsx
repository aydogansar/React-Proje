let x = 5;
export const addPost = (state,action) => {
    x++;
    console.log(action.channel)
    const newPost = (
        {
        id : x,
        username:'Birisi',
        post:action.post,
        channel:Number(action.channel)
        }
    )
    return {
        ...state,
        posts:[...state.posts,newPost]
    }
    
}