import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, IconButton, Fab } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

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

  const peopleData = [
    { id: 1, name: 'John Doe', avatarUrl: 'https://example.com/avatar1.jpg' },
    { id: 2, name: 'Jane Smith', avatarUrl: 'https://example.com/avatar2.jpg' },
    { id: 3, name: 'Alice Johnson', avatarUrl: 'https://example.com/avatar3.jpg' },
    // Add more people data as needed
  ];

  const handleDelete = (id) => {
    // Implement your logic to delete the record with the given id
    console.log(`Deleting record with id ${id}`);
  };

  const handleAdd = () => {
    // Implement your logic to add a new record
    console.log('Adding a new record');
  };

  return (
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
          {peopleData.map((person) => (
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
  );
};

export default TeamManagement;
