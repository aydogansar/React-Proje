import React,{useEffect, useState} from 'react';
import posed from 'react-pose';
import './index.css';


const initialState = {
    didAnimate:false
}
const AnimateBox = posed.div({
    visible : {
        opacity : 1,
        x: 0,
        transition: { type: 'spring', stiffness: 100}
    },
    hidden : {
        opacity : 0,
        x: -150
    }
})


const Post = ({username,post}) => {
    const [state,setState] = useState(initialState);
    const animate = () => {
        setState({
            didAnimate : true
        }) 
    }
    useEffect(() => {
        //componentDidMount
        //Animasyon sorunlu !!
       animate();
    },[])
    return (
        <AnimateBox className="animatebox" pose={state.didAnimate ? 'visible' : 'hidden'}>
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