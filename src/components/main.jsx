export default function Main() {
    const ingredients = ["Mashroom", "Oregano", "Tomato"];

    const ingredientsListItems = ingredients.map((ingredient, index) => {
        return <li key={index}>{ingredient}</li>
    })

    return (
        <main>
            <form className="add-ingredient-form">
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