import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Grid } from '@material-ui/core';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useUser } from '../../providers/UserProvider';
import UserService from '../../services/UserServices';

const ProfileModal = ({ open, onClose }) => {
  const { userDataInformation, setUserDataInformation } = useUser();

  //Guarda os valores dos campos quando estes são alterados
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserDataInformation((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const updatedUser = {
      name: userDataInformation.name,
      email: userDataInformation.email,
      fullname: userDataInformation.fullname,
      phonenumber: userDataInformation.phonenumber,
      birthdate: "",
      country: userDataInformation.country
    };
    saveUserData(updatedUser)
    onClose();
  };

  const saveUserData = async (userData) => {
    try {
      const response = await UserService.updateUserInformation(userData);
      if (response.message) {
        setUserDataInformation(response.message)
        console.log(response)
      }
    } catch (error) {

    }
  }

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
              name="name"
              value={userDataInformation.name}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number"
              name="phonenumber"
              value={userDataInformation.age}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
              label="Country"
              name="country"
              value={userDataInformation.country}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          {/* <Grid item xs={12}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                label="Birthday date"
                name="birthdate"
                value={userDataInformation.birthdate}
                onChange={handleInputChange}
                format="dd/MM/yyyy"
                fullWidth
              />
            </MuiPickersUtilsProvider>
          </Grid> */}
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              value={userDataInformation.email}
              onChange={handleInputChange}
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
