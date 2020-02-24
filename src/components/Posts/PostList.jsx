import React,{useContext} from 'react';
import Post from './Post';
import {PostsContext} from '../../contexts/Posts/PostsContext';

const PostList = () => {
    const {posts,isVisible} = useContext(PostsContext);
    return (
        posts.map(p => {
             return <Post key = {p.id} username = {p.username} post={p.post} isVisible = {isVisible} />
        })
        
    )
}
export  default PostList;