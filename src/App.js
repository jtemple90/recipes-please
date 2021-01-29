import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './components/recipe/Recipe'

const App = () => {
  const APP_ID = 'efe15b82';
  const APP_KEY = 'beb69207452cb99df452362e8d2a1a73';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')
  

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits)
      console.log(data.hits)

    // fetch(
    //   `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    // ).then(response => {
    //   response.json()
    // })
  }

  const updateSearch = e => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <h1>Recipes Please !</h1>
      
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-btn" type="submit" val>
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            image={recipe.recipe.image}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
            protein={recipe.recipe.totalNutrients["PROCNT"].quantity}
            carbs={recipe.recipe.totalNutrients["CHOCDF"].quantity}
            fats={recipe.recipe.totalNutrients["FAT"].quantity}
            url={recipe.recipe.url}
          />
        ))}
        ;
      </div>
    </div>
  );
} 
export default App;
