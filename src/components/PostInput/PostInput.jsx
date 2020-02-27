import React,{useState, useContext} from 'react';
import './index.css';
import { PostsContext } from '../../contexts/PostsContext';
import { ChannelsContext } from '../../contexts/ChannelsContext';
import posed from 'react-pose';
import SelectChannel from './SelectChannel';

const initialState = {
    post : '',
    channel:1,
    faClass: 'fab fa-weixin'
}
const Animate = posed.div({
    icon : {
        y:3,
        x:3     
    },
    channelIcon : {
        x:'45%'
    }
})

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
        
        // setState({ 
        //     ...state,
        //     channel : e.target.value
        // });
        
        let val = e.target.value;
        val--;
        if(val>=0){
            setState({
                ...state,
                channel : e.target.value,
                faClass : channel.channels[val].faClass
            })
        }
        else {
            setState({
                ...state,
                channel : e.target.value,
                faClass : initialState.faClass
            })
        }
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
    return (
        <div className="card" style={{position:'fixed',width:'25%'}}>
            <form id="sendPost" onSubmit={sendPost}>
                <Animate pose={state.faClass === initialState.faClass ? 'icon' : 'channelIcon'}>
                    <i className={`icon ${state.faClass}`}/>
                </Animate>
                <textarea id="PostInput" className="form-control" onChange={changeHandler} value={state.post} placeholder="Bir şeyler paylaş..." required />
                <SelectChannel channelContext = {channel} channel={state.channel} selectChangeHandler = {selectChangeHandler}/>
                <div className="card-body">
                    <button type="submit" className="btn btn-info form-control">Paylaş</button>
                </div>
            </form>
        </div>
    )
}
export  default PostInput;