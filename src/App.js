import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './components/recipe/Recipe'

const App = () => {
  const APP_ID = 'efe15b82';
  const APP_KEY = 'beb69207452cb99df452362e8d2a1a73';

  const [recipes, setRecipes] = useState([]);
  

  useEffect(() => {
    getRecipes()
  }, [])

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits)

    // fetch(
    //   `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    // ).then(response => {
    //   response.json()
    // })
  }

  return (
    <div className="App">
    <h1>Recipes Please</h1>
      <form className='search-form'>
        <input className='search-bar' type="text"/>
        <button className='search-btn' type='submit'>Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe />
      ))}
    </div>
  )
} 

export default App;
