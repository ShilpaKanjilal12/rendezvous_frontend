import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { red } from '@mui/material/colors';
// const user = {
//   avatar: '/static/images/avatars/avatar_6.png',
//   // city: 'Los Angeles',
//   // country: 'USA',
//   // jobTitle: 'Senior Developer',
//   username: JSON.parse(localStorage.getItem('user')).user.username,
//   email: JSON.parse(localStorage.getItem('user')).user.email
//   // timezone: 'GTM-7'
// };

export const AccountProfile = (props) => {
  const router = useRouter();
  const [profile, setProfile] = useState({
    avatar: 'https://www.logolynx.com/images/logolynx/4b/4beebce89d681837ba2f4105ce43afac.png',
    username: 'sample username',
    email: 'sample email'
  })

  useEffect(() => {
    if (localStorage.getItem('user')) {

      setProfile({
        avatar: 'https://www.logolynx.com/images/logolynx/4b/4beebce89d681837ba2f4105ce43afac.png',
        // city: 'Los Angeles',
        // country: 'USA',
        // jobTitle: 'Senior Developer',
        username: JSON.parse(localStorage.getItem('user')).user.username,
        email: JSON.parse(localStorage.getItem('user')).user.email
      })
    } else {
      router.push('/login')
    }
  }, [])

  return (
    <Card {...props}
    sx={{
      backgroundColor: '#123443',
      
    }}
    >
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
            
          }}
        >
          <Avatar aria-label="recipe" sx={{ bgcolor: red[500], width: 67, height: 67}}>
          <Typography
            fontSize={35}
           >
            {profile.username.charAt(0)}
            </Typography>
            </Avatar>
          <Typography
            marginTop={2}
            color="white"
            gutterBottom
            variant="h5"
          >
            {profile.username}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
            
          >
            {`${profile.email}`}
          </Typography>

        </Box>
      </CardContent>
      <Divider />
    </Card>
  )
};
