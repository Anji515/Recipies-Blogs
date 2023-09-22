import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecipeCard = ({ recipe }) => {
  const { title, slug, thumbnail, cookingTime } = recipe.fields;

  return (
<div className="w-[70%] max-w-3xl mx-auto my-8 p-4 rounded-lg shadow-lg bg-yellow-300 transform transition duration-300 hover:translate-y-1 hover:shadow-xl">
  <div className="relative overflow-hidden rounded-t-lg">
    <img
      src={`https:${thumbnail.fields.file.url}`}
      alt="Thumbnail"
      width={thumbnail.fields.file.details.image.width}
      height={thumbnail.fields.file.details.image.height}
      className="w-full h-auto"
    />
    <div className="absolute bottom-0 left-0 p-2 bg-yellow-500 text-black font-semibold">
      <p>Takes approx <strong>{cookingTime}</strong> mins to Cook</p>
    </div>
  </div>
  <div className="p-4">
    <h4 className="text-2xl text-orange-600 font-bold">{title}</h4>
    <p className="text-blue-700 mt-2">
      <Link href={`/recipes/${slug}`} className="underline hover:text-blue-900">
        Cook This
      </Link>
    </p>
  </div>
</div>

  );
};

export default RecipeCard;
