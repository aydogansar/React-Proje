import React, {useContext,useState} from 'react';
import './index.css';
import { CommentsContext } from '../../contexts/CommentsContext';
import posed from  'react-pose';

var uniqid = require('uniqid');

const initialState = {
    isCommentDisplay : false,
    comment:''
}
const AnimateBox = posed.div({
    commentsVisible : {
        applyAtStart: { display: "block" },
        opacity: 1,
        height:'120px'
    },
    commentsHidden : {
        applyAtEnd: { display: "none" },
        opacity: 0,
        height:'0px'   
    }
})
const Comments = ({postId,commentsLimitPerPost}) => {
    const [state,setState] = useState(initialState)
    const {comments, dispatch} = useContext(CommentsContext);
    const changeHandler = (e) => {
        setState({
            ...state,
            comment: e.target.value
        })
    }
    const clickHandler = () => {
        setState({
            ...state,
            isCommentDisplay:!state.isCommentDisplay
        })
    }
    const addComment = (e)  => {
        if(state.comment !== ""){
            dispatch({type:"ADD_COMMENT" , payload:{postId:postId,comment:state.comment}})
            setState({
                ...state,
                comment:'',
                isCommentDisplay:false
            })
        }
        e.preventDefault();
    }
    const commentsArr = comments.slice(0).filter(c => {
        return c.postId === postId
    })
    return (
        <footer className="blockquote-footer"> <span className="commentButton" onClick={clickHandler}>Yorum Yaz</span>
            
            <div className="comments">
                <AnimateBox  className="addCommentBox" pose={state.isCommentDisplay ? 'commentsVisible' : 'commentsHidden'}>
                        <form onSubmit={addComment}>
                            <button className="button">Yorumu Paylaş</button>
                            <textarea className="commentArea" value={state.comment} onChange={changeHandler} placeholder="Yorum Yap..."></textarea>
                            
                        </form>
                </AnimateBox>
                
                <ul className="list-group list-group-flush">
                    {
                         commentsArr.slice(0,commentsLimitPerPost)
                        .map(c => {
                            return (
                                <li key = {uniqid()} className="list-group-item">
                                    <strong>{c.username}</strong> : {c.comment}
                                </li>
                            )
                        })
                    }
                </ul>
                {/* {
                    commentsArr.length > commentsLimitPerPost ? <button className="btn btn-info btn-block">Daha fazla göster</button> : null
                } */}
                
            </div>
        </footer>
    )
}
export default Comments;