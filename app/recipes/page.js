
import { createClient } from "contentful";
import RecipeCard from "../components/RecipeCard";

export default async function Recipes() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_SPACE_ID,
    accessToken: "xFc7VZCJl0DmbH33twQ0PMlL-1MFQgcl6KP9ynIU-gs",
  });

  const res = await client.getEntries({ content_type: "recipe" }, {
      next: { revalidate: 10 }, }
  );

  // console.log('recipes',res.items)

  // res.items.forEach((item) => console.log("fieldsData", item.fields.title));

  return (
    <div>
      <h1 className="text-blue-800">Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-20 p-2">
      {res.items.map((recipe) => (
        <RecipeCard key={recipe.sys.id} recipe={recipe}/>
        ))}
      </div>
    </div>
  );
}
