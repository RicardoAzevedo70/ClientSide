import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';

const LogoutApp = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    setOpen(false);
    navigate('/login');
  };

  return (
    <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Are you sure you want to sign out?</DialogTitle>
    <DialogContent>
        <DialogContentText>
        Upon logging out, you will be logged out of your account.
        </DialogContentText>
    </DialogContent>
    <DialogActions>
        <Button onClick={handleClose} color="primary">
        Cancel
        </Button>
        <Button onClick={handleLogout} color="primary" autoFocus>
        Confirm
        </Button>
    </DialogActions>
    </Dialog>
  );
};

export default LogoutApp;
