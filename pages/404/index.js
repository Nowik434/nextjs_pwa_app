import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';

const error404 = () => {
    return (
        <Box sx={{ mx: "auto", my: 4, textAlign: 'center' }}>
            <Image src="/static/vcclogo.png" alt="gift" width={200} height={200} />
            <Typography variant="h4" component="h1" gutterBottom align="center">
                Muisz zeskanować kod jeszcze raz...
            </Typography>
        </Box>
    );
}

export default error404;