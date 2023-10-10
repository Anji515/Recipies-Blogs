'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { analytics,logEvent } from "../app/utils/firebaseAnalytics";

const RecipeCard = ({ recipe }) => {
  const { title, slug, thumbnail, cookingTime, rating } = recipe.fields;

  return (
    <div onClick={()=>{
      logEvent(analytics,`Choosen the item ${title}`)
    }} 
    className="w-[100%] md:w-[90%] mx-auto my-8 rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-blue-300 to-pink-300 transform transition duration-300 hover:scale-105 border-2 border-grey-300" >
        <div className="relative  rounded-t-lg overflow-hidden">
          <Image
            src={`https:${thumbnail.fields.file.url}`}
            alt="Thumbnail"
            width={thumbnail.fields.file.details.image.width}
            height={thumbnail.fields.file.details.image.height}
            // className="h-[250px]"
          />
          <div className="absolute bottom-0 left-0 p-2 bg-yellow-500 text-black font-semibold">
            <p>
              Takes approx <strong>{cookingTime}</strong> mins to Cook
            </p>
          </div>
        </div>
        <div className="p-4">
          <h4 className="text-2xl text-orange-800 font-bold">{title}</h4>
          <p className="text-blue-700 mt-2 underline hover:text-blue-900 text-lg">
            <Link
            href={`/recipes/${slug}`}
            className="underline hover:text-blue-900 text-lg"
            >
            Cook This
            </Link>
          </p>
          <h1 className="text-violet-900 font-extrabold text-[18px]">
            {new Array(rating).fill(0).map((_, i) => "\u2605")} ({rating})
          </h1>
        </div>
    </div>
  );
};

export default RecipeCard;
