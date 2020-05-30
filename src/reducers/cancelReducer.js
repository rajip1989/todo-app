
const cancelReducer = (state, action) => {
    switch(action.type){
        case "TODO_DETAILS_CANCEL":
        return{
            ...state.cancelDetails,
            summary: ''
        }
        default:
            return state.cancelDetails
    }
}

export default cancelReducer;