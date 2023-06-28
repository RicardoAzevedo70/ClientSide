import React, { useState, useContext } from "react";

const TeamContext = React.createContext();
export const useTeam = () => useContext(TeamContext);

const TeamProvider = ({ children }) => {
 
 const [countries, setCountries] = useState([])
 const [teamSelected, setTeamSelected] = useState([])
 const [teamPlayers, setTeamPlayers] = useState([])
 const [teamGames, setTeamGames] = useState([])

 return (
    <TeamContext.Provider value={{ countries, setCountries, teamSelected, setTeamSelected, teamPlayers, setTeamPlayers, teamGames, setTeamGames }}>
      {children}
    </TeamContext.Provider>
 );
};

export default TeamProvider;
