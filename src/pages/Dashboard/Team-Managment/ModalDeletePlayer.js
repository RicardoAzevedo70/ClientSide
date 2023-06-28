import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogTitle, DialogActions} from '@material-ui/core';
import TeamService from '../../../services/TeamService';
import { useUser } from '../../../providers/UserProvider';
import { useTeam } from '../../../providers/TeamProvider';

const DeletePlayer = ({ open, onClose }) => {
  const { token } = useUser();
  const { teamSelected } = useTeam();

  const handleSubmit = () => {
    // Use the playerName state value as needed
    onClose();
  };

  const handleCancel = () => {
    onClose()
  }

  const removeTeamPlayer = async () => {
    try {
      const response = await TeamService.removeTeamPlayer(teamSelected, "", token);
      if (response.message) {
        
      } else {
        
      }
    } catch (error) {

    }
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
