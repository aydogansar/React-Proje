import React,{useEffect, useState,useContext} from 'react';
import posed from 'react-pose';
import './index.css';
import Comments from '../Comments/Comments';
import { PostsContext } from '../../contexts/PostsContext';


const initialState = {
    didAnimate:false
}
const AnimateBox = posed.div({
    visible : {
        opacity : 1,
        x: 0,
        transition: { type: 'spring', stiffness: 100}
    },
    hidden : {
        opacity : 0,
        x: -150
    }
})


const Post = ({username,post,id}) => {
    const [state,setState] = useState(initialState);
    const {dispatch} = useContext(PostsContext);
    const animate = () => {
        setState({
            didAnimate : true
        }) 
    }
    useEffect(() => {
        //componentDidMount
       animate();
    },[])

    const clickDetailHandler = () => {
        dispatch({type:'DETAILED_POST_ID',payload:{id:id}});
    }
    return (
        <AnimateBox className="animatebox" pose={state.didAnimate ? 'visible' : 'hidden'}>
        <div className="card post">
            <div className="card-header">
                {username}
                <span className="rightController">
                    <i className="fas fa-external-link-alt" onClick={clickDetailHandler}></i>
                    <i className="fas fa-ellipsis-h"></i>
                </span>
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{post}</p>
                    <Comments postId = {id} commentsLimitPerPost={3}/>
                </blockquote>
            </div>
        </div>
        </AnimateBox>
    )
}
export default Post;