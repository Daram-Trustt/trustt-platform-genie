import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0096C5',
    },
  },
  typography: {
    fontFamily: 'Source Sans Pro, sans-serif',
  },
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#001E27',
      },
    },
    MuiListItem: {
      root: {
        color: '#FFFFFF99',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
        },
      },
    },
  },
});

export default theme;
