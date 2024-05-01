import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';

import React from 'react';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from './logo.png';
import './Title.css';

function Title() {
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  return (
    <div>
      <Container className="Title" maxWidth="sm">
        <Paper className="Title-logo" elevation={3}>
          <img src={logo} alt="logo" />
        </Paper>
        <Box className="Title-app">
          <Typography className="Title-app-name" variant="h1">
            Fortune Tiger
          </Typography>
          <Typography className="Title-app-company">
            Quality App
          </Typography>
          <Typography className="Title-app-info" gutterBottom>
            Contains ads{bull}In-app purchases
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default Title;
