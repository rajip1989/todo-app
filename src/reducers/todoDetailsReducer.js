import { act } from "react-dom/test-utils";

export const todoDetailsReducer = (state, action) => {
    switch(action.type){
        case "TODO_DETAILS_ON_CHANGE":
        return {
             ...state.todoDetails,
        [action.key] : action.value,
    }
        default:
            return state.todoDetails
    }
}

export const deleteTodoReducer = (state = [], action) =>{
    switch(action.type){
        case "TODO_DETAILS_DELETE":
        return[
            action.items = action.items.splice(action.rowId-1, 1),
        ]
        default:
            return state.todoDetailsArray
    }
}

export const completeTodoReducer = (state = [], action) =>{
    debugger;
    switch(action.type){
        case "TODO_DETAILS_COMPLETE":
        return[
            action.items[action.rowId - 1].todoStateCompleted = true,
            //todoStateCompleted : true
        ]
        default:
            return state.todoDetailsArray
    }
}


const todoDetailsArrayReducer = (state = [], action) => {
    switch(action.type){
        case "TODO_DETAILS_SUBMIT":
        return[
            ...state.todoDetailsArray, action.value
        ]
        default:
            return state.todoDetailsArray
    }
}

export default todoDetailsArrayReducer;