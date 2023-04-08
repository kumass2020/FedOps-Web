import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Grid, Button } from '@mui/material';
import Sidebar from '../components/common/Sidebar';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <Box display="flex">
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>FedOps</Typography>
                <Button component={Link} to="/login" color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Grid container>
                <Grid item>
                <Sidebar />
                </Grid>
                <Grid item xs>
                <Box component="main" flexGrow={1} p={3}>
                    <Toolbar /> {/* This is to keep the main content below the AppBar */}
                    <Container maxWidth="lg">
                    {/* Add your main content here */}
                    <Typography variant="h4">Main Content</Typography>
                    </Container>
                </Box>
                </Grid>
            </Grid>
        </Box>
    );
};


export default MainPage;