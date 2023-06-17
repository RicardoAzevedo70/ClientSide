import React, { useState } from 'react';
import { Typography, TextField, Button, Container, Grid } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import Logo from './../../img/logo.png';

const PasswordRecoveryForm = () => {
  const navigate = useNavigate();
  const [passwordRecoveryData, setPasswordRecoveryData] = useState({ email: '', password: '', confirmPassword: '' })

  const handlePasswordRecovery = () => {

  };

  const handleCancelPasswordRecovery = () => {
    navigate('/login');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPasswordRecoveryData((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div style={{ flex: '70%', backgroundColor: '#F8F8F8', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={Logo} alt='logotipo' style={{ width: '40%' }} />
      </div>
      <div style={{ flex: '30%', backgroundColor: '#4F6D8F', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container maxWidth="xs" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '25px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Recover your password!
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                variant="outlined"
                value={passwordRecoveryData.email}
                name="email"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="New Password"
                type="password"
                fullWidth
                variant="outlined"
                name="password"
                value={passwordRecoveryData.newPassword}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                variant="outlined"
                fullWidth
                value={passwordRecoveryData.confirmPassword}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="#F8F8F8"
            fullWidth
            onClick={handlePasswordRecovery}
            style={{ marginTop: '16px' }} 
          >
            Submit
          </Button>
          <Button
            variant="outlined"
            color="#F8F8F8"
            fullWidth
            onClick={handleCancelPasswordRecovery}
            style={{ marginTop: '16px' }} 
          >
            Cancel
          </Button>
        </form>
      </Container>
      </div>
    </div>
    
  );
};

export default PasswordRecoveryForm;
