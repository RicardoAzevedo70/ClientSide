import axios from 'axios';
const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
const UserService = {
  login: async (userInformation) => {
    try {
      const response = await fetch(`${apiBaseUrl}auth/login`, {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(userInformation),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error occurred during login');
    }
  },
  recoveryPassword: async (recoveryPassword) => {
    try {
        const response = await fetch(`${apiBaseUrl}auth/forgotpassword`, {
          method: 'post',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(recoveryPassword),
        });
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error('Error occurred during login');
      }
  },
  getUserInformation: async (email) => {
    try {
      const url = `${apiBaseUrl}auth/userinformation`;
      const params = {
        email: email
      };
  
      const response = await axios.get(url, { params });
  
      return response.data;
    } catch (error) {
      throw new Error('Error occurred during login');
    }
  },
  updateUserInformation: async (userInformation) => {
    try {
      const response = await axios.put(`${apiBaseUrl}auth/updateuserinformation`, userInformation);
      return response.data;
    } catch (error) {
      throw new Error('Error occurred during login');
    }
  },
  getAllCountrys: async () => {
    try {
        const response = await fetch(`${apiBaseUrl}auth/getcountries`, {
          method: 'get',
          headers: {
            'Content-type': 'application/json',
          },
        });
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error('Error occurred during login');
      }
  },
};

export default UserService;
