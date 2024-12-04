import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import Home from './components/Home';
import AddRecipe from './components/AddRecipe';
import RecipeDetail from './components/RecipeDetail';
import Recipes from './components/Recipes';

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Recipe Manager
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/recipes">Recipes</Button>
          <Button color="inherit" component={Link} to="/add-recipe">Add Recipe</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Box my={4}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:id" element={<RecipeDetail />} />
            <Route path="/add-recipe" element={<AddRecipe />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
};

export default App;
