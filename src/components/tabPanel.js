import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import EnhancedTable from './table';
import { useStateValue, useDispatch } from "../store/configureStore";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from '@material-ui/core/IconButton';
import {
  Grid,AppBar, Box, TextField, Paper, Typography, Button, Tabs, Tab,InputLabel, Select, MenuItem,InputAdornment
} from "@material-ui/core";
import useStyles from "../styles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabBar(props) {
  const classes = useStyles();
  const todoDetailsArray = useStateValue();
  const [value, setValue] = React.useState(0);
  let addedTodoRows = props.addedRows;
  //let completedRows = [];
  // const handleSearchClick = (searchText, items) =>{
  //    items.map(function(i){
  //     if(i.summary.includes(searchText) || i.priority.includes(searchText)
  //      || i.createdOn.includes(searchText) || i.dueDate.includes(searchText)){
  //       items = items[i];
  //       }
  //   })
  //   return todoDetailsArray.todoDetailsArray = items;
  // }
  
  function searchTable(searchText, myArray){
    //debugger;
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].summary.includes(searchText) || myArray[i].priority.includes(searchText) ||
            myArray[i].createdOn.includes(searchText) || myArray[i].dueDate.includes(searchText)) {
            return addedTodoRows = myArray[i];
        }
    }
}
// function filterByValue(searchText, myArray) {
//   return myArray.filter(o =>
//       Object.keys(o).some(k => o[k].toLowerCase().includes(searchText.toLowerCase())));
// }

// function filterByValue(searchText, myArray) {
//   return myArray.filter(o =>
//       Object.keys(o).some(k => o[k].C().includes(searchText.toLowerCase())));
// }
// var filterByValue = addedTodoRows.filter(function (i, searchText) {
//   return i.summary.includes('He')
// });
  const [search, setSearch] = React.useState('');

  const handleSearchTextChange = (e) => {
    setSearch(e.target.value);
  }
  
  let completedRows = addedTodoRows.filter(function (e) {
    return e.todoStateCompleted == true;
});
let pendingdRows = addedTodoRows.filter(function (e) {
  return e.todoStateCompleted == false;
});
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [priority, setPriority] = React.useState('');

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };
  return (
    <div className={classes.root}>
     <div className={classes.display}>
      <TextField
        type="search"
        variant="outlined"
        margin="normal"
        placeholder = "Search"
        onChange ={(e) => handleSearchTextChange(e)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon  />
            </InputAdornment>
          )
        }}
      />
      <div className = {classes.display}>
        <InputLabel className={classes.selectPadding} id="demo-simple-select-label">Serch with priority</InputLabel>
          
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={priority}
          onChange = {handlePriorityChange}
          displayEmpty
          className={classes.selectEmpty}
        >
        <MenuItem value={priority}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Low'}>Created On</MenuItem>
           <MenuItem value={'Medium'}>Pending On</MenuItem>
          <MenuItem value={'High'}>Priority</MenuItem>
        </Select>
      </div>
      </div>

    
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="All Tasks" {...a11yProps(0)} />
          <Tab label="Pending" {...a11yProps(1)} />
          <Tab label="Completed" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <EnhancedTable addedTodos = {addedTodoRows}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <EnhancedTable addedTodos = {pendingdRows}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      {completedRows.length>0?
      <EnhancedTable addedTodos = {completedRows}/>
      : null
      }
      </TabPanel>
    </div>
  );
}