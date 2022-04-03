import { useState, useEffect } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import Post from './Post';
import { Button } from '@mui/material';
import { Fragment } from 'react';
import ScrollButton from './ScrollButton';
 
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const host = 'https://rendezvous2022.herokuapp.com';
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
  const [loading, setLoading] = useState(true);
  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    viewPost();
  }, []);
  async function viewPost() {
    const response = await fetch(`${host}/api/post/view`, {
      method: 'GET'

    });
    let json = await response.json();

    setPost(json.post.reverse());
    setLoading(false)
  }
  return (
    <Card>
      {/* <PerfectScrollbar> */}
        {loading ? <img src='https://c.tenor.com/gJLmlIn6EvEAAAAM/loading-gif.gif' style={{textAlign: 'center', marginLeft:"25vw"}}/> : <div className="container-fluid">
          <Table>

            <TableBody>
              {posts.map((post) => (
                <TableRow key={post._id}>
                  <TableCell style={{ borderBottomColor: "#d3d3d3" }}>
                    <Table>

                      <TableRow>

                        <Post uname={post.username} name={post.title} text={post.body} img={post.image} id={post._id} refreshPage={viewPost} likeCount = {post.like.length} date={post.date}/>
                      </TableRow>
                    </Table>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>}
      {/* </PerfectScrollbar> */}
      <ScrollButton />
    
      {/* <TablePagination
        component="div"
        count={posts.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      /> */}
    </Card>
  );
};

PostsListResults.propTypes = {
  posts: PropTypes.array.isRequired
};
