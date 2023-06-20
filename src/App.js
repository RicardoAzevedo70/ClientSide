import React from 'react';
import UserApp from './routes/UserApp';
import UserProvider from './providers/UserProvider';

const App = () => {
  return (
    <UserProvider>
      <UserApp/>      
    </UserProvider>
  );
};

export default App;
