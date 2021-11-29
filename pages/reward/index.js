// import React, { useState, useContext } from 'react';
// import { useRouter } from 'next/router'
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import { ItemsContext } from '../api/context';

// export default function Reward() {
//     const router = useRouter()
//     const [reward, setReward] = useState();

//     const { items, updateItem } = useContext(ItemsContext);

//     const handleClick = (e) => {
//         console.log(e.target.name)
//         e.preventDefault();
//         setReward(e.target.name);
//     }


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('reward', reward)
//         updateItem({
//             id: items.id,
//             fields: {
//                 reward: reward,
//             }
//         });
//         router.push('/ending')
//     }


//     return (
//         <Container maxWidth="sm" sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)'
//         }}>
//             <Box sx={{ my: 4 }}>
//                 <form onSubmit={(e) => handleSubmit(e)}>
//                     <Button sx={{
//                         p: 1,
//                         m: 1,
//                     }}
//                         name="Książka"
//                         variant="contained"
//                         size="large"
//                         key='11'
//                         onClick={(e) => handleClick(e)}
//                     >
//                         Książka
//                     </Button>
//                     <Button sx={{
//                         p: 1,
//                         m: 1,
//                     }}
//                         name="kupon empik"
//                         variant="contained"
//                         size="large"
//                         key='11'
//                         onClick={(e) => handleClick(e)}
//                     >
//                         Kupon Empik
//                     </Button>
//                     <Button sx={{
//                         p: 1,
//                         m: 1,
//                     }}
//                         name="Ładowarka indukcyjna"
//                         variant="contained"
//                         size="large"
//                         key='11'
//                         onClick={(e) => handleClick(e)}
//                     >
//                         Ładowarka indukcyjna
//                     </Button>

//                     <Button type="submit">Wyślij nagrodę</Button>
//                 </form>
//             </Box>
//         </Container>
//     )
// }



import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router'
import { ItemsContext } from '../api/context';
import CardMedia from '@mui/material/CardMedia';

import ksiazka from '../../public/static/ksiazka.jpg';
import empik from '../../public/static/empik.png';
import ladowarka from '../../public/static/ladowarka.png';

console.log('KSIAZKA', ksiazka)
const tiers = [
    {
        title: 'Książka',
        img: ksiazka.src,
        buttonText: 'Wybierz',
        buttonVariant: 'outlined',
    },
    {
        title: 'Kupon Empik',
        img: empik.src,
        buttonText: 'Wybierz',
        buttonVariant: 'outlined',
    },
    {
        title: 'Ładowarka indukcyjna',
        img: ladowarka.src,
        buttonText: 'Wybierz',
        buttonVariant: 'outlined',
    },
];



function PricingContent() {
    const router = useRouter()
    const [reward, setReward] = useState();
    const { items, updateItem } = useContext(ItemsContext);

    const handleClick = (e) => {
        console.log(e.target.name)
        e.preventDefault();
        tiers.buttonVariant = 'contained'
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
        <React.Fragment>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Grid container spacing={5} alignItems="flex-end" sx={{ mt: 8 }}>
                    {tiers.map((tier) => (
                        <Grid
                            item
                            key={tier.title}
                            xs={12}
                            sm={tier.title === 'Enterprise' ? 12 : 6}
                            md={4}
                        >
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={tier.img}
                                    alt="green iguana"
                                />
                                <CardActions>
                                    <Button onClick={(e) => handleClick(e)} fullWidth variant={tier.buttonVariant} name={tier.title}>
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Button type="submit">Wyślij nagrodę</Button>
            </form>
        </React.Fragment >
    );
}

export default function Pricing() {
    return <PricingContent />;
}
