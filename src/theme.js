import { createTheme } from '@mui/material';
let theme = createTheme({

    palette: {
        primary: { main: "#4b6587", contrastText: "#fff" },
        secondary: { main: "#f0e5cf", contrastText: "#fff" },

        monkemotion: {
            primary: {
                main: "#4b6587"
            },
            secondary: {
                main: "#f0e5cf",
            },
            light: {
                main: "#c8c6c6"
            },
            lighter: {
                main: "#f7f6f2"
            },

        }



    },

    typography: {
        body1: {
            lineHeight: 1.75,
        },
        body2: {
            lineHeight: 1.75,
        }
    },
});



export default theme