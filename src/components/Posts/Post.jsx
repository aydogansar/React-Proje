import React,{useEffect} from 'react';
import posed from 'react-pose';
import './index.css';
import { useState } from 'react';

const AnimateBox = posed.div({
    visible : {
        opacity : 1,
        marginTop: 0,
        transition: { type: 'spring', stiffness: 100 }
    },
    hidden : {
        opacity : 0,
        marginTop: -150
    }
})


const Post = ({username,post, isVisible,isNew}) => {
    const [visible,setVisible] = useState(isVisible);
    useEffect(()=> {
        setVisible({visible : true})    
    },[])
    return (
        <AnimateBox pose={visible ? 'visible' : 'hidden'}>
        <div className="card post">
            <div className="card-header">
                {username}
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                <p>{post}</p>
                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
            </div>
        </div>
        </AnimateBox>
    )
}
export default Post;