import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Copyright from '../../src/Copyright';

import QuizComponent from '../../components/quizComponent/quizComponent';


export default function Quiz() {
    const router = useRouter()
    const [isRunning, setIsRunning] = useState(false)

    return (
        (isRunning ? (
            <QuizComponent />
        ) : (
                <Container maxWidth="sm">
                    <Box sx={{ mx: "auto", my: 4, textAlign: 'center' }}>
                        <Typography variant="h4" component="h1" gutterBottom align="center">
                            Rozwiąż Quiz aby uzyskać nagrodę
        </Typography>
                        <Typography variant="h4" component="h1" gutterBottom align="center">
                            odpowiedz na 5 prostych pytań i odbierz bon o wartości 50 zł!
        </Typography>
                        <Button variant="contained" onClick={() => setIsRunning(true)} noLinkStyle>
                            Zaczynamy...
        </Button>

                        <Copyright />
                    </Box>
                </Container>
            ))
    );
}
