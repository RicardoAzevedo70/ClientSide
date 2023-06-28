import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';

const AddPlayer = ({ open, onClose }) => {
  const [playerEmail, setPlayerEmail] = useState('');

  const handleSubmit = () => {
    // Use the playerName state value as needed
    console.log(playerEmail);
    onClose();
  };

  const handleChange = (event) => {
    setPlayerEmail(event.target.value);
  };

  const handleCancel = () => {
    setPlayerEmail('')
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle style={{ fontWeight: 'bold' }}>Insert the email for your new player</DialogTitle>
      <DialogContent dividers>
        <TextField
          label="Player Email"
          value={playerEmail}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} color="primary">Add</Button>
        <Button onClick={handleCancel} color="secondary">Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddPlayer;
