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

  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ItemsProvider>
          <Component {...pageProps} />
        </ItemsProvider>
      </ThemeProvider>
    </>
  );
}
