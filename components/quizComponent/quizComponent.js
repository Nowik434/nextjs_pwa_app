import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { questions } from '../../pages/api/api';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function QuizComponent() {
    console.log(questions)
    const router = useRouter()
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                {showScore ? (
                    <>
                        <Typography variant="h4" component="h1" gutterBottom align="center">
                            Zdobyłeś {score} pkt. z {questions.length}
                        </Typography>
                        <Button onClick={() => router.push('/')}>Zaczynamy...</Button>
                    </>
                ) : (
                        <>
                            <Typography variant="h4" component="h1" gutterBottom align="center">
                                <span>Pytanie {currentQuestion + 1}</span>/{questions.length}
                            </Typography>
                            <Typography variant="h4" component="h1" gutterBottom align="center">{questions[currentQuestion].questionText}</Typography>
                            <Box sx={{
                                mx: "auto",
                                display: 'flex',
                                alignItems: 'flex-center',
                                flexDirection: 'column',
                                p: 1,
                                m: 1,
                                bgcolor: 'background.paper',
                            }}>
                                {questions[currentQuestion].answerOptions.map((answerOption) => (
                                    <Button sx={{
                                        p: 1,
                                        m: 1,
                                    }}
                                        variant="contained"
                                        size="large"
                                        key={answerOption.answerText}
                                        onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                                    >
                                        {answerOption.answerText}
                                    </Button>
                                ))}
                            </Box>
                        </>
                    )}
            </Box>
        </Container>
    )
}
