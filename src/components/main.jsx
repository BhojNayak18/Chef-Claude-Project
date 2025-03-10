import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  const ingredientsListItems = ingredients.map((ingredient, index) => {
    return <li key={index}>{ingredient}</li>;
  });

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

      <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">
          {ingredientsListItems}
        </ul>
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button>Get a recipe</button>
        </div>
      </section>
    </main>
  );
}
