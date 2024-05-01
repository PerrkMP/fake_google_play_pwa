import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Title from './components/title/Title';
import Rating from './components/rating/Rating';
import InstallBtn from './components/installBtn/InstallBtn';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import DevicesIcon from '@mui/icons-material/Devices';
import Gallery from "./components/gallery/Gallery";
import Description from "./components/description/Description";
import Reviews from "./components/reviews/Reviews";
import Contacts from "./components/contacts/Contacts";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const wishIcon = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M7 3H17C18.1045 3 19 3.8955 19 5V21L12 18L5 21L5.01075 5C5.01075 3.8955 5.8965 3 7 3ZM12 15.824L17 18V5H7V18L12 15.824ZM13 7V9H15V11H13V13H11V11H9V9H11V7H13Z"></path></svg>
root.render(
  <React.StrictMode>
    <Title />
    <Rating />
    <InstallBtn />

    <Container maxWidth="sm">
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button className="wishButton" variant="text">{wishIcon} Add to wish list</Button>
      </Box>
    </Container>

    <Container maxWidth="sm" sx={{ paddingLeft: "24px", paddingRight: "24px" }}>
      <Box className="Avalible-device" sx={{ display: "flex", marginTop: "16px" }}>
        <DevicesIcon sx={{ fontSize: "20px", marginRight: "12px", marginTop: "4px", width: "20px", height: "20px", color: "#5f6368" }} />
        <Typography className="Avalible-device-text">
          Este app está disponível para todos os seus dispositivos.
        </Typography>
      </Box>
    </Container>

    <Gallery />
    <Description />
    <Reviews />
    <Contacts />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

