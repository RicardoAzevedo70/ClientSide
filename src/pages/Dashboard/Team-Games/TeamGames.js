import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } from '@material-ui/core';

const useStyles = makeStyles({
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
});

const TeamGames = () => {
  const classes = useStyles();

  const matchData = [
    {
      id: 1,
      team1Name: 'Team A',
      team1AvatarUrl: 'https://example.com/teamA.jpg',
      team2Name: 'Team B',
      team2AvatarUrl: 'https://example.com/teamB.jpg',
    },
    {
      id: 2,
      team1Name: 'Team C',
      team1AvatarUrl: 'https://example.com/teamC.jpg',
      team2Name: 'Team D',
      team2AvatarUrl: 'https://example.com/teamD.jpg',
    },
    // Add more match data as needed
  ];

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.homeTeamCell}>Home Team</TableCell>
            <TableCell className={classes.awayTeamCell}></TableCell>
            <TableCell className={classes.awayTeamCell}></TableCell>
            <TableCell className={classes.awayTeamCell}></TableCell>
            <TableCell className={classes.awayTeamCell}>Away Team</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {matchData.map((match) => (
            <TableRow key={match.id}>
              <TableCell>
                <Avatar alt={match.team1Name} src={match.team1AvatarUrl} className={classes.avatar} />
              </TableCell>
              <TableCell >{match.team1Name}</TableCell>
              <TableCell className={classes.middleCell}>vs</TableCell>
              <TableCell className={classes.team2Cell}>{match.team2Name}</TableCell>
              <TableCell className={classes.avatarAwayTeam}> 
                <Avatar alt={match.team2Name} src={match.team2AvatarUrl} className={classes.avatar} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TeamGames;
