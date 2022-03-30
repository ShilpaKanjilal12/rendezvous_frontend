import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Upload from './UploadButton'
export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="post-name" label="Name of the Post" variant="outlined" />
      <TextField id="standard-basic" label="Description" variant="standard" style={{width:"50vh"}}/>
      
      <Upload/>
      <Button
          color="primary"
          variant="contained"
        >
          
          Create
        </Button>
    </Box>
  );
}
