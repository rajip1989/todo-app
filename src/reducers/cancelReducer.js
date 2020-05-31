const convertDate = (date) =>{
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(date)
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/')
  }

const cancelReducer = (state, action) => {
    switch(action.type){
        case "TODO_DETAILS_CANCEL":
        return{
            ...state.todoDetails,
            summary : '',
            description:'',
            priority: 'None',
            dueDate:convertDate(new Date())
        }
        default:
            return state.cancelDetails
    }
}

export default cancelReducer;