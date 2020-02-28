import React, {useContext,useState} from 'react';
import './index.css';
import { CommentsContext } from '../../contexts/CommentsContext';
import posed from  'react-pose';

const initialState = {
    isDisplay : false,
    comment:''
}
const AnimateBox = posed.div({
    hidden : {
        opacity: 0,
        height:0,
        applyAtEnd: { display: "none" }
        
    },
    visible : {
        opacity: 1,
        height:120,
        applyAtStart: { display: "block" }
    }
})
const Comments = ({postId}) => {
    const [state,setState] = useState(initialState)
    const {comments,commentsLimitPerPost, dispatch} = useContext(CommentsContext);
    console.log(state.isDisplay);
    const changeHandler = (e) => {
        setState({
            ...state,
            comment: e.target.value
        })
    }
    const clickHandler = () => {
        setState({
            ...state,
            isDisplay:!state.isDisplay
        })
    }
    const addComment = (e)  => {
        if(state.comment !== ""){
            dispatch({type:"ADD_COMMENT" , payload:{postId:postId,comment:state.comment}})
        }
        e.preventDefault();
    }
    const commentsArr = comments.slice(0).filter(c => {
        return c.postId === postId
    })
    return (
        <footer className="blockquote-footer"> <span className="commentButton" onClick={clickHandler}>Yorum Yaz</span>
            
            <div className="comments">
                <AnimateBox className="addCommentBox" pose={state.isDisplay ? 'visible' : 'hidden'}>
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
                                <li key = {c.id} className="list-group-item">
                                    <strong>{c.username}</strong> : {c.comment}
                                </li>
                            )
                        })
                    }
                </ul>
                {
                    commentsArr.length > commentsLimitPerPost ? <button className="btn btn-info btn-block">Daha fazla göster</button> : null
                }
                
            </div>
        </footer>
    )
}
export default Comments;