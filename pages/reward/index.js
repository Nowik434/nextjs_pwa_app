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

    const handleClick = (e) => {
        console.log(e.target.name)
        e.preventDefault();
        setReward(e.target.name);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('reward', reward)
        updateItem({
            id: items.id,
            fields: {
                reward: reward,
            }
        });
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



// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardHeader from '@mui/material/CardHeader';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import StarIcon from '@mui/icons-material/StarBorder';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
// import GlobalStyles from '@mui/material/GlobalStyles';
// import Container from '@mui/material/Container';
// import CardMedia from '@mui/material/CardMedia';

// import ksiazka from '../../public/images/ksiazka.jpg';


// const tiers = [
//     {
//         title: 'Książka',
//         img: '/ksiazka.jpg',
//         buttonText: 'Wybierz',
//         buttonVariant: 'outlined',
//     },
//     {
//         title: 'Kupon Empik',
//         img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//         buttonText: 'Wybierz',
//         buttonVariant: 'contained',
//     },
//     {
//         title: 'Ładowarka indukcyjna',
//         img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//         buttonText: 'Wybierz',
//         buttonVariant: 'outlined',
//     },
// ];

// function PricingContent() {
//     return (
//         <React.Fragment>
//             <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />

//             <Container maxWidth="md" component="main">
//                 <Grid container spacing={5} alignItems="flex-end">
//                     {tiers.map((tier) => (
//                         <Grid
//                             item
//                             key={tier.title}
//                             xs={12}
//                             sm={tier.title === 'Enterprise' ? 12 : 6}
//                             md={4}
//                         >
//                             <Card>
//                                 <CardHeader
//                                     title={tier.title}
//                                     titleTypographyProps={{ align: 'center' }}
//                                     subheaderTypographyProps={{
//                                         align: 'center',
//                                     }}
//                                     sx={{
//                                         backgroundColor: (theme) =>
//                                             theme.palette.mode === 'light'
//                                                 ? theme.palette.grey[200]
//                                                 : theme.palette.grey[700],
//                                     }}
//                                 />
//                                 <CardMedia
//                                     component="img"
//                                     height="140"
//                                     image={tier.img}
//                                     alt="green iguana"
//                                 />
//                                 <CardActions>
//                                     <Button fullWidth variant={tier.buttonVariant}>
//                                         {tier.buttonText}
//                                     </Button>
//                                 </CardActions>
//                             </Card>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Container>
//         </React.Fragment >
//     );
// }

// export default function Pricing() {
//     return <PricingContent />;
// }
