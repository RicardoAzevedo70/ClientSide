import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Grid, Select, MenuItem, InputLabel } from '@mui/material';
import { useUser } from '../../providers/UserProvider';
import UserService from '../../services/UserServices';
import { useTeam } from '../../providers/TeamProvider';
import { useComponents } from '../../providers/ComponentsProvider';
import PropTypes from 'prop-types';
import FormControl from '@mui/material/FormControl';


const ProfileModal = ({ open, onClose }) => {
  const { userDataInformation, setUserDataInformation } = useUser();
  const [formData, setFormData] = useState({});
  const { countries } = useTeam();
  const { setOpenSnackBar, setSnackBarInformation } = useComponents();

  // Guarda os valores dos campos quando estes são alterados
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const updatedUser = {
      name: formData.name || userDataInformation.name,
      email: formData.email || userDataInformation.email,
      fullname: formData.fullname || userDataInformation.fullname,
      phonenumber: formData.phonenumber || userDataInformation.phonenumber,
      birthdate: "",
      country: formData.country || userDataInformation.country
    };
    saveUserData(updatedUser);
    onClose();
  };

  const saveUserData = async (userData) => {
    try {
      const response = await UserService.updateUserInformation(userData);
      if (response.message) {
        getUserInformation();
        setOpenSnackBar(true);
        setSnackBarInformation({ severity: 'success', message: 'Updated user data!' });
      }else{
        setOpenSnackBar(true);
        setSnackBarInformation({ severity: 'error', message: 'Something goes wrong!' });
        setFormData(userDataInformation);
      }
    } catch (error) {
      setOpenSnackBar(true);
      setSnackBarInformation({ severity: 'error', message: 'Something goes wrong!' });
      setFormData(userDataInformation);
    }
  };

  const getUserInformation = async () => {
    try {
      const response = await UserService.getUserInformation(userDataInformation.email);
      if (response) {
        setUserDataInformation(response.message);
      }
    } catch (error) {

    }
  };

  const handleCancel = () => {
    setFormData(userDataInformation);
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
              value={formData.name || userDataInformation.name}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number"
              name="phonenumber"
              value={formData.phonenumber || userDataInformation.phonenumber}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Country</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="country"
                value={formData.country || userDataInformation.country}
                onChange={handleInputChange}
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
            <TextField
              label="Email"
              name="email"
              value={formData.email || userDataInformation.email}
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

ProfileModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func
}

export default ProfileModal;
