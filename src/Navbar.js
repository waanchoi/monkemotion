import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = ['Home', 'Contribute', 'Research', 'About'];
const navItemsPath = ['', 'contribute', 'research', 'about'];


function Navbar(props) {
    const { window } = props;

    const [mobileOpen, setMobileOpen] = React.useState(false);


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MONKEMOTION
            </Typography>
            <Divider />
            {navItems.map((item, idx) => (
                <Link to={navItemsPath[idx]} style={{ textDecoration: 'none', }}>
                    <ListItemButton >
                        <Typography variant="body2" color={"primary"}>
                            {item}
                        </Typography>

                    </ListItemButton>
                </Link>
            ))
            }
        </Box >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <AppBar component="nav" style={{ zIndex: 99999 }} sx={{ bgcolor: "white" }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon color='primary' />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        color="primary"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        MONKEMOTION
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item, idx) => (
                            <Link to={navItemsPath[idx]} style={{ textDecoration: 'none', }}>
                                <Button key={item}>
                                    <Typography color="primary">{item}</Typography>
                                </Button>
                            </Link>

                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>

    );
}

export default Navbar;
