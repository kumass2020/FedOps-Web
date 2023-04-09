import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
            <Box display="flex" flexGrow={1} justifyContent="space-between">
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography variant="h6" component="div">
                    FedOps
                    </Typography>
                </Link>
                <Button component={Link} to="/login" color="inherit">
                    Login
                </Button>
            </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;