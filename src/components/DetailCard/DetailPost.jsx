import React,{useContext} from 'react';
import Comments from '../Comments/Comments';
import { CommentsContext } from '../../contexts/CommentsContext';

const DetailPost = ({id,post,username}) => {
    const {comments} = useContext(CommentsContext);

    const length = comments.filter(c => {
        return c.postId === id
    }).length;
    return (
        <div className="card">
            <div className="card-header">
                {username}
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{post}</p>
                    <Comments postId = {id} commentsLimitPerPost={length}/>
                </blockquote>
            </div>
        </div>
    )
}
export default DetailPost;
