import React,{createContext,useReducer} from 'react';
import ChannelsReducer from '../../services/Channels/ChannelsReducer';


export const ChannelsContext =  createContext();

const initialState = {
    channels : [
        {
            id:1,
            name:'Genel',
            faClass:'fas fa-hashtag'
        },
        {
            id:2,
            name:'Ev - Kiracı İlanları',
            faClass:'fas fa-bed'
        },
        {
            id:3,
            name:'İş - Staj İlanları',
            faClass:'fas fa-suitcase'
        },
        {
            id:4,
            name:'Ders Notları',
            faClass:'fas fa-sticky-note'
        }
    ],
    selected:1
}

const ChannelsContextProvider = (props) => {
    const [state,dispatch] = useReducer(ChannelsReducer,initialState);
    return (
        <ChannelsContext.Provider value={{...state,dispatch}}>
            {props.children}
        </ChannelsContext.Provider>
    )
}
export default ChannelsContextProvider;

