import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



export default function Introduction() {
    const router = useRouter()

    return (
        <Container maxWidth="sm">
            <Box sx={{ mx: "auto", my: 4, textAlign: 'center' }}>
                <Typography variant="h4" component="h1" gutterBottom align="center">
                    Witaj
        </Typography>
                <Typography variant="h4" component="h1" gutterBottom align="center">
                    rozwiąż poniższe zadania i uzyskaj nagrodę
        </Typography>
                <Button variant="contained" onClick={() => router.push('/quiz')} noLinkStyle>
                    Zaczynamy...
        </Button>
            </Box>
        </Container>
    );
}
