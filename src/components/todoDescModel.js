import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
    Grid, TextField, Paper, Typography, Button, Tabs, Tab, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    InputLabel, Select, MenuItem
} from "@material-ui/core";
import useStyles from "../styles";
import { useTheme } from "@material-ui/styles";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import EnhancedTable from './table';
import TabBar from './tabPanel';
import * as Actions from "../actions/action";
import { useStateValue, useDispatch } from "../store/configureStore";

const TodoDescModel = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const todoDetails = useStateValue();
    const todoDetailsArray = useStateValue();
    // const completeTodo = useStateValue();
    const editTodo = useStateValue();
    // console.log(editTodo, "edited rows")
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //     //setOpen(true);
    //     props.isopen();
    // };

    const handleClose = () => {
        //setOpen(false);
        props.iscloseTodo();
    };
    return (
        <Dialog open={props.openTodo} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
        <DialogTitle id="form-dialog-title">TODO Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Todo Details
          </DialogContentText>
          <div className={classes.display}>
          <ul>
              <li>Summary :  </li>
              <li>Description : </li>
              <li>Priority : </li>
              <li>Due Date : </li>
              <li>Created On : </li>
              <li>Current Status : </li>
              </ul>
          </div>
          
        </DialogContent>
        <DialogActions>
          <Button onClick = {handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick = {handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

    );
}

export default TodoDescModel;