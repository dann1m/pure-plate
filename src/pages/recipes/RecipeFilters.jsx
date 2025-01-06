import { useState } from 'react';
import './RecipeFilters.css';

const RecipeFilters = ({ setQuery, setDiet, setExcludedIngredients }) => {
  const [excludedInput, setExcludedInput] = useState('');

  const handleExcludeSubmit = (e) => {
    e.preventDefault();
    setExcludedIngredients(excludedInput);
  };

  return (
    <div className="filters-container">
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={e => setQuery(e.target.value)}
        className="search-bar"
      />
      <select onChange={e => setDiet(e.target.value)} className="diet-filter">
        <option value="normal">Normal Meals</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="gluten free">Gluten Free</option>
        <option value="ketogenic">Ketogenic</option>
        <option value="pescatarian">Pescatarian</option>
        <option value="paleo">Paleo</option>
        <option value="low carb">Low Carb</option>
      </select>
      <form onSubmit={handleExcludeSubmit} className="exclude-form">
        <input
          type="text"
          placeholder="Exclude ingredients (comma-separated)"
          value={excludedInput}
          onChange={e => setExcludedInput(e.target.value)}
          className="exclude-input"
        />
        <button type="submit" className="exclude-btn">Apply</button>
      </form>
    </div>
  );
};

export default RecipeFilters;
