import React from 'react';
import UserApp from './routes/UserApp';
import UserProvider from './providers/UserProvider';
import TeamProvider from './providers/TeamProvider';
import ComponentsProvider from './providers/ComponentsProvider';

const App = () => {
  return (
    <UserProvider>
      <TeamProvider>
        <ComponentsProvider>
          <UserApp/>    
        </ComponentsProvider>
      </TeamProvider>  
    </UserProvider>
  );
};

export default App;
