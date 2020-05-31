import {todoDetailsReducer, deleteTodoReducer, completeTodoReducer, editTodoReducer, editTodoDetailsReducer} from './todoDetailsReducer';
import todoDetailsArrayReducer from './todoDetailsReducer'
import cancelReducer from './cancelReducer';
import { act } from '@testing-library/react';

const rootReducer = ({todoDetails, todoDetailsArray, deletedItems, completeTodo, editTodo, cancelDetails}, action) => {
  return{
    todoDetails : todoDetailsReducer({todoDetails}, action),
    todoDetailsArray : todoDetailsArrayReducer({todoDetailsArray}, action),
    cancelDetails : cancelReducer({cancelDetails}, action),
    deletedItems : deleteTodoReducer({deletedItems}, action),
    completeTodo : completeTodoReducer({completeTodo}, action),
    editTodo:editTodoReducer({editTodo},action),
    //editTodo:editTodoDetailsReducer({editTodo},action)
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
  editTodo:[
    // summary:'',
    // description:'',
    // priority:'',
    // dueDate:'',
  ],
  cancelDetails: {
    summary:'',
    description:'',
    priority:'',
    dueDate:'',
  },
}

export default rootReducer;