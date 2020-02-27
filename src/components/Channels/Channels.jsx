import React, {useContext} from 'react';
import './index.css';
import {ChannelsContext} from '../../contexts/ChannelsContext';
import ReactTooltip from 'react-tooltip';

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
                        return (
                                <li 
                                    key = {li.id} 
                                    id = {li.id}
                                    data-tip = {li.name}
                                    onClick = {clickHandler} 
                                    className = {selected === li.id  ? 'active' : null}>
                                    <i id = {li.id} className = {li.faClass}></i>  
                                    <ReactTooltip className="customTooltip" place = "right" type="dark" effect="solid"/>
                                </li>
                        )
                    })
                }
             </ul>       
        </div>
    )
}
export default Channels;