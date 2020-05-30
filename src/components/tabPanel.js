import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import EnhancedTable from './table';
import { useStateValue, useDispatch } from "../store/configureStore";

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TabBar(props) {
  const classes = useStyles();
  const todoDetailsArray = useStateValue();
  const [value, setValue] = React.useState(0);
  //let completedRows = [];
  let completedRows = props.addedRows.filter(function (e) {
    return e.todoStateCompleted == true;
});
  //console.log(completedRows, "completedRows");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(completedRows, "completedRows");
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="All Tasks" {...a11yProps(0)} />
          <Tab label="Pending" {...a11yProps(1)} />
          <Tab label="Completed" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <EnhancedTable addedTodos = {props.addedRows}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <EnhancedTable addedTodos = {props.addedRows}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <EnhancedTable addedTodos = {completedRows}/>
      {/* {
          todoDetailsArray.todoDetailsArray.completed ? <EnhancedTable addedTodos = {props.addedRows}/> : null
      } */}
      </TabPanel>
    </div>
  );
}