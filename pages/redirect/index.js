import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Box from '@mui/material/Box';

const Redirect = () => {
    const router = useRouter();
    return (
        <Box sx={{ mx: "auto", my: 6, textAlign: 'center' }}>
            <Image src="/static/vcclogo.png" alt="gift" width={200} height={200} />
            <Typography variant="h5" component="h3" gutterBottom align="center">
                Dziękujemy za udział w konkursie
            </Typography>
            <Button variant="contained" onClick={() => router.replace('https://kwalifikacje.vccsystem.eu/?page_id=198')} sx={{ mt: 6, mb: 4 }}>
                Przejdź do strony VCC
            </Button>
        </Box>
    );
}


export default Redirect;