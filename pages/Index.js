import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Router from "next/router";
import Dashboard from './Dashboard';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Mission Creation Progress Tracker
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default class Index extends Component {
  // componentDidMount = () => {
  //   Router.push("/components");
  // };

  render() {
    return (
      <>
      <Dashboard />
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
        </Typography>
          <Link href="/mcps/about" color="secondary">
            Go to the about page
        </Link>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
      </>
    );
  }
}