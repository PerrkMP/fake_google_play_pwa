import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';

import React from 'react';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import img1 from './1.png';
import img2 from './2.png';
import './Gallery.css';

function Gallery() {
  return (
    <div>
      <Container className="Gallery" maxWidth="sm">
        <Box className="Gallery-collection">
          <Paper className="Gallery-img" elevation={3}>
            <img src={img1} alt="img" />
          </Paper>
          <Paper className="Gallery-img" elevation={3}>
            <img src={img2} alt="img" />
          </Paper>
        </Box>
      </Container>
    </div>
  );
}

export default Gallery;
