import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
} from '@mui/material';
import SignInModal from './auth/SigninModal';

const NavBar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <AppBar position="static" sx={{background:"#fff", color:"#191D88", fontWeight:700}}>
      <Toolbar>
        <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            Your Logo
          </Typography>
          <div>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Products</Button>
            <Button color="inherit">About Us</Button>
            <Button color="inherit">Contact Us</Button>
            <Button color="inherit" onClick={handleOpenModal}>
              Sign In
            </Button>
          </div>
        </Container>
      </Toolbar>
      <SignInModal open={modalOpen} onClose={handleCloseModal} />
    </AppBar>
  );
};

export default NavBar;
