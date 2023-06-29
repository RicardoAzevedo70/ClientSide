import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';
import TeamService from '../../../services/TeamService';
import { useUser } from '../../../providers/UserProvider';
import { useTeam } from '../../../providers/TeamProvider';
import { useComponents } from '../../../providers/ComponentsProvider';
import PropTypes from 'prop-types';

const AddPlayer = ({ open, onClose }) => {
  const [playerEmail, setPlayerEmail] = useState('');
  const { token } = useUser();
  const { teamSelected, setTeamPlayers } = useTeam();
  const { setOpenSnackBar, setSnackBarInformation } = useComponents();

  const handleSubmit = () => {
    // Use the playerName state value as needed
    addTeamPlayer()
    onClose();
  };

  const handleChange = (event) => {
    setPlayerEmail(event.target.value);
  };

  const handleCancel = () => {
    setPlayerEmail('')//limpa o valor do jogador a adicionar
    onClose()
  }

  const addTeamPlayer = async () => {
    try {
      const response = await TeamService.addTeamPlayer(playerEmail, teamSelected, token); //passar aqui o email do artista
      if (response === 200) {
        getTeamPlayers()//fazer de novo o get dos jogadores para atualizar a lista
        setOpenSnackBar(true)
        setSnackBarInformation({severity: 'success', message: 'User added to the team!' })
      } 
    } catch (error) {

    }
  };

  const getTeamPlayers = async () => {
    try {
      const response = await TeamService.getListTeamPlayers(teamSelected, token);
      if (response.message) {
        prepareTeamPlayers(response.message) 
      }
    } catch (error) {

    }
  };

  const prepareTeamPlayers = (response) => {
    const players = [];
    response.forEach((item, index) => {
      const { fullname, email } = item[0]; //passar aqui o email tambem, para depois ser possivel identificar quando estou a selecionar para eliminar
      const id = index + 1;
      const avatarUrl = `https://example.com/avatar${id}.jpg`;
  
      const personData = { id, name: fullname, avatarUrl, email: email }; //adicionar aqui o email tambem
      players.push(personData);
    });
    setTeamPlayers(players)
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle style={{ fontWeight: 'bold' }}>Insert the email for your new player</DialogTitle>
      <DialogContent dividers>
        <TextField
          label="Player Email"
          value={playerEmail}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} color="primary">Add</Button>
        <Button onClick={handleCancel} color="secondary">Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

AddPlayer.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func
}

export default AddPlayer;
