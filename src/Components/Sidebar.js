import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, makeStyles } from '@material-ui/core';
import { Group, Settings, SportsFootball, ChevronRight } from '@material-ui/icons';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  listItem: {
    display: 'flex',
    alignItems: 'center',
  },
  listItemText: {
    marginRight: '70px', // Espaço entre o texto e a seta
  },
}));

const Sidebar = ({ open, setOpen }) => {
  const classes = useStyles();

  const handleCloseSidebar = () => {
    setOpen(false);
  };

  return (
    <Drawer variant="temporary" anchor="left" open={open} onClose={handleCloseSidebar}>
      <Typography variant="h6" align="center" style={{ marginBottom: '10px', backgroundColor: '#4F6D8F', color: 'white', padding: '10px', height: '50px' }}>Menu</Typography>
      <List>
        <ListItem button component={Link} to="/team/team-players" className={classes.listItem}>
          <ListItemIcon>
            <Group />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ className: classes.listItemText }}
            primary="See Team Players"
          />
          <ChevronRight />
        </ListItem>
        <ListItem button component={Link} to="/team/team-managment" className={classes.listItem}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ className: classes.listItemText }}
            primary="Team Management"
          />
          <ChevronRight />
        </ListItem>
        <ListItem button component={Link} to="/team/team-games" className={classes.listItem}>
          <ListItemIcon>
            <SportsFootball />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ className: classes.listItemText }}
            primary="My Team Games"
          />
          <ChevronRight />
        </ListItem>
      </List>
    </Drawer>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func
}

export default Sidebar;
