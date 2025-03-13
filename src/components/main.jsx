import { useState } from "react";
import MistralRecipe from "./MistralRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai";

export default function Main() {
  const [ingredients, setIngredients] = useState([
    "Flattened Rice",
    "Tomato",
    "Onion",
    "Potato",
  ]);
  const [recipe, setRecipe] = useState("");

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
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
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      ) : null}

      {recipe ? <MistralRecipe recipe={recipe} /> : null}
    </main>
  );
}
