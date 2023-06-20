import React, { useState } from 'react';
import { Typography, TextField, Button, Container, Grid, Snackbar } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import Logo from './../../img/logo.png';
import UserService from './../../services/UserServices';
import { useUser } from '../../providers/UserProvider';

const LoginForm = () => {
  const navigate = useNavigate();
  const [userInformation, setUserInformation] = useState({ email: '', password: '' });
  const { setUserDataInformation, setCountries, setToken } = useUser();

  const handleLogin = async () => {
    // try {
    //   const response = await UserService.login(userInformation);
    //   if (response.token) {
    //     setToken(response.token);
    //     getUserInformation();
    //     getAllCountry();
    //     navigate('/kick-off');
    //   } else {
    //     navigate('/password-recovery');
    //   }
    // } catch (error) {

    // }
    getUserInformation()
    // getAllCountry()
    navigate('/kick-off');
  };

  const handleForgotPassword = () => {
    navigate('/password-recovery');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInformation((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  //faz o pedido à API para ter os paises para apresentar no select. O pedido é feito incialmente devido ao tempo que é necessário para carregar todas as informações
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
      const response = await UserService.getUserInformation("Josecid@gmail.com"); //userInformation.email
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
            <Button variant="contained" color="#F8F8F8" fullWidth onClick={handleLogin}>
              Login
            </Button>
            <Button
              variant="outlined"
              color="#F8F8F8"
              fullWidth
              onClick={handleForgotPassword}
              style={{ marginTop: '16px' }}
            >
              Forgot Password
            </Button>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default LoginForm;
