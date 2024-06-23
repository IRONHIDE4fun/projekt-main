import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => (
  <AppBar position="static" sx={{ backgroundColor: '#FFA500' }}>
    <Toolbar>
      <Typography variant="h6">
        Wyszukiwarka Przepisów
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
