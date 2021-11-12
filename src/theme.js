import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#d2ab67',
    },
    secondary: {
      main: '#474c55',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
