import React, {useState, useContext} from 'react';
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
    const [rodoIsChecked, setRodoIsChecked] = React.useState(false);
    const [marketingIsChecked, setMarketingIsChecked] = React.useState(false);
    const { items, setItems } = useContext(ItemsContext);
  console.log(items)


  const [item, setItem] = useState({
    id: 'recQA9ISKQXTrrcadds6',
    name: 'Anna Nowddddak',
    marketing: true,
    rodo: true
  });
  const { addItem } = useContext(ItemsContext);

  const handleSubmit = (e) => {
      console.log("HANDLE SUBMIT")
    e.preventDefault();
    console.log(item)
    addItem(item);
    setItem("");
  };
  

    return (
        <Container maxWidth="sm">
            
            <Box sx={{ mx: "auto", my: 4, textAlign: 'center' }}>
                <Typography variant="h4" component="h1" gutterBottom align="center">
                    Witaj {items.name}
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

                <form className="form my-6" onSubmit={handleSubmit}>
                <input
                type="text"
                name="item"
                value={item}
                // onChange={(e) => setItem(e.target.value)}
                placeholder="ex. Eggs"
                className="flex-1 border border-gray-200 p-2 mr-2 rounded-lg appearance-none focus:outline-none focus:border-gray-500"
                />
                <Button type="submit" variant="contained" noLinkStyle>
                    add item
                </Button>
                </form>

                <Button variant="contained" onClick={() => router.push('/quiz')} noLinkStyle>
                    Zatwierdź
        </Button>
            </Box>
        </Container>
    );
    }
