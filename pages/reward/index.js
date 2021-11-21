import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ItemsContext } from '../api/context';

export default function Reward() {
    const router = useRouter()
    const [reward, setReward] = useState();

    const { items, updateItem } = useContext(ItemsContext);


    const item = {
        id: items.id,
        fields: {
            reward: reward,
        }
    }

    const handleClick = (e) => {
        console.log(e.target.name)
        e.preventDefault();
        setReward(e.target.name);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('reward', reward)
        updateItem(item);
        router.push('/ending')
    }


    return (
        <Container maxWidth="sm" sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <Box sx={{ my: 4 }}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <Button sx={{
                        p: 1,
                        m: 1,
                    }}
                        name="Książka"
                        variant="contained"
                        size="large"
                        key='11'
                        onClick={(e) => handleClick(e)}
                    >
                        Książka
                    </Button>
                    <Button sx={{
                        p: 1,
                        m: 1,
                    }}
                        name="kupon empik"
                        variant="contained"
                        size="large"
                        key='11'
                        onClick={(e) => handleClick(e)}
                    >
                        Kupon Empik
                    </Button>
                    <Button sx={{
                        p: 1,
                        m: 1,
                    }}
                        name="Ładowarka indukcyjna"
                        variant="contained"
                        size="large"
                        key='11'
                        onClick={(e) => handleClick(e)}
                    >
                        Ładowarka indukcyjna
                    </Button>

                    <Button type="submit">Wyślij nagrodę</Button>
                </form>
            </Box>
        </Container>
    )
}
