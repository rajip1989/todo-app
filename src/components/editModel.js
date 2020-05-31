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

const EditModel = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    // const editTodo = useStateValue();
    const todoDetailsArray = useStateValue();
    // const completeTodo = useStateValue();
    const editTodo = useStateValue();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //     //setOpen(true);
    //     props.isopen();
    // };

    const handleClose = () => {
        //setOpen(false);
        props.isclose();
    };
    //let rowId = 1;
    let duedate = '';
    const convertDate = (date) => {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(date)
        return duedate = [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/')
    }

    return (
        <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
            <DialogTitle id="form-dialog-title">TODO Details</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please enter the below details
          </DialogContentText>
                <TextField
                    value={editTodo.editTodo.summary}
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Summary"
                    fullWidth
                    onChange={(e) => { Actions.editTodoDetailsChange(dispatch, "summary", e.target.value) }}
                />
                <TextField
                    value={editTodo.editTodo.description}
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Description"
                    fullWidth
                    onChange={(e) => { Actions.editTodoDetailsChange(dispatch, "description", e.target.value) }}
                />

                <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                <div className={classes.display}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={editTodo.editTodo.priority}
                        onChange={(e) => { Actions.editTodoDetailsChange(dispatch, "priority", e.target.value) }}
                        displayEmpty
                        className={classes.selectEmpty}
                    >
                        <MenuItem value={editTodo.editTodo.priority}>
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'Low'}>Low</MenuItem>
                        <MenuItem value={'Medium'}>Medium</MenuItem>
                        <MenuItem value={'High'}>High</MenuItem>
                    </Select>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Due Date"
                                onChange={(e) => { convertDate(e); Actions.editTodoDetailsChange(dispatch, "dueDate", duedate); }}
                                value={editTodo.editTodo.dueDate}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={(e) => { Actions.cancelDetails(dispatch, e); handleClose(); }} color="primary">
                    Cancel
          </Button>
                <Button onClick={(e) => {
                    Actions.editTodoDetailsChange(dispatch, "rowId", editTodo.editTodo.rowId + 1);
                    Actions.editTodoUpdate(dispatch, editTodo.editTodo);
                    handleClose();
                }}
                    color="primary">
                    Submit
          </Button>
            </DialogActions>
        </Dialog>

    );
}

export default EditModel;