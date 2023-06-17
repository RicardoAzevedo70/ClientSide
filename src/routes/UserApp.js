import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login/Login';
import PasswordRecoveryForm from '../pages/Password-Recovery/PasswordRecovery';
import LogoutApp from '../pages/DropdownMenu-Options/Logout';
import ProfileModal from '../pages/DropdownMenu-Options/UserAccoount';
import MainPage from '../pages/Dashboard/KickOff';

//tratar de fazer um componente para validar se esta ou nao autenticado
//criar um ficheiro apenas para as equipas(colocar o id como identificador nas rotas)
//userApp
//teamApp
const UserApp = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/kick-off" element={<MainPage/>}/>
          <Route exact path="/password-recovery" element={<PasswordRecoveryForm/>}/>
          <Route exact path="/logout" element={<LogoutApp/>}/>
          <Route exact path="/user-profile" element={<ProfileModal/>}/>
          <Route path="*" element={<Navigate to={"/login"}/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default UserApp;
