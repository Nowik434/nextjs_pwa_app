import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

const Redirect = () => {
    const router = useRouter();
    return (
        <>
            <Typography variant="h3" component="h3" gutterBottom align="center">
                Dziękujemy za udział w konkursie
            </Typography>
            <Button variant="contained" onClick={() => router.replace('https://kwalifikacje.vccsystem.eu/?page_id=198')} sx={{ mb: 4 }}>
                Przejdź do strony VCC
            </Button>
        </>
    );
}

export default Redirect;