import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';

import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Contacts.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LanguageIcon from '@mui/icons-material/Language';


function Contacts() {
  const items = [
    <Box key="1" className="Contacts-item">
      <LanguageIcon sx={{ fontSize: "18px", color: "#5f6368" }} />
      <Box sx={{ marginLeft: "16px" }}>
        <Typography className="Contacts-item-title" variant="body1">
          Site
        </Typography>
        <Typography className="Contacts-item-content" variant="body1">
          https://example.com
        </Typography>
      </Box>
    </Box>,
    <Box key="2" className="Contacts-item">
      <LanguageIcon sx={{ fontSize: "18px", color: "#5f6368" }} />
      <Box sx={{ marginLeft: "16px" }}>
        <Typography className="Contacts-item-title" variant="body1">
          Site 2
        </Typography>
        <Typography className="Contacts-item-content" variant="body1">
          https://example.com
        </Typography>
      </Box>
    </Box>,
  ];

  return (
    <div>
      <Container className="Contacts" maxWidth="sm">
        <Accordion className="Contacts-content">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Developer contact
          </AccordionSummary>
          <AccordionDetails>
            {items}
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
}

export default Contacts;
