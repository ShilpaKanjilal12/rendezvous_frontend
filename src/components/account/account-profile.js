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
  const [profile, setProfile] = useState({
    avatar: '/static/images/avatars/avatar_6.png',
    username: 'sample username',
    email: 'sample email'
  })

  useEffect(() => {
    setProfile({avatar: '/static/images/avatars/avatar_6.png',
    // city: 'Los Angeles',
    // country: 'USA',
    // jobTitle: 'Senior Developer',
    username: JSON.parse(localStorage.getItem('user')).user.username,
    email: JSON.parse(localStorage.getItem('user')).user.email})
  }, [])

  return (
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            src={profile.avatar}
            sx={{
              height: 64,
              mb: 2,
              width: 64
            }}
          />
          <Typography
            color="textPrimary"
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
