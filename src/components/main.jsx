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

      <ul className="ingredient-list">{ingredientsListItems}</ul>
    </main>
  );
}
