import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Copyright from '../../src/Copyright';
import Loading from '../../components/loading/loading';
import QuizComponent from '../../components/quizComponent/quizComponent';


export default function Quiz() {
    const router = useRouter()
    const [isRunning, setIsRunning] = useState(false)


    return (
        (isRunning ? (
            <QuizComponent />
        ) : (
                <>
                    <Box sx={{ mx: "auto", my: 4, textAlign: 'center' }}>
                        <Typography variant="h4" component="h1" gutterBottom align="center">
                            Rozwiąż Quiz aby uzyskać nagrodę
                        </Typography>
                        <Typography variant="h7" component="h3" gutterBottom align="center">
                            odpowiedz na 6 pytań i odbierz gwarantowaną nagrodę!
                        </Typography>
                        <Button variant="contained" sx={{ p: 1, m: 3 }} onClick={() => setIsRunning(true)} noLinkStyle>
                            Rozpocznij...
                        </Button>
                    </Box>
                </>
            ))
    );
}
