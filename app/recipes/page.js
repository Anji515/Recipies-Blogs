'use client'
import RecipeCard from "../components/RecipeCard";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Client from "../Contentful";

export default function Recipes() {

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await Client.getEntries({ content_type: "recipe" });
        setRecipes(res?.items || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-300 to-pink-300 p-20 min-h-screen">
      <h1 className="text-4xl w-4/5 md:w-1/5 text-center mx-auto font-bold text-blue-800 mb-8 relative group font-serif italic py-2 cursor-pointer">
        <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 transform skew-x-12 transition-transform duration-500 group-hover:scale-110"></span>
        <span className="relative z-10 text-white text-shadow-lg">Recipes</span>
      </h1>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-20">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.sys.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}

