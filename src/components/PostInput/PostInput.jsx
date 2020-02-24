import React,{useState,useReducer , useContext} from 'react';
import './index.css';
import { PostsContext } from '../../contexts/Posts/PostsContext';

const PostInput = () => {
    const [post, setPost] = useState();
    const {dispatch} = useContext(PostsContext);
    const changeHandler = (e)  => {
        setPost({ post : e.target.value });
    }
    const sendPost = (e) => {
        e.preventDefault();
        dispatch({type:'ADD_POST', post});
        setPost({post: null});
        
    }
    return (
        <div className="card">
            <form onSubmit={sendPost}>
                <textarea id="PostInput" className="form-control" onChange={changeHandler} placeholder="Bir şeyler paylaş...">{post}</textarea>
                <div className="card-body">
                    <button type="submit" className="btn btn-info form-control">Paylaş</button>
                </div>
            </form>
        </div>
    )
}
export  default PostInput;