import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

export const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    username: 'username',
    // lastName: 'Smith',
    email: 'email',
    // phone: '',
    // state: 'Alabama',
    // country: 'USA'
  });

  useEffect(() => {
    if(localStorage.getItem('user')){

      setValues({
        username: JSON.parse(localStorage.getItem('user')).user.username,
        // lastName: 'Smith',
        email: JSON.parse(localStorage.getItem('user')).user.email,
        // phone: '',
        // state: 'Alabama',
        // country: 'USA'
      })
    }
  }, [])
  

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          // subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                // helperText="Please specify the first name"
                label="Username"
                name="username"
                // onChange={handleChange}
                required
                value={values.username}
                variant="outlined"
              />
            </Grid>
            
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                // onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            
            
            
          </Grid>
        </CardContent>
        <Divider />
        
      </Card>
    </form>
  );
};
