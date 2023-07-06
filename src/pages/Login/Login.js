import React, { useState } from 'react';
import { Typography, TextField, Button, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logo from './../../img/logoSemFundo.jpeg'
import UserService from './../../services/UserServices';
import { useUser } from '../../providers/UserProvider';
import { useTeam } from '../../providers/TeamProvider';
import { useComponents } from '../../providers/ComponentsProvider';
import SnackBar from '../../components/SnackBar';

const LoginForm = () => {
  const navigate = useNavigate();
  const [userInformation, setUserInformation] = useState({ email: '', password: '' });
  const { setUserDataInformation, setToken } = useUser();
  const { setCountries } = useTeam();
  const { openSnackBar, setOpenSnackBar, snackBarInformation, setSnackBarInformation } = useComponents();

  const handleLogin = async () => {
    try {
      const response = await UserService.login(userInformation);
      if (response.token) {
        setToken(response.token);
        getUserInformation();
        getAllCountry();
        setOpenSnackBar(true)
        setSnackBarInformation({severity: 'success', message: 'Successful login' })
        navigate('/kick-off');
      } else {
        setOpenSnackBar(true)
        setSnackBarInformation({severity: 'error', message: 'Login failed!' })
      }
      // navigate('/kick-off');
    } catch (error) {
      setOpenSnackBar(true)
      setSnackBarInformation({severity: 'error', message: 'Login failed!' })
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInformation((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const getAllCountry = async () => {
    try {
      const response = await UserService.getAllCountrys();
      if (response) {
        setCountries(response.message)
      }
    } catch (error) {
      
    }
  };

  const getUserInformation = async () => {
    try {
      const response = await UserService.getUserInformation(userInformation.email);
      if (response) {
        setUserDataInformation(response.message)
        console.log(response)
      }
    } catch (error) {
      
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div style={{ flex: '70%', backgroundColor: '#F8F8F8', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={Logo} alt='logotipo' style={{ width: '40%' }} />
      </div>
      <div style={{ flex: '30%', backgroundColor: '#4F6D8F', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Container maxWidth="xs" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '25px' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Welcome Back!
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  fullWidth
                  variant="outlined"
                  name="email"
                  value={userInformation.email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type="password"
                  fullWidth
                  variant="outlined"
                  name="password"
                  value={userInformation.password}
                  onChange={handleInputChange}
                  style={{ marginBottom: '16px' }}
                />
              </Grid>
            </Grid>
            <Button variant="contained" fullWidth onClick={handleLogin}> {/*color="#F8F8F8"*/}
              Login
            </Button>
          </form>
        </Container>
        <SnackBar open={openSnackBar} onClose={setOpenSnackBar} severity={snackBarInformation.severity} message={snackBarInformation.message}/>
      </div>
    </div>
  );
};

export default LoginForm;
