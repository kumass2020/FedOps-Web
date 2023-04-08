// App.js
import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Grid } from '@mui/material';
import Sidebar from './components/common/Sidebar';

const App = () => {
  return (
    <Box display="flex">
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6">My App</Typography>
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

export default App;