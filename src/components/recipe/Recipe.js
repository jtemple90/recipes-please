import React from "react";
import style from './recipe.module.css'

const Recipe = ({title, calories, image, protein, carbs, fats, url}) => {
  return (
    <div className={style.recipe}>
      <img className={style.image} src={image} alt="" />
      <h2 className={style.name}>{title}</h2>
      <div className={style.info}>
        <p>
          <strong>Calories:</strong> {Math.floor(
            parseInt(calories)
          )}
        </p>
        <p>
          <strong>Protein:</strong> {Math.floor(
            parseInt(protein))}g
        </p>
        <p>
          <strong>Carbs:</strong> {Math.floor(
            parseInt(carbs))}
        </p>
        <p>
          <strong>Fats:</strong> {Math.floor(
            parseInt(fats)
          )}
        </p>
      </div>
      <div className={style.url}>
        <h3>Get The Recipe!</h3>
        <a href={"url"}>Click Here</a>
      </div>
      {/* <div className={style.ingredients}>
      <h3>Ingredients</h3>
        <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
     </div>  */}
    </div>
  );
}

export default Recipe