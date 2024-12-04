import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Recipe Detail</h2>
      <p>You are viewing details for recipe ID: {id}</p>
    </div>
  );
};

export default RecipeDetail;
