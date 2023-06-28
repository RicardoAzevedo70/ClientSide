import React, {useState} from 'react';
import TopBar from '../../components/AppBar';
import SnackBar from '../../components/SnackBar';
import { useComponents } from '../../providers/ComponentsProvider';
import { Outlet } from 'react-router-dom';

const MainPage = () => {
  const { openSnackBar, setOpenSnackBar, snackBarInformation } = useComponents();

  return (
    <div>
      {/* Conteúdo da Topbar da página principal */}
      <TopBar />

      <Outlet/>

      <SnackBar open={openSnackBar} onClose={setOpenSnackBar} severity={snackBarInformation.severity} message={snackBarInformation.message}/>
    </div>
  );
};

export default MainPage;
