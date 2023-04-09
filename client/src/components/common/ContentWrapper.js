import React from 'react';
import { Toolbar, Container, Box, Grid } from '@mui/material';
import Sidebar from './Sidebar';

const ContentWrapper = ({children}) => {
    return (
        <Grid container>
            <Grid item>
            <Sidebar />
            </Grid>
            <Grid item xs>
            <Box component="main" flexGrow={1} p={3}>
                <Toolbar /> {/* This is to keep the main content below the AppBar */}
                <Container maxWidth="lg">
                    {/* Add your main content here */}
                    {children}    
                </Container>
            </Box>
            </Grid>
        </Grid>
    );
};

export default ContentWrapper;