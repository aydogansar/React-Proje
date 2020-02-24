import React, {createContext, useState, useReducer} from 'react';
import PostsReducer from '../../services/Posts/PostsReducer';

export const PostsContext = createContext();

const initialState = {
    posts : [
        {
            id:1,
            username:"Aydoğan",
            post: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum nostrum aliquid molestiae reprehenderit porro, molestias totam obcaecati iure quas aut. Atque esse sint autem nam omnis quidem magnam consequuntur quae."
        },
        {
            id:2,
            username:"Aslı",
            post: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum nostrum aliquid molestiae reprehenderit porro, molestias totam obcaecati iure quas aut. Atque esse sint autem nam omnis quidem magnam consequuntur quae."
        },
        {
            id:3,
            username:"Mehmet",
            post: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum nostrum aliquid molestiae reprehenderit porro, molestias totam obcaecati iure quas aut. Atque esse sint autem nam omnis quidem magnam consequuntur quae."
        }
    ],
    isVisible : false
}

const PostsContextProvider = (props) => {
    const [state,dispatch] = useReducer(PostsReducer,initialState);
    return (
        <PostsContext.Provider value = {{...state, dispatch}}>
            {props.children}
        </PostsContext.Provider>
    )
}
export default PostsContextProvider;


