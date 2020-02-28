import React,{createContext, useReducer} from 'react';
import CommentsReducer from '../services/Comments/CommentsReducer';

const initialState = {
    comments : [
        {
            id:1,
            postId:1,
            username:'Aydoğan',
            comment:'Deneme yorummu 1'
        },
        {
            id:2,
            postId:2,
            username:'Mehmet',
            comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae hic dolorem modi, sunt veniam, repudiandae aspernatur ratione cumque labore veritatis, fugiat ipsum atque blanditiis doloremque? Ex animi voluptatem enim ad?"
        },
        {
            id:3,
            postId:2,
            username:'Ahmet',
            comment:'Deneme yorummu 3'
        },
        {
            id:4,
            postId:2,
            username:'Dilara',
            comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae hic dolorem modi, sunt veniam, repudiandae aspernatur ratione cumque labore veritatis, fugiat ipsum atque blanditiis doloremque? Ex animi voluptatem enim ad?"
        }
    ],
    commentsLimitPerPost:3
}

export const CommentsContext = createContext();
const CommentsContextProvider = (props) => {
    const [state,dispatch] = useReducer(CommentsReducer,initialState);
    return(
        <CommentsContext.Provider value = {{...state,dispatch}}>
            {props.children}
        </CommentsContext.Provider>
    )
}
export default  CommentsContextProvider;