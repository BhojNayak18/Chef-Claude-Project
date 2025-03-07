import { useState } from "react";

export default function Main() {
    const [ingredients, setIngredients] = useState([]);

    const ingredientsListItems = ingredients.map((ingredient, index) => {
        return <li key={index}>{ingredient}</li>
    })

    function handleSubmit(event) {
        event.preventDefault()
        const form = event.target
        const formData = new FormData(form)
        const newIngredient = formData.get("ingredient")
        setIngredients(preIngredients => [...preIngredients, newIngredient])
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text" 
                    placeholder="e.g. oregano" 
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button type="submit">Add ingrediant</button>
            </form>

            <ul className="ingredient-list">
                {ingredientsListItems}
            </ul>
        </main>
    )
}