import React from 'react';


const SelectChannel = ({channel,selectChangeHandler,channelContext}) => {
    const {channels} = channelContext;
    return (
        <select name="channel" id="channel" className="form-control" onChange={selectChangeHandler} selected={channel} required>
            <option value="" defaultValue>Kanal Seçin</option>
            {
                channels.map(ch => {
                    return <option key={ch.id} value={ch.id}>{ch.name}</option>
                })
            }
        </select>
    )
}
export default SelectChannel;