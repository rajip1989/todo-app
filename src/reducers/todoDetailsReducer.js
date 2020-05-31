import { act } from "react-dom/test-utils";

export const todoDetailsReducer = (state, action) => {
    switch (action.type) {
        case "TODO_DETAILS_ON_CHANGE":
            return {
                ...state.todoDetails,
                [action.key]: action.value,
            }
        default:
            return state.todoDetails
    }
}

export const deleteTodoReducer = (state = [], action) => {
    switch (action.type) {
        case "TODO_DETAILS_DELETE":
            const conf = window.confirm("Are sure to delete todo?");
            if (conf) {
                return [
                    action.items = action.items.splice(action.rowId - 1, 1),
                ]
            }
        default:
            return state.todoDetailsArray
    }
}

export const completeTodoReducer = (state = [], action) => {
    switch (action.type) {
        case "TODO_DETAILS_COMPLETE":
            return [
                action.items[action.rowId - 1].todoStateCompleted = true,
            ]
        case "TODO_DETAILS_REOPEN":
            return [
                action.items[action.rowId - 1].todoStateCompleted = false,
            ]
        default:
            return state.todoDetailsArray
    }
}

export const editTodoReducer = (state, action) => {
    switch (action.type) {
        case "TODO_DETAILS_EDIT":
            let editTodo = action.items.filter(function (e) {
                return e.rowId == action.rowId;
            });
            if (editTodo.length > 0) {
                return [
                    ...state.editTodo, editTodo[0]
                    // summary: editTodo[0].summary,
                    // description: editTodo[0].description,
                    // priority: editTodo[0].priority,
                    // dueDate: editTodo[0].dueDate
            ]
            }
        case "EDIT_TODO_DETAILS_ON_CHANGE":
            return {
                ...state.editTodo,
                [action.key]: action.value,
            }
        case "TODO_DETAILS_EDIT_UPDATE":
            // let upadteEditedTodo = action.items.filter(function (e) {
            //     return e.rowId == action.rowId;
            // });
            return {...state.todoDetails }
                // ...state.todoDetails[action.rowId].summary = state.editTodo[0].summary,
                // ...state.todoDetails[action.rowId].description = state.editTodo[0].description,
                // ...state.todoDetails[action.rowId].priority = state.editTodo[0].priority,
                // ...state.todoDetails[action.rowId].dueDate = state.editTodo[0].dueDate,
            
        default:
            return [state.editTodo ]
    }
}

export const editTodoDetailsReducer = (state, action) => {
    switch (action.type) {
        case "EDIT_TODO_DETAILS_ON_CHANGE":
            return {
                ...state.editTodo,
                [action.key]: action.value,
            }
        default:
            return state.editTodo
    }
}

const todoDetailsArrayReducer = (state = [], action) => {
    switch (action.type) {
        case "TODO_DETAILS_SUBMIT":
            return [
                ...state.todoDetailsArray, action.value
            ]
        default:
            return state.todoDetailsArray
    }
}

export default todoDetailsArrayReducer;