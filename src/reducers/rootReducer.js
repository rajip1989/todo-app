import {todoDetailsReducer, deleteTodoReducer, completeTodoReducer} from './todoDetailsReducer';
import todoDetailsArrayReducer from './todoDetailsReducer'
import cancelReducer from './cancelReducer';

const rootReducer = ({todoDetails, todoDetailsArray, deletedItems, completeTodo, cancelDetails}, action) => {
  return{
    todoDetails : todoDetailsReducer({todoDetails}, action),
    todoDetailsArray : todoDetailsArrayReducer({todoDetailsArray}, action),
    cancelDetails : cancelReducer({cancelDetails}, action),
    deletedItems : deleteTodoReducer({deletedItems}, action),
    completeTodo : completeTodoReducer({completeTodo}, action),
  }
}

const convertDate = (date) =>{
  function pad(s) { return (s < 10) ? '0' + s : s; }
  var d = new Date(date)
  return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/')
}

export const initialState = {
  todoDetails: {
     rowId:1,
     summary:'',
     description:'',
     priority:'',
     createdOn: convertDate(new Date()),
     dueDate: new Date(),
     todoStateCompleted : false,
  },
  todoDetailsArray :[],
  deletedItems:[],
  completeTodo : {
    todoStateCompleted : false,
  },
  cancelDetails: {
    summary:'',
    description:'',
    priority:'',
    dueDate:'',
  },
}

export default rootReducer;