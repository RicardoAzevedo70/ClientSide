import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } from '@material-ui/core';

const useStyles = makeStyles({
  tableContainer: {
    maxWidth: '80%',
    margin: '0 auto',
    marginTop: '90px'
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
  }
});

const TeamPlayers = () => {
  const classes = useStyles();

  const peopleData = [
    { id: 1, name: 'John Doe', avatarUrl: 'https://example.com/avatar1.jpg' },
    { id: 2, name: 'Jane Smith', avatarUrl: 'https://example.com/avatar2.jpg' },
    { id: 3, name: 'Alice Johnson', avatarUrl: 'https://example.com/avatar3.jpg' },
    // Add more people data as needed
  ];

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.photoCell}>Photo</TableCell>
            <TableCell className={classes.homeTeamCell}>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {peopleData.map((person) => (
            <TableRow key={person.id}>
              <TableCell className={classes.photoRowCell}>
                <Avatar alt={person.name} src={person.avatarUrl} className={classes.avatar} />
              </TableCell>
              <TableCell>{person.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TeamPlayers;
