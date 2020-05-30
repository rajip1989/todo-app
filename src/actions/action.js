export const todoDetailsChange = (dispatch, key, value) => {
    dispatch({
        type: "TODO_DETAILS_ON_CHANGE",
        value: value,
        key:key
    });
}

export const todoDetailsSubmit = (dispatch, value) => {
    dispatch({
        type: "TODO_DETAILS_SUBMIT",
        value:value
    });
}

export const cancelDetails = (dispatch, key, value) => {
    dispatch({
        type: "TODO_DETAILS_CANCEL",
        value: value,
        key:key
    });
}

export const deleteTodo = (dispatch, value, items) => {
    dispatch({
        type: "TODO_DETAILS_DELETE",
        rowId: value,
        items: items
    });
}

export const completeTodo = (dispatch, value, items) => {
    dispatch({
        type: "TODO_DETAILS_COMPLETE",
        rowId: value,
        items: items
    });
}