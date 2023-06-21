import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          sx={{ gap: 50 }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Link to="/apprentis">
            <BottomNavigationAction label="Apprentis" />
          </Link>
          <Link to="/metiers">
            <BottomNavigationAction label="Métiers" />
          </Link>
          <Link to="/projets">
            <BottomNavigationAction label="Projets" />
          </Link>
          <Link to="/statistique">
            <BottomNavigationAction label="Statistique" />
          </Link>
          <Link to="/login">
            <BottomNavigationAction label="Login" />
          </Link>
        </BottomNavigation>
      </Box>
    </Box>
  );
}
