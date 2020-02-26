export const changeChannel = (state,id) => {
    return {
        ...state,
        selected:Number(id)
    }
}