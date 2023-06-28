import React, { useEffect, useState } from 'react';
import { Button, Select, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import TeamService from '../../services/TeamService';
import { useUser } from '../../providers/UserProvider';
import { useTeam } from '../../providers/TeamProvider';

const ModalContent = ({ open, onClose }) => {
  const [teamOptions, setTeamOptions] = useState([]);
  const [teamPlayersResponse, setTeamPlayersResponse] = useState([]);
  const [teamGamesResponse, setTeamGamesResponse] = useState([]);
  const { userDataInformation, token } = useUser();
  const { teamSelected, setTeamSelected, setTeamPlayers, setTeamGames } = useTeam();

  useEffect(() => {
    if(open){
      getCaptainTeams()
    }
  }, [open]);

  useEffect(() => {
    if(teamPlayersResponse){
      prepareTeamPlayers()
    }
  }, [teamPlayersResponse]); //alterar isto para ficar identico ao que esta na modaladdplayer e modaldeleteplayer onde não 

  useEffect(() => {
    if(teamGamesResponse){
      prepareTeamGames()
    }
  }, [teamGamesResponse]);

  const handleCountryChange = (event) => {
    setTeamSelected(event.target.value);
  };

  const handleSubmit = () => {
    getTeamPlayers()
    getTeamGames()
    onClose()
  };

  const getCaptainTeams = async () => {
    try {
      const response = await TeamService.getCaptainListTeams(userDataInformation.name, token);
      if (response.message) {
        setTeamOptions(response.message)
      } else {
        
      }
    } catch (error) {

    }
  };

  const getTeamPlayers = async () => {
    try {
      const response = await TeamService.getListTeamPlayers(teamSelected, token);
      if (response.message) {
        setTeamPlayersResponse(response.message)
      } else {
        
      }
    } catch (error) {

    }
  };

  const prepareTeamPlayers = () => {
    const players = [];
    teamPlayersResponse.forEach((item, index) => {
      const { fullname, email } = item[0]; //passar aqui o email tambem, para depois ser possivel identificar quando estou a selecionar para eliminar
      const id = index + 1;
      const avatarUrl = `https://example.com/avatar${id}.jpg`;
  
      const personData = { id, name: fullname, avatarUrl, email: email }; //adicionar aqui o email tambem
      players.push(personData);
    });
    setTeamPlayers(players)
  };

  const getTeamGames = async () => {
    try {
      const response = await TeamService.getListTeamsGames(teamSelected, token);
      if (response.message) {
        setTeamGamesResponse(response.message)
      } else {
        
      }
    } catch (error) {

    }
  };

  const prepareTeamGames = () => {
    const games = [];
    teamGamesResponse.forEach((item, index) => {
      const { idTeam1, idTeam2 } = item;
      const id = index + 1;
      const team1Name = idTeam1;
      const team1AvatarUrl = `https://example.com/team${idTeam1}.jpg`;
      const team2Name = idTeam2;
      const team2AvatarUrl = `https://example.com/team${idTeam2}.jpg`;
  
      const personData = { id, team1Name, team1AvatarUrl, team2Name, team2AvatarUrl };
      games.push(personData);
    });

    setTeamGames(games)
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle style={{ fontWeight: 'bold' }}>Select your team to manage</DialogTitle>
      <DialogContent dividers>
        <Select value={teamSelected} onChange={handleCountryChange} fullWidth variant="outlined">
          {teamOptions.map((country, index) => (
            <MenuItem key={index} value={country}>
              {country}
            </MenuItem>
          ))}
        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} color="primary">Save</Button>
        <Button onClick={onClose} color="secondary">Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalContent;
