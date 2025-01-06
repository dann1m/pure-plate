import { useState, useEffect } from 'react';
import './Recipes.css';
import RecipeCard from './RecipeCard';
import RecipeFilters from './RecipeFilters';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [query, setQuery] = useState(''); // Search query
  const [diet, setDiet] = useState(''); // Filter by diet
  const [excludedIngredients, setExcludedIngredients] = useState(''); // Exclude ingredients

  // Fetch recipes from Spoonacular API
  useEffect(() => {
    const fetchRecipes = async () => {
      const API_KEY = '0919e682e1064ad0baed3560b05d2f46';
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=12&addRecipeInformation=true`
      );
      const data = await response.json();
      setRecipes(data.results);
      setFilteredRecipes(data.results); // Initialize filtered recipes
    };
    fetchRecipes();
  }, []);

  // Handle filters and search
  useEffect(() => {
    let filtered = recipes;

    // Filter by dietary restriction
    if (diet) {
      filtered = filtered.filter(recipe => {
        return diet === 'normal'
          ? true // Include all recipes for "Normal Meals"
          : recipe.diets.includes(diet);
      });
    }

    // Filter by search query
    if (query) {
      filtered = filtered.filter(recipe =>
        recipe.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filter out excluded ingredients
    if (excludedIngredients) {
      const excludedList = excludedIngredients.toLowerCase().split(',').map(ing => ing.trim());
      filtered = filtered.filter(recipe =>
        !excludedList.some(ingredient =>
          recipe.usedIngredients?.some(item => item.name.includes(ingredient))
        )
      );
    }

    setFilteredRecipes(filtered);
  }, [query, diet, excludedIngredients, recipes]);

  return (
    <div className="recipes-page">
      <h1 className="recipes-header">Discover Recipes</h1>
      <RecipeFilters
        setQuery={setQuery}
        setDiet={setDiet}
        setExcludedIngredients={setExcludedIngredients}
      />
      <div className="recipes-grid">
        {filteredRecipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
