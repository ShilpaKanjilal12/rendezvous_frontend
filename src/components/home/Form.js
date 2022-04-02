import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
import {useState} from 'react';


const host = 'http://localhost:8080';

const Input = styled('input')({
  display: 'none',
});

async function createPost(router) {
  var filesSelected = document.getElementById("inputFileToLoad").files;

  if (filesSelected.length > 0) {
    var fileToLoad = filesSelected[0];

    var fileReader = new FileReader();

    fileReader.onloadend = async function () {
      var base64 = fileReader.result;
      let body = {
        title: document.getElementById('post-name').value,
        body: document.getElementById('standard-basic').value,
        image: base64
      }
      const response = await fetch(`${host}/api/post/create`, {
        method: 'POST',
        headers: {
          "content-type": "application/json",
          authtoken:
            JSON.parse(localStorage.getItem('user')).authtoken,
        },
        body: JSON.stringify(body),
      });
      let json = await response.json();
      
    router.push('/');
    }
    fileReader.readAsDataURL(fileToLoad);
  } else {
    let body = {
      title: document.getElementById('post-name').value,
      body: document.getElementById('standard-basic').value
    }
    const response = await fetch(`${host}/api/post/create`, {
      method: 'POST',
      headers: {
        "content-type": "application/json",
        authtoken:
        JSON.parse(localStorage.getItem('user')).authtoken,
      },
      body: JSON.stringify(body),
    });
    let json = await response.json();
    // console.log(json)
    router.push('/');
  }

}

export default function BasicTextFields() {
  const [creating, setCreating] = useState(false);
  const router = useRouter();
  return (
    <>
    {creating && <img src='https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif' width='100px' height='100px'/>} <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    > 
      <TextField id="post-name" label="Name of the Post" variant="outlined" />
      <TextField id="standard-basic" label="Description" variant="standard" style={{ width: "50vh" }} />

      <Stack direction="row" alignItems="center" spacing={2}>

        <label htmlFor="icon-button-file">
          <Input accept="image/*" id="icon-button-file" type="file" />
          <IconButton color="primary" aria-label="upload picture" component="span">
            {/* <PhotoCamera /> */}
            <input id="inputFileToLoad" type="file" />
            &ensp;
          </IconButton>
        </label>
      </Stack>
      <Button
        color="primary"
        variant="contained"
        onClick={async (e) => {
          e.preventDefault();
          setCreating(true);
          createPost(router);
          // router.push('/');
        }}
      >

        Create
      </Button>
    </Box>
    </>

  );
}
