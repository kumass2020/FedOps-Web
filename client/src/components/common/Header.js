import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>FedOps</Typography>
            <Button component={Link} to="/login" color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;