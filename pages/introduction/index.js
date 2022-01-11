import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
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
import { ItemsContext } from '../api/context';


export default function Introduction() {
    const router = useRouter()
    const [rodoIsChecked, setRodoIsChecked] = useState(false);
    const [marketingIsChecked, setMarketingIsChecked] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const { items, setItems, updateItem } = useContext(ItemsContext);

    const [rodoReadMore, setRodoReadMore] = useState(false);
    const [marketingReadMore, setMarketingReadMore] = useState(false);
    console.log(items)

    const [item, setItem] = useState();


    const handleClick = (e) => {
        e.preventDefault();
        setIsConfirmed(true)
        updateItem(item);
        setItem("");
        router.push('/quiz')
    };

    useEffect(() => {
        if (items === undefined) {
            router.push('/404')
        } else {
            setItem({
                id: items.id,
                fields: {
                    rodo: rodoIsChecked,
                    marketing: marketingIsChecked
                }
            })
        }
        // items ?
        // setItem({
        //     id: items.id,
        //     fields: {
        //         rodo: rodoIsChecked,
        //         marketing: marketingIsChecked
        //     }
        //   })
        // : router.push('/error404')
        console.log("checkedItems: ", item);
    }, [rodoIsChecked, marketingIsChecked]);


    return (
        <Container maxWidth="sm" sx={{ mx: "auto", my: 4, textAlign: 'center' }}>
            <Typography variant="h4" component="h1" gutterBottom align="center">
                Aby kontynuować zaznacz poniższe zgody.
        </Typography>

            <List sx={{ width: '100%', maxWidth: 1360, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemButton role={undefined} onClick={() => setRodoIsChecked(!rodoIsChecked)} dense>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={rodoIsChecked}
                                tabIndex={-1}
                                disableRipple
                            />
                        </ListItemIcon>
                        <ListItemText>
                            Wyrażam zgodę  na przetwarzanie moich danych osobowych, w celu wysyłania informacji handlowych drogą elektroniczną przez {!rodoReadMore ? <Button sx={{ padding: '0px' }} onClick={() => setRodoReadMore(!rodoReadMore)}>Rozwiń...</Button> : null}{rodoReadMore ? 'Fundację VCC zgodnie z europejskim rozporządzeniem o ochronie danych osobowych z dnia 27 kwietnia 2016 r. (Dz. Urz. UE L nr 119, str. 1) oraz ustawą z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną (Dz.U. 2002 nr 144 poz. 1204z zm.)' : null}

                        </ListItemText>
                    </ListItemButton>
                </ListItem>

                <ListItem>
                    <ListItemButton role={undefined} onClick={() => setMarketingIsChecked(!marketingIsChecked)} dense>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={marketingIsChecked}
                                tabIndex={-1}
                                disableRipple
                            />
                        </ListItemIcon>
                        <ListItemText>

                            Wyrażam zgodę  na przetwarzanie moich danych osobowych, w celu prowadzenia marketingu bezpośredniego za pośrednictwem połączeń telefonicznych przez {!marketingReadMore ? <Button sx={{ padding: '0px' }} onClick={() => setMarketingReadMore(!marketingReadMore)}>Rozwiń...</Button> : null}{marketingReadMore ? 'Fundację VCC zgodnie z europejskim rozporządzeniem o ochronie danych osobowych z dnia 27 kwietnia 2016 r. (Dz. Urz. UE L nr 119, str. 1) oraz ustawą z dnia 16 lipca 2004 r. Prawo telekomunikacyjne (Dz.U. 2004 nr 171 poz. 1800 z zm.).' : null}

                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
            {rodoIsChecked && marketingIsChecked ?
                (<Button variant="contained" onClick={(e) => handleClick(e)} noLinkStyle>
                    Przejdź dalej
                </Button>) :
                <Button variant="contained" disabled>Zaznacz wszystkie zgody aby przejść dalej</Button>
            }
        </Container>
    );
}
