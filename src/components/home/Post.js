import Box from '@mui/material/Box';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CardActionArea } from '@mui/material';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import {useEffect, useState} from 'react';

const host = 'http://localhost:8080';

var likes;

async function deletePost(id){
  let response = await fetch(`${host}/api/post/delete/${id}`,{
    method:'DELETE',
    headers:{
      authtoken: JSON.parse(localStorage.getItem('user')).authtoken
    }
  });

}

async function likePost(id, setLikes){
  let response = await fetch(`${host}/api/post/like/${id}`,{
    method: 'GET',
    headers:{
      authtoken: JSON.parse(localStorage.getItem('user')).authtoken
    }
  })
  let json = await response.json();
  if(response.status === 200) {
    console.log("success");
    console.log(json)
    setLikes(json.like.length)
  }else{
    console.log("error")
  }
}

export default function RecipeReviewCard(props) {
  
  const router = useRouter();
  const [expanded, setExpanded] = React.useState(false);
  const [likes, setLikes] = useState(props.likeCount);

  // useEffect(() => {
  //   document.getElementById('likebtn').addEventListener('click',()=>{
  //     console.log("Like clicked!")
  //   })
  // }, [])
  

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const src = props.img;
  var src2=src;
  return (<>
    <div class="container-fluid">
      <Card style={{ width: "75vw" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.name}
          subheader={"Posted by " + props.uname + " | " + props.date}
        />
        {src && <CardActionArea href="">
          {
            String(src2).substring(5, 10).localeCompare("image") === 0 ? <CardMedia
              component="img"
              // height="194"
              image={src}
              alt="Paella dish"
            /> : <CardMedia
            controls="true"
              component="video"
              // height="194"
              image={src}
              autoPlay
              alt="Paella dish"
            />
          }

        </CardActionArea>}
        <CardContent>
          <Typography variant="body2" color="text.secondary">

            {props.text}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          {/* <IconButton aria-label="add to favorites">
            <FavoriteIcon id="likebtn"/>
          </IconButton> */}
          {localStorage.getItem('user') && <Button onClick={()=>{console.log("Like!"); likePost(props.id, setLikes)}}>💗 {likes}</Button>}
          {props.uname.localeCompare(JSON.parse(localStorage.getItem('user')).user.username)===0 && <Button onClick={()=>{
            deletePost(props.id)
            
          router.push('/');}}>Delete Post</Button>}
        </CardActions>
      </Card>
    </div>

  </>
  );
}
