import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login/Login';
import PasswordRecoveryForm from '../pages/Password-Recovery/PasswordRecovery';
import LogoutApp from '../pages/DropdownMenu-Options/Logout';
import ProfileModal from '../pages/DropdownMenu-Options/UserAccoount';
import MainPage from '../pages/Dashboard/KickOff';
import TeamApp from './TeamApp';
import TeamPlayers from '../pages/Dashboard/Team-Details/TeamDetails';
import TeamGames from '../pages/Dashboard/Team-Games/TeamGames';
import TeamManagement from '../pages/Dashboard/Team-Managment/TeamManagment';

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
          <Route path="team" element={<MainPage/>}>
            <Route path="team-players" element={<TeamPlayers/>} /> 
            <Route path="team-managment" element={<TeamManagement/>}/>
            <Route path="team-games" element={<TeamGames/>} /> 
          </Route>
          <Route path="*" element={<Navigate to={"/login"}/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default UserApp;
