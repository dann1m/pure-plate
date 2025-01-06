import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="recipe-image"
      />
      <h3 className="recipe-title">{recipe.title}</h3>
    </div>
  );
};

export default RecipeCard;
