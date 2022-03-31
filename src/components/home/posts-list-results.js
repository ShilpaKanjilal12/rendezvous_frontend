import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import Post from './Post';
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

export const PostsListResults = ({ posts, ...rest }) => {
  const [selectedpostIds, setSelectedpostIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <div class="container-fluid">
          <Table>
            
            <TableBody>
              {posts.slice(0, limit).map((post) => (
                <TableRow
                  hover
                  key={post.id}
                  selected={selectedpostIds.indexOf(post.id) !== -1}
                >
                  
                  <TableCell style={{borderBottomColor:"#d3d3d3"}}>
                  <Table>
                   
                    <TableRow>
                    
                      <Post date={post.createdAt} uname={post.creater.name} name={post.name} avatar={post.creater.avatarUrl}/>
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
