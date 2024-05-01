import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';

import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './Description.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Description() {
  const securityCard = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          No information is available.
          <br />
          <br />
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  return (
    <div>
      <Container className="Description" maxWidth="sm">
        <Box>
          <Box className="Description-app">
            <Typography className="Description-app-title" variant="h3">
              About this game
            </Typography>
            <ArrowForwardIcon />
          </Box>
        </Box>
        <Box>
          <Typography className="Description-app-content" variant="body1">
            The legendary Fortune Tiger Slot is back and available on Blaze!
            Now there are even more winnings and bonuses! Easy registration,
            convenient deposits and 5 minutes to withdraw money!
            Download, register right now and catch your luck!
          </Typography>
        </Box>
        <Box className="Description-app-updates">
          <Typography className="Description-app-updates-title" variant="h4">
            Updated on
          </Typography>
          <Typography className="Description-app-updates-content" variant="body1">
            December 17, 2023
          </Typography>
        </Box>
        <Box>
          <Box className="Description-app-security">
            <Typography className="Description-app-security-title" variant="h3">
              Data security
            </Typography>
            <ArrowForwardIcon />
          </Box>
        </Box>
        <Box>
          <Typography className="Description-app-security-content" variant="body1">
            In this section, developers can specify how applications collect and use data.
          </Typography>
        </Box>
        <Card variant="outlined">{securityCard}</Card>
      </Container>
    </div>
  );
}

export default Description;
