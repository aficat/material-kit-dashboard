import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <link href='https://fonts.googleapis.com/css?family=Karla' rel='stylesheet' />
          <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Playfair+Display" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <title>Mission Creation Progress Tracker</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <script src="https://unpkg.com/react@latest/umd/react.development.js" crossorigin="anonymous"></script>
        <script src="https://unpkg.com/react-dom@latest/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/@material-ui/core@latest/umd/material-ui.development.js" crossorigin="anonymous"></script>
        <script src="https://unpkg.com/babel-standalone@latest/babel.min.js" crossorigin="anonymous"></script>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}