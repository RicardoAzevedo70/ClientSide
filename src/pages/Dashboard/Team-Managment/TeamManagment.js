import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, IconButton, Fab, TablePagination } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useTeam } from '../../../providers/TeamProvider';
import AddPlayer from './ModalAddPlayer';
import DeletePlayer from './ModalDeletePlayer';

const useStyles = {
  tableContainer: {
    maxWidth: '85%',
    margin: '0 auto',
    marginTop: '150px'
  },
  avatar: {
    width: 50,
    height: 50,
  },
  homeTeamCell: {
    backgroundColor: '#4F6D8F',
    color: 'white',
  },
  photoCell: {
    backgroundColor: '#4F6D8F',
    color: 'white',
    width: '200px',
  },
  photoRowCell: {
    width: '200px',
  },
  deleteIcon: {
    color: 'red',
  },
  deleteCell: {
    textAlign: 'right',
  },
  addButton: {
    position: 'absolute',
    top: '90px',
    right: '20px',
    backgroundColor: '#4F6D8F',
    color: 'white'
  },
};

const TeamManagement = () => {
  const [openAddPlayer, setOpenAddPlayer] = useState(false);
  const [openDeletePlayer, setOpenDeletePlayer] = useState(false);
  const [playerToDelete, setPlayerToDelete] = useState("");
  const { teamPlayers } = useTeam();
  const [page, setPage] = useState(0);
  const rowsPerPage = 8;
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleDelete = (id) => {
    const player = teamPlayers.find((player) => player.id === id);
    setPlayerToDelete(player.email);
    setOpenDeletePlayer(true);
  };

  const handleAdd = () => {
    setOpenAddPlayer(true);
  };

  const handleOnCloseModal = () => {
    setOpenAddPlayer(false);
  };

  const handleOnCloseModalDelete = () => {
    setOpenDeletePlayer(false);
  };

  return (
    <>
      <TableContainer component={Paper} sx={useStyles.tableContainer}>
        <Fab color="primary" aria-label="add" sx={useStyles.addButton} onClick={handleAdd}>
          <AddIcon />
        </Fab>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={useStyles.photoCell}>Photo</TableCell>
              <TableCell sx={useStyles.homeTeamCell}>Name</TableCell>
              <TableCell sx={useStyles.photoCell}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(teamPlayers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)).map((person) => (
              <TableRow key={person.id}>
                <TableCell sx={useStyles.photoRowCell}>
                  <Avatar alt={person.name} src={person.avatarUrl} sx={useStyles.avatar} />
                </TableCell>
                <TableCell>{person.name}</TableCell>
                <TableCell sx={useStyles.deleteCell}>
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDelete(person.id)}
                    sx={useStyles.deleteIcon}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={teamPlayers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
        />
      </TableContainer>
      <AddPlayer open={openAddPlayer} onClose={handleOnCloseModal} />
      <DeletePlayer open={openDeletePlayer} onClose={handleOnCloseModalDelete} playerToDelete={playerToDelete} setPlayerToDelete={setPlayerToDelete} />
    </>
  );
};

export default TeamManagement;
