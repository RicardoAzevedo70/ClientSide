import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, IconButton, Fab } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { useTeam } from '../../../providers/TeamProvider';
import AddPlayer from './ModalAddPlayer';
import DeletePlayer from './ModalDeletePlayer';

const useStyles = makeStyles({
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
});

const TeamManagement = () => {
  const classes = useStyles();
  const [openAddPlayer, setOpenAddPlayer] = useState(false)
  const [openDeletePlayer, setOpenDeletePlayer] = useState(false)
  const [playerToDelete, setPlayerToDelete] = useState("")
  const { teamPlayers } = useTeam();

  const handleDelete = (id) => {
    const player = teamPlayers.find((player) => player.id === id);
    setPlayerToDelete(player.email)
    setOpenDeletePlayer(true)
  };

  const handleAdd = () => {
    setOpenAddPlayer(true)
  };

  const handleOnCloseModal = () => {
    setOpenAddPlayer(false)
  };

  const handleOnCloseModalDelete = () => {
    setOpenDeletePlayer(false)
  };

  return (
    <>
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Fab color="primary" aria-label="add" className={classes.addButton} onClick={handleAdd}>
        <AddIcon />
      </Fab>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.photoCell}>Photo</TableCell>
            <TableCell className={classes.homeTeamCell}>Name</TableCell>
            <TableCell className={classes.photoCell}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teamPlayers.map((person) => (
            <TableRow key={person.id}>
              <TableCell className={classes.photoRowCell}>
                <Avatar alt={person.name} src={person.avatarUrl} className={classes.avatar} />
              </TableCell>
              <TableCell>{person.name}</TableCell>
              <TableCell className={classes.deleteCell}>
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDelete(person.id)}
                  className={classes.deleteIcon}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <AddPlayer open={openAddPlayer} onClose={handleOnCloseModal}/>
    <DeletePlayer open={openDeletePlayer} onClose={handleOnCloseModalDelete} playerToDelete={playerToDelete} setPlayerToDelete={setPlayerToDelete}/>
    </>
  );
};

export default TeamManagement;
