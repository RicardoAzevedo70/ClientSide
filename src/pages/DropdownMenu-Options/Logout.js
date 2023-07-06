import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../providers/UserProvider';
import PropTypes from 'prop-types';

const LogoutApp = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const {setUserDataInformation, setToken} = useUser();
  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    setOpen(false);
    setUserDataInformation({})
    setToken("")
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

LogoutApp.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func
}

export default LogoutApp;
