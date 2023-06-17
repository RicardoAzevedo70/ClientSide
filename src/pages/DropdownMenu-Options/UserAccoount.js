import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Select, MenuItem, FormControl, InputLabel, Grid } from '@material-ui/core';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const ProfileModal = ({ open, user, onSave, onClose }) => {
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [country, setCountry] = useState(user.country);
  const [birthdate, setBirthdate] = useState(user.birthdate);
  const [email, setEmail] = useState(user.email);

  //lista com as opções dos paises
  const countries = [
    'Portugal',
    'Brasil',
    'Estados Unidos',
    'Reino Unido',
  ];

  const handleSave = () => {
    const updatedUser = {
      name,
      age,
      country,
      birthdate,
      email
    };

    onSave(updatedUser);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleCancel}>
      <DialogTitle>My profile</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Country</InputLabel>
              <Select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                {countries.map((country) => (
                  <MenuItem key={country} value={country}>
                    {country}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                label="Birthday date"
                value={birthdate}
                onChange={setBirthdate}
                format="dd/MM/yyyy"
                fullWidth
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProfileModal;
