import { useState,useEffect } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import Post from './Post';
import { Button } from '@mui/material';

const host = 'http://localhost:8080';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';


export const PostsListResults = () => {
  const [selectedpostIds, setSelectedpostIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [posts, setPost] = useState([]);
  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  
  useEffect(() => {
    viewPost();
  }, []);
async function viewPost() 
{
  const response = await fetch(`${host}/api/post/view`, {
    method: 'GET',
    headers: {
      "content-type": "application/json",
      authtoken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpvaG5Eb2UiLCJlbWFpbCI6IkRvZUpvaG5AZ21haWwuY29tIiwiaWF0IjoxNjQ4NjU0NDQ2fQ.9QdivBL63M7UiqDRyxrJZhZ4gvpRFPY2TORU3MhZaYI",
    },
    
  });
  let json = await response.json();
  
  console.log(json.post);
  setPost(json.post.reverse());
  
}
  return (
    <Card onload="viewPost()">
      <PerfectScrollbar>
      {/* <Button
        color="primary"
        variant="contained"
        onClick={(e) => {
          e.preventDefault();
          viewPost();
        }}
      >
      View
      </Button> */}
      {console.log(posts)}
        <div class="container-fluid">
          <Table>
            
            <TableBody>
              {posts.slice(0, posts.length).map((post) => (
                <TableRow>
                  {console.log(post)}
                  <TableCell style={{borderBottomColor:"#d3d3d3"}}>
                  <Table>
                   
                    <TableRow>
                    
                      <Post date="15th March" uname={post.username} name={post.title} text={post.body} img={post.image}/>
                    </TableRow>
                    </Table>
                  </TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </div>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={posts.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

PostsListResults.propTypes = {
  posts: PropTypes.array.isRequired
};
