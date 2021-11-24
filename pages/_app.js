import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import theme from '../src/theme';
import { ItemsProvider } from "./api/context";

const Airtable = require('airtable');
// const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);


export default function MyApp(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    console.log("window.innerHeight", window.innerHeight);
    var isTooSoon = true;
    var promptEvent;

    window.addEventListener('beforeinstallprompt', function (e) {
      e.preventDefault();
      promptEvent = e;
      listenToUserAction();
    });

    function listenToUserAction() {
      const installBtn = document.querySelector(".install-btn");
      installBtn.addEventListener("click", presentAddToHome);
    }

    function presentAddToHome() {
      promptEvent.prompt();
      promptEvent.userChoice
        .then(choice => {
          if (choice.outcome === 'accepted') {
            console.log('User accepted');
          } else {
            console.log('User dismissed');
          }
        })
    }
  }, []);

  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ItemsProvider>
          <button className="install-btn">dodaj do ekranu głównego</button>
          <Component {...pageProps} />
        </ItemsProvider>
      </ThemeProvider>
    </>
  );
}
