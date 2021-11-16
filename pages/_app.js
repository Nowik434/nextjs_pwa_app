import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import theme from '../src/theme';
import { ItemsProvider } from "./api/context";

const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

// export const AppContext = React.createContext(defaultValue);

// const table = base(process.env.AIRTABLE_TABLE_NAME);

export default function MyApp(props) {
  // const [userData, setUserData] = useState()
  // const [dataIsLoaded, setDataIsLoaded] = useState(false)
  const { Component, pageProps } = props;
  const router = useRouter();
  // const routerId = router.query.id;


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

// MyApp.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   emotionCache: PropTypes.object,
//   pageProps: PropTypes.object.isRequired,
// };
