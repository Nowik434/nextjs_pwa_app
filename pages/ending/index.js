import React, { useState, useEffect, useContext } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import validator from 'validator'
import { ItemsContext } from '../api/context';
import Image from 'next/image';


const Ending = () => {
    const { items, updateItem } = useContext(ItemsContext);
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [isSubmited, setIsSubmited] = useState(false)


    const validateEmail = (e) => {
        var email = e.target.value
        setEmail(email)
        if (validator.isEmail(email)) {
            setEmailError('Podałeś poprawny adres email')
        } else {
            setEmailError('Błędny adres email!')
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        setIsSubmited(true)
        updateItem({
            id: items.id,
            fields: {
                email
            }
        })
    };

    return (
        !isSubmited ? (<Box sx={{ mx: "auto", my: 4, textAlign: 'center' }}>
            <Image src="/static/vcclogo.png" alt="gift" width={150} height={150} />
            <Typography variant="h4" component="h1" gutterBottom align="center">
                Dziękujemy za udział!
            </Typography>
            <FormControl sx={{ width: '37ch', mt: 2 }}>
                <TextField
                    id="outlined-basic"
                    label="Wpisz adres email"
                    variant="outlined"
                    helperText={emailError}
                    onChange={(e) => validateEmail(e)} />
                {emailError == 'Podałeś poprawny adres email' ? (<Button variant="contained" onClick={(e) => handleClick(e)} noLinkStyle sx={{ mt: 2 }}>
                    Zatwierdź
            </Button>) : (<Button variant="contained" disabled noLinkStyle sx={{ mt: 2 }}>
                        Musisz podać prawidłowy adres email
            </Button>)}
            </FormControl>
        </Box>) : (
                <Box sx={{ mx: "auto", my: 4, textAlign: 'center' }}>
                    <Image src="/static/vcclogo.png" alt="gift" width={150} height={150} />
                    <Typography variant="h5" component="h1" gutterBottom align="center">
                        Nagroda zostanie dostarczona na wskazany adres mailowy bądź adres Twojego zakładu pracy!
        </Typography>
                    <Image src="/static/gift.png" alt="gift" width={300} height={300} />
                </Box>
            )
    );
}

export default Ending;