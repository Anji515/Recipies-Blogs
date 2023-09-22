import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecipeCard = ({ recipe }) => {
  const { title, slug, thumbnail, cookingTime } = recipe.fields;

  return (
    <div className="w-[90%] max-w-3xl mx-auto my-8 rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-blue-300 to-pink-300 transform transition duration-300 hover:scale-105 border-2 border-gray-300">
      <div className="relative  rounded-t-lg overflow-hidden">
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          alt="Thumbnail"
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
          className="w-full h-[300px]"
        />
        <div className="absolute bottom-0 left-0 p-2 bg-yellow-500 text-black font-semibold">
          <p>
            Takes approx <strong>{cookingTime}</strong> mins to Cook
          </p>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-2xl text-orange-800 font-bold">{title}</h4>
        <p className="text-blue-700 mt-2">
          <Link
            href={`/recipes/${slug}`}
            className="underline hover:text-blue-900 text-lg"
          >
            Cook This
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;