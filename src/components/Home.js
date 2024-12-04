import React from 'react';
import { Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Recipe Manager
      </Typography>
      <Typography variant="body1">
        Manage and explore your favorite recipes with ease.
      </Typography>
    </Box>
  );
};

export default Home;

