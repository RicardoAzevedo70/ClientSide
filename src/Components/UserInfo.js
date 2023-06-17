import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { Menu, SportsFootball } from '@material-ui/icons';
import UserDropdownMenu from './UserDropdownMenu';
import Sidebar from './Sidebar';
import ModalSelectTeam from './../pages/Select-Team/ModalSelectTeam'

const TopBar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openModal, setOpenModal] = useState(true);

  const handleToggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const handleToggleSelectTeam = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSave = (selectedCountry) => {
    // Fechar a modal
    handleCloseModal();
  };


  return (
    <>
      <AppBar position="fixed" style={{ backgroundColor: '#4F6D8F', height: '70px' }}>
        <Toolbar>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" onClick={handleToggleSidebar}>
              <Menu style={{ color: 'white' }} />
            </IconButton>
            <IconButton color="inherit" onClick={handleToggleSelectTeam}>
              <SportsFootball style={{ color: 'white', marginLeft: '10px', marginRight: '10px' }} />
            </IconButton>
            <Typography variant="h6" style={{ color: 'white' }}>
              F.C. Porto
            </Typography>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <UserDropdownMenu username="Seu Nome de Usuário" />
          </div>
        </Toolbar>
      </AppBar>
      <Sidebar open={openSidebar} setOpen={setOpenSidebar} />
      <ModalSelectTeam open={openModal} onClose={handleCloseModal} onSave={handleSave} />
    </>
  );
};

export default TopBar;
