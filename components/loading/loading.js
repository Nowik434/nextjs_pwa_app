import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';

const Loading = () => {
    return (
        <Box sx={{ mx: "auto", my: 4, textAlign: 'center' }}>
            <Image src="/static/vcclogo.png" alt="gift" width={200} height={200} />
        </Box>
    );
}

export default Loading;
