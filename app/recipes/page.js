import RecipeCard from "../../components/RecipeCard";
import Loader from "../../components/Loader";
import { Suspense } from "react";
import { fetchRecipes } from "../server/getRecipes";

export default async function Recipes() {

  const recipes = await fetchRecipes()

     return (
    <div>
    <Suspense fallback={<Loader />}>
    <div className="bg-gradient-to-r from-blue-300 to-pink-300 p-20 min-h-screen">
     <h1 className="text-4xl w-4/5 md:w-1/5 text-center mx-auto font-bold text-blue-800 mb-8 relative group font-serif italic py-2 cursor-pointer">
        <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 transform skew-x-12 transition-transform duration-500 group-hover:scale-110"></span>
        <span className="relative z-10 text-white text-shadow-lg">Recipes</span>
      </h1>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-20">
         {recipes?.items?.map((recipe) => (
           <RecipeCard key={recipe.sys.id} recipe={recipe} /> 
             ))}
        </div>
      </div>
      </Suspense>
    </div>
  );
}

