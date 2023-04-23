// Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';

import ListItemButton from '@mui/material/ListItemButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';




const drawerWidth = 240;

const Sidebar = () => {
  return (
    // <Drawer
    //   variant="permanent"
    //   anchor="left"
    //   sx={{
    //     width: 250,
    //     flexShrink: 0,
    //     '& .MuiDrawer-paper': {
    //       width: 250,
    //       top: '64px', // AppBar height
    //       position: 'fixed',
    //     },
    //   }}
    // >
    //   <List>
    //     {/* Add your sidebar menu items here */}
    //     <ListItem button>
    //       <ListItemIcon>
    //         {/* Add your icon here */}
    //       </ListItemIcon>
    //       <ListItemText primary="Menu Item 1" />
    //     </ListItem>
    //     {/* Add more menu items as needed */}
    //   </List>
    // </Drawer>

    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {['Task'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Box>
    </Drawer>

  );
};

export default Sidebar;
