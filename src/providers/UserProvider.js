import React, { useState, useContext } from "react";

const UserContext = React.createContext();
export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
 const [userDataInformation, setUserDataInformation] = useState({});
 const [token, setToken] = useState("");

 return (
    <UserContext.Provider value={{ token, setToken, userDataInformation, setUserDataInformation}}>
      {children}
    </UserContext.Provider>
 );
};

export default UserProvider;
