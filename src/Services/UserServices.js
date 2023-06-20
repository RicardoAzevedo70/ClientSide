import axios from 'axios';
const UserService = {
  login: async (userInformation) => {
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
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
        const response = await fetch('http://localhost:3000/auth/forgotpassword', {
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

  // getUserInformation: async (email) => {
  //   try {
  //     debugger
  //       const response = await fetch('http://localhost:3000/auth/userinformation', {
  //         method: 'post',
  //         headers: {
  //           'Content-type': 'application/json',
  //         },
  //         body: JSON.stringify(email),
  //       });
  //       const data = await response.json();
  //       return data;
  //     } catch (error) {
  //       console.log(error)
  //       throw new Error('Error occurred during login');
  //     }
  // },

  getUserInformation: async (email) => {
    try {
      const url = `http://localhost:3000/auth/userinformation`;
      const params = {
        email: email
      };
  
      const response = await axios.get(url, { params });
  
      return response.data;
    } catch (error) {
      throw new Error('Error occurred during login');
    }
  },

  // updateUserInformation: async (userInformation) => {
  //   try {
  //     debugger
  //       const response = await fetch('http://localhost:3000/auth/updateuserinformation', {
  //         method: 'post',
  //         headers: {
  //           'Content-type': 'application/json',
  //         },
  //         body: JSON.stringify(userInformation),
  //       });
  //       const data = await response.json();
  //       return data;
  //     } catch (error) {
  //       throw new Error('Error occurred during login');
  //     }
  // },
  updateUserInformation: async (userInformation) => {
    try {
      debugger
      const response = await axios.put('http://localhost:3000/auth/updateuserinformation', userInformation);
      return response.data;
    } catch (error) {
      throw new Error('Error occurred during login');
    }
  },


  getAllCountrys: async () => {
    try {
        const response = await fetch('http://localhost:3000/auth/getcountries', {
          method: 'get',
          headers: {
            'Content-type': 'application/json',
          },
          // body: JSON.stringify(),
        });
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error('Error occurred during login');
      }
  },
};

export default UserService;
