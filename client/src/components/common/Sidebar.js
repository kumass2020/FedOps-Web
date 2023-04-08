// Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 250,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 250,
          top: '64px', // AppBar height
          position: 'fixed',
        },
      }}
    >
      <List>
        {/* Add your sidebar menu items here */}
        <ListItem button>
          <ListItemIcon>
            {/* Add your icon here */}
          </ListItemIcon>
          <ListItemText primary="Menu Item 1" />
        </ListItem>
        {/* Add more menu items as needed */}
      </List>
    </Drawer>
  );
};

export default Sidebar;
