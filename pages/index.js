import React, { useState, useEffect, useContext } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '../src/Copyright';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { table, minifyRecords } from "./api/getUserData";
import { ItemsContext } from './api/context';

export default function Index({ initialItems }) {
  const router = useRouter();
  console.log("INITIAL ITEMS", initialItems);
  // console.log(router.query);
  const { items, setItems } = useContext(ItemsContext);
  // console.log(ItemsContext)
  // console.log("MAIN INDEX")

  useEffect(() => {
    setItems(initialItems);
  }, [initialItems, setItems]);

  return (
    <Container maxWidth="sm">
      <Box sx={{ mx: "auto", my: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Witaj {items ? items.name : null}
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          właśnie zeskanowałeś swój kod i możesz wziąć udział w quizie z gwarantowaną nagrodą.
        </Typography>
        <Button variant="contained" onClick={() => router.push('/introduction')} noLinkStyle>
          Przejdź do logowania
        </Button>
        <Copyright />
      </Box>
    </Container>
  );
}

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const items = await table.select({}).firstPage();
  const minified1 = minifyRecords(items, id)
  const minified2 = { ...minified1 }
  // const data = await minified.json()
  // console.log('fffffffffff', minified2[0])
  return {
    props: {
      initialItems: minified2[0],
    },
  }
}