import axios from 'axios';

const apiKey = '0919e682e1064ad0baed3560b05d2f46';
const baseUrl = 'https://api.spoonacular.com';

export const fetchRecipes = async (query) => {
  try {
    const response = await axios.get(`${baseUrl}/recipes/complexSearch`, {
      params: {
        query, // Recipe name or ingredient
        number: 10, // Limit results
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return null;
  }
};
