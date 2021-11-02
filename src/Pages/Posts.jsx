import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import Post from "../Components/Post";
import Skeleton from "../Components/Skeleton";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const delay = (microSeconds) =>
    new Promise((resolve) => setTimeout(() => resolve(), microSeconds));
  const getPosts = async () => {
    setLoading(true);
    await delay(2000);
    /**
     * To pass the cypress test replace url with https://jsonplaceholder.typicode.com/posts
     */
    const response = await fetch("https://jsonplaceholdersdsd");
    const data = await response.json();
    if(data){
        setLoading(false);
        setPosts(data);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <Box p={5} id='posts'>
      <Typography variant="h2">Posts</Typography>
      {loading ? (
        <Typography id="post-count" variant="subtitle2">
          Loading...
        </Typography>
      ) : (
        <Typography id="post-count" variant="subtitle2">
          Showing {posts.length} posts
        </Typography>
      )}
      
        {loading ? (
        <Grid container spacing={2} mt={5} id='loading-grid'>  <Skeleton copies={10} /></Grid>
        ) : (
            <Grid id='data-grid' container spacing={2} mt={5}>
          {posts.map((post) => (
            <Post
              key={post.id}
              title={post.title}
              body={post.body}
              id={post.id}
            />
          ))}
      </Grid>
        )}
    </Box>
  );
};
