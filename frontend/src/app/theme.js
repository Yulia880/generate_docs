import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#761a2a', 
    },
    white: '#ffffff',
    black: '#000000',
    background: {
      default: '#F5F5F5', 
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', 
  },
  
  customColors: {
    accent: '#ff5722', 
    hover: '#4a90e2',  
    border: '#e0e0e0', 
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#761a2a', 
          '&:hover': {
            backgroundColor: '#9c2a2a', 
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#fefefe",
          "& .MuiInputBase-root": {
            minWidth: "189px",
            padding: "0px",
            input: {
              padding: "6px 12px"
            },
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "& .MuiAutocomplete-input": {
            marginLeft: "6px",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          display: "flex",
          height: "45px",
          padding: "0px 6px",
          alignItems: "center",
        },
      },
    },
  },
});

export default theme;
