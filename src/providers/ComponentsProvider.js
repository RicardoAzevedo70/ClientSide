import React, { useState, useContext } from "react";

const ComponentsContext = React.createContext();
export const useComponents = () => useContext(ComponentsContext);

const ComponentsProvider = ({ children }) => {
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [snackBarInformation, setSnackBarInformation] = useState({ severity: '', message: '' });

 return (
    <ComponentsContext.Provider value={{ openSnackBar, setOpenSnackBar, snackBarInformation, setSnackBarInformation }}>
      {children}
    </ComponentsContext.Provider>
 );
};

export default ComponentsProvider;
