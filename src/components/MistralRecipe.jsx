import ReactMarkdown from "react-markdown";

export default function MistralRecipe(props) {
  return (
    <section className="suggested-recipe-container">
      <h1>Chef Mistral Recommends:</h1>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}
