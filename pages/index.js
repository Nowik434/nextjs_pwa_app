import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '../src/Copyright';
import Button from '@mui/material/Button';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mx: "auto", my: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          moja appka
        </Typography>
        <Button variant="contained" onClick={() => router.push('/introduction')} noLinkStyle>
          strona główna
        </Button>
        <Copyright />
      </Box>
    </Container>
  );
}
