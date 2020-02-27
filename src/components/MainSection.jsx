import React from 'react'
import PostList from "./Posts/PostList";
import Channels from './Channels/Channels';

const MainSection = () => {
    const height = document.documentElement.clientHeight
    return (
        <div id="MainSection" className="col-md-8 col-sm-12 col-lg-8" style={{minHeight:height}}>
            <Channels/>
            <PostList/>
        </div>
    )
}
export default MainSection;