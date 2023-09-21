import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecipeCard = ({ recipe }) => {
  const { title, slug, thumbnail, cookingTime } = recipe.fields;

  return (
    <div className="w-[90%] max-w-3xl mx-auto my-8 p-4 rounded-lg shadow-lg bg-white">
  <div className="relative">
    <div className="overflow-hidden rounded-t-lg">
      <img
        src={`https:${thumbnail.fields.file.url}`}
        alt="Thumbnail"
        width={thumbnail.fields.file.details.image.width}
        height={thumbnail.fields.file.details.image.height}
        className="w-full h-auto"
      />
    </div>
    <div className="absolute bottom-0 left-0 p-2 bg-yellow-500 text-white font-semibold">
      <p>Takes approx {cookingTime} mins to Cook</p>
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
