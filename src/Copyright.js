import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{
      position: 'absolute',
      bottom: '10px',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }}>
      <MuiLink color="inherit" href="/">
        Paweł Nowicki
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
