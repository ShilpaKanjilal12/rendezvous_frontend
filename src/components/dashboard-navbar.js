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
import { red } from '@mui/material/colors';
const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#123443",
  boxShadow: theme.shadows[3]
}));

export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;
  const [username,setUsername] = useState("");
  const [loggedin, setLoggedin] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('user')) {setLoggedin(true);
      setUsername(JSON.parse(localStorage.getItem('user')).user.username);
 }
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
          {/* <Typography> {loggedin && JSON.parse(localStorage.getItem('user')).username}</Typography>  */}
          <a  href="./account" style={{textDecoration:"none"}}>
          
          <Avatar aria-label="recipe" sx={{ bgcolor: red[500], width: 40, height: 40, marginLeft:"70vw"}}>
          <Typography
            fontSize={25}
          
           >
            {username.charAt(0)}
            </Typography>
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
