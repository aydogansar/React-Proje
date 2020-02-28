import React,{useContext} from 'react';
import Post from './Post';
import {PostsContext} from '../../contexts/PostsContext';
import { ChannelsContext } from '../../contexts/ChannelsContext';

const PostList = () => {
    const {posts} = useContext(PostsContext);
    const {selected} = useContext(ChannelsContext);
    return (
        posts.slice(0).reverse()
        .filter(
            (p) => {
                return p.channel === selected
            })
        .map(p => {
             return <Post key = {p.id} id={p.id} username = {p.username} post={p.post}/>
        })
        
    )
}
export  default PostList;