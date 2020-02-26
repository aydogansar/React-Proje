import React,{useState, useContext} from 'react';
import './index.css';
import { PostsContext } from '../../contexts/Posts/PostsContext';
import { ChannelsContext } from '../../contexts/Channels/ChannelsContext';

const initialState = {
    post : '',
    channel:1
}

const PostInput = () => {
    const [state, setState] = useState(initialState);
    const post = useContext(PostsContext);
    const channel = useContext(ChannelsContext);
    const changeHandler = (e)  => {
        setState({ 
            ...state,
            post : e.target.value
        });
    }
    const selectChangeHandler = (e)  => {
        setState({ 
            ...state,
            channel : e.target.value
        });
    }
    const sendPost = (e) => {
        if(state.post !== ''){
            channel.dispatch({type:'CHANGE_CHANNEL',payload:state.channel})
            post.dispatch({type:'ADD_POST', payload:{post:state.post,channel:state.channel}});
            setState({
                ...state,
                post:''
            })
        }
        e.preventDefault();
    }
    const resetState = () => {
        setState(initialState);
    }
    return (
        <div className="card" style={{position:'fixed',width:'25%'}}>
            <form onSubmit={sendPost}>
                <textarea id="PostInput" className="form-control" onChange={changeHandler} value={state.post} placeholder="Bir şeyler paylaş..." required />
                <select name="channel" id="channel" className="form-control" onChange={selectChangeHandler} selected={state.channel} required>
                    <option value="" defaultValue>Kanal Seçiniz</option>
                    <option value="1">Genel</option>
                    <option value="2">Ev - Kiracı İlanları</option>
                    <option value="3">İş - Stajyer İlanları</option>
                    <option value="4">Ders Notları</option>
                </select>
                <div className="card-body">
                    <button type="submit" className="btn btn-info form-control">Paylaş</button>
                </div>
            </form>
        </div>
    )
}
export  default PostInput;