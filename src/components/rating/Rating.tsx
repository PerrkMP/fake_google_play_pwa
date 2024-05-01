import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';

import React from 'react';
import Container from '@mui/material/Container';
import './Rating.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';
import StarRateIcon from '@mui/icons-material/StarRate';
import Box from "@mui/material/Box";


function Rating() {
  const breadcrumbs = [
    <Box key="1" className="Rating-item">
      <div>
        <span>4,9</span>
        <StarRateIcon sx={{ fontSize: "12px" }} />
      </div>
      <small>4.6K reviews</small>
    </Box>,
    <Box key="2" className="Rating-item">
      <span>10K + </span>
      <br />
      <small>Downloads</small>
    </Box>,
    <Box key="3" className="Rating-item">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><rect fill="none" width="20" height="20"></rect><path d="M10.54,11.09L8.66,9.22l-1.02,1.02l2.9,2.9l5.8-5.8l-1.02-1.01L10.54,11.09z M15.8,16.24H8.2L4.41,9.66L8.2,3h7.6l3.79,6.66 L15.8,16.24z M17,1H7L2,9.66l5,8.64V23l5-2l5,2v-4.69l5-8.64L17,1z"></path></svg>
      <br />
      <small>Editors Choice</small>
    </Box>,
  ];

  return (
    <div>
      <Container className="Rating" maxWidth="sm">
        <Stack spacing={2}>
          <Breadcrumbs separator="|" className="Rating-breadcrumbs">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </Container>
    </div>
  );
}

export default Rating;
