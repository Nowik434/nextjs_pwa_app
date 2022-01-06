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


export default function MyApp(props) {
  const { Component, pageProps } = props;


  useEffect(() => {
    console.log("USE EFFECT ON APP COMPONENT")
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: "bf391442-24ef-44ab-9074-e22d69d8f2b6",
        safari_web_id: "web.onesignal.auto.271ef36b-44de-4fef-87dc-9a2f81b1418e",
        notifyButton: {
          enable: true,
        },
        allowLocalhostAsSecureOrigin: true,
      });
    });

    return () => {
      window.OneSignal = undefined;
    };
  }, []);

  // const router = useRouter();
  // const { storeCode } = router.asPath;
  // console.log('ssssssssssssssssssssssssssssssssssssssssssssss', router.asPath)
  // useEffect(() => {
  //   console.log('ssssssssssssssssssssssssssssssssssssssssssssss', document.getElementById("manifest"))
  //   if (router.asPath) {
  //     console.log('ssssssssssssssssssssssssssssssssssssssssssssss', document.getElementById("manifest"))
  //     const manifestElement = document.getElementById("manifest");
  //     const manifestString = JSON.stringify({
  //       ...manifest,
  //       start_url: `/s/${router.asPath}`,
  //     });
  //     manifestElement?.setAttribute(
  //       "href",
  //       "data:application/json;charset=utf-8," + encodeURIComponent(manifestString),
  //     );
  //     console.log(manifestElement, manifestString)
  //     console.log('ssssssssssssssssssssssssssssssssssssssssssssss', document.getElementById("manifest"))
  //   }
  // }, [router.asPath]);


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
            transform: 'translate(-50%, -50%)',
            display: 'grid',
            'align-items': 'center',
            height: '100%',
          }} fixed>
            <Component {...pageProps} />
          </Container>
          {/* <Copyright /> */}
        </ItemsProvider>
      </ThemeProvider>
    </>
  );
}
