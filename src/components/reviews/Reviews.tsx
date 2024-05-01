import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';

import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Reviews.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Chip from '@mui/material/Chip';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LinearProgress from '@mui/material/LinearProgress';
import Button from "@mui/material/Button";


function Reviews() {
  const items = [
    <Box key="1" className="Reviews-item">
      <Box className="Reviews-item-header">
        <Box className="Reviews-item-author">
          <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          <Typography className="Reviews-item-author-name" variant="body1">
            Nikolay
          </Typography>
        </Box>
        <MoreVertIcon sx={{ fontSize: "24px", color: "#202124" }} />
      </Box>

      <Box className="Reviews-item-content">
        <Box className="Reviews-item-content-info">
          <Box className="Reviews-item-content-stars">
            <StarRateIcon sx={{ fontSize: "12px", fill: "#01875f" }} />
            <StarRateIcon sx={{ fontSize: "12px", fill: "#01875f" }} />
            <StarRateIcon sx={{ fontSize: "12px", fill: "#01875f" }} />
            <StarRateIcon sx={{ fontSize: "12px", fill: "#01875f" }} />
            <StarRateIcon sx={{ fontSize: "12px", fill: "#01875f" }} />
          </Box>
          <Typography className="Reviews-item-content-date" variant="body1">
            December 18, 2023
          </Typography>
        </Box>
        <Typography className="Reviews-item-content-text" variant="body1">
          It's a fantastic app. Started playing 2 minutes after installation!
        </Typography>
        <Typography className="Reviews-item-content-likes" variant="body1">
          This review was marked as helpful by 15 people
        </Typography>
        <Box className="Reviews-item-content-actions">
          <Typography className="Reviews-item-content-actions-question" variant="body1">
            Did you find this useful?
          </Typography>
          <Chip label="Yep" variant="outlined" />
          <Chip label="No" variant="outlined" />
        </Box>
      </Box>
    </Box>,
    <Box key="2" className="Reviews-item">
      <Box className="Reviews-item-header">
        <Box className="Reviews-item-author">
          <Avatar sx={{ bgcolor: deepPurple[500] }}>M</Avatar>
          <Typography className="Reviews-item-author-name" variant="body1">
            Mike
          </Typography>
        </Box>
        <MoreVertIcon sx={{ fontSize: "24px", color: "#202124" }} />
      </Box>

      <Box className="Reviews-item-content">
        <Box className="Reviews-item-content-info">
          <Box className="Reviews-item-content-stars">
            <StarRateIcon sx={{ fontSize: "12px", fill: "#01875f" }} />
            <StarRateIcon sx={{ fontSize: "12px", fill: "#01875f" }} />
            <StarRateIcon sx={{ fontSize: "12px", fill: "#01875f" }} />
            <StarRateIcon sx={{ fontSize: "12px", fill: "#01875f" }} />
            <StarRateIcon sx={{ fontSize: "12px", fill: "#01875f" }} />
          </Box>
          <Typography className="Reviews-item-content-date" variant="body1">
            December 18, 2023
          </Typography>
        </Box>
        <Typography className="Reviews-item-content-text" variant="body1">
          It's a fantastic app. Started playing 2 minutes after installation!
        </Typography>
        <Typography className="Reviews-item-content-likes" variant="body1">
          This review was marked as helpful by 15 people
        </Typography>
        <Box className="Reviews-item-content-actions">
          <Typography className="Reviews-item-content-actions-question" variant="body1">
            Did you find this useful?
          </Typography>
          <Chip label="Yep" variant="outlined" />
          <Chip label="No" variant="outlined" />
        </Box>
      </Box>
    </Box>,
  ];

  return (
    <div>
      <Container className="Reviews" maxWidth="sm">
        <Box>
          <Box className="Reviews-header">
            <Typography className="Reviews-header-title" variant="h3">
              Ratings and reviews
            </Typography>
            <ArrowForwardIcon />
          </Box>
        </Box>
        <Box className="Reviews-stats">
          <Box className="Reviews-stats-info">
            <Typography className="Reviews-stats-info-rating" variant="body1">
              4,9
            </Typography>
            <Box className="Reviews-stats-info-stars">
              <StarRateIcon sx={{ fontSize: "16px", fill: "#01875f" }} />
              <StarRateIcon sx={{ fontSize: "16px", fill: "#01875f" }} />
              <StarRateIcon sx={{ fontSize: "16px", fill: "#01875f" }} />
              <StarRateIcon sx={{ fontSize: "16px", fill: "#01875f" }} />
              <StarRateIcon sx={{ fontSize: "16px", fill: "#01875f" }} />
            </Box>
            <small>
              4.6K reviews
            </small>
          </Box>
          <Box className="Reviews-stats-bars" sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid className="Reviews-stats-bars-count" item xs={1}>
                5
              </Grid>
              <Grid item xs={11}>
                <LinearProgress sx={{ backgroundColor: "#e8eaed", height: "10px", borderRadius: "9999px" }} variant="determinate" value={86} />
              </Grid>
              <Grid className="Reviews-stats-bars-count" item xs={1}>
                4
              </Grid>
              <Grid item xs={11}>
                <LinearProgress sx={{ backgroundColor: "#e8eaed", height: "10px", borderRadius: "9999px" }} variant="determinate" value={4} />
              </Grid>
              <Grid className="Reviews-stats-bars-count" item xs={1}>
                3
              </Grid>
              <Grid item xs={11}>
                <LinearProgress sx={{ backgroundColor: "#e8eaed", height: "10px", borderRadius: "9999px" }} variant="determinate" value={8} />
              </Grid>
              <Grid className="Reviews-stats-bars-count" item xs={1}>
                2
              </Grid>
              <Grid item xs={11}>
                <LinearProgress sx={{ backgroundColor: "#e8eaed", height: "10px", borderRadius: "9999px" }} variant="determinate" value={2} />
              </Grid>
              <Grid className="Reviews-stats-bars-count" item xs={1}>
                1
              </Grid>
              <Grid item xs={11}>
                <LinearProgress sx={{ backgroundColor: "#e8eaed", height: "10px", borderRadius: "9999px" }} variant="determinate" value={0} />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box className="Reviews-items">
          {items}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button className="allReviewsButton" variant="text">See all reviews</Button>
        </Box>
      </Container>
    </div>
  );
}

export default Reviews;
