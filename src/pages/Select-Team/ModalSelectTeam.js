import React, { useState } from 'react';
import { Button, Select, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

const ModalContent = ({ open, onClose, onSave }) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const teams = ['Portugal', 'Brasil', 'Estados Unidos', 'Reino Unido'];

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleSubmit = () => {
    onSave(selectedCountry);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle style={{ fontWeight: 'bold' }}>Select your team to manage</DialogTitle>
      <DialogContent dividers>
        <Select value={selectedCountry} onChange={handleCountryChange} fullWidth variant="outlined">
          {teams.map((country, index) => (
            <MenuItem key={index} value={country}>
              {country}
            </MenuItem>
          ))}
        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} color="primary">Save</Button>
        <Button onClick={onClose} color="secondary">Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalContent;
