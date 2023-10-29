import axios from 'axios';

const APP_ID = '00365eab';
const APP_KEY = '120e49e15f5cc302351d80e7c4c0ae4b';

export const searchRecipes = async (query: string) => {
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data.hits;
  } catch (error) {
    console.error(error);
  }
};