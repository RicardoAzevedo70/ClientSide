import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogTitle, DialogActions} from '@material-ui/core';
import TeamService from '../../../services/TeamService';
import { useUser } from '../../../providers/UserProvider';
import { useTeam } from '../../../providers/TeamProvider';
import { useComponents } from '../../../providers/ComponentsProvider';

const DeletePlayer = ({ open, onClose, playerToDelete, setPlayerToDelete }) => {
  const { token } = useUser();
  const { teamSelected, setTeamPlayers } = useTeam();
  const { setOpenSnackBar, setSnackBarInformation } = useComponents();

  const handleSubmit = () => {
    removeTeamPlayer()
    onClose();
  };

  const handleCancel = () => {
    setPlayerToDelete("") //limpa o valor do player a eliminar
    onClose()
  }
  
  const removeTeamPlayer = async () => {
    try {
      const response = await TeamService.removeTeamPlayer(playerToDelete, teamSelected, token); //passar aqui o email do artista
      if (response === 200) {
        getTeamPlayers() //se for removido com sucesso faço de novo o meu request para ir buscar os jogadores todos e atualizar a lista
        setOpenSnackBar(true)
        setSnackBarInformation({severity: 'error', message: 'User deleted from the team!' })
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
      <DialogTitle style={{ fontWeight: 'bold' }}>Are you sure you want delete this player?</DialogTitle>
      <DialogActions>
        <Button onClick={handleSubmit} color="primary">Yes</Button>
        <Button onClick={handleCancel} color="secondary">Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeletePlayer;
