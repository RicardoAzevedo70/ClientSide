import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, TablePagination } from '@mui/material';
import { useTeam } from '../../../providers/TeamProvider';

const useStyles = {
  tableContainer: {
    maxWidth: '90%',
    margin: '0 auto',
    marginTop: '90px',
    display: 'flex',
    flexDirection: 'column',
  },
  avatar: {
    width: 50,
    height: 50,
  },
  team2Cell: {
    textAlign: 'right',
  },
  middleCell: {
    textAlign: 'center',
  },
  awayTeamCell: {
    verticalAlign: 'bottom',
    textAlign: 'right',
    backgroundColor: '#4F6D8F',
    color: 'white',
  },
  homeTeamCell: {
    backgroundColor: '#4F6D8F',
    color: 'white',
  },
  avatarAwayTeam: {
    textAlign: 'right',
    display: 'flex',
    justifyContent: 'flex-end',
  },
};

const rowsPerPage = 8; 

const TeamGames = () => {
  const { teamGames } = useTeam();
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <TableContainer component={Paper} sx={useStyles.tableContainer}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={useStyles.homeTeamCell}>Home Team</TableCell>
            <TableCell sx={useStyles.awayTeamCell}></TableCell>
            <TableCell sx={useStyles.awayTeamCell}></TableCell>
            <TableCell sx={useStyles.awayTeamCell}></TableCell>
            <TableCell sx={useStyles.awayTeamCell}>Away Team</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(teamGames.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)).map((match) => (
            <TableRow key={match.id}>
              <TableCell>
                <Avatar alt={match.team1Name} src={match.team1AvatarUrl} sx={useStyles.avatar} />
              </TableCell>
              <TableCell >{match.team1Name}</TableCell>
              <TableCell sx={useStyles.middleCell}>vs</TableCell>
              <TableCell sx={useStyles.team2Cell}>{match.team2Name}</TableCell>
              <TableCell sx={useStyles.avatarAwayTeam}> 
                <Avatar alt={match.team2Name} src={match.team2AvatarUrl} sx={useStyles.avatar} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={teamGames.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
      />
    </TableContainer>
  );
};

export default TeamGames;
