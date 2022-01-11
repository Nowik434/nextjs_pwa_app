import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const error404 = () => {
    return (
        <Box sx={{ mx: "auto", my: 4, textAlign: 'center' }}>
            <Typography variant="h4" component="h1" gutterBottom align="center">
                Muisz zeskanować kod jeszcze raz...
            </Typography>
        </Box>
    );
}

export default error404;