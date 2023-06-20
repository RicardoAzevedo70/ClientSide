import React, {useState} from 'react';
import TopBar from '../../components/UserInfo';
import TeamPlayers from './Team-Details/TeamDetails';
import TeamGames from './Team-Games/TeamGames';
import TeamManagment from './Team-Managment/TeamManagment';

const MainPage = () => {
  return (
    <div>
      {/* Conteúdo da Topbar da página principal */}
      <TopBar />

      {/* <TeamPlayers/>

      <TeamGames/> */}
      <TeamManagment/>
    </div>
  );
};

export default MainPage;
