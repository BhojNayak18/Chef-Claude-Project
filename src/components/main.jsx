export default function Main() {

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
        </main>
    )
}