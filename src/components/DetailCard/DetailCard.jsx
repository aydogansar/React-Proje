import React,{useContext} from 'react';
import './index.css';
import posed from 'react-pose';
import { PostsContext } from '../../contexts/PostsContext';
import DetailPost from './DetailPost';


var body = document.body,
    html = document.documentElement;
const height = Math.max( body.scrollHeight, body.offsetHeight, 
    html.clientHeight, html.scrollHeight, html.offsetHeight );

const AnimateBox = posed.div ({
    visiblePose : {
        opacity:1,
        width:500,
    },
    hiddenPose : {
        opacity:0,
        width:0
    }
})

const DetailCard = () => {
    const {posts,DetailedPostId,DetailCardisDisplay,dispatch} = useContext(PostsContext);
    const clickCloseHandler = () => {
        dispatch({type:'CLOSE_DETAILCARD'})
    }
    if(DetailedPostId !== null){
        const postDetail = posts.filter(p => {
            return p.id === DetailedPostId
        })
        const {id,username,post} = postDetail[0];
        return (
            <AnimateBox id="DetailCard" style={{height:height}} pose={DetailCardisDisplay ? 'visiblePose' : 'hiddenPose'}>
                <span className="controller">
                    <i id="close" className="fas fa-sign-out-alt" onClick={clickCloseHandler}></i>
                </span>
                <DetailPost id={id} className="detailPost" username={username} post={post}/>
            </AnimateBox>
        )
    }
    else{
        return <AnimateBox id="DetailCard" style={{height:height}} pose={DetailCardisDisplay ? 'visiblePose' : 'hiddenPose'}/>
    }
}
export default DetailCard;
