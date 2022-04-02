import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { PostsListResults } from '../components/home/posts-list-results';
import { CustomerListToolbar } from '../components/home/posts-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { posts } from '../__mocks__/posts';
import Footer from 'src/components/home/Footer';

const Posts = () => (
  <>
    <Head>
      <title>
        Home
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <CustomerListToolbar />
        <Box sx={{ mt: 3 }}>
          <PostsListResults posts={posts} />
        </Box>
      </Container>
    </Box>
    <Footer/>
  </>
);
Posts.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Posts;
