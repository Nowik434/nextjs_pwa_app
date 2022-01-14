import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Copyright from '../src/Copyright';
import Button from '@mui/material/Button';
import theme from '../src/theme';
import { ItemsProvider } from "./api/context";
import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import InstallPwaSnackbar from '../components/snackbar';
import '../styles/globals.css';


export default function MyApp(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: process.env.ONESIGNAL_APP_ID,
        safari_web_id: process.env.ONESIGNAL_SAFARI_WEB_ID,
        notifyButton: {
          enable: true,
        },
        allowLocalhostAsSecureOrigin: true,
      });
    });
    document.querySelector(".MuiCollapse-root").style.display = "none"
    return () => {
      window.OneSignal = undefined;
    };
  }, []);


  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ItemsProvider style={{ height: '100%' }}>
          <Container maxWidth="sm" sx={{
            display: 'grid',
            'align-items': 'center',
            height: '100%',
            'grid-template-columns': '1fr',
            'grid-template-rows': '1fr',
          }} fixed>
            <Component {...pageProps} />
            <InstallPwaSnackbar />
          </Container>
          {/* <Copyright /> */}
        </ItemsProvider>
      </ThemeProvider>
    </>
  );
}
