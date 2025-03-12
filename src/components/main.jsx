import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function Main() {
  const [ingredients, setIngredients] = useState([
    "Poha",
    "Tomato",
    "Onion",
    "Potato",
    "Green Chilli",
  ]);
  const [recipeResponse, setRecipeResponse] = useState(false);

  function checkResponse() {
    setRecipeResponse(true);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((preIngredients) => [...preIngredients, newIngredient]);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button type="submit">Add ingrediant</button>
      </form>

      {ingredients.length ? (
        <IngredientsList
          ingredients={ingredients}
          checkResponse={checkResponse}
        />
      ) : null}

      {recipeResponse ? <ClaudeRecipe /> : null}
    </main>
  );
}
