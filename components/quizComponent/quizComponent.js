import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router'
import { questions } from '../../pages/api/api';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ItemsContext } from '../../pages/api/context';
import Image from 'next/image';

export default function QuizComponent() {
    const router = useRouter()
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [secondTry, setSecondTry] = useState(false);

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

    const failureAttempt = (e) => {
        e.preventDefault();
        updateItem(item);
        router.push('/')
    }

    const resetTest = (e) => {
        e.preventDefault();
        setCurrentQuestion(0);
        setShowScore(false);
        setScore(0);
        setSecondTry(true)
        router.push('/quiz')
    }

    return (
        <Container maxWidth="sm" sx={{
            textAlign: 'center'
        }}>
            <Box sx={{ my: 4 }}>
                <Image src="/static/vcclogo.png" alt="gift" width={150} height={150} />
                {showScore ? (
                    <>
                        {score == 6 ?
                            <Typography variant="h5" component="h1" gutterBottom align="center">
                                Gratulacje! Udzieli??e??/a?? prawid??owo odpowiedzi na wszystkie pytania! Mo??esz teraz wybra?? nagrod??!
                                </Typography> : null
                        }
                        {score > 2 && score < 6 ?
                            <Typography variant="h5" component="h1" gutterBottom align="center">
                                Gratulacje! Odpowiedzia??e??/a?? prawid??owo na wi??kszo???? pyta??! Mo??esz teraz wybra?? nagrod??!
                                </Typography> : null
                        }
                        {score <= 2 ? (
                            <>
                                <Typography variant="h5" component="h1" gutterBottom align="center">
                                    Niestety odpowiedzia??e??/a?? b????dnie na wi??kszo???? pyta??! {!secondTry ? 'Mo??esz spr??bowa?? jeszcze raz!' : 'Nie mo??esz przyst??pi?? kolejny raz.'}
                                </Typography>
                            </>
                        ) : null
                        }
                        {score <= 2 && !secondTry ?
                            <Button variant="contained" size="large" onClick={(e) => !secondTry ? resetTest(e) : router.push('/')}>Spr??buj jeszcze raz</Button>
                            : null
                        }
                        {score <= 2 && secondTry ?
                            <Button variant="contained" size="large" onClick={(e) => failureAttempt(e)}>zako??cz test</Button>
                            : null
                        }
                        {score > 2 ?
                            <Button variant="contained" onClick={(e) => setScoreInDatabase(e)}>wybierz nagrod??{console.log(!secondTry, !score <= 2)}</Button> :
                            null
                        }
                    </>
                ) : (
                        <>
                            <Typography variant="h6" component="h2" gutterBottom align="center" sx={{ color: '#d2ab67' }}>
                                <span>Pytanie {currentQuestion + 1}</span>/{questions.length}
                            </Typography>
                            <Typography variant="h6" component="h1" gutterBottom align="center">{questions[currentQuestion].questionText}</Typography>
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
