import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography} from '@mui/material';
import { Group, Settings, SportsFootball, ChevronRight } from '@mui/icons-material';
import PropTypes from 'prop-types';

const useStyles = {
  listItem: {
    display: 'flex',
    alignItems: 'center',
  },
  listItemText: {
    marginRight: '70px', 
  },
};

const Sidebar = ({ open, setOpen }) => {

  const handleCloseSidebar = () => {
    setOpen(false);
  };

  return (
    <Drawer variant="temporary" anchor="left" open={open} onClose={handleCloseSidebar}>
      <Typography variant="h6" align="center" style={{ marginBottom: '10px', backgroundColor: '#4F6D8F', color: 'white', padding: '10px', height: '50px' }}>Menu</Typography>
      <List>
        <ListItem button component={Link} to="/team/team-players" sx={useStyles.listItem}>
          <ListItemIcon>
            <Group />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ sx: useStyles.listItemText }}
            primary="See Team Players"
          />
          <ChevronRight />
        </ListItem>
        <ListItem button component={Link} to="/team/team-managment" sx={useStyles.listItem}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ sx: useStyles.listItemText }}
            primary="Team Management"
          />
          <ChevronRight />
        </ListItem>
        <ListItem button component={Link} to="/team/team-games" sx={useStyles.listItem}>
          <ListItemIcon>
            <SportsFootball />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ sx: useStyles.listItemText }}
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
