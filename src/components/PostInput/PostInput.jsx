import React,{useState, useContext} from 'react';
import './index.css';
import { PostsContext } from '../../contexts/Posts/PostsContext';

const initialState = {
    post : ''
}

const PostInput = () => {
    const [state, setState] = useState(initialState);
    const {dispatch} = useContext(PostsContext);
    const changeHandler = (e)  => {
        setState({ 
            ...state,
            post : e.target.value
        });
    }
    const sendPost = (e) => {
        if(state.post !== ''){
            dispatch({type:'ADD_POST', payload:state.post});
            resetState();
        }
        e.preventDefault();
    }
    const resetState = () => {
        setState(initialState);
    }
    return (
        <div className="card">
            <form onSubmit={sendPost}>
                <textarea id="PostInput" className="form-control" onChange={changeHandler} value={state.post} placeholder="Bir şeyler paylaş..." required />
                <div className="card-body">
                    <button type="submit" className="btn btn-info form-control">Paylaş</button>
                </div>
            </form>
        </div>
    )
}
export  default PostInput;