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
import Image from 'next/image';

export default function Introduction() {
    const router = useRouter()
    const [rodoIsChecked, setRodoIsChecked] = useState(false);
    const [marketingIsChecked, setMarketingIsChecked] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const { items, setItems, updateItem } = useContext(ItemsContext);

    const [rodoReadMore, setRodoReadMore] = useState(false);
    const [marketingReadMore, setMarketingReadMore] = useState(false);

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
            <Image src="/static/vcclogo.png" alt="gift" width={150} height={150} />
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
                            Na podstawie art. 6 ust. 1 lit. a, art. 9 ust. 2 lit. a rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie {!rodoReadMore ? <Button sx={{ padding: '0px' }} onClick={() => setRodoReadMore(!rodoReadMore)}>Rozwiń...</Button> : null}{rodoReadMore ? ' ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych) Dz. Urz. UE L 119/1, z 4.5.2016, zwanego dalej „RODO” wyrażam zgodę na przetwarzanie następujących kategorii moich danych osobowych (adres mailowy), w celach marketingowych.' : null}
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
                            Wyrażam zgodę na kontakt ze strony Fundacji VCC w celach marketingowych na adres mailowy podany w tym formularzu. {!marketingReadMore ? <Button sx={{ padding: '0px' }} onClick={() => setMarketingReadMore(!marketingReadMore)}>Rozwiń...</Button> : null}{marketingReadMore ? 'Zostałem(-am) poinformowany(-a), że przysługuje mi prawo dostępu do swoich danych, możliwości ich poprawiania, żądania zaprzestania ich przetwarzania.' : null}
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
