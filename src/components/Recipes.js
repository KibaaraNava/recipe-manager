import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const recipes = [
  { id: 1, title: 'Spaghetti Bolognese', image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Chicken Curry', image: 'https://via.placeholder.com/150' },
];

const Recipes = () => {
  return (
    <Grid container spacing={3} justifyContent="center">
      {recipes.map(recipe => (
        <Grid item xs={12} sm={6} md={4} key={recipe.id}>
          <Card>
            <CardMedia component="img" height="140" image={recipe.image} alt={recipe.title} />
            <CardContent>
              <Typography variant="h5">{recipe.title}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Recipes;

