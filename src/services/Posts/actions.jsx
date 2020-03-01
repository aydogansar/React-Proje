let x = 5;
export const addPost = (state,action) => {
    x++;
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

export const changeDetailedPost = (state,action) => {
    return {
        ...state,
        DetailedPostId:action.id,
        DetailCardisDisplay:true
    }
}

export const closeDetailCard = (state) => {
    return {
        ...state,
        DetailCardisDisplay:false
    }
}