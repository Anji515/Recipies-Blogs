import { createClient } from "contentful";
import RecipeCard from "../components/RecipeCard";

export default async function Recipes() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_SPACE_ID,
    accessToken: "xFc7VZCJl0DmbH33twQ0PMlL-1MFQgcl6KP9ynIU-gs",
  });

  const res = await client.getEntries(
    { content_type: "recipe" },
    {
      next: { revalidate: 10 },
    }
  );

  // console.log('recipes',res.items)

  // res.items.forEach((item) => console.log("fieldsData", item.fields.title));

  return (
    <div className="bg-orange-400 p-10">
      <h1 className="text-4xl w-1/5 text-center mx-auto font-bold text-blue-800 mb-8 relative group font-serif italic py-2 cursor-pointer">
        <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 transform skew-x-12 transition-transform duration-500 group-hover:scale-110"></span>
        <span className="relative z-10 text-white text-shadow-lg">Recipes</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 p-2">
        {res.items.map((recipe) => (
          <RecipeCard key={recipe.sys.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
