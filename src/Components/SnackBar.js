import React from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const SnackBar = ({ open, onClose, message, severity }) => {
  const handleCloseSnackBar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    onClose(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleCloseSnackBar}>
        <Alert onClose={handleCloseSnackBar} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SnackBar;
