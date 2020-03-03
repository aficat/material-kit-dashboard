import React, { Component } from 'react';
// import Router from "next/router";
import Dashboard from './Dashboard';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = {
  root: {
    display: 'flex',
  }
};

const classes = useStyles;

export default class Index extends Component {
  // componentDidMount = () => {
  //   Router.push("/components");
  // };

  render() {
    return (
      <>
        <div className={classes.root}>
          <CssBaseline />
          <Dashboard />
        </div>
      </>
    );
  }
}