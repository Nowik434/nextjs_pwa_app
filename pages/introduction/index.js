import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Loading from '../../components/loading/loading';



function Introduction() {
    const router = useRouter()
    const [rodoIsChecked, setRodoIsChecked] = React.useState(false);
    const [marketingIsChecked, setMarketingIsChecked] = React.useState(false);
    const { user, error, isLoading } = useUser();
console.log(user)
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    if (user) {
    return (
        <Container maxWidth="sm">
            <Box sx={{ mx: "auto", my: 4, textAlign: 'center' }}>
                <Typography variant="h4" component="h1" gutterBottom align="center">
                    Witaj
        </Typography>
                <Typography variant="h4" component="h1" gutterBottom align="center">
                    rozwiąż zadania i uzyskaj nagrodę o wartści 50 zł.
        </Typography>

                <List sx={{ width: '100%', maxWidth: 1360, bgcolor: 'background.paper' }}>
                <ListItem>
                        <ListItemButton role={undefined} onClick={() => setRodoIsChecked(true)} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={false}
                                    tabIndex={-1}
                                    disableRipple
                                />
                            </ListItemIcon>
                            <ListItemText>

                            Wyrażam zgodę  na przetwarzanie moich danych osobowych, w celu wysyłania informacji handlowych drogą elektroniczną przez (nazwa administratora danych) zgodnie z europejskim rozporządzeniem o ochronie danych osobowych z dnia 27 kwietnia 2016 r. (Dz. Urz. UE L nr 119, str. 1) oraz ustawą z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną (Dz.U. 2002 nr 144 poz. 1204z zm.)
    
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>

                    <ListItem>
                        <ListItemButton role={undefined} onClick={() => setRodoIsChecked(true)} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={false}
                                    tabIndex={-1}
                                    disableRipple
                                />
                            </ListItemIcon>
                            <ListItemText>

                                Wyrażam zgodę  na przetwarzanie moich danych osobowych, w celu prowadzenia marketingu bezpośredniego za pośrednictwem połączeń telefonicznych przez (nazwa administratora danych) zgodnie z europejskim rozporządzeniem o ochronie danych osobowych z dnia 27 kwietnia 2016 r. (Dz. Urz. UE L nr 119, str. 1) oraz ustawą z dnia 16 lipca 2004 r. Prawo telekomunikacyjne (Dz.U. 2004 nr 171 poz. 1800 z zm.).
    
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>


                <Button variant="contained" onClick={() => router.push('/quiz')} noLinkStyle>
                    Zatwierdź
        </Button>
            </Box>
        </Container>
    );
    }
}


export default withPageAuthRequired(Introduction, {
    onRedirecting: () => <Loading />,
    onError: error => <p>{error.message}</p>
  })