import React from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Header from '../components/common/Header';
import ContentWrapper from '../components/common/ContentWrapper';


const WritePage = ({error}) => {
    const onSubmit = e => {
        e.preventDefault();
    }
    return (
      <div>
        <Header />
        <ContentWrapper>
          <Box
            sx={{
              marginTop: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
              <Grid item xs={12}>
                {error && <Typography color="error">{error}</Typography>}
              </Grid>
              <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                multiline
                name="description"
                label="Description"
                id="description"
                minRows="10"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Create
              </Button>
            </Box>
          </Box>
        </ContentWrapper>
      </div>
    );
};

export default WritePage;