import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Bell as BellIcon } from '../icons/bell';
import { UserCircle as UserCircleIcon } from '../icons/user-circle';
import { Users as UsersIcon } from '../icons/users';
import { Typography } from '@mui/material';

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3]
}));

export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;

  const [loggedin, setLoggedin] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('user')) {setLoggedin(true);}
  }, [])
  
  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280
          },
          width: {
            lg: 'calc(100% - 280px)'
          }
        }}
        {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Typography> {loggedin && JSON.parse(localStorage.getItem('user')).username}</Typography> 
          <a  href="./account">
          <Avatar
            sx={{
              height: 40,
              width: 40,
              ml: 1,
              marginLeft:"70vw"
            }}
            src="https://www.logolynx.com/images/logolynx/4b/4beebce89d681837ba2f4105ce43afac.png"
            
          >
            
            <UserCircleIcon fontSize="small" />
          </Avatar>
          </a>
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func
};
