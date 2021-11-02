
import { Link } from 'react-router-dom'


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
         <Box ml='auto'width='20%' display='flex' alignItems='center' justifyContent='space-between'>

           <Link to="/" >Home  </Link>
          <Link to="/about" > About </Link> 
          <Link to="/posts" > Posts </Link> 
         </Box>
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}

