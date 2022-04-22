import { useState } from "react";
import "./styles.css";

export default function App() {
  const mealList = document.getElementById("meal");
  const [ingredient, setIngredient] = useState("");

  const handleChange = (e) => {
    setIngredient(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!ingredient || /^\s*$/.test(ingredient)) {
      return;
    }
    getMealList(ingredient);
    setIngredient("");
  };

  function getMealList(props) {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${props}`)
      .then((response) => response.json())
      .then((data) => {
        let html = "";
        if (data.meals) {
          data.meals.forEach((meal) => {
            html += `
                  <div class="meal-item" data-id=${meal.idMeal}>
                    <div class="meal-image">
                      <img src=${meal.strMealThumb} alt="food" />
                    </div>
                    <div class="meal-name">
                      <h3>${meal.strMeal}</h3>
                    </div>
                  </div> 
          `;
          });
          mealList.classList.remove("none");
        } else {
          html = `
                  <div>
                    <h2>Sorry, no meal was found!</h2>
                    Kindly check your spelling or try using another ingredient.  
                  </div>      
          `;
          mealList.classList.add("none");
        }
        mealList.innerHTML = html;
      });
  }

  return (
    <div className="App">
      <div className="search-container">
        <div className="search-header">
          <h1>Meal-inator</h1>
          <div className="search-text">
            You got the ingredient. We got you the meal ideas.
          </div>
        </div>
        <form>
        <div className="search-input">
          <input
            className="input"
            placeholder="Enter key ingredient"
            value={ingredient}
            onChange={handleChange}
            id="search-input"
          />
          <button className="button" onClick={handleClick} id="search-button">
            Search
          </button>
        </div>
        </form>
      </div>
      <div className="results-container">
        <h3>Your Search Results:</h3>
        <div id="meal"></div>
      </div>
    </div>
  );
}
