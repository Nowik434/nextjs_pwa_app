import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router'
import { questions } from '../../pages/api/api';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ItemsContext } from '../../pages/api/context';

export default function QuizComponent() {
    console.log(questions)
    const router = useRouter()
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const { items, updateItem } = useContext(ItemsContext);

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

    const item = {
        id: items.id,
        fields: {
            score: score,
        }
    }

    const setScoreInDatabase = (e) => {
        e.preventDefault();
        updateItem(item);
        router.push('/reward')
    }

    return (
        <Container maxWidth="sm" sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <Box sx={{ my: 4 }}>
                {showScore ? (
                    <>
                        <Typography variant="h4" component="h1" gutterBottom align="center">
                            Brawo !!! Zdobyłeś {score} pkt. z {questions.length} możesz teraz odebrać swoją nagrodę...
                        </Typography>
                        <Button variant="contained" onClick={(e) => setScoreInDatabase(e)}>wybierz nagrodę</Button>
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
