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

const Airtable = require('airtable');
// const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);
// var myDynamicManifest = {
//   "name": "talentcoin",
//   "short_name": "talentcoin",
//   "theme_color": "#d2ab67",
//   "background_color": "#d2ab67",
//   "display": "standalone",
//   "orientation": "portrait",
//   "scope": "/",
//   "start_url": "/",
//   "icons": [
//     {
//       "src": "images/icons/icon-72x72.png",
//       "sizes": "72x72",
//       "type": "image/png"
//     },
//     {
//       "src": "images/icons/icon-96x96.png",
//       "sizes": "96x96",
//       "type": "image/png"
//     },
//     {
//       "src": "images/icons/icon-128x128.png",
//       "sizes": "128x128",
//       "type": "image/png"
//     },
//     {
//       "src": "images/icons/icon-144x144.png",
//       "sizes": "144x144",
//       "type": "image/png"
//     },
//     {
//       "src": "images/icons/icon-152x152.png",
//       "sizes": "152x152",
//       "type": "image/png"
//     },
//     {
//       "src": "images/icons/icon-192x192.png",
//       "sizes": "192x192",
//       "type": "image/png"
//     },
//     {
//       "src": "images/icons/icon-384x384.png",
//       "sizes": "384x384",
//       "type": "image/png"
//     },
//     {
//       "src": "images/icons/icon-512x512.png",
//       "sizes": "512x512",
//       "type": "image/png"
//     }
//   ],
// }

export default function MyApp(props) {
  const { Component, pageProps } = props;
  // const router = useRouter();
  // const { id } = router.query;
  // console.log("ROUTER ID", router)
  // useEffect(() => {
  //   if (id) {
  //     const manifestElement = document.getElementById("manifest");
  //     const manifestString = JSON.stringify({
  //       ...myDynamicManifest,
  //       start_url: window.location.href,
  //     });
  //     console.log("manifest", manifestString)
  //     manifestElement?.setAttribute(
  //       "href",
  //       "data:application/json;charset=utf-8," + encodeURIComponent(manifestString),
  //     );
  //     console.log('encodedddd', window.location.href)
  //   }
  // }, [id]);


  //   const router = useRouter();
  //   const { id } = router.query;
  //   console.log("ROUTER ID", router)
  //   useEffect(() => {
  //     if (id) {
  //       const manifestElement = document.getElementById("manifest");
  //       const manifestString = JSON.stringify({
  //         ...myDynamicManifest,
  //         start_url: `?id=${id}`,
  //       });
  //       console.log("manifest", manifestString)
  //       manifestElement?.setAttribute(
  //         "href",
  //         "data:application/json;charset=utf-8," + encodeURIComponent(manifestString),
  //       );
  //       console.log('encodedddd', window.location.href)
  //     }
  //   }, [id]);

  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ItemsProvider>
          <Container maxWidth="sm" sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }} fixed>
            <Component {...pageProps} />
          </Container>
          <Copyright />
        </ItemsProvider>
      </ThemeProvider>
    </>
  );
}
