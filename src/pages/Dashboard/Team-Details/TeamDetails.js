import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, TablePagination } from '@mui/material';
import { useTeam } from '../../../providers/TeamProvider';

const useStyles = { 
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
  },
};

const rowsPerPage = 8;

const TeamPlayers = () => {
  const { teamPlayers } = useTeam();

  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  return (
    <TableContainer component={Paper} sx={useStyles.tableContainer}> 
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={useStyles.photoCell}>Photo</TableCell>
            <TableCell sx={useStyles.homeTeamCell}>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(teamPlayers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)).map((person) => (
            <TableRow key={person.id}>
              <TableCell sx={useStyles.photoRowCell}>
                <Avatar alt={person.name} src={person.avatarUrl} sx={useStyles.avatar} />
              </TableCell>
              <TableCell>{person.name}</TableCell>
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
  );
};

export default TeamPlayers;
