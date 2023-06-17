import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//tratar de fazer um componente para validar se esta ou nao autenticado
//criar um ficheiro apenas para as equipas(colocar o id como identificador nas rotas)
//userApp
//teamApp
const TeamApp = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/ver-equipa" /> 
          <Route path="/gestao-equipa"  />
          <Route path="/meus-jogos"  />
        </Routes>
      </div>
    </Router>
  );
};

export default TeamApp;
