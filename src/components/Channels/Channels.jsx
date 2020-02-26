import React, {useContext} from 'react';
import './index.css';
import {ChannelsContext} from '../../contexts/Channels/ChannelsContext';

const Channels = ()  => {
    const {channels,dispatch,selected} = useContext(ChannelsContext);
    const clickHandler = (e) => {
        dispatch({type:'CHANGE_CHANNEL',payload:e.target.id})
    }
    return (
        <div id="Channels">
             <ul>
                {
                    channels.map(li => {
                        return <li key = {li.id} id={li.id} onClick={clickHandler} className={selected === li.id  ? 'active' : null}><i id={li.id} className={li.faClass}></i></li>
                    })
                }
             </ul>       
        </div>
    )
}
export default Channels;