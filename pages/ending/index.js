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
    const { items, setItems, updateItem } = useContext(ItemsContext);
    const [item, setItem] = useState();
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [isSubmited, setIsSubmited] = useState(false)


    const validateEmail = (e) => {
        var email = e.target.value
        setEmail(email)
        if (validator.isEmail(email)) {
            setEmailError('podałeś poprawny aders email')
        } else {
            setEmailError('Błędny adres email!')
        }
    }

    useEffect(() => {
        setItem({
            id: items.id,
            fields: {
                email
            }
        })
        console.log(email);
    }, [email, items.id]);

    const handleClick = (e) => {
        e.preventDefault();
        // console.log(e)
        setIsSubmited(true)
        updateItem(item);
        setItem("");
        // router.push('/quiz')
    };

    return (
        !isSubmited ? (<Box sx={{ mx: "auto", my: 4, textAlign: 'center' }}>
            <Typography variant="h4" component="h1" gutterBottom align="center">
                Dziękujemy za udział...
            </Typography>
            <FormControl sx={{ width: '37ch', mt: 2 }}>
                <TextField
                    id="outlined-basic"
                    label="Wpisz adres email do wysłania nagrody"
                    variant="outlined"
                    helperText={emailError}
                    onChange={(e) => validateEmail(e)} />
                <Button variant="contained" onClick={(e) => handleClick(e)} noLinkStyle sx={{ mt: 2 }}>
                    Zatwierdź
            </Button>
            </FormControl>
        </Box>) : (
                <>
                    <Typography variant="h4" component="h1" gutterBottom align="center">
                        Nagroda zostanie przesłana na podany przez Ciebie email w najbliższym czasie
        </Typography>
                    <Image src="/static/gift.png" alt="gift" width={500} height={500} />
                </>
            )
    );
}

export default Ending;