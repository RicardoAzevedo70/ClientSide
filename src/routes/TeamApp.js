import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeamPlayers from '../pages/Dashboard/Team-Details/TeamDetails';
import TeamGames from '../pages/Dashboard/Team-Games/TeamGames';
import TeamManagement from '../pages/Dashboard/Team-Managment/TeamManagment';
 
const TeamApp = () => {
  return (
    <>
      <Route path="team-players" element={<TeamPlayers/>} /> 
      <Route path="team-managment" element={<TeamManagement/>}/>
      <Route path="team-games" element={<TeamGames/>} />
    </>
  );
};

export default TeamApp;
