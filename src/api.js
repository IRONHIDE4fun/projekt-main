const APP_ID = 'cf06de8f';
const APP_KEY = '0baeaac1e69f4e6515cb62151af627bd';


export const fetchRecipes = async (query) => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  return data.hits;
};
