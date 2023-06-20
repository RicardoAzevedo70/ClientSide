import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle, ArrowDropDown } from '@material-ui/icons';
import LogoutApp from '../pages/DropdownMenu-Options/Logout';
import ProfileModal from '../pages/DropdownMenu-Options/UserAccoount';

const UserDropdownMenu = ({ username }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openLogout, setOpenLogout] = useState(false);
  const [openProfileUser, setOpenProfileUser] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Lógica para redirecionar para a página de perfil
  const handleProfileClick = () => {
    handleMenuClose();
    setOpenProfileUser(true)
  };

  // Lógica para executar o logout do usuário
  const handleLogoutClick = () => {
    handleMenuClose();
    setOpenLogout(true);
  };

  const handleOnCloseModal = () => {
    // Lógica para abrir a modal de edição do perfil
    setOpenProfileUser(false)
  };

  return (
    <>
      <div style={{ flex: 1 }}></div>
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          backgroundColor: '#4F6D8F',
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px',
          zIndex: 1000
        }}
      >
        <div style={{ marginRight: '10px', color: 'white' }}>{username}</div>
        <IconButton color="inherit" onClick={handleMenuOpen}>
          <ArrowDropDown style={{ color: 'white' }} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          getContentAnchorEl={null}
        >
          <MenuItem onClick={handleProfileClick}>My profile</MenuItem>
          <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
        </Menu>
      </div>
      <LogoutApp open={openLogout} setOpen={setOpenLogout} />
      <ProfileModal open={openProfileUser} onClose={handleOnCloseModal} />
    </>
  );
};

export default UserDropdownMenu;
