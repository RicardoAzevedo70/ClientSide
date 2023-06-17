import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, makeStyles } from '@material-ui/core';
import { Group, Settings, SportsFootball, ChevronRight } from '@material-ui/icons';

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
        <ListItem button component={Link} to="/ver-equipa" className={classes.listItem}>
          <ListItemIcon>
            <Group />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ className: classes.listItemText }}
            primary="Ver Equipa"
          />
          <ChevronRight />
        </ListItem>
        <ListItem button component={Link} to="/gestao-equipa" className={classes.listItem}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ className: classes.listItemText }}
            primary="Gestão Equipa"
          />
          <ChevronRight />
        </ListItem>
        <ListItem button component={Link} to="/meus-jogos" className={classes.listItem}>
          <ListItemIcon>
            <SportsFootball />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ className: classes.listItemText }}
            primary="Meus Jogos"
          />
          <ChevronRight />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
